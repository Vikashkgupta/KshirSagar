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
      const fields = record.fields;

      // Yeh function CSV ke kisi bhi hidden character ko bypass kar dega
      const getField = (targetName) => {
        const key = Object.keys(fields).find(k => k.toLowerCase().includes(targetName.toLowerCase()));
        return key ? fields[key] : null;
      };

      let image = getField('image') || '';
      if (Array.isArray(image) && image.length > 0) {
        image = image[0].url; // Agar image Airtable mein attachment form mein hai
      }

      return {
        name: getField('name') || '',
        category: getField('category') || 'Uncategorized',
        description: getField('description') || '',
        price: getField('price') || '',
        image: image,
        available: true
      };
    }).filter(item => item.name && String(item.name).trim() !== ''); // Khali rows ko hatane ke liye

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
      body: JSON.stringify({ error: 'Failed to fetch menu data.', details: error.message }),
    };
  }
};