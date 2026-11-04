// File: netlify/functions/aiChat.cjs
// KshirSagar AI Mitr — Universal ChatGPT-Style Assistant + Live KshirSagar Website & Airtable RAG
// Auto-discovers available Gemini models via ListModels so it never fails on model-name mismatches

const STORE_PROFILE = {
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
  { title: "Festival Sweet Deal", code: "KSHIR10", discount: "10% OFF on orders above ₹500", active: true },
  { title: "Party Combo Offer", code: "PARTY50", discount: "Flat ₹50 OFF on Pizza + Snacks Orders above ₹399", active: true }
];

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
        offers = offersData.records
          .filter((rec) => rec.fields.Active !== false)
          .map((rec) => ({
            title: rec.fields.Title || rec.fields.Name || "Special Offer",
            code: rec.fields.Code || rec.fields.PromoCode || "SPECIAL",
            discount: rec.fields.Discount || rec.fields.Description || "Special Discount",
            description: rec.fields.Description || ""
          }));
      }
    }

    return { menu, offers, source: "airtable_live" };
  } catch (err) {
    return { menu: FALLBACK_MENU, offers: FALLBACK_OFFERS, source: "fallback_cache" };
  }
}

// Automatically discovers the active Flash models on your Google AI Studio account and calls generativelanguage.googleapis.com
async function callGeminiStudioAPI(apiKey, systemInstruction, contents) {
  const cleanKey = String(apiKey || "").trim();
  const errors = [];

  // 1. Default priority list of current & legacy Flash models
  let modelsToTry = [
    "gemini-3.5-flash-lite",
    "gemini-3.1-flash-lite",
    "gemini-3.8-flash",
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-flash-latest"
  ];

  // 2. Dynamically fetch exact available models for this key from v1beta/models
  try {
    const listRes = await fetch("https://generativelanguage.googleapis.com/v1beta/models", {
      headers: { "x-goog-api-key": cleanKey }
    });
    if (listRes.ok) {
      const listData = await listRes.json();
      const available = (listData.models || [])
        .filter(
          (m) =>
            Array.isArray(m.supportedGenerationMethods) &&
            m.supportedGenerationMethods.includes("generateContent") &&
            m.name.includes("gemini")
        )
        .map((m) => m.name.replace("models/", ""));

      // Prioritize flash-lite and flash models (which have the highest free-tier quota)
      const flashModels = available.filter((n) => n.includes("flash"));
      if (flashModels.length > 0) {
        modelsToTry = [...new Set([...flashModels, ...modelsToTry])];
      } else if (available.length > 0) {
        modelsToTry = [...new Set([...available, ...modelsToTry])];
      }
    } else {
      const listErr = await listRes.text();
      errors.push(`ListModels(${listRes.status}): ${listErr.slice(0, 140)}`);
    }
  } catch (e) {
    errors.push(`ListModelsErr: ${e.message}`);
  }

  // 3. Try generating content using ONLY x-goog-api-key header (never duplicate ?key= + header)
  for (const modelName of modelsToTry.slice(0, 5)) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": cleanKey
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents,
          generationConfig: {
            temperature: 0.5,
            responseMimeType: "application/json"
          }
        })
      });

      if (res.ok) {
        const data = await res.json();
        return { ok: true, data, modelUsed: modelName };
      } else {
        const errBody = await res.text();
        errors.push(`${modelName}(${res.status}): ${errBody.slice(0, 120)}`);
      }
    } catch (err) {
      errors.push(`${modelName}: ${err.message}`);
    }
  }

  return { ok: false, errorText: errors.join(" | ") };
}

function buildSmartLocalFallback(userMessage, menu, offers, debugReason) {
  const q = (userMessage || "").trim();
  const lower = q.toLowerCase();

  const mathPercent = lower.match(/(\d+(?:\.\d+)?)\s*%\s*(?:of|ka|की|का)\s*(\d+(?:\.\d+)?)/);
  if (mathPercent) {
    const pct = Number(mathPercent[1]);
    const total = Number(mathPercent[2]);
    const ans = (pct / 100) * total;
    return {
      reply: `🧮 **गणना (Calculation):**\n${total} का ${pct}% = **${ans}** होता है।`,
      recommendedItems: [],
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई दिखाओ", "🍕 ₹500 में पार्टी कॉम्बो", "🏷️ आज के ऑफ़र्स क्या हैं?"]
    };
  }

  const cleanMath = q.replace(/[^0-9+\-*/().\s]/g, "").trim();
  if (/^\d+(?:\.\d+)?\s*[+\-*/]\s*\d+/.test(cleanMath)) {
    try {
      const result = Function(`"use strict"; return (${cleanMath})`)();
      if (typeof result === "number" && isFinite(result)) {
        return {
          reply: `🧮 **उत्तर (Math Result):**\n\`${cleanMath} = ${result}\``,
          recommendedItems: [],
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
    lower.includes("कहाँ")
  ) {
    return {
      reply:
        `🏪 **${STORE_PROFILE.name}** (${STORE_PROFILE.established})\n\n` +
        `• **टैगलाइन:** ${STORE_PROFILE.tagline}\n` +
        `• **खुलने का समय:** ${STORE_PROFILE.timings}\n` +
        `• **पता:** ${STORE_PROFILE.address}\n` +
        `• **मोबाइल / WhatsApp:** ${STORE_PROFILE.phone}\n` +
        `• **खासियत:** ${STORE_PROFILE.highlights.join(", ")}`,
      recommendedItems: menu.slice(0, 3),
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई दिखाओ", "🏷️ लाइव ऑफ़र्स क्या हैं?", "🍕 ₹500 में पार्टी कॉम्बो"]
    };
  }

  if (lower.includes("offer") || lower.includes("discount") || lower.includes("coupon") || lower.includes("ऑफ़र")) {
    const offerLines = offers
      .map((o) => `🎁 **${o.title}** — कोड: \`${o.code}\` (${o.discount})`)
      .join("\n");
    return {
      reply: `🎉 **KshirSagar के लाइव ऑफ़र्स (Airtable से):**\n\n${offerLines}`,
      recommendedItems: menu.slice(0, 3),
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
        `🍽️ **KshirSagar लाइव मेन्यू और रेट्स:**\n` +
        menu
          .slice(0, 8)
          .map((m) => `• **${m.name}** (${m.category}) — ₹${m.price}`)
          .join("\n") +
        `\n\nनीचे दिए गए कार्ड्स पर **+ Add** दबाकर आप इन्हें सीधे कार्ट में जोड़ सकते हैं:`,
      recommendedItems: menu.slice(0, 4),
      quickFollowUps: ["🍕 ₹500 में पार्टी कॉम्बो बताओ", "🏷️ आज के डिस्काउंट ऑफ़र्स", "📍 दुकान कब खुलती है?"]
    };
  }

  return {
    reply:
      "🙏 **KshirSagar AI Mitr**\n\n" +
      (debugReason
        ? `⚠️ **API Diagnostic:** \`${debugReason}\``
        : "कृपया Netlify Environment Variables में `GEMINI_API_KEY` चेक करें।"),
    recommendedItems: menu.slice(0, 3),
    quickFollowUps: [
      "🍬 आज की स्पेशल मिठाई और रेट बताओ",
      "🧮 15% of 840 कितना होता है?",
      "🏷️ आज के लाइव ऑफ़र्स क्या हैं?",
      "📍 दुकान का समय और पता"
    ]
  };
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = (body.message || "").trim();
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
        "GEMINI_API_KEY not found in Netlify Environment Variables."
      );
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          mode: "missing_env_key",
          dataSource: liveData.source,
          ...fallbackResult
        })
      };
    }

    const systemInstruction = `
You are "KshirSagar AI Mitr", a powerful dual-mode AI assistant built into the KshirSagar Sweets & Bakers website (https://kshirsagarsweets.netlify.app/).

YOU HAVE TWO COMPLETE CAPABILITIES AT ALL TIMES:

CAPABILITY 1 — UNIVERSAL GENERAL AI ASSISTANT (LIKE CHATGPT):
- The user can ask you ANYTHING in the world: math problems, coding/programming questions, science, history, general knowledge, recipes, career advice, translations, jokes, essays, or daily life questions.
- Whenever the user asks a general question (not about the shop), answer it thoroughly, accurately, and naturally just like ChatGPT! Never refuse a general question.
- For general/non-food questions, set "showFoodCards": false and "recommendedItemNames": [] in your JSON output so dish cards are NOT shown unnecessarily.

CAPABILITY 2 — KSHIRSAGAR WEBSITE, LIVE AIRTABLE MENU & OFFERS EXPERT:
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
- Only set "showFoodCards": true and populate "recommendedItemNames" when the user is asking about food, menu, prices, combos, or the shop's items. For general ChatGPT questions, set "showFoodCards": false and "recommendedItemNames": [].
- Return STRICT JSON matching this exact schema:
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
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          mode: "api_error_fallback",
          dataSource: liveData.source,
          ...fallbackResult
        })
      };
    }

    const rawText = callResult.data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
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
        mode: "gemini_universal_plus_rag",
        modelUsed: callResult.modelUsed,
        dataSource: liveData.source,
        reply: parsed.reply || "मैं आपकी कैसे मदद कर सकता हूँ?",
        recommendedItems: matchedItems.slice(0, 4),
        quickFollowUps:
          Array.isArray(parsed.quickFollowUps) && parsed.quickFollowUps.length > 0
            ? parsed.quickFollowUps.slice(0, 4)
            : ["🍬 आज की स्पेशल मिठाई दिखाओ", "🍕 ₹500 में पार्टी कॉम्बो", "🧮 कोई मैथ या GK का सवाल पूछो"]
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