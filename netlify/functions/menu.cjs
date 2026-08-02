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

    const menuItems = records.map(record => {
      // Checking both lowercase (from CSV) and uppercase (if Airtable auto-capitalized)
      return {
        name: record.get('name') || record.get('Name') || '',
        category: record.get('category') || record.get('Category') || 'Uncategorized',
        description: record.get('description') || record.get('Description') || '',
        price: record.get('price') || record.get('Price') || '',
        image: record.get('image') || record.get('Image') || '',
        available: record.get('available') !== false && record.get('Available') !== false
      };
    }).filter(item => item.available && item.name); // Filters out blank rows

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