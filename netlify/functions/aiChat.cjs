// File: netlify/functions/aiChat.cjs
// KshirSagar AI Mitr — Clean, Error-Free Serverless RAG + Gemini Assistant

const STORE_PROFILE = {
  name: "KshirSagar Sweets & Bakers",
  timings: "सुबह 8:00 बजे से रात 10:00 बजे तक (सातों दिन खुली)",
  address: "Nai Bazar, Mairwa (Siwan), Near Power House",
  phone: "+91 8226935738",
  deliveryInfo: "मैरवा और आस-पास के इलाकों में तेज़ होम डिलीवरी उपलब्ध है।"
};

const FALLBACK_MENU = [
  { id: "m1", name: "Kaju Katli", category: "Sweets", price: 840, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m2", name: "Rasmalai", category: "Sweets", price: 45, unit: "1 pc", image: "/sweet.jpg", available: true },
  { id: "m3", name: "Desi Ghee Ghewar", category: "Sweets", price: 480, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m4", name: "Paneer Pizza (Full)", category: "Pizza", price: 199, unit: "Regular", image: "/pizza.png", available: true },
  { id: "m5", name: "Veg Chowmein (Full)", category: "Snacks", price: 110, unit: "Full", image: "/snak.jpg", available: true },
  { id: "m6", name: "Crispy Samosa", category: "Snacks", price: 20, unit: "2 pcs", image: "/snak.jpg", available: true }
];

const FALLBACK_OFFERS = [
  { title: "Festival Sweet Deal", code: "KSHIR10", discount: "10% OFF on orders above ₹500" },
  { title: "Party Combo Offer", code: "PARTY50", discount: "Flat ₹50 OFF on Pizza + Snacks above ₹399" }
];

async function fetchLiveMairwaWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=26.23&longitude=84.15&current=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia%2FKolkata"
    );
    if (!res.ok) return null;
    const data = await res.json();
    const cur = data.current;
    if (!cur) return null;
    return {
      temp: `${cur.temperature_2m}°C`,
      condition: cur.weather_code <= 3 ? "साफ़ और सुहावना" : "सुहावना मौसम"
    };
  } catch (e) {
    return null;
  }
}

async function fetchAirtableData(baseId, apiKey) {
  if (!baseId || !apiKey) return { menu: FALLBACK_MENU, offers: FALLBACK_OFFERS };
  try {
    const [mRes, oRes] = await Promise.all([
      fetch(`https://api.airtable.com/v0/${baseId}/Menu`, { headers: { Authorization: `Bearer ${apiKey}` } }),
      fetch(`https://api.airtable.com/v0/${baseId}/Offers`, { headers: { Authorization: `Bearer ${apiKey}` } })
    ]);

    let menu = FALLBACK_MENU;
    let offers = FALLBACK_OFFERS;

    if (mRes.ok) {
      const data = await mRes.json();
      if (data.records?.length > 0) {
        menu = data.records.map((r) => ({
          id: r.id,
          name: r.fields.Name || r.fields.ItemName || "Special Item",
          category: r.fields.Category || "Sweets",
          price: Number(r.fields.Price || 0),
          unit: r.fields.Unit || "",
          image: (Array.isArray(r.fields.Image) && r.fields.Image[0]?.url) || r.fields.Image || "/sweet.jpg",
          available: r.fields.Available !== false
        })).filter(i => i.available && i.price > 0);
      }
    }
    if (oRes.ok) {
      const data = await oRes.json();
      if (data.records?.length > 0) {
        offers = data.records.map((r) => ({
          title: r.fields.Title || "Special Offer",
          code: r.fields.Code || "SPECIAL",
          discount: r.fields.Discount || "Special Discount"
        }));
      }
    }
    return { menu, offers };
  } catch (e) {
    return { menu: FALLBACK_MENU, offers: FALLBACK_OFFERS };
  }
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) };

  try {
    const body = JSON.parse(event.body || "{}");
    const userMessage = (body.message || "").trim().toLowerCase();

    const [airtable, weather] = await Promise.all([
      fetchAirtableData(process.env.AIRTABLE_BASE_ID, process.env.AIRTABLE_API_KEY),
      fetchLiveMairwaWeather()
    ]);

    const menu = airtable.menu;
    const offers = airtable.offers;
    const geminiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || body.clientGeminiKey;

    // Quick local answers for store FAQs
    if (userMessage.includes("kitne bje") || userMessage.includes("timing") || userMessage.includes("समय") || userMessage.includes("khul")) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, reply: `⏰ हमारी दुकान रोज़ **${STORE_PROFILE.timings}** खुली रहती है।`, recommendedItems: [] }) };
    }
    if (userMessage.includes("address") || userMessage.includes("kahan") || userMessage.includes("पता")) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, reply: `📍 हमारा पता है: **${STORE_PROFILE.address}**।`, recommendedItems: [] }) };
    }
    if (userMessage.includes("number") || userMessage.includes("phone") || userMessage.includes("नंबर")) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, reply: `📞 हमारा मोबाइल/WhatsApp नंबर है: **${STORE_PROFILE.phone}**`, recommendedItems: [] }) };
    }
    if (userMessage.includes("mausam") || userMessage.includes("weather") || userMessage.includes("मौसम")) {
      const wText = weather ? `🌤️ अभी मैरवा का लाइव तापमान **${weather.temp}** (${weather.condition}) है। ऐसे में गरमा-गरम समोसे या रसमलाई का आनंद लें!` : `🌤️ अभी मैरवा में सुहावना मौसम है!`;
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, reply: wText, recommendedItems: [menu[5] || menu[0]] }) };
    }

    if (!geminiKey) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          reply: `नमस्ते! क्षीर सागर में आपका स्वागत है। आप हमारे मेन्यू से आइटम्स देख सकते हैं या दुकान का समय पूछ सकते हैं।`,
          recommendedItems: menu.slice(0, 3)
        })
      };
    }

    // Call Gemini Flash
    const systemPrompt = `You are KshirSagar AI Mitr for a sweet shop in Mairwa. Answer concisely in Hindi/Hinglish. Store Timings: 8 AM to 10 PM, Address: Nai Bazar Mairwa. Menu: ${JSON.stringify(menu.map(m => ({name: m.name, price: m.price, unit: m.unit})))}. Return JSON format: {"reply": "...", "recommendedItemNames": ["ItemName"]}`;

    const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ role: "user", parts: [{ text: userMessage }] }],
        generationConfig: { temperature: 0.4, responseMimeType: "application/json" }
      })
    });

    if (!geminiRes.ok) throw new Error("Gemini API error");

    const data = await geminiRes.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());

    const names = Array.isArray(parsed.recommendedItemNames) ? parsed.recommendedItemNames : [];
    const matched = names.length > 0 ? menu.filter(m => names.some(n => m.name.toLowerCase().includes(n.toLowerCase()))) : [];

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        reply: parsed.reply || "यहाँ आपके लिए कुछ बेहतरीन विकल्प हैं:",
        recommendedItems: matched.length > 0 ? matched.slice(0, 4) : []
      })
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        reply: "🏪 क्षीर सागर स्वीट्स एंड बेकर्स\n⏰ सुबह 8 से रात 10 बजे तक\n📍 नई बाज़ार, मैरवा",
        recommendedItems: []
      })
    };
  }
};