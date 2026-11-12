// File: netlify/functions/aiChat.js
// Laddu AI — Clean Context-Gated Action Links + Honest Error Handling (No Menu Dumping on Errors!)
// Exact Store Pin: 26.2373274° N, 84.1508169° E | Plus Code: 65P2+W8 Mairwa, Bihar | Shankar Shahi Market, Nai Bazar, Mairwa (Siwan) 841239
// Google Maps Short URL: https://maps.app.goo.gl/gWg1gvrsDVqRSqjt9

import mairwaLandmarksModule from "./mairwaLandmarks.cjs";

const { searchMairwaLandmarks } = mairwaLandmarksModule;

const SUPABASE_PROJECT_ID = "frltketibbthwqydnhls";
const DEFAULT_SUPABASE_URL = "https://" + SUPABASE_PROJECT_ID + ".supabase.co";

const STORE_PROFILE = {
  aiName: "Laddu AI",
  name: "KshirSagar Sweets Corner / KshirSagar Sweets & Bakers (क्षीर सागर स्वीट्स कार्नर — SINCE 1998)",
  established: "Since 1998 — Tradition of Excellence",
  tagline: "हमेशा कुछ नया (Hamesha Kuch Naya) | Sweets that make occasions sweeter",
  timings: "सुबह 8:00 बजे से रात 10:00 बजे तक (सातों दिन खुला)",
  deliveryTimings: "सुबह 10:00 बजे से रात 8:00 बजे तक (होम डिलीवरी सुविधा)",
  address: "Shankar Shahi Market, Nai Bazar, Mairwa (Siwan), Bihar 841239 (शंकर शाही मार्केट, नई बाज़ार, मैरवा, सीवान)",
  plusCode: "65P2+W8 Mairwa, Bihar",
  coordinates: { lat: 26.2373274, lon: 84.1508169 },
  googleMapsUrl: "https://maps.app.goo.gl/gWg1gvrsDVqRSqjt9",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=26.2373274,84.1508169",
  googleMapsFullUrl:
    "https://www.google.com/maps/place/Kshirsagar/@26.2373274,84.1508169,807m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399253b11832e8db:0x88f735f0ec8e1283!8m2!3d26.2373274!4d84.1508169!16s%2Fg%2F11dzd377b_",
  phone: "+91 8226935738",
  packagingPhones: ["+91 9931890824", "+91 9523242424", "+91 8226935738"],
  whatsapp: "+91 8226935738",
  email: "vikashmw900@gmail.com",
  website: "https://kshirsagarsweets.netlify.app/",
  androidApp: "https://kshirsagarsweets.netlify.app/KshirSagar.apk",
  developer: "Developed by Vikash Kumar Gupta (Instagram: @_vikashkgupta)",
  packagingPolicies: [
    "100% Pure Veg (शुद्ध शाकाहारी मिष्ठान एवं बेकरी)",
    "CONSUME SAME DAY (ताज़ा छेना व दूध की मिठाइयाँ उसी दिन सेवन करने की सलाह दी जाती है)",
    "BOX CHARGES EXTRA (स्पेशल गिफ्ट/फैंसी मिठाई बॉक्स का शुल्क अलग से लागू होता है)"
  ],
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

function extractUserLocationContext(reqHeaders, contextGeo, clientDevice) {
  let netlifyGeoStr = "";
  try {
    if (contextGeo && (contextGeo.city || contextGeo.subdivision)) {
      const parts = [
        contextGeo.city,
        contextGeo.subdivision?.name || contextGeo.subdivision?.code,
        contextGeo.country?.name || contextGeo.country?.code
      ].filter(Boolean);
      if (parts.length > 0) netlifyGeoStr = parts.join(", ");
    } else {
      const rawGeo = reqHeaders?.get ? reqHeaders.get("x-nf-geo") : reqHeaders?.["x-nf-geo"];
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
          if (parts.length > 0) netlifyGeoStr = parts.join(", ");
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

async function getCandidateModels(apiKey) {
  const cleanKey = String(apiKey || "").trim();
  if (!cachedDiscoveredModels) {
    try {
      const listRes = await fetchWithTimeout(
        "https://generativelanguage.googleapis.com/v1beta/models",
        { headers: { "x-goog-api-key": cleanKey } },
        1400
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
      : ["gemini-2.0-flash-lite", "gemini-2.0-flash", "gemini-flash-lite-latest"];

  if (cachedWorkingModel) {
    modelsToTry = [cachedWorkingModel, ...modelsToTry.filter((m) => m !== cachedWorkingModel)];
  }
  return modelsToTry;
}

// Opens a TRUE token-by-token SSE stream from Gemini (`:streamGenerateContent?alt=sse`)
async function openGeminiSSEStream(apiKey, systemInstruction, contents) {
  const cleanKey = String(apiKey || "").trim();
  const modelsToTry = await getCandidateModels(cleanKey);
  const errors = [];

  for (const modelName of modelsToTry.slice(0, 2)) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:streamGenerateContent?alt=sse`;
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
              temperature: 0.5
            }
          })
        },
        6500
      );

      if (res.ok && res.body) {
        cachedWorkingModel = modelName;
        return { ok: true, response: res, modelUsed: modelName };
      } else {
        const errTxt = await res.text();
        errors.push(`${modelName}(${res.status}): ${errTxt.slice(0, 90)}`);
        if (cachedWorkingModel === modelName) cachedWorkingModel = null;
      }
    } catch (err) {
      errors.push(`${modelName}: ${err.message}`);
    }
  }
  return { ok: false, errorText: errors.join(" | ") };
}

// ============================================================================
// STRICT CONTEXT-GATED ACTION BUTTONS BUILDER (Never shows unwanted buttons!)
// ============================================================================
// Only allows a MAPS button if the user ACTUALLY asked about store location/route/address/village distance.
// Only allows a WHATSAPP/CALL/CART/CAKE button when relevant to the user's message.
function isStoreLocationOrRouteQuery(userMessage, matchedLandmarks) {
  const q = String(userMessage || "").toLowerCase();
  if (Array.isArray(matchedLandmarks) && matchedLandmarks.length > 0) return true;
  if (
    /\b(address|location|map|maps|direction|rasta|raasta|route|kidhar|kahan|duri|distance|km|kitni dur|shankar shahi|nai bazar|mairwa dukan|shop kahan)\b/i.test(
      q
    ) ||
    q.includes("पता") ||
    q.includes("रास्ता") ||
    q.includes("लोकेशन") ||
    q.includes("कहाँ है") ||
    q.includes("कहां है") ||
    q.includes("कितनी दूर") ||
    q.includes("दूरी") ||
    q.includes("शंकर शाही") ||
    q.includes("नई बाज़ार") ||
    q.includes("नई बाजार") ||
    q.includes("मैप")
  ) {
    return true;
  }
  return false;
}

function sanitizeAndBuildActionButtons(rawButtons, legacyWhatsappText, userMessage, matchedLandmarks, clientCart, aiReplyText = "") {
  const finalButtons = [];
  const seenLabels = new Set();
  const isLocationIntent = isStoreLocationOrRouteQuery(userMessage, matchedLandmarks);

  const addVerifiedButton = (btn) => {
    if (!btn || !btn.label) return;
    const label = String(btn.label).trim().slice(0, 52);
    if (!label || seenLabels.has(label.toLowerCase())) return;
    seenLabels.add(label.toLowerCase());
    finalButtons.push(btn);
  };

  const candidates = Array.isArray(rawButtons) ? rawButtons : [];

  for (const item of candidates) {
    if (!item || typeof item !== "object") continue;
    const type = String(item.type || "").toUpperCase().trim();
    const customLabel = String(item.label || "").trim();
    const payload = String(item.payload || item.text || item.url || "").trim();

    if (type === "MAPS" || type === "DIRECTION" || type === "LOCATION") {
      // STRICT GATE: Only include a MAPS button if the user actually asked about location, address, distance, or directions!
      if (!isLocationIntent) continue;
      addVerifiedButton({
        type: "MAPS",
        label: customLabel || "Google Maps पर रास्ता देखें",
        href: STORE_PROFILE.googleMapsDirectionsUrl,
        external: true
      });
    } else if (type === "WHATSAPP") {
      const waMsg =
        payload ||
        legacyWhatsappText ||
        (Array.isArray(clientCart?.items) && clientCart.items.length > 0
          ? `Namaste KshirSagar! Mera Order:\n${clientCart.items.map((i) => `- ${i.name} x ${i.qty} (₹${i.price * i.qty})`).join("\n")}\nTotal: ₹${clientCart.grandTotal}`
          : "Namaste KshirSagar! Mujhe order/jankari chahiye.");
      addVerifiedButton({
        type: "WHATSAPP",
        label: customLabel || "WhatsApp पर ऑर्डर भेजें",
        href: `https://wa.me/918226935738?text=${encodeURIComponent(waMsg)}`,
        external: true
      });
    } else if (type === "CALL" || type === "PHONE") {
      const cleanDigits = payload.replace(/\D/g, "");
      let dialNum = "+918226935738";
      if (cleanDigits.endsWith("9931890824")) dialNum = "+919931890824";
      else if (cleanDigits.endsWith("9523242424")) dialNum = "+919523242424";
      addVerifiedButton({
        type: "CALL",
        label: customLabel || "दुकान पर कॉल करें",
        href: `tel:${dialNum}`,
        external: false
      });
    } else if (type === "OPEN_CART" || type === "CART") {
      addVerifiedButton({
        type: "OPEN_CART",
        label: customLabel || "शॉपिंग कार्ट खोलें",
        modalAction: "OPEN_CART"
      });
    } else if (type === "CUSTOM_CAKE" || type === "OPEN_CUSTOM_CAKE" || type === "CAKE") {
      addVerifiedButton({
        type: "CUSTOM_CAKE",
        label: customLabel || "कस्टम केक ऑर्डर फॉर्म खोलें",
        modalAction: "OPEN_CUSTOM_CAKE"
      });
    } else if (type === "APK" || type === "APP") {
      addVerifiedButton({
        type: "APK",
        label: customLabel || "KshirSagar Android App डाउनलोड करें",
        href: STORE_PROFILE.androidApp,
        external: true
      });
    } else if (type === "INSTAGRAM" || type === "DEVELOPER") {
      addVerifiedButton({
        type: "INSTAGRAM",
        label: customLabel || "Developer (@_vikashkgupta)",
        href: "https://www.instagram.com/_vikashkgupta/",
        external: true
      });
    } else if (type === "URL" || type === "LINK") {
      if (/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}/i.test(payload)) {
        addVerifiedButton({
          type: "URL",
          label: customLabel || payload.replace(/^https?:\/\/(www\.)?/i, "").split("/")[0],
          href: payload,
          external: true
        });
      }
    }
  }

  // If AI mentioned an external https:// URL in the reply text (e.g. "https://aktu.ac.in/") and didn't add a URL chip, extract it cleanly!
  if (finalButtons.length === 0 && aiReplyText) {
    const urlMatches = String(aiReplyText).match(/https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s),*"'<>]*)?/g);
    if (urlMatches && urlMatches.length > 0) {
      const firstUrl = urlMatches[0].replace(/[.,;!?]+$/, "");
      if (!firstUrl.includes("kshirsagarsweets.netlify.app")) {
        let hostLabel = "वेबसाइट खोलें";
        try {
          hostLabel = new URL(firstUrl).hostname.replace(/^www\./, "");
        } catch {}
        addVerifiedButton({
          type: "URL",
          label: `${hostLabel} खोलें`,
          href: firstUrl,
          external: true
        });
      }
    }
  }

  if (legacyWhatsappText && !finalButtons.some((b) => b.type === "WHATSAPP")) {
    addVerifiedButton({
      type: "WHATSAPP",
      label: "WhatsApp पर यह ऑर्डर भेजें",
      href: `https://wa.me/918226935738?text=${encodeURIComponent(legacyWhatsappText)}`,
      external: true
    });
  }

  // Only auto-attach a Maps button if the user genuinely asked about store location/route/landmark!
  if (finalButtons.length === 0 && isLocationIntent) {
    const landmarkName = matchedLandmarks?.[0]?.name?.split("(")?.[0]?.trim();
    addVerifiedButton({
      type: "MAPS",
      label: landmarkName
        ? `${landmarkName} से दुकान का रास्ता देखें`
        : "Google Maps पर रास्ता देखें",
      href: STORE_PROFILE.googleMapsDirectionsUrl,
      external: true
    });
  }

  return finalButtons.slice(0, 2);
}

// Handles deterministic instant actions (like Cart 0 / Clear Cart) or returns an honest `isError: true` response when AI API fails!
// NEVER dumps Ghewar / Onion Pakoda menu on unrelated failed prompts!
function buildHonestFallbackResponse(userMessage, clockInfo, clientCart, matchedLandmarks, debugReason) {
  const q = (userMessage || "").trim();
  const lower = q.toLowerCase();

  // 1. Instant Cart Clear command always succeeds even if AI API is busy
  if (
    (/\b(cart|कार्ट)\b/i.test(lower) && /\b(0|zero|clear|empty|khali|hata|remove|delete|खाली|हटा)\b/i.test(lower)) ||
    lower.includes("cart 0") ||
    lower.includes("clear cart")
  ) {
    return {
      isError: false,
      reply: "✅ मैंने आपका कार्ट पूरी तरह खाली (0 items) कर दिया है!",
      recommendedItems: [],
      action: "CLEAR_CART",
      actionButtons: [],
      debugError: debugReason || null,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई और रेट बताओ", "🍕 ₹500 में पार्टी कॉम्बो"]
    };
  }

  // 2. For ANY other query where the AI model failed or timed out, return an honest error state with a Retry button!
  return {
    isError: true,
    reply: "⚠️ **Something went wrong!** अभी सर्वर से जवाब लाने में थोड़ी दिक्कत हुई। कृपया नीचे **Retry** दबाकर दोबारा कोशिश करें।",
    recommendedItems: [],
    action: "NONE",
    actionButtons: [],
    debugError: debugReason || "AI service temporary timeout",
    quickFollowUps: []
  };
}

function buildCoreContextBlock({
  clockInfo,
  weatherInfo,
  rememberedName,
  isReturningVisitor,
  existingSupabaseRow,
  rememberedMobile,
  clientCart,
  recentViewedDishes,
  clientDevice,
  deviceInfo,
  locationStr,
  matchedLandmarks,
  activeMenu,
  activeOffers
}) {
  return `
You are "Laddu AI", the official intelligent assistant of KshirSagar Sweets Corner / KshirSagar Sweets & Bakers (https://kshirsagarsweets.netlify.app/).
Never refer to yourself as ChatGPT or mention OpenAI/ChatGPT—your name is always "Laddu AI".

YOU HAVE TWO COMPLETE CAPABILITIES AT ALL TIMES:

CAPABILITY 1 — UNIVERSAL SMART AI ASSISTANT:
- The user can ask you ANYTHING in the world: universities (like AKTU), websites, coding, math, science, history, general knowledge, career advice, translations, or daily life questions.
- CRITICAL: When the user asks a general question (not about KshirSagar food/store), answer ONLY their question directly. Do NOT mention sweets, cakes, or store directions, set "showFoodCards": false, "recommendedItemNames": [], and only include a "URL" actionButton if they asked for a website link!

CAPABILITY 2 — KSHIRSAGAR WEBSITE, LIVE MENU, CART CONTROLLER & HYPER-LOCAL MAIRWA EXPERT:
Use the exact real-time context provided below whenever relevant:

=== 1. LIVE INDIAN CLOCK, DATE & SHOP COUNTDOWN ===
- Current IST Time: ${clockInfo.formattedTime}
- Current IST Date & Day: ${clockInfo.formattedDate}
- Live Shop Status: ${clockInfo.shopStatusNote}
- Live Delivery Status: ${clockInfo.deliveryStatusNote}
- Current Time-of-Day Craving Mood: ${clockInfo.timeMood}

=== 2. LIVE MAIRWA WEATHER & SEASON SENSE ===
- ${weatherInfo}

=== 3. USER'S LIVE SHOPPING CART & IDENTITY ===
- Customer Name: ${rememberedName} (${isReturningVisitor || existingSupabaseRow ? "Returning Visitor with saved Supabase history" : "First-Time Visitor"})
- Customer Mobile: ${rememberedMobile || "Not entered yet"}
- Selected Order Type: ${clientCart.orderType || "Delivery"}
- Current Cart Items (${clientCart.totalQty || 0} items, Total Bill: ₹${clientCart.grandTotal || 0}): ${
    Array.isArray(clientCart.items) && clientCart.items.length > 0
      ? JSON.stringify(clientCart.items)
      : "Cart is currently empty (0 items)"
  }
- Recently Viewed Dishes on Website: ${recentViewedDishes.length > 0 ? recentViewedDishes.join(", ") : "None yet"}

=== 4. USER'S DEVICE, BATTERY, NETWORK & LOCATION CONTEXT ===
- Device & Browser: ${clientDevice.platform || deviceInfo}
- Battery Status: ${clientDevice.batteryText || "Not reported by browser"}
- Network Connection: ${clientDevice.networkText || "Online"}
- User Location / Region: ${locationStr}

=== 5. OFFICIAL STORE PINPOINT LOCATION, PACKAGING RULES & MATCHED LOCAL LANDMARKS ===
- Exact Store Address (Printed on Official Box): "Shankar Shahi Market, Nai Bazar, Mairwa (Siwan), Bihar 841239" (शंकर शाही मार्केट, नई बाज़ार, मैरवा, सीवान | Plus Code: "65P2+W8 Mairwa, Bihar", Coordinates: 26.2373274° N, 84.1508169° E).
- Official Contact Numbers: +91 8226935738 (Online/WhatsApp), +91 9931890824, +91 9523242424.
- Official Taglines: "हमेशा कुछ नया (Hamesha Kuch Naya)" & "Sweets that make occasions sweeter" (SINCE 1998).
- Official Packaging Rules: 100% Pure Veg, "CONSUME SAME DAY" for fresh milk/chhena sweets, and "BOX CHARGES EXTRA" for fancy/gift boxes.
- IMPORTANT: Never mention Power House or Electric Office—the address is strictly "Shankar Shahi Market, Nai Bazar, Mairwa (Siwan), Bihar 841239".
- Matched Landmarks from User's Query: ${
    matchedLandmarks.length > 0
      ? JSON.stringify(matchedLandmarks)
      : "No specific village/landmark name in this message."
  }

=== 6. SMART HALWAI PORTION & PARTY CALCULATOR ===
${JSON.stringify(HALWAI_PORTION_GUIDE)}

=== 7. UPCOMING INDIAN FESTIVALS & CUSTOM CAKE ADVISOR ===
- Festivals Guide: ${JSON.stringify(FESTIVAL_OCCASIONS_GUIDE)}
- Custom Cake Advisor: For birthday/anniversary cakes, suggest Truffle Cake / Red Velvet Cake, give 3 short cake-top messages, and include a "CUSTOM_CAKE" button in "actionButtons".

=== 8. OFFICIAL WEBSITE, STORE DETAILS & CREATOR STORY ===
${JSON.stringify(STORE_PROFILE)}

=== 9. LIVE AIRTABLE MENU TABLE & ALTERNATIVE SUGGESTOR ===
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

=== 11. STRICT RULES FOR "actionButtons" (ONLY INCLUDE WHEN GENUINELY NEEDED!) ===
CRITICAL: Do NOT attach "actionButtons" on every response! Keep "actionButtons": [] by default, and ONLY add a button when it directly matches what the user asked for:
- Use {"type": "MAPS", "label": "शंकर शाही मार्केट (नई बाज़ार) का रास्ता देखें"} ONLY when the user explicitly asks about the shop's address, location, route, directions, or distance from a village/landmark. NEVER include a MAPS button on general questions, greetings, or menu price checks!
- Use {"type": "WHATSAPP", "label": "WhatsApp पर ऑर्डर भेजें", "payload": "Namaste KshirSagar!..."} ONLY when the user wants to place an order on WhatsApp or book a party/bulk order.
- Use {"type": "CALL", "label": "दुकान पर कॉल करें", "payload": "+918226935738"} ONLY when the user asks for a phone number or urgent contact.
- Use {"type": "OPEN_CART", "label": "शॉपिंग कार्ट खोलें"} ONLY when the user asks to view/checkout their cart.
- Use {"type": "CUSTOM_CAKE", "label": "कस्टम केक फॉर्म खोलें"} ONLY when the user asks about custom cakes.
- Use {"type": "URL", "label": "आधिकारिक वेबसाइट खोलें", "payload": "https://..."} ONLY when the user asks for an external website link (like AKTU's official website).
`;
}

function resolveMetadataPayload(parsedMeta, userMessage, activeMenu, rememberedName, matchedLandmarks, clientCart, aiReplyText = "") {
  const lowerMsg = String(userMessage || "").toLowerCase();
  const actionVal = parsedMeta?.action || "NONE";
  let finalAction = actionVal;

  if (
    finalAction !== "CLEAR_CART" &&
    ((/\b(cart|कार्ट)\b/i.test(lowerMsg) && /\b(0|zero|clear|empty|khali|खाली|साफ़|साफ)\b/i.test(lowerMsg)) ||
      lowerMsg.includes("cart 0") ||
      lowerMsg.includes("clear cart"))
  ) {
    finalAction = "CLEAR_CART";
  }

  let matchedItems = [];
  if (parsedMeta?.showFoodCards) {
    const names = Array.isArray(parsedMeta.recommendedItemNames) ? parsedMeta.recommendedItemNames : [];
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
  if (Array.isArray(parsedMeta?.autoAddItems) && parsedMeta.autoAddItems.length > 0) {
    parsedMeta.autoAddItems.forEach((reqItem) => {
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

  const resolvedAutoRemove = Array.isArray(parsedMeta?.autoRemoveItems)
    ? parsedMeta.autoRemoveItems
        .filter((r) => r && r.name)
        .map((r) => ({
          name: String(r.name).trim(),
          qty: Math.max(1, Number(r.qty || 1))
        }))
    : [];

  const effectiveCustomerName =
    parsedMeta?.detectedCustomerName && String(parsedMeta.detectedCustomerName).trim()
      ? String(parsedMeta.detectedCustomerName).trim()
      : rememberedName;

  const quickFollowUps =
    Array.isArray(parsedMeta?.quickFollowUps) && parsedMeta.quickFollowUps.length > 0
      ? parsedMeta.quickFollowUps.slice(0, 4)
      : ["🍬 आज की स्पेशल मिठाई दिखाओ", "🍕 ₹500 में पार्टी कॉम्बो", "✨ कुछ नया और रोचक बताओ"];

  const actionButtons = sanitizeAndBuildActionButtons(
    parsedMeta?.actionButtons,
    parsedMeta?.whatsappOrderText || "",
    userMessage,
    matchedLandmarks,
    clientCart,
    aiReplyText
  );

  return {
    recommendedItems: matchedItems.slice(0, 4),
    autoAddItems: resolvedAutoAdd,
    autoRemoveItems: resolvedAutoRemove,
    action: finalAction,
    whatsappOrderText: parsedMeta?.whatsappOrderText || "",
    actionButtons,
    detectedCustomerName: effectiveCustomerName !== "Guest User" ? effectiveCustomerName : "",
    effectiveCustomerName,
    quickFollowUps
  };
}

// ============================================================================
// NETLIFY FUNCTIONS 2.0 WEB-STANDARD HANDLER (`export default async (req, context)`)
// ============================================================================
export default async (req, context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };

  if (req.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  if (req.method === "GET") {
    const { supabaseUrl, supabaseKey } = resolveSupabaseConfig();

    if (!supabaseKey) {
      return new Response(
        JSON.stringify({
          success: false,
          sessions: [],
          message: "SUPABASE_ANON_KEY not set in Netlify Environment Variables."
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const urlObj = new URL(req.url);
    const querySessionId = urlObj.searchParams.get("sessionId");
    if (querySessionId) {
      const sessionRow = await fetchSessionFromSupabase(querySessionId);
      return new Response(
        JSON.stringify({
          success: true,
          session: sessionRow || null
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
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
        return new Response(
          JSON.stringify({
            success: false,
            sessions: [],
            error: `Supabase GET ${res.status}: ${errText}`
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const sessions = await res.json();
      return new Response(JSON.stringify({ success: true, sessions }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, sessions: [], error: err.message }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }

  try {
    const body = await req.json();
    const userMessage = (body.message || "").trim();
    const sessionId = String(body.sessionId || "KS-GUEST").trim();
    const customerName = String(body.customerName || "Guest User").trim();
    const customerMobile = String(body.customerMobile || "").trim();
    const deviceInfo = String(body.deviceInfo || req.headers.get("user-agent") || "Web").slice(0, 160);
    const clientHistory = Array.isArray(body.history) ? body.history.slice(-8) : [];
    const clientMenu = Array.isArray(body.clientMenu) && body.clientMenu.length > 0 ? body.clientMenu : null;
    const clientOffers = Array.isArray(body.clientOffers) && body.clientOffers.length > 0 ? body.clientOffers : null;
    const clientCart = body.clientCart || { items: [], totalQty: 0, grandTotal: 0, orderType: "Delivery" };
    const clientDevice = body.clientDevice || {};
    const recentViewedDishes = Array.isArray(body.recentViewedDishes) ? body.recentViewedDishes : [];
    const isReturningVisitor = Boolean(body.isReturningVisitor);

    const clockInfo = getLiveISTClockAndShopStatus();
    const locationStr = extractUserLocationContext(req.headers, context?.geo, clientDevice);
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
      const fallbackResult = buildHonestFallbackResponse(
        userMessage,
        clockInfo,
        clientCart,
        matchedLandmarks,
        "GEMINI_API_KEY not found in environment variables."
      );
      return new Response(
        JSON.stringify({
          success: true,
          mode: "missing_env_key",
          ...fallbackResult
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const coreContext = buildCoreContextBlock({
      clockInfo,
      weatherInfo,
      rememberedName,
      isReturningVisitor,
      existingSupabaseRow,
      rememberedMobile,
      clientCart,
      recentViewedDishes,
      clientDevice,
      deviceInfo,
      locationStr,
      matchedLandmarks,
      activeMenu,
      activeOffers
    });

    const streamingSystemInstruction = `${coreContext}
=== STREAMING OUTPUT FORMAT (MANDATORY) ===
1. First, write your complete, natural markdown reply directly to the user (do NOT wrap the reply in JSON or code fences—just write the reply text so it streams word-by-word to the user immediately!).
2. At the very end of your response, on a new line, output the exact delimiter:
---METADATA---
followed immediately by a single-line JSON object for cart actions, food cards, dynamic actionButtons (ONLY when genuinely needed—leave [] if not needed!), and follow-ups matching this schema:
{"showFoodCards":false,"recommendedItemNames":[],"autoAddItems":[],"autoRemoveItems":[],"action":"NONE","actionButtons":[],"detectedCustomerName":"","quickFollowUps":["🍬 आज की स्पेशल मिठाई दिखाओ","🍕 ₹500 में पार्टी कॉम्बो","✨ कुछ नया और रोचक बताओ"]}
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

    const sseResult = await openGeminiSSEStream(geminiKey, streamingSystemInstruction, contents);

    if (!sseResult.ok) {
      const fallbackResult = buildHonestFallbackResponse(
        userMessage,
        clockInfo,
        clientCart,
        matchedLandmarks,
        sseResult.errorText
      );
      return new Response(
        JSON.stringify({
          success: true,
          mode: "api_error_fallback",
          ...fallbackResult
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder("utf-8");
    const DELIMITER = "---METADATA---";

    const readableStream = new ReadableStream({
      async start(controller) {
        const reader = sseResult.response.body.getReader();
        let sseBuffer = "";
        let accumulatedRaw = "";
        let sentLength = 0;

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            sseBuffer += decoder.decode(value, { stream: true });
            const lines = sseBuffer.split("\n");
            sseBuffer = lines.pop() || "";

            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!trimmedLine.startsWith("data:")) continue;
              const jsonStr = trimmedLine.slice(5).trim();
              if (!jsonStr || jsonStr === "[DONE]") continue;

              try {
                const chunkObj = JSON.parse(jsonStr);
                const piece = chunkObj?.candidates?.[0]?.content?.parts?.[0]?.text || "";
                if (piece) {
                  accumulatedRaw += piece;

                  const delimIdx = accumulatedRaw.indexOf(DELIMITER);
                  const safeEnd =
                    delimIdx !== -1
                      ? delimIdx
                      : Math.max(0, accumulatedRaw.length - DELIMITER.length);

                  if (safeEnd > sentLength) {
                    const delta = accumulatedRaw.slice(sentLength, safeEnd);
                    sentLength = safeEnd;
                    controller.enqueue(
                      encoder.encode(`data: ${JSON.stringify({ type: "delta", text: delta })}\n\n`)
                    );
                  }
                }
              } catch {}
            }
          }

          let finalReplyText = accumulatedRaw;
          let rawMetaJson = "{}";
          const finalDelimIdx = accumulatedRaw.indexOf(DELIMITER);

          if (finalDelimIdx !== -1) {
            finalReplyText = accumulatedRaw.slice(0, finalDelimIdx).trim();
            rawMetaJson = accumulatedRaw.slice(finalDelimIdx + DELIMITER.length).trim();
          } else {
            finalReplyText = accumulatedRaw.trim();
          }

          if (finalReplyText.length > sentLength) {
            const remainingDelta = finalReplyText.slice(sentLength);
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ type: "delta", text: remainingDelta })}\n\n`)
            );
          }

          let parsedMeta = {};
          try {
            const cleanMeta = rawMetaJson.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
            parsedMeta = JSON.parse(cleanMeta);
          } catch {}

          const resolvedMeta = resolveMetadataPayload(
            parsedMeta,
            userMessage,
            activeMenu,
            rememberedName,
            matchedLandmarks,
            clientCart,
            finalReplyText
          );

          const supabaseStatus = await saveSessionToSupabase({
            existingRow: existingSupabaseRow,
            sessionId,
            customerName: resolvedMeta.effectiveCustomerName,
            customerMobile: rememberedMobile,
            deviceInfo: `${deviceInfo} | Loc: ${locationStr}`,
            userMessage,
            aiReply: finalReplyText || "मैं आपकी कैसे मदद कर सकता हूँ?"
          });

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: "done",
                isError: false,
                reply: finalReplyText,
                modelUsed: sseResult.modelUsed,
                supabaseStatus,
                matchedLandmarks,
                recommendedItems: resolvedMeta.recommendedItems,
                autoAddItems: resolvedMeta.autoAddItems,
                autoRemoveItems: resolvedMeta.autoRemoveItems,
                action: resolvedMeta.action,
                whatsappOrderText: resolvedMeta.whatsappOrderText,
                actionButtons: resolvedMeta.actionButtons,
                detectedCustomerName: resolvedMeta.detectedCustomerName,
                quickFollowUps: resolvedMeta.quickFollowUps
              })}\n\n`
            )
          );
          controller.close();
        } catch (streamErr) {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: "done",
                isError: !accumulatedRaw,
                reply:
                  accumulatedRaw ||
                  "⚠️ **Something went wrong!** कनेक्शन में थोड़ी रुकावट आई। कृपया नीचे **Retry** दबाकर दोबारा कोशिश करें।",
                recommendedItems: [],
                actionButtons: [],
                action: "NONE"
              })}\n\n`
            )
          );
          controller.close();
        }
      }
    });

    return new Response(readableStream, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive"
      }
    });
  } catch (err) {
    const clockInfo = getLiveISTClockAndShopStatus();
    const fallbackResult = buildHonestFallbackResponse("", clockInfo, {}, [], err.message);
    return new Response(
      JSON.stringify({
        success: true,
        mode: "error_recovery",
        ...fallbackResult
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};