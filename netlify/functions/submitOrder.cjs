exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const payload = JSON.parse(event.body);
    
    // LINE 8 FIX: Safely extracting both 'instruction' and 'instructions'
    const { name, mobile, orderType, address, items, instruction, instructions, tip, total } = payload;

    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME; 
    const apiKey = process.env.AIRTABLE_TOKEN; 

    if (!baseId || !apiKey || !tableName) {
      console.error("Missing Airtable environment variables.");
      return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
    }

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

    const parsedTip = tip ? parseFloat(tip) : 0;
    const parsedTotal = total ? parseFloat(total) : 0;
    // Handling undefined cooking notes gracefully
    const cookingNotes = instruction || instructions || "None";

    const record = {
      fields: {
        "Time": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), // Fixed column name & IST Time
        "Order Status": "Draft",
        "Customer Name": name || "Guest",
        "Customer Mobile": mobile || "",
        "Order Type": orderType || "Delivery",
        "Address": address || "N/A",
        "Order Items": items || "",
        "Cooking Notes": cookingNotes,
        "Tip": parsedTip,
        "Order Total": parsedTotal
      }
    };

    console.log("Sending Payload to Airtable:", JSON.stringify({ records: [record] }));

    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ records: [record] })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Airtable insertion error:", errorText);
      return { statusCode: response.status, body: JSON.stringify({ error: "Failed to save to Airtable", details: errorText }) };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: data.records[0].id })
    };

  } catch (error) {
    console.error("Netlify Function Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
};