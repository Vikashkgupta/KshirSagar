// File: netlify/functions/aiChat.cjs
// Laddu AI — Smart Assistant for KshirSagar Sweets & Bakers + Guaranteed Supabase Session Logging
// Includes:
// 1. Both `apikey` AND `Authorization: Bearer` headers (required by Supabase API gateway for `sb_publishable_` and `eyJ` keys)
// 2. Clean 2-step SELECT -> PATCH / POST upsert so it never fails on PostgREST Prefer header restrictions
// 3. `supabaseStatus` diagnostic returned in every response so you can see exact database status in browser console

const STORE_PROFILE = {
  aiName: "Laddu AI",
  name: "KshirSagar Sweets & Bakers (क्षीर सागर स्वीट्स एंड बेकर्स)",
  established: "Since 1998 — Tradition of Excellence",
  tagline: "हमेशा कुछ नया (Hamesha Kuch Naya)",
  timings: "सुबह 8:00 बजे से रात 10:00 बजे तक (सातों दिन खुला)",
  address: "Nai Bazar, Mairwa (Siwan), Bihar — Near Power House, Mairwa Dham",
  phone: "+91 8226935738",
  whatsapp: "+91 8226935738",
  email: "vikashmw900@gmail.com",
  website: "https://kshirsagarsweets.netlify.app/",
  androidApp: "https://kshirsagarsweets.netlify.app/KshirSagar.apk",
  developer: "Developed by Vikash Kumar Gupta (Instagram: @_vikashkgupta)",
  highlights: [
    "100% Pure Ingredients (शुद्ध देसी घी और ताज़ा सामग्री)",
    "Hygienic Preparation (पूरी तरह साफ़-सुथरी और हाइजीनिक किचन)",
    "Custom Cake Orders (बर्थडे, एनिवर्सरी और पार्टी के लिए कस्टम केक ऑर्डर की सुविधा)",
    "Zero Commission Direct Ordering (बिना किसी एक्स्ट्रा ऐप कमीशन के सीधा दुकान के रेट पर होम डिलीवरी)"
  ]
};

const FALLBACK_MENU = [
  { id: "m1", name: "Kaju Katli", category: "Sweets", price: 840, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m2", name: "Rasmalai", category: "Sweets", price: 45, unit: "1 pc", image: "/sweet.jpg", available: true },
  { id: "m3", name: "Desi Ghee Ghewar", category: "Sweets", price: 500, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m4", name: "Besan Laddu", category: "Sweets", price: 360, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m5", name: "Soan Papdi", category: "Sweets", price: 200, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m6", name: "Truffle Cake", category: "Sweets", price: 450, unit: "500g", image: "/sweet.jpg", available: true },
  { id: "m7", name: "Red Velvet Cake", category: "Sweets", price: 450, unit: "500g", image: "/sweet.jpg", available: true },
  { id: "m8", name: "Special Mixture Namkeen", category: "Namkeen", price: 280, unit: "1 kg", image: "/namkeen.jpg", available: true },
  { id: "m9", name: "Aloo Bhujia", category: "Namkeen", price: 240, unit: "1 kg", image: "/namkeen.jpg", available: true },
  { id: "m10", name: "Salted Peanuts", category: "Namkeen", price: 220, unit: "1 kg", image: "/namkeen.jpg", available: true },
  { id: "m11", name: "Onion Pakoda", category: "Snacks", price: 50, unit: "Plate", image: "/snak.jpg", available: true },
  { id: "m12", name: "Masala Dosa", category: "Snacks", price: 90, unit: "Plate", image: "/snak.jpg", available: true },
  { id: "m13", name: "Veg Chowmein (Full)", category: "Snacks", price: 110, unit: "Full", image: "/snak.jpg", available: true },
  { id: "m14", name: "Veg Manchurian (Full)", category: "Snacks", price: 130, unit: "Full", image: "/snak.jpg", available: true },
  { id: "m15", name: "Paneer Tikki Burger", category: "Snacks", price: 75, unit: "1 pc", image: "/snak.jpg", available: true },
  { id: "m16", name: "French Fries", category: "Snacks", price: 70, unit: "Plate", image: "/snak.jpg", available: true },
  { id: "m17", name: "Paneer Pizza (Full)", category: "Pizza", price: 199, unit: "Regular", image: "/pizza.png", available: true },
  { id: "m18", name: "Mushroom Pizza (Full)", category: "Pizza", price: 189, unit: "Regular", image: "/pizza.png", available: true }
];

const FALLBACK_OFFERS = [
  { title: "Festival Sweet Deal", code: "KSHIR10", discount: "₹500 से ऊपर के ऑर्डर पर 10% की छूट", active: true },
  { title: "Party Combo Offer", code: "PARTY50", discount: "पिज़्ज़ा और स्नैक्स कॉम्बो पर ₹50 की छूट", active: true }
];

let cachedWorkingModel = null;
let cachedAvailableModels = null;

// Supabase requires BOTH `apikey` and `Authorization: Bearer <key>` when unauthenticated
function getSupabaseHeaders(supabaseKey, extra = {}) {
  const clean = String(supabaseKey || "").trim();
  return {
    "Content-Type": "application/json",
    apikey: clean,
    Authorization: `Bearer ${clean}`,
    ...extra
  };
}

function resolveSupabaseConfig() {
  const rawUrl =
    process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    "https://frltketibbthwqydnhls.supabase.co";
  const supabaseUrl = String(rawUrl).trim().replace(/\/$/, "");

  const supabaseKey = String(
    process.env.SUPABASE_ANON_KEY ||
      process.env.SUPABASE_KEY ||
      process.env.SUPABASE_PUBLISHABLE_KEY ||
      process.env.VITE_SUPABASE_ANON_KEY ||
      ""
  ).trim();

  return { supabaseUrl, supabaseKey };
}

// Logs or updates the user's chat session in Supabase (`public.laddu_ai_chats`) and returns diagnostic status
async function logChatToSupabase({
  sessionId,
  customerName,
  customerMobile,
  deviceInfo,
  userMessage,
  aiReply
}) {
  const { supabaseUrl, supabaseKey } = resolveSupabaseConfig();

  if (!supabaseKey) {
    return {
      logged: false,
      reason: "SUPABASE_ANON_KEY missing in Netlify Environment Variables (or site not redeployed after adding it)."
    };
  }

  if (!sessionId || !userMessage) {
    return { logged: false, reason: "Missing sessionId or userMessage" };
  }

  try {
    const nowIso = new Date().toISOString();
    const getUrl = `${supabaseUrl}/rest/v1/laddu_ai_chats?session_id=eq.${encodeURIComponent(sessionId)}&select=session_id,conversation,message_count,customer_name,customer_mobile`;

    const existingRes = await fetch(getUrl, {
      method: "GET",
      headers: getSupabaseHeaders(supabaseKey)
    });

    if (!existingRes.ok) {
      const errTxt = await existingRes.text();
      return {
        logged: false,
        reason: `Supabase GET failed (${existingRes.status}): ${errTxt.slice(0, 160)}`
      };
    }

    const rows = await existingRes.json();
    const rowExists = Array.isArray(rows) && rows.length > 0;

    let existingConversation = [];
    let prevCount = 0;
    let savedName = customerName || "Guest User";
    let savedMobile = customerMobile || "";

    if (rowExists) {
      const row = rows[0];
      if (Array.isArray(row.conversation)) {
        existingConversation = row.conversation;
      }
      prevCount = Number(row.message_count || 0);
      if ((!customerName || customerName === "Guest User") && row.customer_name) {
        savedName = row.customer_name;
      }
      if (!customerMobile && row.customer_mobile) {
        savedMobile = row.customer_mobile;
      }
    }

    const updatedConversation = [
      ...existingConversation,
      { role: "user", text: userMessage, timestamp: nowIso },
      { role: "ai", text: aiReply, timestamp: nowIso }
    ];

    if (rowExists) {
      // Update existing session row via PATCH
      const patchRes = await fetch(
        `${supabaseUrl}/rest/v1/laddu_ai_chats?session_id=eq.${encodeURIComponent(sessionId)}`,
        {
          method: "PATCH",
          headers: getSupabaseHeaders(supabaseKey, { Prefer: "return=minimal" }),
          body: JSON.stringify({
            customer_name: savedName,
            customer_mobile: savedMobile,
            device_info: deviceInfo || "Web Browser",
            message_count: prevCount + 1,
            last_user_message: userMessage,
            last_ai_reply: aiReply,
            conversation: updatedConversation,
            updated_at: nowIso
          })
        }
      );

      if (!patchRes.ok) {
        const patchErr = await patchRes.text();
        return {
          logged: false,
          reason: `Supabase PATCH failed (${patchRes.status}): ${patchErr.slice(0, 160)}`
        };
      }
      return { logged: true, action: "updated", sessionId, messageCount: prevCount + 1 };
    } else {
      // Insert new session row via POST
      const postRes = await fetch(`${supabaseUrl}/rest/v1/laddu_ai_chats`, {
        method: "POST",
        headers: getSupabaseHeaders(supabaseKey, { Prefer: "return=minimal" }),
        body: JSON.stringify({
          session_id: sessionId,
          customer_name: savedName,
          customer_mobile: savedMobile,
          device_info: deviceInfo || "Web Browser",
          message_count: 1,
          last_user_message: userMessage,
          last_ai_reply: aiReply,
          conversation: updatedConversation,
          updated_at: nowIso
        })
      });

      if (!postRes.ok) {
        const postErr = await postRes.text();
        return {
          logged: false,
          reason: `Supabase INSERT failed (${postRes.status}): ${postErr.slice(0, 160)}`
        };
      }
      return { logged: true, action: "inserted", sessionId, messageCount: 1 };
    }
  } catch (err) {
    return { logged: false, reason: `Supabase exception: ${err.message}` };
  }
}

async function fetchLiveAirtableData(baseId, apiKey) {
  if (!baseId || !apiKey) {
    return { menu: FALLBACK_MENU, offers: FALLBACK_OFFERS, source: "fallback_cache" };
  }

  try {
    const [menuRes, offersRes] = await Promise.all([
      fetch(`https://api.airtable.com/v0/${baseId}/Menu`, {
        headers: { Authorization: `Bearer ${apiKey}` }
      }),
      fetch(`https://api.airtable.com/v0/${baseId}/Offers`, {
        headers: { Authorization: `Bearer ${apiKey}` }
      })
    ]);

    let menu = FALLBACK_MENU;
    let offers = FALLBACK_OFFERS;

    if (menuRes.ok) {
      const menuData = await menuRes.json();
      if (menuData.records && menuData.records.length > 0) {
        menu = menuData.records
          .map((rec) => ({
            id: rec.id,
            name: rec.fields.Name || rec.fields.ItemName || "Special Item",
            category: rec.fields.Category || "Sweets",
            price: Number(rec.fields.Price || 0),
            unit: rec.fields.Unit || rec.fields.Weight || rec.fields.Variant || "",
            description: rec.fields.Description || "",
            image:
              (Array.isArray(rec.fields.Image) && rec.fields.Image[0]?.url) ||
              rec.fields.Image ||
              rec.fields.ImageUrl ||
              "/sweet.jpg",
            available: rec.fields.Available !== false
          }))
          .filter((item) => item.available && item.price > 0);
      }
    }

    if (offersRes.ok) {
      const offersData = await offersRes.json();
      if (offersData.records && offersData.records.length > 0) {
        const parsedOffers = offersData.records
          .filter((rec) => rec.fields && rec.fields.Active !== false)
          .map((rec) => ({
            title: rec.fields.Title || rec.fields.Name || "Special Offer",
            code: rec.fields.Code || rec.fields.PromoCode || "",
            discount: rec.fields.Discount || rec.fields.Description || ""
          }));
        if (parsedOffers.length > 0) offers = parsedOffers;
      }
    }

    return { menu, offers, source: "airtable_live" };
  } catch (err) {
    return { menu: FALLBACK_MENU, offers: FALLBACK_OFFERS, source: "fallback_cache" };
  }
}

function isCleanTextModel(name) {
  const n = String(name || "").toLowerCase();
  if (
    n.includes("tts") ||
    n.includes("image") ||
    n.includes("imagen") ||
    n.includes("veo") ||
    n.includes("embedding") ||
    n.includes("aqa") ||
    n.includes("audio") ||
    n.includes("robotics") ||
    n.includes("thinking") ||
    n.includes("learnlm") ||
    n.includes("2.5-flash") ||
    n.includes("2.0-flash-exp")
  ) {
    return false;
  }
  return n.includes("gemini") || n.includes("gemma-3");
}

function scoreModelPriority(name) {
  const n = String(name || "").toLowerCase();
  if (n.includes("gemini-3") && n.includes("flash-lite")) return 100;
  if (n.includes("gemini-3") && n.includes("flash")) return 95;
  if (n === "gemini-flash-lite-latest") return 90;
  if (n.includes("gemma-3-27b-it")) return 85;
  if (n.includes("gemma-3-12b-it")) return 80;
  if (n === "gemini-flash-latest") return 75;
  if (n.includes("gemini-3") && n.includes("pro")) return 70;
  if (n.includes("gemini-2.0-flash-lite")) return 65;
  if (n.includes("gemini-2.0-flash")) return 60;
  return 50;
}

async function callGeminiStudioAPI(apiKey, systemInstruction, contents) {
  const cleanKey = String(apiKey || "").trim();
  const errors = [];

  if (!cachedAvailableModels) {
    try {
      const listRes = await fetch("https://generativelanguage.googleapis.com/v1beta/models", {
        headers: { "x-goog-api-key": cleanKey }
      });
      if (listRes.ok) {
        const listData = await listRes.json();
        const discovered = (listData.models || [])
          .filter(
            (m) =>
              Array.isArray(m.supportedGenerationMethods) &&
              m.supportedGenerationMethods.includes("generateContent")
          )
          .map((m) => m.name.replace("models/", ""))
          .filter(isCleanTextModel)
          .sort((a, b) => scoreModelPriority(b) - scoreModelPriority(a));

        if (discovered.length > 0) {
          cachedAvailableModels = discovered;
        }
      }
    } catch (e) {
      errors.push(`ListModelsErr: ${e.message}`);
    }
  }

  const defaultCandidates = [
    "gemini-3.5-flash-lite",
    "gemini-3.1-flash-lite",
    "gemini-3.0-flash",
    "gemini-flash-lite-latest",
    "gemma-3-27b-it",
    "gemma-3-12b-it",
    "gemini-flash-latest"
  ];

  let modelsToTry = cachedAvailableModels
    ? [...new Set([...cachedAvailableModels, ...defaultCandidates])]
    : defaultCandidates;

  if (cachedWorkingModel) {
    modelsToTry = [cachedWorkingModel, ...modelsToTry.filter((m) => m !== cachedWorkingModel)];
  }

  for (const modelName of modelsToTry.slice(0, 7)) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`;
    const isGemmaModel = modelName.toLowerCase().startsWith("gemma");

    const requestPayload = isGemmaModel
      ? {
          contents: [
            {
              role: "user",
              parts: [{ text: `${systemInstruction}\n\nUser Question: ${contents[contents.length - 1]?.parts?.[0]?.text || "Namaste"}` }]
            }
          ],
          generationConfig: { temperature: 0.5 }
        }
      : {
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents,
          generationConfig: {
            temperature: 0.5,
            responseMimeType: "application/json"
          }
        };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": cleanKey
        },
        body: JSON.stringify(requestPayload)
      });

      if (res.ok) {
        const data = await res.json();
        cachedWorkingModel = modelName;
        return { ok: true, data, modelUsed: modelName };
      } else {
        const errBody = await res.text();
        errors.push(`${modelName}(${res.status}): ${errBody.slice(0, 100)}`);
        if (cachedWorkingModel === modelName) {
          cachedWorkingModel = null;
        }
      }
    } catch (err) {
      errors.push(`${modelName}: ${err.message}`);
    }
  }

  return { ok: false, errorText: errors.join(" | ") };
}

function formatCleanOffers(offers) {
  const list = Array.isArray(offers) && offers.length > 0 ? offers : FALLBACK_OFFERS;
  return list
    .map((o) => {
      const title = o.title || o.Title || o.Name || "स्पेशल ऑफ़र";
      const code = o.code || o.Code || o.PromoCode || "";
      const discount = o.discount || o.Discount || o.description || o.Description || "";
      let str = `• **${title}**`;
      if (code && code !== "undefined") str += ` — कोड: \`${code}\``;
      if (discount && discount !== "undefined") str += ` (${discount})`;
      return str;
    })
    .join("\n");
}

function buildSmartLocalFallback(userMessage, menu, offers, debugReason) {
  const q = (userMessage || "").trim();
  const lower = q.toLowerCase();

  if (/^(hi+|hello+|hey+|namaste|pranam|ram ram|hlo|हाय|नमस्ते|हेलो)$/i.test(q)) {
    return {
      reply: "नमस्ते! मैं **Laddu AI** हूँ। बताइए, आज मैं आपकी क्या मदद कर सकता हूँ?",
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 में पार्टी कॉम्बो", "🏷️ आज के ऑफ़र्स क्या हैं?"]
    };
  }

  const mathPercent = lower.match(/(\d+(?:\.\d+)?)\s*%\s*(?:of|ka|की|का)\s*(\d+(?:\.\d+)?)/);
  if (mathPercent) {
    const pct = Number(mathPercent[1]);
    const total = Number(mathPercent[2]);
    const ans = (pct / 100) * total;
    return {
      reply: `**${total}** का **${pct}%** = **${ans}** होता है।`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई दिखाओ", "🍕 ₹500 में पार्टी कॉम्बो", "🏷️ आज के ऑफ़र्स क्या हैं?"]
    };
  }

  const cleanMath = q.replace(/[^0-9+\-*/().\s]/g, "").trim();
  if (/^\d+(?:\.\d+)?\s*[+\-*/]\s*\d+/.test(cleanMath)) {
    try {
      const result = Function(`"use strict"; return (${cleanMath})`)();
      if (typeof result === "number" && isFinite(result)) {
        return {
          reply: `\`${cleanMath} = ${result}\``,
          recommendedItems: [],
          debugError: debugReason || null,
          quickFollowUps: ["🍬 KshirSagar मेन्यू दिखाओ", "🍕 ₹500 का कॉम्बो बनाओ", "📍 दुकान का समय और पता"]
        };
      }
    } catch {
      // continue
    }
  }

  if (
    lower.includes("time") ||
    lower.includes("kab khul") ||
    lower.includes("address") ||
    lower.includes("kahan") ||
    lower.includes("number") ||
    lower.includes("phone") ||
    lower.includes("contact") ||
    lower.includes("dukan") ||
    lower.includes("shop") ||
    lower.includes("खुलती") ||
    lower.includes("कहाँ") ||
    lower.includes("पता")
  ) {
    return {
      reply:
        `**${STORE_PROFILE.name}** (${STORE_PROFILE.established})\n\n` +
        `• **समय:** ${STORE_PROFILE.timings}\n` +
        `• **पता:** ${STORE_PROFILE.address}\n` +
        `• **मोबाइल / WhatsApp:** ${STORE_PROFILE.phone}`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई दिखाओ", "🏷️ लाइव ऑफ़र्स क्या हैं?", "🍕 ₹500 में पार्टी कॉम्बो"]
    };
  }

  if (lower.includes("offer") || lower.includes("discount") || lower.includes("coupon") || lower.includes("ऑफ़र")) {
    return {
      reply: `🎉 **क्षीर सागर के स्पेशल ऑफ़र्स:**\n\n${formatCleanOffers(offers)}`,
      recommendedItems: menu.slice(0, 3),
      debugError: debugReason || null,
      quickFollowUps: ["🍬 बेस्ट मिठाइयाँ दिखाओ", "🍕 पिज़्ज़ा और स्नैक्स दिखाओ", "📍 दुकान का पता और नंबर"]
    };
  }

  if (
    lower.includes("menu") ||
    lower.includes("price") ||
    lower.includes("rate") ||
    lower.includes("sweet") ||
    lower.includes("mithai") ||
    lower.includes("pizza") ||
    lower.includes("snack") ||
    lower.includes("cake") ||
    lower.includes("namkeen") ||
    lower.includes("combo") ||
    lower.includes("मिठाई") ||
    lower.includes("रेट") ||
    lower.includes("कॉम्बो")
  ) {
    return {
      reply:
        "**क्षीर सागर के सबसे लोकप्रिय आइटम्स और ताज़ा रेट्स:**\n\n" +
        menu
          .slice(0, 6)
          .map((m) => `• **${m.name}** — ₹${m.price}`)
          .join("\n"),
      recommendedItems: menu.slice(0, 3),
      debugError: debugReason || null,
      quickFollowUps: ["🍕 ₹500 में पार्टी कॉम्बो बताओ", "🏷️ आज के डिस्काउंट ऑफ़र्स", "📍 दुकान कब खुलती है?"]
    };
  }

  return {
    reply: "कृपया अपना सवाल थोड़ा स्पष्ट लिखें—आप मुझसे कोई भी सामान्य सवाल, गणित, या क्षीर सागर के मेन्यू और ऑफ़र्स के बारे में पूछ सकते हैं।",
    recommendedItems: [],
    debugError: debugReason || null,
    quickFollowUps: [
      "🍬 आज की स्पेशल मिठाई और रेट बताओ",
      "🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो",
      "🏷️ आज के स्पेशल ऑफ़र्स क्या हैं?",
      "📍 दुकान का समय और पता"
    ]
  };
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // GET request: Returns all logged user chat sessions from Supabase for the Admin Chat Viewer
  if (event.httpMethod === "GET") {
    const { supabaseUrl, supabaseKey } = resolveSupabaseConfig();

    if (!supabaseKey) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          sessions: [],
          message: "SUPABASE_ANON_KEY not set in Netlify Environment Variables (or site not redeployed)."
        })
      };
    }

    try {
      const res = await fetch(
        `${supabaseUrl}/rest/v1/laddu_ai_chats?select=*&order=updated_at.desc&limit=100`,
        {
          method: "GET",
          headers: getSupabaseHeaders(supabaseKey)
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: false,
            sessions: [],
            error: `Supabase GET ${res.status}: ${errText}`
          })
        };
      }

      const sessions = await res.json();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, sessions })
      };
    } catch (err) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: false, sessions: [], error: err.message })
      };
    }
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = (body.message || "").trim();
    const sessionId = String(body.sessionId || "KS-GUEST").trim();
    const customerName = String(body.customerName || "Guest User").trim();
    const customerMobile = String(body.customerMobile || "").trim();
    const deviceInfo = String(body.deviceInfo || event.headers?.["user-agent"] || "Web").slice(0, 120);
    const chatHistory = Array.isArray(body.history) ? body.history.slice(-8) : [];
    const clientMenu = Array.isArray(body.clientMenu) && body.clientMenu.length > 0 ? body.clientMenu : null;
    const clientOffers = Array.isArray(body.clientOffers) && body.clientOffers.length > 0 ? body.clientOffers : null;
    const pageContext = String(body.pageContext || "").slice(0, 3500);

    const liveData = await fetchLiveAirtableData(
      process.env.AIRTABLE_BASE_ID,
      process.env.AIRTABLE_API_KEY
    );

    const activeMenu = clientMenu || liveData.menu;
    const activeOffers = clientOffers || liveData.offers;

    const geminiKey =
      process.env.GEMINI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY;

    if (!geminiKey) {
      const fallbackResult = buildSmartLocalFallback(
        userMessage,
        activeMenu,
        activeOffers,
        "GEMINI_API_KEY not found in environment variables."
      );
      const supabaseStatus = await logChatToSupabase({
        sessionId,
        customerName,
        customerMobile,
        deviceInfo,
        userMessage,
        aiReply: fallbackResult.reply
      });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          mode: "missing_env_key",
          dataSource: liveData.source,
          supabaseStatus,
          ...fallbackResult
        })
      };
    }

    const systemInstruction = `
You are "Laddu AI", the official intelligent assistant of KshirSagar Sweets & Bakers (https://kshirsagarsweets.netlify.app/).
Never refer to yourself as ChatGPT or mention OpenAI/ChatGPT—your name is always "Laddu AI".

YOU HAVE TWO COMPLETE CAPABILITIES AT ALL TIMES:

CAPABILITY 1 — UNIVERSAL SMART AI ASSISTANT:
- The user can ask you ANYTHING in the world: math problems, coding/programming questions, science, history, general knowledge, recipes, career advice, translations, jokes, essays, or daily life questions.
- Whenever the user asks a general question (not about the shop), answer it thoroughly, accurately, and naturally!
- For general/non-food questions, set "showFoodCards": false and "recommendedItemNames": [] in your JSON output so dish cards are NOT shown unnecessarily.

CAPABILITY 2 — KSHIRSAGAR WEBSITE, LIVE MENU & OFFERS EXPERT:
- Whenever the user asks about the shop, website content, sweets, menu items, prices, party combos, custom cakes, timings, address, contact details, or active offers, use the exact real-time data provided below:

=== 1. OFFICIAL WEBSITE & STORE DETAILS ===
${JSON.stringify(STORE_PROFILE, null, 2)}

=== 2. LIVE FRONTEND PAGE CONTENT ===
${pageContext || "Standard KshirSagar storefront loaded."}

=== 3. LIVE AIRTABLE MENU TABLE (REAL-TIME ITEMS & PRICES IN ₹) ===
${JSON.stringify(
  activeMenu.map((m) => ({
    id: m.id,
    name: m.name,
    category: m.category,
    price: m.price,
    unit: m.unit || ""
  }))
)}

=== 4. LIVE AIRTABLE OFFERS TABLE ===
${JSON.stringify(activeOffers)}

=== OUTPUT FORMAT RULES ===
- Match the user's language naturally (Hindi, Hinglish, or English).
- Only set "showFoodCards": true and populate "recommendedItemNames" when the user is asking about food, menu, prices, combos, or the shop's items. For general questions, set "showFoodCards": false and "recommendedItemNames": [].
- Return STRICT JSON matching this exact schema (no markdown code fences around the JSON):
{
  "reply": "Your complete, helpful markdown response",
  "showFoodCards": true or false,
  "recommendedItemNames": ["Exact Menu Item Name 1", "Exact Menu Item Name 2"],
  "quickFollowUps": ["Relevant follow-up 1", "Relevant follow-up 2", "Relevant follow-up 3"]
}
`;

    const contents = [
      ...chatHistory.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: String(msg.content || "") }]
      })),
      {
        role: "user",
        parts: [{ text: userMessage || "Namaste!" }]
      }
    ];

    const callResult = await callGeminiStudioAPI(geminiKey, systemInstruction, contents);

    if (!callResult.ok) {
      const fallbackResult = buildSmartLocalFallback(
        userMessage,
        activeMenu,
        activeOffers,
        callResult.errorText
      );
      const supabaseStatus = await logChatToSupabase({
        sessionId,
        customerName,
        customerMobile,
        deviceInfo,
        userMessage,
        aiReply: fallbackResult.reply
      });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          mode: "api_error_fallback",
          dataSource: liveData.source,
          supabaseStatus,
          ...fallbackResult
        })
      };
    }

    let rawText = callResult.data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    rawText = rawText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      parsed = {
        reply: rawText,
        showFoodCards: false,
        recommendedItemNames: [],
        quickFollowUps: []
      };
    }

    const finalReply = parsed.reply || "मैं आपकी कैसे मदद कर सकता हूँ?";

    // Log this turn into Supabase and capture exact status
    const supabaseStatus = await logChatToSupabase({
      sessionId,
      customerName,
      customerMobile,
      deviceInfo,
      userMessage,
      aiReply: finalReply
    });

    let matchedItems = [];
    if (parsed.showFoodCards) {
      const names = Array.isArray(parsed.recommendedItemNames) ? parsed.recommendedItemNames : [];
      matchedItems = activeMenu.filter((item) =>
        names.some(
          (n) =>
            item.name.toLowerCase().includes(String(n).toLowerCase()) ||
            String(n).toLowerCase().includes(item.name.toLowerCase())
        )
      );
      if (matchedItems.length === 0 && names.length > 0) {
        matchedItems = activeMenu.slice(0, 3);
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        mode: "laddu_ai_live",
        modelUsed: callResult.modelUsed,
        dataSource: liveData.source,
        supabaseStatus,
        reply: finalReply,
        recommendedItems: matchedItems.slice(0, 4),
        quickFollowUps:
          Array.isArray(parsed.quickFollowUps) && parsed.quickFollowUps.length > 0
            ? parsed.quickFollowUps.slice(0, 4)
            : ["🍬 आज की स्पेशल मिठाई दिखाओ", "🍕 ₹500 में पार्टी कॉम्बो", "✨ कुछ नया और रोचक बताओ"]
      })
    };
  } catch (err) {
    const fallbackResult = buildSmartLocalFallback("", FALLBACK_MENU, FALLBACK_OFFERS, err.message);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        mode: "error_recovery",
        ...fallbackResult
      })
    };
  }
};