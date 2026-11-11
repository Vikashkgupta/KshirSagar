// File: netlify/functions/aiChat.cjs
// Laddu AI — Super-Smart Context-Aware Assistant for KshirSagar Sweets & Bakers + Full Supabase Sync + 5,000-Landmark Engine
// Exact Store Pin: 26.2373274° N, 84.1508169° E | Plus Code: 65P2+W8 Mairwa, Bihar | Nai Bazar, Mairwa, Bihar 841239
// Google Maps Short URL: https://maps.app.goo.gl/gWg1gvrsDVqRSqjt9

const { SHOP_LOCATION, searchMairwaLandmarks } = require("./mairwaLandmarks.cjs");

const SUPABASE_PROJECT_ID = "frltketibbthwqydnhls";
const DEFAULT_SUPABASE_URL = "https://" + SUPABASE_PROJECT_ID + ".supabase.co";

const STORE_PROFILE = {
  aiName: "Laddu AI",
  name: "KshirSagar Sweets & Bakers (क्षीर सागर स्वीट्स एंड बेकर्स)",
  established: "Since 1998 — Tradition of Excellence",
  tagline: "हमेशा कुछ नया (Hamesha Kuch Naya)",
  timings: "सुबह 8:00 बजे से रात 10:00 बजे तक (सातों दिन खुला)",
  deliveryTimings: "सुबह 10:00 बजे से रात 8:00 बजे तक (होम डिलीवरी सुविधा)",
  address: "Nai Bazar, Mairwa, Bihar 841239",
  plusCode: "65P2+W8 Mairwa, Bihar",
  coordinates: { lat: 26.2373274, lon: 84.1508169 },
  googleMapsUrl: "https://maps.app.goo.gl/gWg1gvrsDVqRSqjt9",
  googleMapsFullUrl:
    "https://www.google.com/maps/place/Kshirsagar/@26.2373274,84.1508169,807m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399253b11832e8db:0x88f735f0ec8e1283!8m2!3d26.2373274!4d84.1508169!16s%2Fg%2F11dzd377b_",
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

const HALWAI_PORTION_GUIDE = {
  pieceCountsPerKg: {
    "Kaju Katli": "1 kg में लगभग 45–50 पीस (250g में ~12 पीस)",
    "Rasmalai": "प्रति पीस (₹45/pc)",
    "Besan Laddu / Motichoor Laddu": "1 kg में लगभग 22–25 लड्डू",
    "Gulab Jamun / Rasgulla": "1 kg में लगभग 18–20 पीस",
    "Desi Ghee Ghewar": "1 kg बड़ा फैमिली पैक (8–10 सर्विंग्स)",
    "Soan Papdi": "1 kg में लगभग 25–30 पीस",
    "Cakes (500g / 1 Pound)": "8–10 लोगों के लिए पर्याप्त; 20–25 लोगों के लिए 1.5 kg से 2 kg केक"
  },
  partyRuleOfThumb: "प्रति मेहमान औसतन 100g–120g मिठाई + 1 प्लेट स्नैक्स/नाश्ता पर्याप्त होता है (जैसे 25 मेहमानों के लिए 2.5 से 3 kg मिठाई)।"
};

const FESTIVAL_OCCASIONS_GUIDE = [
  "धनतेरस, दिवाली एवं भाई दूज (अक्टूबर/नवंबर): काजू कतली, ड्राई फ्रूट गिफ्ट पैक और शुद्ध घी के लड्डू",
  "छठ महापर्व (नवंबर): शुद्ध सात्विक मिठाइयाँ, पेड़ा और प्रसाद सामग्री",
  "लगन और शादी-विवाह सीज़न (नवंबर–फरवरी, अप्रैल–जून): बल्क मिठाई ऑर्डर, छेना, लड्डू और कस्टम वेडिंग केक",
  "क्रिसमस एवं नया साल (25 दिसंबर – 1 जनवरी): ट्रफल केक, रेड वेलवेट केक, पनीर पिज़्ज़ा और पार्टी कॉम्बो",
  "मकर संक्रांति / खिचड़ी (14 जनवरी): तिलकुट, गुड़ की मिठाइयाँ और गरमा-गरम स्नैक्स",
  "होली, रक्षाबंधन, जन्माष्टमी, ईद एवं हर जन्मदिन/एनिवर्सरी: स्पेशल गुजिया, घेवर, रसमलाई और कस्टम केक"
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

const FALLBACK_OFFERS = [
  { title: "Festival Sweet Deal", code: "KSHIR10", discount: "₹500 से ऊपर के ऑर्डर पर 10% की छूट", active: true },
  { title: "Party Combo Offer", code: "PARTY50", discount: "पिज़्ज़ा और स्नैक्स कॉम्बो पर ₹50 की छूट", active: true }
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

function extractUserLocationContext(eventHeaders, clientDevice) {
  let netlifyGeoStr = "";
  try {
    const rawGeo = eventHeaders?.["x-nf-geo"] || eventHeaders?.["X-Nf-Geo"];
    if (rawGeo) {
      let parsed = null;
      try {
        parsed = JSON.parse(rawGeo);
      } catch {
        parsed = JSON.parse(Buffer.from(rawGeo, "base64").toString("utf8"));
      }
      if (parsed) {
        const parts = [
          parsed.city,
          parsed.subdivision?.name || parsed.subdivision?.code,
          parsed.country?.name || parsed.country?.code
        ].filter(Boolean);
        if (parts.length > 0) {
          netlifyGeoStr = parts.join(", ");
        }
      }
    }
  } catch {}

  const clientLoc = clientDevice?.locationText || "";
  if (clientLoc && netlifyGeoStr) {
    return `${clientLoc} (Network Gateway: ${netlifyGeoStr})`;
  }
  return clientLoc || netlifyGeoStr || "Mairwa / Siwan Region (Bihar, India)";
}

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

// Live Weather using exact KshirSagar coordinates (26.2373274, 84.1508169)
async function getLiveMairwaWeather() {
  const now = Date.now();
  if (cachedWeather.text && now - cachedWeather.fetchedAt < 15 * 60 * 1000) {
    return cachedWeather.text;
  }

  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=26.2373&longitude=84.1508&current_weather=true&timezone=Asia%2FKolkata";
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
  } catch {}
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

async function fetchSessionFromSupabase(sessionId) {
  const { supabaseUrl, supabaseKey } = resolveSupabaseConfig();
  if (!supabaseKey || !sessionId) return null;

  try {
    const getUrl = `${supabaseUrl}/rest/v1/laddu_ai_chats?session_id=eq.${encodeURIComponent(sessionId)}&select=session_id,conversation,message_count,customer_name,customer_mobile,device_info,updated_at`;
    const res = await fetchWithTimeout(
      getUrl,
      { method: "GET", headers: getSupabaseHeaders(supabaseKey) },
      2200
    );
    if (res.ok) {
      const rows = await res.json();
      if (Array.isArray(rows) && rows.length > 0) {
        return rows[0];
      }
    }
  } catch {}
  return null;
}

async function saveSessionToSupabase({
  existingRow,
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
    const rowExists = Boolean(existingRow && existingRow.session_id);

    const existingConversation =
      rowExists && Array.isArray(existingRow.conversation) ? existingRow.conversation : [];
    const prevCount = rowExists ? Number(existingRow.message_count || 0) : 0;

    let savedName = customerName || "Guest User";
    let savedMobile = customerMobile || "";

    if (rowExists) {
      if ((!customerName || customerName === "Guest User") && existingRow.customer_name) {
        savedName = existingRow.customer_name;
      }
      if (!customerMobile && existingRow.customer_mobile) {
        savedMobile = existingRow.customer_mobile;
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

      if (!patchRes.ok) {
        const patchErr = await patchRes.text();
        return {
          logged: false,
          reason: `Supabase PATCH (${patchRes.status}): ${patchErr.slice(0, 140)}`
        };
      }
      return { logged: true, action: "updated", sessionId, messageCount: prevCount + 1 };
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

      if (!postRes.ok) {
        const postErr = await postRes.text();
        return {
          logged: false,
          reason: `Supabase INSERT (${postRes.status}): ${postErr.slice(0, 140)}`
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
      fetchWithTimeout(
        `https://api.airtable.com/v0/${baseId}/Menu`,
        { headers: { Authorization: `Bearer ${apiKey}` } },
        1800
      ),
      fetchWithTimeout(
        `https://api.airtable.com/v0/${baseId}/Offers`,
        { headers: { Authorization: `Bearer ${apiKey}` } },
        1800
      )
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
  } catch {
    return { menu: FALLBACK_MENU, offers: FALLBACK_OFFERS, source: "fallback_cache" };
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
        1500
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
    } catch {}
  }

  let modelsToTry =
    cachedDiscoveredModels && cachedDiscoveredModels.length > 0
      ? cachedDiscoveredModels
      : [
          "gemini-2.0-flash-lite",
          "gemini-2.0-flash",
          "gemini-flash-lite-latest"
        ];

  if (cachedWorkingModel) {
    modelsToTry = [cachedWorkingModel, ...modelsToTry.filter((m) => m !== cachedWorkingModel)];
  }

  for (const modelName of modelsToTry.slice(0, 2)) {
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
        4200
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

function buildSmartLocalFallback(userMessage, menu, offers, clockInfo, weatherInfo, clientCart, clientDevice, locationStr, matchedLandmarks, debugReason) {
  const q = (userMessage || "").trim();
  const lower = q.toLowerCase();

  if (
    (/\b(cart|कार्ट)\b/i.test(lower) && /\b(0|zero|clear|empty|khali|hata|remove|delete|खाली|हटा)\b/i.test(lower)) ||
    lower.includes("cart 0") ||
    lower.includes("clear cart")
  ) {
    return {
      reply: "✅ मैंने आपका कार्ट पूरी तरह खाली (0 items) कर दिया है! आप जब चाहें नए आइटम्स जोड़ सकते हैं।",
      recommendedItems: [],
      action: "CLEAR_CART",
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 में पार्टी कॉम्बो"]
    };
  }

  // If the user mentioned a matched village/landmark from mairwaLandmarks.cjs!
  if (Array.isArray(matchedLandmarks) && matchedLandmarks.length > 0) {
    const top = matchedLandmarks[0];
    return {
      reply:
        `📍 **${top.name}** से **KshirSagar (Nai Bazar, Mairwa, Bihar 841239)** की जानकारी:\n\n` +
        `• **सड़क से अनुमानित दूरी:** ~${top.roadKm} km (${top.direction})\n` +
        `• **पहुँचने का अनुमानित समय:** ~${top.timeMins} मिनट\n` +
        `• **डिलीवरी ज़ोन:** ${top.zone}\n` +
        `• **दुकान का पता:** ${STORE_PROFILE.address} (Plus Code: \`${STORE_PROFILE.plusCode}\`)\n` +
        `• **Google Maps लिंक:** ${STORE_PROFILE.googleMapsUrl}`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 में पार्टी कॉम्बो"]
    };
  }

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
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 में पार्टी कॉम्बो", "📍 दुकान का समय और पता"]
    };
  }

  if (
    /\b(battery|charging|charge|network|internet|speed|device|phone|meri location|mera shahar|my location)\b/i.test(lower) ||
    lower.includes("बैटरी") ||
    lower.includes("नेटवर्क") ||
    lower.includes("मेरी लोकेशन")
  ) {
    return {
      reply:
        `📱 **आपके डिवाइस और लोकेशन की लाइव स्थिति:**\n\n` +
        `• **बैटरी:** ${clientDevice?.batteryText || "उपलब्ध नहीं"}\n` +
        `• **नेटवर्क कनेक्शन:** ${clientDevice?.networkText || "Online"}\n` +
        `• **डिवाइस व ब्राउज़र:** ${clientDevice?.platform || "Web Browser"}\n` +
        `• **आपकी लोकेशन:** ${locationStr}`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 में पार्टी कॉम्बो"]
    };
  }

  if (/\b(cart|bill|total|mera order)\b/i.test(lower) || lower.includes("कार्ट") || lower.includes("बिल")) {
    const items = Array.isArray(clientCart?.items) ? clientCart.items : [];
    if (items.length === 0) {
      return {
        reply: "🛒 आपका कार्ट अभी खाली (0 आइटम) है! नीचे दिए गए लोकप्रिय आइटम्स में से अपनी पसंद की मिठाई या स्नैक्स चुनें:",
        recommendedItems: menu.slice(0, 3),
        debugError: debugReason || null,
        quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 में पार्टी कॉम्बो"]
      };
    }
    const listStr = items.map((i) => `• **${i.name}** × ${i.qty} = ₹${i.price * i.qty}`).join("\n");
    return {
      reply: `🛒 **आपके कार्ट में अभी ${clientCart.totalQty} आइटम हैं (कुल बिल: ₹${clientCart.grandTotal}):**\n\n${listStr}`,
      recommendedItems: [],
      whatsappOrderText: `Namaste KshirSagar! Mera Order:\n${items.map((i) => `- ${i.name} x ${i.qty} (₹${i.price * i.qty})`).join("\n")}\nTotal: ₹${clientCart.grandTotal}`,
      debugError: debugReason || null,
      quickFollowUps: ["🛒 मेरा कार्ट खोल दो", "🗑️ कार्ट खाली (0) कर दो"]
    };
  }

  if (
    lower.includes("address") ||
    lower.includes("kahan") ||
    lower.includes("number") ||
    lower.includes("phone") ||
    lower.includes("contact") ||
    lower.includes("dukan") ||
    lower.includes("shop") ||
    lower.includes("mairwa") ||
    lower.includes("खुलती") ||
    lower.includes("कहाँ") ||
    lower.includes("पता")
  ) {
    return {
      reply:
        `**${STORE_PROFILE.name}** (${STORE_PROFILE.established})\n\n` +
        `• **पता:** ${STORE_PROFILE.address} (Plus Code: \`${STORE_PROFILE.plusCode}\`)\n` +
        `• **समय:** ${STORE_PROFILE.timings} (${clockInfo.shopStatusNote})\n` +
        `• **डिलीवरी:** ${clockInfo.deliveryStatusNote}\n` +
        `• **Google Maps:** ${STORE_PROFILE.googleMapsUrl}\n` +
        `• **मोबाइल / WhatsApp:** ${STORE_PROFILE.phone}`,
      recommendedItems: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई दिखाओ", "🏷️ लाइव ऑफ़र्स क्या हैं?", "🍕 ₹500 में पार्टी कॉम्बो"]
    };
  }

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

    const querySessionId = event.queryStringParameters?.sessionId;
    if (querySessionId) {
      const sessionRow = await fetchSessionFromSupabase(querySessionId);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          session: sessionRow || null
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
    const deviceInfo = String(body.deviceInfo || event.headers?.["user-agent"] || "Web").slice(0, 160);
    const clientHistory = Array.isArray(body.history) ? body.history.slice(-8) : [];
    const clientMenu = Array.isArray(body.clientMenu) && body.clientMenu.length > 0 ? body.clientMenu : null;
    const clientOffers = Array.isArray(body.clientOffers) && body.clientOffers.length > 0 ? body.clientOffers : null;
    const clientCart = body.clientCart || { items: [], totalQty: 0, grandTotal: 0, orderType: "Delivery" };
    const clientDevice = body.clientDevice || {};
    const recentViewedDishes = Array.isArray(body.recentViewedDishes) ? body.recentViewedDishes : [];
    const isReturningVisitor = Boolean(body.isReturningVisitor);
    const pageContext = String(body.pageContext || "").slice(0, 1500);

    const clockInfo = getLiveISTClockAndShopStatus();
    const locationStr = extractUserLocationContext(event.headers, clientDevice);

    // 0.5ms Instant Search across our Mairwa Landmarks & Aliases database (`mairwaLandmarks.cjs`)!
    const matchedLandmarks = searchMairwaLandmarks(userMessage, 5);

    const [liveData, weatherInfo, existingSupabaseRow] = await Promise.all([
      clientMenu
        ? Promise.resolve({ menu: clientMenu, offers: clientOffers || FALLBACK_OFFERS, source: "client_cache" })
        : fetchLiveAirtableData(process.env.AIRTABLE_BASE_ID, process.env.AIRTABLE_API_KEY),
      getLiveMairwaWeather(),
      fetchSessionFromSupabase(sessionId)
    ]);

    const activeMenu = clientMenu || liveData.menu;
    const activeOffers = clientOffers || liveData.offers;

    let mergedHistory = clientHistory;
    if (
      existingSupabaseRow &&
      Array.isArray(existingSupabaseRow.conversation) &&
      existingSupabaseRow.conversation.length > 0
    ) {
      const dbHistory = existingSupabaseRow.conversation.slice(-12).map((turn) => ({
        role: turn.role === "ai" ? "assistant" : "user",
        content: String(turn.text || "")
      }));
      if (dbHistory.length >= clientHistory.length) {
        mergedHistory = dbHistory;
      }
    }

    const rememberedName =
      customerName !== "Guest User"
        ? customerName
        : existingSupabaseRow?.customer_name || "Guest User";
    const rememberedMobile =
      customerMobile || existingSupabaseRow?.customer_mobile || "";

    const geminiKey =
      process.env.GEMINI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY;

    if (!geminiKey) {
      const fallbackResult = buildSmartLocalFallback(
        userMessage,
        activeMenu,
        activeOffers,
        clockInfo,
        weatherInfo,
        clientCart,
        clientDevice,
        locationStr,
        matchedLandmarks,
        "GEMINI_API_KEY not found in environment variables."
      );
      const supabaseStatus = await saveSessionToSupabase({
        existingRow: existingSupabaseRow,
        sessionId,
        customerName: rememberedName,
        customerMobile: rememberedMobile,
        deviceInfo: `${deviceInfo} | Loc: ${locationStr}`,
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
- The user can ask you ANYTHING in the world: casual conversation, math problems, coding/programming questions, science, history, general knowledge, recipes, career advice, translations, jokes, essays, or daily life questions.
- For general/non-food questions, set "showFoodCards": false and "recommendedItemNames": [] in your JSON output.

CAPABILITY 2 — KSHIRSAGAR WEBSITE, LIVE MENU, CART CONTROLLER & HYPER-LOCAL MAIRWA EXPERT:
Use the exact real-time context provided below whenever relevant:

=== 1. LIVE INDIAN CLOCK, DATE & SHOP COUNTDOWN (Features #1, #2, #3) ===
- Current IST Time: ${clockInfo.formattedTime}
- Current IST Date & Day: ${clockInfo.formattedDate}
- Live Shop Status: ${clockInfo.shopStatusNote}
- Live Delivery Status: ${clockInfo.deliveryStatusNote}
- Current Time-of-Day Craving Mood: ${clockInfo.timeMood}

=== 2. LIVE MAIRWA WEATHER & SEASON SENSE (Feature #10) ===
- ${weatherInfo}

=== 3. USER'S LIVE SHOPPING CART & IDENTITY (Features #4, #5, #15) ===
- Customer Name: ${rememberedName} (${isReturningVisitor || existingSupabaseRow ? "Returning Visitor with saved Supabase history" : "First-Time Visitor"})
- Customer Mobile: ${rememberedMobile || "Not entered yet"}
- Selected Order Type: ${clientCart.orderType || "Delivery"}
- Current Cart Items (${clientCart.totalQty || 0} items, Total Bill: ₹${clientCart.grandTotal || 0}): ${
      Array.isArray(clientCart.items) && clientCart.items.length > 0
        ? JSON.stringify(clientCart.items)
        : "Cart is currently empty (0 items)"
    }
- Recently Viewed Dishes on Website: ${recentViewedDishes.length > 0 ? recentViewedDishes.join(", ") : "None yet"}

=== 4. USER'S DEVICE, BATTERY, NETWORK & LOCATION CONTEXT (Feature #8 Complete) ===
- Device & Browser: ${clientDevice.platform || deviceInfo}
- Battery Status: ${clientDevice.batteryText || "Not reported by browser"}
- Network Connection: ${clientDevice.networkText || "Online"}
- User Location / Region: ${locationStr}

=== 5. OFFICIAL STORE PINPOINT LOCATION & MATCHED LOCAL LANDMARKS (Feature #9 — 0.5ms Lookup Engine) ===
- Exact Store Address: "Nai Bazar, Mairwa, Bihar 841239" (Plus Code: "65P2+W8 Mairwa, Bihar", Exact Coordinates: 26.2373274° N, 84.1508169° E).
- Official Google Maps Link: ${STORE_PROFILE.googleMapsUrl}
- IMPORTANT: Never mention Power House or Electric Office—the address is strictly "Nai Bazar, Mairwa, Bihar 841239".
- Matched Landmarks from User's Query (from our Mairwa-Siwan Landmark Database): ${
      matchedLandmarks.length > 0
        ? JSON.stringify(matchedLandmarks)
        : "No specific village/landmark name in this message; use general Mairwa store location if asked."
    }
  (Whenever a landmark/village is matched above, state its exact "roadKm" distance, "timeMins" travel time, "direction", and "zone" from our Nai Bazar, Mairwa shop, and include the Google Maps link ${STORE_PROFILE.googleMapsUrl}!)

=== 6. SMART HALWAI PORTION & PARTY CALCULATOR (Feature #12) ===
${JSON.stringify(HALWAI_PORTION_GUIDE)}

=== 7. UPCOMING INDIAN FESTIVALS & CUSTOM CAKE ADVISOR (Features #6 & #16) ===
- Festivals Guide: ${JSON.stringify(FESTIVAL_OCCASIONS_GUIDE)}
- Custom Cake Advisor (#16): For birthday/anniversary cakes, suggest Truffle Cake / Red Velvet Cake, give 3 short cake-top messages, and set "action": "OPEN_CUSTOM_CAKE" if they want to open the custom cake request form.

=== 8. OFFICIAL WEBSITE, STORE DETAILS & CREATOR STORY (Feature #18) ===
${JSON.stringify(STORE_PROFILE)}

=== 9. LIVE AIRTABLE MENU TABLE & ALTERNATIVE SUGGESTOR (Feature #14) ===
${JSON.stringify(
  activeMenu.map((m) => ({
    id: m.id,
    name: m.name,
    category: m.category,
    price: m.price,
    unit: m.unit || ""
  }))
)}

=== 10. LIVE AIRTABLE OFFERS TABLE ===
${JSON.stringify(activeOffers)}

=== 11. FULL CART CONTROL: ADD, REMOVE, CLEAR & WHATSAPP ORDER (Features #7 & #13) ===
CRITICAL CART RULES — YOU MUST SET THESE JSON FIELDS WHENEVER THE USER ASKS TO MODIFY THEIR CART:
1. CLEAR / EMPTY ENTIRE CART: If the user asks to empty, clear, or set their cart to 0 (e.g. "Cart 0 kr do", "Cart khali kr do", "Sab hata do", "Clear cart"), you MUST set:
   "action": "CLEAR_CART"
2. REMOVE / DECREASE SPECIFIC ITEMS FROM CART: If the user asks to remove or reduce specific item(s) from their cart (e.g. "Rasmalai hata do", "1 Gulab Jamun kam kr do", "Remove pizza from cart"), you MUST populate:
   "autoRemoveItems": [{"name": "Exact Item Name from Current Cart", "qty": 99}]
3. ADD ITEMS TO CART: If the user asks to add item(s) to their cart (e.g. "2 Rasmalai cart me daal do"), you MUST populate:
   "autoAddItems": [{"name": "Exact Menu Item Name", "qty": 2}]
4. RESTORE LAST ORDER: If the user asks to restore their previous/last cleared cart, set:
   "action": "RESTORE_LAST_ORDER"
5. OPEN CART MODAL: If the user asks to view/open their cart UI, set:
   "action": "OPEN_CART"
6. WHATSAPP DIRECT ORDER: If the user asks for a WhatsApp order link or has items in their cart they want to order on WhatsApp, populate "whatsappOrderText".

=== OUTPUT FORMAT RULES ===
Return STRICT JSON matching this exact schema (no markdown code fences):
{
  "reply": "Your complete, helpful markdown response",
  "showFoodCards": true or false,
  "recommendedItemNames": ["Exact Menu Item Name 1", "Exact Menu Item Name 2"],
  "autoAddItems": [{"name": "Exact Menu Item Name", "qty": 1}],
  "autoRemoveItems": [{"name": "Exact Cart Item Name", "qty": 1}],
  "action": "NONE" or "CLEAR_CART" or "OPEN_CART" or "OPEN_CUSTOM_CAKE" or "RESTORE_LAST_ORDER",
  "whatsappOrderText": "" or "Formatted order text for WhatsApp",
  "detectedCustomerName": "" or "User's name if they introduced themselves",
  "quickFollowUps": ["Relevant follow-up 1", "Relevant follow-up 2", "Relevant follow-up 3"]
}
`;

    const contents = [
      ...mergedHistory.map((msg) => ({
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
        clockInfo,
        weatherInfo,
        clientCart,
        clientDevice,
        locationStr,
        matchedLandmarks,
        callResult.errorText
      );
      const supabaseStatus = await saveSessionToSupabase({
        existingRow: existingSupabaseRow,
        sessionId,
        customerName: rememberedName,
        customerMobile: rememberedMobile,
        deviceInfo: `${deviceInfo} | Loc: ${locationStr}`,
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
        autoRemoveItems: [],
        action: "NONE",
        whatsappOrderText: "",
        detectedCustomerName: "",
        quickFollowUps: []
      };
    }

    const lowerMsg = userMessage.toLowerCase();
    if (
      parsed.action !== "CLEAR_CART" &&
      ((/\b(cart|कार्ट)\b/i.test(lowerMsg) && /\b(0|zero|clear|empty|khali|खाली|साफ़|साफ)\b/i.test(lowerMsg)) ||
        lowerMsg.includes("cart 0") ||
        lowerMsg.includes("clear cart"))
    ) {
      parsed.action = "CLEAR_CART";
    }

    const finalReply = parsed.reply || "मैं आपकी कैसे मदद कर सकता हूँ?";
    const effectiveCustomerName =
      parsed.detectedCustomerName && String(parsed.detectedCustomerName).trim()
        ? String(parsed.detectedCustomerName).trim()
        : rememberedName;

    const supabaseStatus = await saveSessionToSupabase({
      existingRow: existingSupabaseRow,
      sessionId,
      customerName: effectiveCustomerName,
      customerMobile: rememberedMobile,
      deviceInfo: `${deviceInfo} | Loc: ${locationStr}`,
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

    const resolvedAutoRemove = Array.isArray(parsed.autoRemoveItems)
      ? parsed.autoRemoveItems
          .filter((r) => r && r.name)
          .map((r) => ({
            name: String(r.name).trim(),
            qty: Math.max(1, Number(r.qty || 1))
          }))
      : [];

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        mode: "laddu_ai_live",
        modelUsed: callResult.modelUsed,
        dataSource: liveData.source,
        supabaseStatus,
        matchedLandmarks,
        reply: finalReply,
        recommendedItems: matchedItems.slice(0, 4),
        autoAddItems: resolvedAutoAdd,
        autoRemoveItems: resolvedAutoRemove,
        action: parsed.action || "NONE",
        whatsappOrderText: parsed.whatsappOrderText || "",
        detectedCustomerName: effectiveCustomerName !== "Guest User" ? effectiveCustomerName : "",
        quickFollowUps:
          Array.isArray(parsed.quickFollowUps) && parsed.quickFollowUps.length > 0
            ? parsed.quickFollowUps.slice(0, 4)
            : ["🍬 आज की स्पेशल मिठाई दिखाओ", "🍕 ₹500 में पार्टी कॉम्बो", "✨ कुछ नया और रोचक बताओ"]
      })
    };
  } catch (err) {
    const clockInfo = getLiveISTClockAndShopStatus();
    const fallbackResult = buildSmartLocalFallback("", FALLBACK_MENU, FALLBACK_OFFERS, clockInfo, "", {}, {}, "Mairwa, Bihar", [], err.message);
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