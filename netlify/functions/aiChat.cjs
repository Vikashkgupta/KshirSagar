// File: netlify/functions/aiChat.cjs
// KshirSagar AI Mitr — Serverless RAG + Gemini Assistant
// Reads Live Airtable "Menu" & "Offers" Tables + Store Profile + Smart Local Fallback

const STORE_PROFILE = {
  name: "KshirSagar Sweets & Bakers",
  tagline: "Hamesha Kuch Naya",
  timings: "8:00 AM to 10:00 PM (Open all 7 days)",
  address: "Mairwa Dham, Near Power House (with local delivery across Mairwa & Civil Lines)",
  phone: "+91 8226935738",
  whatsapp: "918226935738",
  email: "vikashmw900@gmail.com",
  website: "https://kshirsagarsweets.netlify.app/",
  specialties: "Pure Desi Ghee Traditional Sweets (Kaju Katli, Rasmalai, Ghewar, Besan Laddu, Soan Papdi), Crispy Namkeen, Hot Evening Snacks (Samosa, Veg Chowmein, Manchurian, Masala Dosa), and Oven-Fresh Pizzas & Cakes.",
  deliveryInfo: "Fast home delivery available! Customers can add items to their cart, fill in their Name, Mobile Number, Delivery Address, and Optional Email for instant digital receipt, and confirm via WhatsApp."
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
            unit: rec.fields.Unit || rec.fields.Weight || "",
            description: rec.fields.Description || "",
            image:
              (Array.isArray(rec.fields.Image) && rec.fields.Image[0]?.url) ||
              rec.fields.Image ||
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

function buildSmartLocalResponse(userMessage, menu, offers) {
  const q = (userMessage || "").toLowerCase();

  // 1. Store Timing / Address / Contact / About queries
  if (
    q.includes("time") ||
    q.includes("timing") ||
    q.includes("kab khul") ||
    q.includes("open") ||
    q.includes("close") ||
    q.includes("address") ||
    q.includes("kahan") ||
    q.includes("location") ||
    q.includes("number") ||
    q.includes("phone") ||
    q.includes("mobile") ||
    q.includes("contact") ||
    q.includes("dukan") ||
    q.includes("shop") ||
    q.includes("delivery")
  ) {
    return {
      reply:
        `🏪 **${STORE_PROFILE.name}** (${STORE_PROFILE.tagline}) की जानकारी:\n\n` +
        `⏰ **खुलने का समय:** ${STORE_PROFILE.timings}\n` +
        `📍 **पता (Address):** ${STORE_PROFILE.address}\n` +
        `📞 **मोबाइल / WhatsApp:** ${STORE_PROFILE.phone}\n` +
        `🚚 **होम डिलीवरी:** ${STORE_PROFILE.deliveryInfo}\n\n` +
        `नीचे हमारे कुछ सबसे लोकप्रिय आइटम्स दिए गए हैं, आप सीधे **+ Add to Cart** दबाकर ऑर्डर शुरू कर सकते हैं!`,
      recommendedItems: menu.slice(0, 3),
      suggestedCategory: "All",
      activeOffers: offers,
      quickFollowUps: ["🍬 आज की स्पेशल मिठाई दिखाओ", "🍕 ₹500 में पार्टी कॉम्बो", "🏷️ आज के ऑफ़र्स क्या हैं?"]
    };
  }

  // 2. Offers & Discount queries
  if (q.includes("offer") || q.includes("discount") || q.includes("coupon") || q.includes("promo") || q.includes("chhut") || q.includes("deal")) {
    const offerLines = offers
      .map((o) => `🎁 **${o.title}** — कोड: \`${o.code}\` (${o.discount})`)
      .join("\n");
    return {
      reply:
        `🎉 **KshirSagar के लाइव ऑफ़र्स और कूपन कोड्स:**\n\n${offerLines}\n\n` +
        `आप नीचे दिए गए बेस्टसेलर आइटम्स को कार्ट में जोड़कर चेकआउट के समय ये कूपन लगा सकते हैं:`,
      recommendedItems: menu.slice(0, 4),
      suggestedCategory: "All",
      activeOffers: offers,
      quickFollowUps: ["🍬 बेस्ट मिठाइयाँ दिखाओ", "🍕 पिज़्ज़ा और स्नैक्स दिखाओ", "📍 दुकान का पता और नंबर"]
    };
  }

  // 3. Budget / Party / Combo planning queries
  const budgetMatch = q.match(/(\d{3,4})/);
  if (budgetMatch || q.includes("budget") || q.includes("combo") || q.includes("party") || q.includes("birthday") || q.includes("puja")) {
    const budget = budgetMatch ? Number(budgetMatch[1]) : 500;
    const sorted = [...menu].sort((a, b) => a.price - b.price);
    const picked = [];
    let runningTotal = 0;

    for (const item of sorted) {
      if (runningTotal + item.price <= budget && picked.length < 4) {
        picked.push(item);
        runningTotal += item.price;
      }
    }
    const finalItems = picked.length > 0 ? picked : menu.slice(0, 3);
    const sum = finalItems.reduce((acc, i) => acc + i.price, 0);

    return {
      reply:
        `✨ आपके **₹${budget}** के बजट के हिसाब से मैंने **KshirSagar स्पेशल कॉम्बो** तैयार किया है (कुल अनुमानित बिल: **₹${sum}**):\n\n` +
        finalItems.map((i) => `• **${i.name}** — ₹${i.price}`).join("\n") +
        `\n\nआप नीचे दिए गए कार्ड्स पर **+ Add to Cart** बटन दबाकर इन्हें अपनी पसंद से कार्ट में जोड़ सकते हैं!`,
      recommendedItems: finalItems,
      suggestedCategory: "All",
      activeOffers: offers,
      quickFollowUps: ["🍬 सिर्फ़ मिठाइयाँ दिखाओ", "🍕 पिज़्ज़ा और स्नैक्स कॉम्बो", "🏷️ कोई डिस्काउंट कूपन है?"]
    };
  }

  // 4. Category specific queries (Pizza, Snacks, Namkeen, Sweets)
  if (q.includes("pizza") || q.includes("burger")) {
    const items = menu.filter((m) => m.category.toLowerCase().includes("pizza") || m.name.toLowerCase().includes("pizza") || m.name.toLowerCase().includes("burger"));
    return {
      reply: `🍕 **KshirSagar के ओवन-फ्रेश पिज़्ज़ा और बर्गर:**\nयहाँ हमारे सबसे ज़्यादा पसंद किए जाने वाले आइटम्स और उनके लाइव प्राइस हैं। जिसे कार्ट में डालना हो, उसके **+ Add to Cart** बटन पर क्लिक करें:`,
      recommendedItems: (items.length ? items : menu).slice(0, 4),
      suggestedCategory: "Pizza",
      activeOffers: offers,
      quickFollowUps: ["🍜 शाम के गरमा-गरम स्नैक्स", "🍬 मीठे में क्या है?", "🏷️ आज का ऑफ़र बताओ"]
    };
  }

  if (q.includes("snack") || q.includes("samosa") || q.includes("chowmein") || q.includes("dosa") || q.includes("chatpata") || q.includes("teekha")) {
    const items = menu.filter((m) => m.category.toLowerCase().includes("snack") || m.category.toLowerCase().includes("namkeen"));
    return {
      reply: `🥟 **गरमा-गरम स्नैक्स और चटपटे आइटम्स:**\nशाम की चाय या छोटी भूख के लिए हमारे लाइव मेन्यू से ये रहे सबसे बेहतरीन विकल्प:`,
      recommendedItems: (items.length ? items : menu).slice(0, 4),
      suggestedCategory: "Snacks",
      activeOffers: offers,
      quickFollowUps: ["🍕 पिज़्ज़ा दिखाओ", "🥜 क्रिस्पी नमकीन दिखाओ", "🍬 देसी घी की मिठाइयाँ"]
    };
  }

  if (q.includes("namkeen") || q.includes("bhujia") || q.includes("mixture")) {
    const items = menu.filter((m) => m.category.toLowerCase().includes("namkeen"));
    return {
      reply: `🥜 **KshirSagar की ताज़ा और कुरकुरी नमकीन:**\nचाय के साथ या सफ़र के लिए हमारी बेस्ट नमकीन और उनके लाइव रेट्स:`,
      recommendedItems: (items.length ? items : menu).slice(0, 4),
      suggestedCategory: "Namkeen",
      activeOffers: offers,
      quickFollowUps: ["🍬 स्पेशल मिठाइयाँ दिखाओ", "🥟 गरमा-गरम स्नैक्स", "📍 दुकान का समय और पता"]
    };
  }

  // Default: Sweets & Full Menu Showcase
  const sweetItems = menu.filter((m) => m.category.toLowerCase().includes("sweet"));
  return {
    reply:
      `🙏 **नमस्ते! KshirSagar AI Mitr में आपका स्वागत है!**\n\n` +
      `मैं आपके लिए लाइव मेन्यू रेट्स चेक कर सकता हूँ, पार्टी/त्योहार के बजट कॉम्बो बना सकता हूँ, और दुकान की पूरी जानकारी दे सकता हूँ।\n\n` +
      `यहाँ आज की हमारी सबसे लोकप्रिय मिठाइयाँ और डिशेज़ हैं—पसंद आने पर **+ Add to Cart** दबाएँ:`,
    recommendedItems: (sweetItems.length ? sweetItems : menu).slice(0, 4),
    suggestedCategory: "Sweets",
    activeOffers: offers,
    quickFollowUps: [
      "🍕 ₹500 में पार्टी कॉम्बो बताओ",
      "🏷️ आज के डिस्काउंट ऑफ़र्स क्या हैं?",
      "📍 दुकान कब खुलती है और कहाँ है?",
      "🥟 शाम के स्नैक्स दिखाओ"
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
    const chatHistory = Array.isArray(body.history) ? body.history.slice(-6) : [];
    const clientMenu = Array.isArray(body.clientMenu) && body.clientMenu.length > 0 ? body.clientMenu : null;

    // 1. Fetch Live Menu & Offers from Airtable (or use clientMenu if already loaded on frontend)
    const liveData = await fetchLiveAirtableData(
      process.env.AIRTABLE_BASE_ID,
      process.env.AIRTABLE_API_KEY
    );

    const activeMenu = clientMenu || liveData.menu;
    const activeOffers = liveData.offers;

    const geminiKey = process.env.GEMINI_API_KEY;

    // If GEMINI_API_KEY is not configured yet, return instant Smart Local Engine response
    if (!geminiKey) {
      const fallbackResult = buildSmartLocalResponse(userMessage, activeMenu, activeOffers);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          mode: "smart_local_engine",
          dataSource: liveData.source,
          storeProfile: STORE_PROFILE,
          ...fallbackResult
        })
      };
    }

    // 2. Prepare Grounded System Prompt with Live Airtable Menu, Offers & Store Profile
    const systemInstruction = `
You are "KshirSagar AI Mitr", the official intelligent concierge and food assistant for KshirSagar Sweets & Bakers.
Always respond warmly, concisely, and helpfully in the same language/style the user uses (Hindi, Hinglish, or English).

=== OFFICIAL STORE PROFILE ===
- Store Name: ${STORE_PROFILE.name} ("${STORE_PROFILE.tagline}")
- Opening & Closing Time: ${STORE_PROFILE.timings}
- Address / Location: ${STORE_PROFILE.address}
- Contact / Mobile / WhatsApp Number: ${STORE_PROFILE.phone}
- Official Website: ${STORE_PROFILE.website}
- Delivery Policy: ${STORE_PROFILE.deliveryInfo}

=== LIVE AIRTABLE MENU ITEMS (JSON) ===
${JSON.stringify(
  activeMenu.map((m) => ({
    id: m.id,
    name: m.name,
    category: m.category,
    price: m.price,
    unit: m.unit || "",
    image: m.image || "/sweet.jpg"
  }))
)}

=== LIVE AIRTABLE OFFERS & PROMO CODES ===
${JSON.stringify(activeOffers)}

=== YOUR RULES ===
1. You ONLY suggest and inform—never claim you have already placed an order or automatically modified the cart without the user clicking the "+ Add to Cart" button on the item cards below your message.
2. When the user asks about shop timings, address, mobile number, delivery, or about KshirSagar, give accurate details from OFFICIAL STORE PROFILE.
3. When the user asks for menu items, prices, party combos, or budget suggestions (e.g. "₹500 mein party combo"), calculate exact prices using LIVE AIRTABLE MENU ITEMS and list the item names and prices clearly.
4. Always return STRICT JSON matching this exact structure (no markdown code fences around the JSON):
{
  "reply": "Your friendly formatted response with emojis and bullet points",
  "recommendedItemNames": ["Exact Item Name 1", "Exact Item Name 2"],
  "suggestedCategory": "Sweets" | "Namkeen" | "Snacks" | "Pizza" | "All",
  "quickFollowUps": ["Short follow-up question 1", "Short follow-up question 2", "Short follow-up question 3"]
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
        parts: [{ text: userMessage || "Namaste! Dukan aur menu ke baare mein batao." }]
      }
    ];

    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemInstruction }] },
        contents,
        generationConfig: {
          temperature: 0.4,
          responseMimeType: "application/json"
        }
      })
    });

    if (!geminiRes.ok) {
      const fallbackResult = buildSmartLocalResponse(userMessage, activeMenu, activeOffers);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          mode: "smart_fallback",
          dataSource: liveData.source,
          storeProfile: STORE_PROFILE,
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
      parsed = { reply: rawText, recommendedItemNames: [], suggestedCategory: "All", quickFollowUps: [] };
    }

    // Match recommended item names back to full Airtable Menu objects (with images, prices, IDs)
    const names = Array.isArray(parsed.recommendedItemNames) ? parsed.recommendedItemNames : [];
    let matchedItems = activeMenu.filter((item) =>
      names.some(
        (n) =>
          item.name.toLowerCase().includes(String(n).toLowerCase()) ||
          String(n).toLowerCase().includes(item.name.toLowerCase())
      )
    );

    if (matchedItems.length === 0) {
      matchedItems = activeMenu.slice(0, 3);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        mode: "gemini_live_rag",
        dataSource: liveData.source,
        storeProfile: STORE_PROFILE,
        reply: parsed.reply || "यहाँ आपके लिए हमारे लाइव मेन्यू से कुछ बेहतरीन सुझाव हैं:",
        recommendedItems: matchedItems.slice(0, 4),
        suggestedCategory: parsed.suggestedCategory || "All",
        activeOffers,
        quickFollowUps:
          Array.isArray(parsed.quickFollowUps) && parsed.quickFollowUps.length > 0
            ? parsed.quickFollowUps.slice(0, 4)
            : ["🍬 बेस्ट मिठाइयाँ दिखाओ", "🍕 ₹500 में पार्टी कॉम्बो", "📍 दुकान का टाइम और पता"]
      })
    };
  } catch (err) {
    console.error("aiChat error:", err);
    const fallbackResult = buildSmartLocalResponse("", FALLBACK_MENU, FALLBACK_OFFERS);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        mode: "error_recovery",
        storeProfile: STORE_PROFILE,
        ...fallbackResult
      })
    };
  }
};