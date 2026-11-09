// File: netlify/functions/aiChat.cjs
// Laddu AI — Super-Smart Context-Aware Assistant for KshirSagar Sweets & Bakers + Supabase Session Logging
// Includes 17 Smart Context & Action Features (Features #1-#10 and #12-#18; skips #11 Coupon Auto-Checker & skips IP City)
// Preserves all custom KshirSagar store profile details from GitHub main branch.

const SUPABASE_PROJECT_ID = "frltketibbthwqydnhls";
const DEFAULT_SUPABASE_URL = "https://" + SUPABASE_PROJECT_ID + ".supabase.co";

const STORE_PROFILE = {
  aiName: "Laddu AI",
  name: "KshirSagar Sweets & Bakers (क्षीर सागर स्वीट्स एंड बेकर्स)",
  established: "Since 1998 — Tradition of Excellence",
  tagline: "हमेशा कुछ नया (Hamesha Kuch Naya)",
  timings: "सुबह 8:00 बजे से रात 10:00 बजे तक (सातों दिन खुला)",
  deliveryTimings: "सुबह 10:00 बजे से रात 8:00 बजे तक (होम डिलीवरी सुविधा)",
  address: "Nai Bazar, Mairwa (Siwan), Bihar",
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

// Feature #9: Mairwa-Siwan Local Landmarks & Distance Guide (20-30 km radius)
const MAIRWA_LOCAL_GUIDE = {
  shopLandmark: "नई बाज़ार, मैरवा (पावर हाउस और मैरवा धाम के पास)",
  nearbyPlaces: [
    "मैरवा धाम (हरीराम ब्रह्म स्थान): दुकान से ~0.5 km (5 मिनट)",
    "मैरवा रेलवे स्टेशन: दुकान से ~1 km (5-7 मिनट)",
    "हरिराम कॉलेज (H.R. College Mairwa): ~1.5 km",
    "मझौली चौक / गुठनी मोड़: ~1.5 km",
    "जीरादेई (डॉ. राजेंद्र प्रसाद स्मारक): ~10 km",
    "गुठनी बाज़ार: ~14 km",
    "भाटपार रानी: ~15 km",
    "सिवान शहर: ~22 km",
    "दरौली: ~20 km"
  ]
};

// Feature #12: Smart Halwai Portion & Party Calculator Guide
const HALWAI_PORTION_GUIDE = {
  pieceCountsPerKg: {
    "Kaju Katli": "1 kg में लगभग 45–50 पीस",
    "Rasmalai": "प्रति पीस (₹45/pc)",
    "Besan Laddu / Motichoor Laddu": "1 kg में लगभग 22–25 लड्डू",
    "Gulab Jamun / Rasgulla": "1 kg में लगभग 18–20 पीस",
    "Desi Ghee Ghewar": "1 kg में बड़ा फैमिली पैक (8–10 सर्विंग्स)",
    "Soan Papdi": "1 kg में लगभग 25–30 पीस",
    "Cakes (500g / 1 Pound)": "8–10 लोगों के लिए पर्याप्त; 20–25 लोगों के लिए 1.5 kg से 2 kg केक"
  },
  partyRuleOfThumb: "प्रति मेहमान औसतन 100g–120g मिठाई + 1 प्लेट स्नैक्स/नाश्ता पर्याप्त होता है (जैसे 20 मेहमानों के लिए 2 से 2.5 kg मिठाई)।"
};

// Feature #6: Upcoming Indian Festivals & Occasions Guide
const FESTIVAL_OCCASIONS_GUIDE = [
  "धनतेरस, दिवाली एवं भाई दूज (अक्टूबर/नवंबर): काजू कतली, ड्राई फ्रूट गिफ्ट हैम्पर और शुद्ध घी के लड्डू",
  "छठ महापर्व (नवंबर): शुद्ध सात्विक मिठाइयाँ, पेड़ा और ठेकुआ/प्रसाद सामग्री",
  "लगन और शादी-विवाह सीज़न (नवंबर–फरवरी, अप्रैल–जून): बल्क मिठाई ऑर्डर, छेना, लड्डू और कस्टम वेडिंग केक",
  "क्रिसमस एवं नया साल (25 दिसंबर – 1 जनवरी): ट्रफल केक, रेड वेलवेट केक, पनीर पिज़्ज़ा और पार्टी कॉम्बो",
  "मकर संक्रांति / खिचड़ी (14 जनवरी): तिलकुट, गुड़ की मिठाइयाँ और गरमा-गरम स्नैक्स",
  "होली, रक्षाबंधन, जन्माष्टमी, ईद एवं हर जन्मदिन/एनिवर्सरी: स्पेशल गुजिया, घेवर, रसमलाई और कस्टम फोटो/थीम केक"
];

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

let cachedWorkingModel = null;
let cachedDiscoveredModels = null;
let cachedWeather = { text: "", fetchedAt: 0 };

async function fetchWithTimeout(url, options = {}, timeoutMs = 4500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// Feature #1, #2, #3: Live IST Clock, Date, Day, Shop Open/Close Countdown & Time-of-Day Mood
function getLiveISTClockAndShopStatus() {
  const now = new Date();
  const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const istDate = new Date(istString);

  const formattedDate = new Intl.DateTimeFormat("hi-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);

  const formattedTime = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(now);

  const h = istDate.getHours();
  const m = istDate.getMinutes();
  const totalMins = h * 60 + m;

  const isShopOpen = totalMins >= 480 && totalMins < 1320;
  const isDeliveryOpen = totalMins >= 600 && totalMins < 1200;

  let shopStatusNote = "";
  if (isShopOpen) {
    const minsLeft = 1320 - totalMins;
    const hrsLeft = Math.floor(minsLeft / 60);
    const remMins = minsLeft % 60;
    shopStatusNote =
      minsLeft <= 60
        ? `🟢 दुकान अभी खुली है (बंद होने में सिर्फ़ ${minsLeft} मिनट बाकी हैं—जल्दी ऑर्डर करें!)`
        : `🟢 दुकान अभी खुली है (रात 10:00 बजे तक, यानी अभी ${hrsLeft} घंटे ${remMins} मिनट और खुली रहेगी)`;
  } else {
    shopStatusNote = "🔴 दुकान अभी बंद है (सुबह 8:00 बजे खुलेगी, लेकिन आप अभी प्री-ऑर्डर बुक कर सकते हैं)";
  }

  const deliveryStatusNote = isDeliveryOpen
    ? "🚴 होम डिलीवरी अभी चालू है (सुबह 10:00 से रात 8:00 बजे तक)"
    : "🏬 होम डिलीवरी का समय सुबह 10:00 से रात 8:00 बजे तक है (अभी आप Store Pickup या कल के लिए प्री-ऑर्डर कर सकते हैं)";

  let timeMood = "दोपहर का समय (Lunch & Sweet Cravings)";
  if (h >= 5 && h < 11) {
    timeMood = "सुबह का समय (Morning Breakfast & Fresh Sweets Mood)";
  } else if (h >= 11 && h < 16) {
    timeMood = "दोपहर का समय (Lunch, Dosa, Pizza & Rasmalai Mood)";
  } else if (h >= 16 && h < 20) {
    timeMood = "शाम की चाय और स्नैक्स का समय (Evening Pakoda, Chowmein, Burger, Pizza & Sweets Mood)";
  } else {
    timeMood = "रात के डिनर और मीठे का समय (Night Dessert, Rasmalai, Kaju Katli & Family Treats)";
  }

  return {
    formattedDate,
    formattedTime,
    isShopOpen,
    isDeliveryOpen,
    shopStatusNote,
    deliveryStatusNote,
    timeMood
  };
}

// Feature #10: Live Mairwa Weather & Temperature Sense (Cached for 15 minutes, 950ms max timeout)
async function getLiveMairwaWeather() {
  const now = Date.now();
  if (cachedWeather.text && now - cachedWeather.fetchedAt < 15 * 60 * 1000) {
    return cachedWeather.text;
  }

  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=26.23&longitude=84.15&current_weather=true&timezone=Asia%2FKolkata";
    const res = await fetchWithTimeout(url, {}, 950);
    if (res.ok) {
      const data = await res.json();
      const cw = data.current_weather;
      if (cw && typeof cw.temperature === "number") {
        const code = Number(cw.weathercode || 0);
        let sky = "साफ़ मौसम (Clear Sky)";
        if (code >= 51 && code <= 67) sky = "हल्की बारिश / फुहार (Rainy Weather — गरमा-गरम पकोड़े और स्नैक्स के लिए परफेक्ट!)";
        else if (code >= 71 && code <= 99) sky = "तेज़ बारिश / तूफ़ानी मौसम (Stormy/Rainy)";
        else if (code >= 1 && code <= 3) sky = "हल्के बादल और सुहाना मौसम (Partly Cloudy)";
        else if (code === 45 || code === 48) sky = "कोहरा / ठंडक (Foggy/Chilly)";

        const summary = `मैरवा का लाइव तापमान: ${cw.temperature}°C, मौसम: ${sky}, हवा: ${cw.windspeed} km/h`;
        cachedWeather = { text: summary, fetchedAt: now };
        return summary;
      }
    }
  } catch {
    // Ignore weather timeout smoothly
  }
  return cachedWeather.text || "मैरवा में सुहाना मौसम";
}

function getSupabaseHeaders(supabaseKey, extra = {}) {
  const clean = String(supabaseKey || "").trim();
  const h = {
    "Content-Type": "application/json",
    apikey: clean,
    ...extra
  };
  if (clean.startsWith("eyJ")) {
    h.Authorization = `Bearer ${clean}`;
  }
  return h;
}

function resolveSupabaseConfig() {
  const rawEnvUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || "";
  const match = String(rawEnvUrl).match(/https:\/\/[a-z0-9-]+\.supabase\.co/i);
  const supabaseUrl = match ? match[0] : DEFAULT_SUPABASE_URL;

  const supabaseKey = String(
    process.env.SUPABASE_ANON_KEY ||
      process.env.SUPABASE_KEY ||
      process.env.SUPABASE_PUBLISHABLE_KEY ||
      process.env.VITE_SUPABASE_ANON_KEY ||
      ""
  )
    .replace(/[\[\]()'"\s]/g, "")
    .trim();

  return { supabaseUrl, supabaseKey };
}

async function logChatToSupabase({
  sessionId,
  customerName,
  customerMobile,
  deviceInfo,
  userMessage,
  aiReply
}) {
  const { supabaseUrl, supabaseKey } = resolveSupabaseConfig();

  if (!supabaseKey || !sessionId || !userMessage) {
    return { logged: false, reason: "Missing key or sessionId" };
  }

  try {
    const nowIso = new Date().toISOString();
    const getUrl = `${supabaseUrl}/rest/v1/laddu_ai_chats?session_id=eq.${encodeURIComponent(sessionId)}&select=session_id,conversation,message_count,customer_name,customer_mobile`;

    const existingRes = await fetchWithTimeout(
      getUrl,
      { method: "GET", headers: getSupabaseHeaders(supabaseKey) },
      2500
    );

    if (!existingRes.ok) {
      const errTxt = await existingRes.text();
      return { logged: false, reason: `Supabase GET (${existingRes.status}): ${errTxt.slice(0, 120)}` };
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
      const patchRes = await fetchWithTimeout(
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
        },
        2500
      );
      return { logged: patchRes.ok, action: "updated", sessionId, messageCount: prevCount + 1 };
    } else {
      const postRes = await fetchWithTimeout(
        `${supabaseUrl}/rest/v1/laddu_ai_chats`,
        {
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
        },
        2500
      );
      return { logged: postRes.ok, action: "inserted", sessionId, messageCount: 1 };
    }
  } catch (err) {
    return { logged: false, reason: err.message };
  }
}

async function fetchLiveAirtableData(baseId, apiKey) {
  if (!baseId || !apiKey) {
    return { menu: FALLBACK_MENU, source: "fallback_cache" };
  }

  try {
    const menuRes = await fetchWithTimeout(
      `https://api.airtable.com/v0/${baseId}/Menu`,
      { headers: { Authorization: `Bearer ${apiKey}` } },
      2000
    );

    let menu = FALLBACK_MENU;
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
    return { menu, source: "airtable_live" };
  } catch {
    return { menu: FALLBACK_MENU, source: "fallback_cache" };
  }
}

function isSupportedTextModel(name) {
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
    n.includes("exp")
  ) {
    return false;
  }
  return n.includes("gemini");
}

function rankModel(name) {
  const n = String(name || "").toLowerCase();
  if (n.startsWith("gemini-3") && n.includes("flash-lite")) return 100;
  if (n.startsWith("gemini-3") && n.includes("flash") && !n.includes("preview")) return 95;
  if (n.startsWith("gemini-3") && n.includes("flash")) return 90;
  if (n.startsWith("gemini-2.0-flash-lite")) return 85;
  if (n.startsWith("gemini-2.0-flash")) return 80;
  if (n === "gemini-flash-lite-latest") return 75;
  if (n === "gemini-flash-latest") return 70;
  return 50;
}

async function callGeminiStudioAPI(apiKey, systemInstruction, contents) {
  const cleanKey = String(apiKey || "").trim();
  const errors = [];

  if (!cachedDiscoveredModels) {
    try {
      const listRes = await fetchWithTimeout(
        "https://generativelanguage.googleapis.com/v1beta/models",
        { headers: { "x-goog-api-key": cleanKey } },
        1800
      );
      if (listRes.ok) {
        const listData = await listRes.json();
        const found = (listData.models || [])
          .filter(
            (m) =>
              Array.isArray(m.supportedGenerationMethods) &&
              m.supportedGenerationMethods.includes("generateContent")
          )
          .map((m) => m.name.replace("models/", ""))
          .filter(isSupportedTextModel)
          .sort((a, b) => rankModel(b) - rankModel(a));

        if (found.length > 0) {
          cachedDiscoveredModels = found;
        }
      }
    } catch {
      // Fallback to default candidates
    }
  }

  let modelsToTry =
    cachedDiscoveredModels && cachedDiscoveredModels.length > 0
      ? cachedDiscoveredModels
      : [
          "gemini-3.5-flash-lite",
          "gemini-3.1-flash-lite",
          "gemini-2.0-flash-lite",
          "gemini-flash-lite-latest",
          "gemini-flash-latest"
        ];

  if (cachedWorkingModel) {
    modelsToTry = [cachedWorkingModel, ...modelsToTry.filter((m) => m !== cachedWorkingModel)];
  }

  for (const modelName of modelsToTry.slice(0, 3)) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`;

    try {
      const res = await fetchWithTimeout(
        endpoint,
        {
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
        },
        4500
      );

      if (res.ok) {
        const data = await res.json();
        cachedWorkingModel = modelName;
        return { ok: true, data, modelUsed: modelName };
      } else {
        const errBody = await res.text();
        errors.push(`${modelName}(${res.status}): ${errBody.slice(0, 90)}`);
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

function buildSmartLocalFallback(userMessage, menu, clockInfo, weatherInfo, clientCart, clientDevice, debugReason) {
  const q = (userMessage || "").trim();
  const lower = q.toLowerCase();

  // Time / Date questions (#1 & #2)
  if (
    /\b(time|date|day|tarikh|tareekh|din|samay|baje|clock|aaj)\b/i.test(lower) ||
    lower.includes("टाइम") ||
    lower.includes("समय") ||
    lower.includes("तारीख") ||
    lower.includes("कौन सा दिन") ||
    lower.includes("कितने बजे")
  ) {
    return {
      reply:
        `🕒 **अभी का लाइव समय और तारीख:**\n\n` +
        `• **समय (IST):** ${clockInfo.formattedTime}\n` +
        `• **तारीख व दिन:** ${clockInfo.formattedDate}\n` +
        `• **दुकान की स्थिति:** ${clockInfo.shopStatusNote}\n` +
        `• **डिलीवरी:** ${clockInfo.deliveryStatusNote}`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो", "📍 दुकान कब खुलती है और कहाँ है?"]
    };
  }

  // Battery / Device / Network questions (#8)
  if (
    /\b(battery|charging|charge|network|internet|speed|device|phone)\b/i.test(lower) ||
    lower.includes("बैटरी") ||
    lower.includes("नेटवर्क")
  ) {
    const bat = clientDevice?.batteryText || "ब्राउज़र से उपलब्ध नहीं";
    const net = clientDevice?.networkText || "Online";
    return {
      reply:
        `📱 **आपके डिवाइस की लाइव स्थिति:**\n\n` +
        `• **बैटरी:** ${bat}\n` +
        `• **नेटवर्क कनेक्शन:** ${net}\n` +
        `• **डिवाइस:** ${clientDevice?.platform || "Web Browser"}`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो"]
    };
  }

  // Cart questions (#4)
  if (/\b(cart|bill|total|mera order)\b/i.test(lower) || lower.includes("कार्ट") || lower.includes("बिल")) {
    const items = Array.isArray(clientCart?.items) ? clientCart.items : [];
    if (items.length === 0) {
      return {
        reply: "🛒 आपका कार्ट अभी खाली है! नीचे दी गई ताज़ा मिठाइयों और स्नैक्स में से अपनी पसंद के आइटम जोड़ें:",
        recommendedItems: menu.slice(0, 3),
        debugError: debugReason || null,
        quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो"]
      };
    }
    const listStr = items.map((i) => `• **${i.name}** × ${i.qty} = ₹${i.price * i.qty}`).join("\n");
    return {
      reply: `🛒 **आपके कार्ट में अभी ${clientCart.totalQty} आइटम हैं (कुल बिल: ₹${clientCart.grandTotal}):**\n\n${listStr}`,
      recommendedItems: [],
      action: "NONE",
      whatsappOrderText: `Namaste KshirSagar! Mujhe ye order karna hai:\n${items.map((i) => `- ${i.name} x ${i.qty} (₹${i.price * i.qty})`).join("\n")}\nTotal: ₹${clientCart.grandTotal}`,
      debugError: debugReason || null,
      quickFollowUps: ["🛒 मेरा कार्ट खोल दो", "🍬 इसके साथ और क्या अच्छा लगेगा?"]
    };
  }

  // Developer / Creator (#18)
  if (/\b(developer|creator|kisne banaya|owner|vikash)\b/i.test(lower) || lower.includes("किसने बनाया") || lower.includes("डेवलपर")) {
    return {
      reply:
        `👨‍💻 **Laddu AI और KshirSagar वेबसाइट** को **Vikash Kumar Gupta** (Instagram: \`@_vikashkgupta\`) ने डिज़ाइन और डेवलप किया है।\n\n` +
        `🏪 **${STORE_PROFILE.name}** 1998 से मैरवा (सिवान) में शुद्धता और स्वाद की पहचान है!`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "📍 दुकान कब खुलती है और कहाँ है?"]
    };
  }

  // Greetings
  if (
    /\b(hi+|hello+|hey+|hlo|namaste|pranam|ram ram|dost|bhai|kaise ho|kya haal|kya hua|kon ho|kaun ho)\b/i.test(lower) ||
    lower.includes("नमस्ते") ||
    lower.includes("कैसे हो")
  ) {
    return {
      reply:
        `नमस्ते! 👋 मैं **Laddu AI** हूँ।\n` +
        `${clockInfo.shopStatusNote}।\n\nबताइए, आज आपकी क्या मदद करूँ? 😊`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो", "📍 दुकान कब खुलती है और कहाँ है?"]
    };
  }

  // Default Menu showcase
  return {
    reply:
      "**क्षीर सागर के सबसे लोकप्रिय आइटम्स और ताज़ा रेट्स:**\n\n" +
      menu
        .slice(0, 6)
        .map((m) => `• **${m.name}** — ₹${m.price}`)
        .join("\n"),
    recommendedItems: menu.slice(0, 3),
    debugError: debugReason || null,
    quickFollowUps: [
      "🍬 आज की स्पेशल मिठाई और रेट बताओ",
      "🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो",
      "📍 दुकान कब खुलती है और कहाँ है?"
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

  if (event.httpMethod === "GET") {
    const { supabaseUrl, supabaseKey } = resolveSupabaseConfig();

    if (!supabaseKey) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          sessions: [],
          message: "SUPABASE_ANON_KEY not set in Netlify Environment Variables."
        })
      };
    }

    try {
      const res = await fetchWithTimeout(
        `${supabaseUrl}/rest/v1/laddu_ai_chats?select=*&order=updated_at.desc&limit=100`,
        {
          method: "GET",
          headers: getSupabaseHeaders(supabaseKey)
        },
        4000
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
    const deviceInfo = String(body.deviceInfo || event.headers?.["user-agent"] || "Web").slice(0, 140);
    const chatHistory = Array.isArray(body.history) ? body.history.slice(-6) : [];
    const clientMenu = Array.isArray(body.clientMenu) && body.clientMenu.length > 0 ? body.clientMenu : null;
    const clientCart = body.clientCart || { items: [], totalQty: 0, grandTotal: 0, orderType: "Delivery" };
    const clientDevice = body.clientDevice || {};
    const recentViewedDishes = Array.isArray(body.recentViewedDishes) ? body.recentViewedDishes : [];
    const isReturningVisitor = Boolean(body.isReturningVisitor);
    const pageContext = String(body.pageContext || "").slice(0, 1500);

    const clockInfo = getLiveISTClockAndShopStatus();
    const [liveData, weatherInfo] = await Promise.all([
      clientMenu
        ? Promise.resolve({ menu: clientMenu, source: "client_cache" })
        : fetchLiveAirtableData(process.env.AIRTABLE_BASE_ID, process.env.AIRTABLE_API_KEY),
      getLiveMairwaWeather()
    ]);

    const activeMenu = clientMenu || liveData.menu;

    const geminiKey =
      process.env.GEMINI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY;

    if (!geminiKey) {
      const fallbackResult = buildSmartLocalFallback(
        userMessage,
        activeMenu,
        clockInfo,
        weatherInfo,
        clientCart,
        clientDevice,
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
You are "Laddu AI", the official ultra-smart assistant of KshirSagar Sweets & Bakers (https://kshirsagarsweets.netlify.app/).
Never refer to yourself as ChatGPT or mention OpenAI/ChatGPT—your name is always "Laddu AI" (लड्डू AI).

YOU HAVE FULL REAL-TIME AWARENESS OF THE FOLLOWING LIVE CONTEXT (USE IT NATURALLY WHEN RELEVANT OR ASKED):

=== 1. LIVE INDIAN CLOCK, DATE & SHOP COUNTDOWN (Features #1, #2, #3) ===
- Current IST Time: ${clockInfo.formattedTime}
- Current IST Date & Day: ${clockInfo.formattedDate}
- Live Shop Status: ${clockInfo.shopStatusNote}
- Live Delivery Status: ${clockInfo.deliveryStatusNote}
- Current Time-of-Day Craving Mood: ${clockInfo.timeMood}
(If the user asks the current time, date, day of the week, or whether the shop is open right now, state the exact IST time/date and shop status above!)

=== 2. LIVE MAIRWA WEATHER & SEASON SENSE (Feature #10) ===
- ${weatherInfo}
(If the user asks about the weather or "aaj kya khayein", match your food recommendation to this live weather and time of day!)

=== 3. USER'S LIVE SHOPPING CART & IDENTITY (Features #4, #5, #15) ===
- Customer Name: ${customerName} (${isReturningVisitor ? "Returning Visitor" : "First-Time Visitor"})
- Customer Mobile: ${customerMobile || "Not entered yet"}
- Selected Order Type: ${clientCart.orderType || "Delivery"}
- Current Cart Items (${clientCart.totalQty || 0} items, Total Bill: ₹${clientCart.grandTotal || 0}): ${
      Array.isArray(clientCart.items) && clientCart.items.length > 0
        ? JSON.stringify(clientCart.items)
        : "Cart is currently empty"
    }
- Recently Viewed Dishes on Website: ${recentViewedDishes.length > 0 ? recentViewedDishes.join(", ") : "None yet"}
(If the user asks what is in their cart, their total bill, or what pairs well with their cart, use this exact cart data! If they tell you their name in chat, set "detectedCustomerName" in your JSON output.)

=== 4. USER'S SILENT DEVICE, BATTERY & NETWORK CONTEXT (Feature #8 — No IP City) ===
- Device & Screen: ${clientDevice.platform || deviceInfo}
- Battery Status: ${clientDevice.batteryText || "Not reported by browser"}
- Network Connection: ${clientDevice.networkText || "Online"}
(If the user asks about their battery percentage, charging state, network speed, or phone/device, tell them accurately! Also if their battery is below 15%, gently remind them to complete their order before their phone switches off.)

=== 5. MAIRWA-SIWAN HYPER-LOCAL LANDMARKS & DISTANCE GUIDE (Feature #9) ===
${JSON.stringify(MAIRWA_LOCAL_GUIDE)}

=== 6. SMART HALWAI PORTION & PARTY CALCULATOR (Feature #12) ===
${JSON.stringify(HALWAI_PORTION_GUIDE)}
(When a user asks how much sweets/snacks/cake is needed for X guests or a budget of ₹Y, calculate exact quantities, piece counts, and item breakdown!)

=== 7. UPCOMING INDIAN FESTIVALS & CUSTOM CAKE ADVISOR (Features #6 & #16) ===
- Festivals Guide: ${JSON.stringify(FESTIVAL_OCCASIONS_GUIDE)}
- Custom Cake Advisor (#16): If the user asks about birthday/anniversary cakes or cake messages, suggest Truffle Cake / Red Velvet Cake, give 3 creative short cake-top messages, and set "action": "OPEN_CUSTOM_CAKE" if they want to place a custom cake request.

=== 8. OFFICIAL STORE PROFILE & CREATOR STORY (Feature #18) ===
${JSON.stringify(STORE_PROFILE)}

=== 9. LIVE MENU ITEMS & ALTERNATIVE SUGGESTOR (Feature #14) ===
${JSON.stringify(
  activeMenu.map((m) => ({
    id: m.id,
    name: m.name,
    category: m.category,
    price: m.price,
    unit: m.unit || ""
  }))
)}
(Feature #14: If the user asks for a food item NOT on the menu—like Momos, Biryani, Samosa, Jalebi, etc.—politely inform them and immediately suggest the closest delicious available items from the menu above!)

=== 10. DIRECT CART ACTIONS & WHATSAPP ORDER GENERATOR (Features #7 & #13) ===
- If the user explicitly asks to add an item to their cart (e.g. "2 Rasmalai cart me daal do" or "Add Kaju Katli to cart"), populate "autoAddItems": [{"name": "Exact Menu Item Name", "qty": 2}].
- If the user explicitly asks to open/view their cart, set "action": "OPEN_CART".
- If the user explicitly asks to open the custom cake form, set "action": "OPEN_CUSTOM_CAKE".
- If the user finalizes an order list in chat or asks for a direct WhatsApp order link, populate "whatsappOrderText" with a clean summary string (e.g. "Namaste KshirSagar! Mera Order: 1x Kaju Katli (₹840). Total: ₹840") so the UI renders a 1-Click WhatsApp Order button!

=== OUTPUT FORMAT RULES ===
- Answer ANY general world question (math, science, GK, coding, advice, casual chat) accurately and warmly, just like a top-tier AI assistant.
- Only set "showFoodCards": true when the conversation is about food, menu, combos, or cravings. For general questions (or time/date/battery questions), set "showFoodCards": false.
- Return STRICT JSON matching this exact schema (no markdown fences):
{
  "reply": "Your complete, helpful markdown response",
  "showFoodCards": true or false,
  "recommendedItemNames": ["Exact Menu Item Name 1", "Exact Menu Item Name 2"],
  "autoAddItems": [{"name": "Exact Menu Item Name", "qty": 1}],
  "action": "NONE" or "OPEN_CART" or "OPEN_CUSTOM_CAKE",
  "whatsappOrderText": "" or "Formatted order text for WhatsApp",
  "detectedCustomerName": "" or "User's name if they introduced themselves",
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
        clockInfo,
        weatherInfo,
        clientCart,
        clientDevice,
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
        autoAddItems: [],
        action: "NONE",
        whatsappOrderText: "",
        detectedCustomerName: "",
        quickFollowUps: []
      };
    }

    const finalReply = parsed.reply || "मैं आपकी कैसे मदद कर सकता हूँ?";
    const effectiveCustomerName =
      parsed.detectedCustomerName && String(parsed.detectedCustomerName).trim()
        ? String(parsed.detectedCustomerName).trim()
        : customerName;

    const supabaseStatus = await logChatToSupabase({
      sessionId,
      customerName: effectiveCustomerName,
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

    const resolvedAutoAdd = [];
    if (Array.isArray(parsed.autoAddItems) && parsed.autoAddItems.length > 0) {
      parsed.autoAddItems.forEach((reqItem) => {
        const targetName = String(reqItem?.name || "").toLowerCase().trim();
        if (!targetName) return;
        const found = activeMenu.find(
          (m) =>
            m.name.toLowerCase() === targetName ||
            m.name.toLowerCase().includes(targetName) ||
            targetName.includes(m.name.toLowerCase())
        );
        if (found) {
          resolvedAutoAdd.push({
            ...found,
            qty: Math.max(1, Math.min(20, Number(reqItem.qty || 1)))
          });
        }
      });
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
        autoAddItems: resolvedAutoAdd,
        action: parsed.action || "NONE",
        whatsappOrderText: parsed.whatsappOrderText || "",
        detectedCustomerName: parsed.detectedCustomerName || "",
        quickFollowUps:
          Array.isArray(parsed.quickFollowUps) && parsed.quickFollowUps.length > 0
            ? parsed.quickFollowUps.slice(0, 4)
            : [
                "🍬 आज की स्पेशल मिठाई और रेट बताओ",
                "🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो",
                "📍 दुकान कब खुलती है और कहाँ है?"
              ]
      })
    };
  } catch (err) {
    const clockInfo = getLiveISTClockAndShopStatus();
    const fallbackResult = buildSmartLocalFallback("", FALLBACK_MENU, clockInfo, "", {}, {}, err.message);
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