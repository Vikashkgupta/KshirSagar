export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { id, status } = JSON.parse(event.body);
    if (!id || !status) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing record ID or status" }) };
    }

    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_ORDERS_TABLE;
    const apiKey = process.env.AIRTABLE_TOKEN;

    if (!baseId || !apiKey || !tableName) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing Airtable environment variables" }) };
    }

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}/${id}`;
    const airtableStatusValue = status === "Completed" ? "Completed" : "Draft";

    const response = await fetch(airtableUrl, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        typecast: true,
        fields: {
          "Order Status": airtableStatusValue
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { statusCode: response.status, body: JSON.stringify({ error: "Failed to update Airtable", details: errorText }) };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, id: data.id, status: data.fields["Order Status"] })
    };

  } catch (error) {
    console.error("updateOrderStatus Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
};