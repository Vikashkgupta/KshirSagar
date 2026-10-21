export const handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_ORDERS_TABLE;
    const apiKey = process.env.AIRTABLE_TOKEN;

    if (!baseId || !apiKey || !tableName) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Missing Airtable environment variables'
        })
      };
    }

    const airtableUrl =
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };

    // Fetch ALL records using Airtable pagination.
    const records = [];
    let offset;

    do {
      const url = new URL(airtableUrl);
      url.searchParams.set('pageSize', '100');

      if (offset) {
        url.searchParams.set('offset', offset);
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Airtable fetch failed:', response.status, errText);

        return {
          statusCode: response.status,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            error: 'Airtable fetch failed'
          })
        };
      }

      const data = await response.json();
      records.push(...(data.records || []));
      offset = data.offset;
    } while (offset);

    const orders = records.map((rec) => {
      const f = rec.fields || {};
      const displayTimeStr = f['Time'] || '';

      // 👉 DATE & TIMEZONE FIX
      let correctDateStr = rec.createdTime;

      // Agar 'Time' field me manually date di gayi hai (jaise "20/09/2026, 17:50")
      if (displayTimeStr.includes('/')) {
        const datePart = displayTimeStr.split(',')[0].trim();
        const parts = datePart.split('/');
        if (parts.length === 3) {
          const day = parts[0].padStart(2, '0');
          const month = parts[1].padStart(2, '0');
          const year = parts[2];
          // PDF aur Frontend ko yahi date jayegi
          correctDateStr = `${year}-${month}-${day}T12:00:00.000Z`; 
        }
      } else {
        // Varna Airtable UTC time ko Indian Time (IST) me convert karein
        const utcDate = new Date(rec.createdTime);
        utcDate.setMinutes(utcDate.getMinutes() + 330);
        correctDateStr = utcDate.toISOString();
      }

      const rawItems = String(f['Order Items'] || '')
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean);

      const parsedItems = rawItems.map((line) => {
        // 👉 EMOJI & BACKSLASH FIX: Added \\ to remove \- garbage from PDF
        const cleanLine = line.replace(/^[-🔸•*\\]+\s*/, ''); 
        const match = cleanLine.match(
          /^(.*?)(?:\s*\((.*?)\))?\s*x\s*(\d+)$/i
        );

        if (match) {
          return {
            name: match[1].trim(),
            variant: match[2] ? match[2].trim() : '',
            qty: parseInt(match[3], 10) || 1
          };
        }

        return {
          name: cleanLine,
          variant: '',
          qty: 1
        };
      });

      const rawStatus = f['Order Status'] || 'Draft';
      let mappedStatus = 'Pending';

      if (rawStatus === 'Completed') {
        mappedStatus = 'Completed';
      } else if (rawStatus === 'Cancelled') {
        mappedStatus = 'Cancelled';
      }

      return {
        id: rec.id,
        orderNumber: `#KS-${rec.id.slice(-4).toUpperCase()}`,
        createdAt: correctDateStr, // 👉 Updated to send correct extracted date
        displayTime: displayTimeStr,
        customerName: f['Customer Name'] || 'Guest',
        customerMobile: String(f['Customer Mobile'] || ''),
        customerEmail: f['Customer Email'] || '',
        orderType: String(f['Order Type'] || 'Delivery'),
        address: f['Address'] || 'N/A',
        items: parsedItems,
        tip: parseFloat(f['Tip']) || 0,
        total: parseFloat(f['Order Total']) || 0,
        paymentStatus: 'Unpaid',
        orderStatus: mappedStatus,
        notes:
          f['Cooking Notes'] && f['Cooking Notes'] !== 'None'
            ? f['Cooking Notes']
            : ''
      };
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      },
      body: JSON.stringify({ orders })
    };
  } catch (error) {
    console.error('getOrders Error:', error);

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Internal Server Error'
      })
    };
  }
};