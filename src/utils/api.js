const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzT211Di3tn-Q7Afyv0VEX9wf9MrlKyWUu0znmMZuvTvTEnHdpurDcIB3MXSSAXwhDY/exec";

export const submitOrderWebhook = (payload) => {
  // Asynchronous "fire-and-forget" webhook POST for Google Sheets
  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  }).catch(err => console.error("Google Webhook error:", err));

  // POST to Netlify Function for Airtable
  fetch('/.netlify/functions/submitOrder', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      console.error("❌ Backend Error Details:", data);
    } else {
      console.log("✅ Order Saved Successfully:", data);
    }
  })
  .catch(err => console.error("Netlify Function network error:", err));
};

export const generateWhatsAppLink = (payload, cartItems) => {
  const { name, mobile, address, instructions, total, tip, orderType } = payload;
  
  const orderLines = cartItems.map(item => {
    const variantStr = item.variant ? ` (${item.variant})` : '';
    return `  - ${item.name}${variantStr} x${item.qty}`;
  }).join('\n');

  let msg = ` *KSHIRSAGAR* \n`;
  msg += `_Hamesha Kuch Naya._\n\n`;

  msg += `🚚 *ORDER TYPE*\n`;
  msg += `${orderType}\n\n`;

  msg += `👤 *CUSTOMER DETAILS*\n`;
  msg += `• Name   : ${name}\n`;
  msg += `• Mobile : ${mobile}\n`;

  if (orderType === "Delivery") {
    msg += `• Address: ${address}\n`;
  }

  msg += `\n🍽️ *ORDER ITEMS*\n`;
  msg += `${orderLines}\n`;

  if (instructions) {
    msg += `\n📝 *SPECIAL INSTRUCTIONS*\n`;
    msg += `${instructions}\n`;
  }

  if (tip > 0) {
    msg += `\n💖 *TIP*\n`;
    msg += `₹${tip}\n`;
  }

  msg += `\n🧾 *ESTIMATED TOTAL*\n`;
  msg += `₹${total}\n\n`;

  msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `*NEXT STEP:* Our restaurant staff will review your order and share the final price details, including any applicable delivery charges, shortly.`;

  return `https://wa.me/919931890824?text=${encodeURIComponent(msg)}`;
};