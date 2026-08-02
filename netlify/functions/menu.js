const Airtable = require('airtable');

exports.handler = async (event, context) => {
  // 1. Check for required Environment Variables
  const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing Airtable Environment Variables.' }),
    };
  }

  try {
    // 2. Initialize Airtable
    const base = new Airtable({ apiKey: AIRTABLE_TOKEN }).base(AIRTABLE_BASE_ID);
    const records = await base(AIRTABLE_TABLE_NAME).select({
      // You can add sorting here if needed in the future
      // sort: [{ field: "category", direction: "asc" }]
    }).all();

    // 3. Map Airtable records to clean JSON
    const menuItems = records.map(record => ({
      name: record.get('name') || '',
      category: record.get('category') || 'Uncategorized',
      description: record.get('description') || '',
      price: record.get('price') || '',
      image: record.get('image') || '',
      available: record.get('available') !== false // defaults to true unless explicitly false
    })).filter(item => item.available && item.name); // Only return available items

    // 4. Return successful response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allows frontend to fetch without CORS issues
      },
      body: JSON.stringify(menuItems),
    };
  } catch (error) {
    console.error("Airtable Fetch Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch menu data from Airtable.' }),
    };
  }
};