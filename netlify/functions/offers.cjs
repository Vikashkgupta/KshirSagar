const Airtable = require('airtable');

exports.handler = async (event, context) => {
  const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID } = process.env;

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing Airtable Environment Variables.' }),
    };
  }

  try {
    const base = new Airtable({ apiKey: AIRTABLE_TOKEN }).base(AIRTABLE_BASE_ID);
    
    // Fetch all records from the 'Offers' table
    const records = await base('Offers').select().all();

    // Get today's date and set time to midnight for accurate comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activeOffers = records.map(record => {
      const fields = record.fields;
      
      const getField = (targetName) => {
        const key = Object.keys(fields).find(k => k.toLowerCase().includes(targetName.toLowerCase()));
        return key ? fields[key] : null;
      };

      let image = getField('image');
      if (Array.isArray(image) && image.length > 0) {
        image = image[0].url;
      } else {
        image = '';
      }

      const startDateStr = getField('startDate');
      const endDateStr = getField('endDate');

      return {
        title: getField('title') || '',
        image: image,
        active: getField('active') === true || getField('active') === 'true',
        startDate: startDateStr ? new Date(startDateStr) : null,
        endDate: endDateStr ? new Date(endDateStr) : null,
      };
    }).filter(offer => {
      // Rule 1: Must be active and have an image
      if (!offer.active || !offer.image) return false;

      // Rule 2: today >= startDate
      if (offer.startDate && offer.startDate > today) return false;

      // Rule 3: today <= endDate
      if (offer.endDate) {
        const endCheck = new Date(offer.endDate);
        endCheck.setHours(23, 59, 59, 999); // Set to end of the day
        if (endCheck < today) return false;
      }

      return true;
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(activeOffers),
    };
  } catch (error) {
    console.error("Airtable Offers Fetch Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch offers.', details: error.message }),
    };
  }
};