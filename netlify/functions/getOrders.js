export const handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_ORDERS_TABLE;
    const apiKey = process.env.AIRTABLE_TOKEN;

    if (!baseId || !apiKey || !tableName) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing Airtable environment variables" }) };
    }

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

    const response = await fetch(airtableUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errText = await response.text();
      return { statusCode: response.status, body: JSON.stringify({ error: "Airtable fetch failed", details: errText }) };
    }

    const data = await response.json();

    const orders = (data.records || []).map((rec) => {
      const f = rec.fields || {};

      // Parse items from the exact "Order Items" multi-line text column
      const rawItems = (f["Order Items"] || "").split('\n').map(s => s.trim()).filter(Boolean);
      const parsedItems = rawItems.map(line => {
        const cleanLine = line.replace(/^[-🔸•*]\s*/, '');
        const match = cleanLine.match(/^(.*?)(?:\s*\((.*?)\))?\s*x\s*(\d+)$/i);
        if (match) {
          return { name: match[1].trim(), variant: match[2] ? match[2].trim() : '', qty: parseInt(match[3], 10) || 1 };
        }
        return { name: cleanLine, variant: '', qty: 1 };
      });

      // Airtable uses "Draft" for pending orders based on your table screenshot
      const rawStatus = f["Order Status"] || "Draft";
      const mappedStatus = rawStatus === "Completed" ? "Completed" : "Pending";

      const total = parseFloat(f["Order Total"]) || 0;
      const tip = parseFloat(f["Tip"]) || 0;

      return {
        id: rec.id,
        orderNumber: `#KS-${rec.id.slice(-4).toUpperCase()}`,
        createdAt: rec.createdTime,
        displayTime: f["Time"] || "",
        customerName: f["Customer Name"] || "Guest",
        customerMobile: String(f["Customer Mobile"] || ""),
        customerEmail: f["Customer Email"] || "",
        orderType: String(f["Order Type"] || "Delivery"),
        address: f["Address"] || "N/A",
        items: parsedItems,
        tip: tip,
        total: total,
        paymentStatus: "Unpaid", // Airtable column not required for basic display
        orderStatus: mappedStatus,
        notes: f["Cooking Notes"] && f["Cooking Notes"] !== "None" ? f["Cooking Notes"] : ""
      };
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orders })
    };

  } catch (error) {
    console.error("getOrders Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
};