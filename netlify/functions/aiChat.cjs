// File: netlify/functions/aiChat.cjs
// KshirSagar AI Mitr — Hybrid General-Purpose AI (like ChatGPT) + Live Website & Airtable RAG Assistant
// Capabilities:
// 1. Answers ANY general-knowledge, math, coding, science, writing, or world question just like ChatGPT.
// 2. Simultaneously has full access to KshirSagar's Live Airtable Menu, Live Airtable Offers, and Frontend Website Content.
// 3. Only shows Dish Cards (+ Add button) when the conversation is actually about KshirSagar food/menu/combos.

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
  ],
  orderingProcess:
    "कस्टमर वेबसाइट या Android App पर Menu देख सकते हैं, आइटम को Cart में जोड़ सकते हैं, Custom Cake या Dish Request भेज सकते हैं, और Checkout फॉर्म में अपना नाम, मोबाइल नंबर, पता और Optional Email (इंस्टेंट ईमेल रिसीट के लिए) भरकर ऑर्डर कर सकते हैं। ऑर्डर तुरंत WhatsApp और दुकानदार के पास पहुँच जाता है।"
};

const FALLBACK_MENU = [
  { id: "m1", name: "Kaju Katli", category: "Sweets", price: 840, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m2", name: "Rasmalai", category: "Sweets", price: 45, unit: "1 pc", image: "/sweet.jpg", available: true },
  { id: "m3", name: "Desi Ghee Ghewar", category: "Sweets", price: 480, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m4", name: "Besan Laddu", category: "Sweets", price: 360, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m5", name: "Soan Papdi", category: "Sweets", price: 320, unit: "1 kg", image: "/sweet.jpg", available: true },
  { id: "m6", name: "Truffle Cake", category: "Sweets", price: 450, unit: "500g", image: "/sweet.jpg", available: true },
  { id: "m7", name: "Red Velvet Cake", category: "Sweets", price: 480, unit: "500g", image: "/sweet.jpg", available: true },
  { id: "m8", name: "Special Mixture Namkeen", category: "Namkeen", price: 280, unit: "1 kg", image: "/namkeen.jpg", available: true },
  { id: "m9", name: "Aloo Bhujia", category: "Namkeen", price: 240, unit: "1 kg", image: "/namkeen.jpg", available: true },
  { id: "m10", name: "Salted Peanuts", category: "Namkeen", price: 220, unit: "1 kg", image: "/namkeen.jpg", available: true },
  { id: "m11", name: "Crispy Samosa", category: "Snacks", price: 20, unit: "2 pcs", image: "/snak.jpg", available: true },
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
    console.error("Airtable fetch warning, using fallback data:", err.message);
    return { menu: FALLBACK_MENU, offers: FALLBACK_OFFERS, source: "fallback_cache" };
  }
}

function buildSmartLocalFallback(userMessage, menu, offers) {
  const q = (userMessage || "").trim();
  const lower = q.toLowerCase();

  // 1. Percentage math calculation (e.g., "15% of 840")
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

  // 2. Arithmetic expressions (e.g., "25 * 45", "1200 / 8")
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
      // fall through
    }
  }

  // 3. Store info / address / contact / website details
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
    lower.includes("kshirsagar") ||
    lower.includes("क्षीर")
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

  // 4. Offers & Promo Codes
  if (lower.includes("offer") || lower.includes("discount") || lower.includes("coupon") || lower.includes("chhut")) {
    const offerLines = offers
      .map((o) => `🎁 **${o.title}** — कोड: \`${o.code}\` (${o.discount})`)
      .join("\n");
    return {
      reply: `🎉 **KshirSagar के लाइव ऑफ़र्स (Airtable से):**\n\n${offerLines}`,
      recommendedItems: menu.slice(0, 3),
      quickFollowUps: ["🍬 बेस्ट मिठाइयाँ दिखाओ", "🍕 पिज़्ज़ा और स्नैक्स दिखाओ", "📍 दुकान का पता और नंबर"]
    };
  }

  // 5. Menu / Price / Food queries
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
    lower.includes("मिठाई")
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
      "🙏 **नमस्ते! मैं KshirSagar AI Mitr हूँ।**\n\n" +
      "आप मुझसे **दुकान का लाइव मेन्यू, ऑफ़र्स, बजट कॉम्बो** के साथ-साथ **गणित (Math), कोडिंग, सामान्य ज्ञान (GK) या दुनिया का कोई भी सवाल** (बिल्कुल ChatGPT की तरह) पूछ सकते हैं!\n\n" +
      "*(नोट: बाहरी दुनिया के सभी सवालों के जवाब के लिए Netlify Environment Variables में GEMINI_API_KEY ज़रूर सेट करें।)*",
    recommendedItems: menu.slice(0, 3),
    quickFollowUps: [
      "🍬 आज की स्पेशल मिठाई और रेट बताओ",
      "🧮 15% of 840 कितना होता है?",
      "🏷️ आज के लाइव ऑफ़र्स क्या हैं?",
      "🌍 AI क्या होता है, आसान भाषा में समझाओ"
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

    // 1. Fetch Live Menu & Offers from Airtable (plus merge with any frontend menu/offers passed in)
    const liveData = await fetchLiveAirtableData(
      process.env.AIRTABLE_BASE_ID,
      process.env.AIRTABLE_API_KEY
    );

    const activeMenu = clientMenu || liveData.menu;
    const activeOffers = clientOffers || liveData.offers;

    const geminiKey = process.env.GEMINI_API_KEY;

    // Fallback if GEMINI_API_KEY is not set
    if (!geminiKey) {
      const fallbackResult = buildSmartLocalFallback(userMessage, activeMenu, activeOffers);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          mode: "smart_local_fallback",
          dataSource: liveData.source,
          ...fallbackResult
        })
      };
    }

    // 2. Hybrid System Prompt: Full ChatGPT General Intelligence + Full KshirSagar Website & Airtable Knowledge
    const systemInstruction = `
You are "KshirSagar AI Mitr", a powerful dual-mode AI assistant built into the KshirSagar Sweets & Bakers website (https://kshirsagarsweets.netlify.app/).

YOU HAVE TWO COMPLETE CAPABILITIES AT ALL TIMES:

CAPABILITY 1 — UNIVERSAL GENERAL AI ASSISTANT (LIKE CHATGPT):
- The user can ask you ANYTHING in the world: math problems, coding/programming questions, science, history, general knowledge, recipes, career advice, translations, jokes, essays, or daily life questions.
- Whenever the user asks a general question (not about the shop), answer it thoroughly, accurately, and naturally just like ChatGPT! Never refuse a general question by saying "I am only a sweet shop bot".
- For general/non-food questions, set "showFoodCards": false and "recommendedItemNames": [] in your JSON output so dish cards are NOT shown unnecessarily.

CAPABILITY 2 — KSHIRSAGAR WEBSITE, LIVE AIRTABLE MENU & OFFERS EXPERT:
- Whenever the user asks about the shop, website content, sweets, menu items, prices, party combos, custom cakes, timings, address, contact details, or active offers, use the exact real-time data provided below:

=== 1. OFFICIAL WEBSITE & STORE DETAILS ===
${JSON.stringify(STORE_PROFILE, null, 2)}

=== 2. LIVE FRONTEND PAGE CONTENT (EXTRACTED FROM USER'S SCREEN) ===
${pageContext || "Standard KshirSagar storefront loaded."}

=== 3. LIVE AIRTABLE MENU TABLE (REAL-TIME ITEMS & PRICES IN ₹) ===
${JSON.stringify(
  activeMenu.map((m) => ({
    id: m.id,
    name: m.name,
    category: m.category,
    price: m.price,
    unit: m.unit || "",
    description: m.description || ""
  }))
)}

=== 4. LIVE AIRTABLE OFFERS TABLE (ACTIVE PROMO CODES & DEALS) ===
${JSON.stringify(activeOffers)}

=== OUTPUT FORMAT RULES ===
- Match the user's language naturally (Hindi, Hinglish, or English).
- If the user asks to add to cart, remind them they can tap the "+ Add" button on the suggested dish cards below your message.
- Only set "showFoodCards": true and populate "recommendedItemNames" when the user is asking about food, menu, prices, combos, or the shop's items. For general ChatGPT questions (like math, GK, coding, etc.), set "showFoodCards": false and "recommendedItemNames": [].
- Return STRICT JSON matching this exact schema:
{
  "reply": "Your complete, helpful markdown response (can include bullet points, bold text, code/math steps, or menu details)",
  "showFoodCards": true or false,
  "recommendedItemNames": ["Exact Menu Item Name 1", "Exact Menu Item Name 2"],
  "quickFollowUps": ["Relevant follow-up 1", "Relevant follow-up 2", "Relevant follow-up 3"]
}
`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`;

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

    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemInstruction }] },
        contents,
        generationConfig: {
          temperature: 0.5,
          responseMimeType: "application/json"
        }
      })
    });

    if (!geminiRes.ok) {
      const fallbackResult = buildSmartLocalFallback(userMessage, activeMenu, activeOffers);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          mode: "smart_fallback",
          dataSource: liveData.source,
          ...fallbackResult
        })
      };
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
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

    // Only attach recommendedItems if showFoodCards is true
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
    console.error("aiChat error:", err);
    const fallbackResult = buildSmartLocalFallback("", FALLBACK_MENU, FALLBACK_OFFERS);
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