const Airtable = require('airtable');

exports.handler = async (event, context) => {
  const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing Airtable Environment Variables.' }),
    };
  }

  try {
    const base = new Airtable({ apiKey: AIRTABLE_TOKEN }).base(AIRTABLE_BASE_ID);
    const records = await base(AIRTABLE_TABLE_NAME).select().all();

    const menuItems = records.map(record => ({
      name: record.get('name') || '',
      category: record.get('category') || 'Uncategorized',
      description: record.get('description') || '',
      price: record.get('price') || '',
      image: record.get('image') || '',
      available: record.get('available') !== false
    })).filter(item => item.available && item.name);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', 
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