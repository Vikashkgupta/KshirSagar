// File: netlify/functions/mairwaLandmarks.cjs
// Precision Hyper-Local Landmark Database for KshirSagar Sweets & Bakers
// Exact Store Pin: 26.2373274° N, 84.1508169° E | Plus Code: 65P2+W8 Mairwa, Bihar | Nai Bazar, Mairwa, Bihar 841239
// Total Landmarks Indexed: 968

const SHOP_LOCATION = {
  "name": "KshirSagar Sweets & Bakers (क्षीर सागर स्वीट्स एंड बेकर्स)",
  "address": "Nai Bazar, Mairwa, Bihar 841239",
  "plusCode": "65P2+W8 Mairwa, Bihar",
  "lat": 26.2373274,
  "lon": 84.1508169,
  "googleMapsShortUrl": "https://maps.app.goo.gl/gWg1gvrsDVqRSqjt9",
  "googleMapsPlaceUrl": "https://www.google.com/maps/place/Kshirsagar/@26.2373274,84.1508169,807m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399253b11832e8db:0x88f735f0ec8e1283!8m2!3d26.2373274!4d84.1508169!16s%2Fg%2F11dzd377b_"
};

const LANDMARKS = [
  {
    "id": "KS-001",
    "curated": true,
    "name": "Nai Bazar, Mairwa (नई बाज़ार, मैरवा)",
    "category": "Market / Shop Location",
    "lat": 26.23733,
    "lon": 84.15082,
    "straightKm": 0,
    "roadKm": 0,
    "timeMins": 1,
    "direction": "Center (दुकान यहीं स्थित है)",
    "zone": "Zone 1 — Mairwa Town Core (Instant Pickup / 15-min Delivery)",
    "aliases": [
      "nai bazar",
      "nayi bazar",
      "naya bazar",
      "nai bazaar",
      "नई बाजार",
      "नई बाज़ार",
      "नया बाजार",
      "65p2+w8"
    ]
  },
  {
    "id": "CEN-0-0",
    "name": "Ward No 1 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.2373,
    "lon": 84.15179,
    "straightKm": 0.1,
    "roadKm": 0.1,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 1 mairwa",
      "ward no 1 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "KS-011",
    "curated": true,
    "name": "State Bank of India (SBI) / Central Bank / PNB Mairwa",
    "category": "Bank",
    "lat": 26.2369,
    "lon": 84.1515,
    "straightKm": 0.08,
    "roadKm": 0.2,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (15-min Delivery)",
    "aliases": [
      "sbi",
      "state bank",
      "pnb",
      "punjab national bank",
      "central bank",
      "bank",
      "atm",
      "स्टेट बैंक",
      "बैंक",
      "पंजाब नेशनल बैंक"
    ]
  },
  {
    "id": "CEN-0-1",
    "name": "Ward No 2 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23825,
    "lon": 84.14977,
    "straightKm": 0.15,
    "roadKm": 0.2,
    "timeMins": 2,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 2 mairwa",
      "ward no 2 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-2",
    "name": "Ward No 3 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23559,
    "lon": 84.15095,
    "straightKm": 0.19,
    "roadKm": 0.2,
    "timeMins": 2,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 3 mairwa",
      "ward no 3 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "KS-002",
    "curated": true,
    "name": "Sabzi Mandi / Gola Bazar, Mairwa (सब्जी मंडी / गोला बाज़ार)",
    "category": "Market",
    "lat": 26.2362,
    "lon": 84.1518,
    "straightKm": 0.16,
    "roadKm": 0.3,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "mandi",
      "sabji mandi",
      "sabzi mandi",
      "vegitable market",
      "gola",
      "gola bazar",
      "मंडी",
      "सब्जी मंडी",
      "गोला बाजार",
      "गोला बाज़ार"
    ]
  },
  {
    "id": "KS-012",
    "curated": true,
    "name": "Post Office Mairwa (डाकघर मैरवा - 841239)",
    "category": "Post Office",
    "lat": 26.2365,
    "lon": 84.1522,
    "straightKm": 0.17,
    "roadKm": 0.3,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "post office",
      "dakghar",
      "841239",
      "डाकघर",
      "पोस्ट ऑफिस"
    ]
  },
  {
    "id": "CEN-0-3",
    "name": "Ward No 4 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23887,
    "lon": 84.15201,
    "straightKm": 0.21,
    "roadKm": 0.3,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 4 mairwa",
      "ward no 4 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-4",
    "name": "Ward No 5 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23691,
    "lon": 84.14862,
    "straightKm": 0.22,
    "roadKm": 0.3,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 5 mairwa",
      "ward no 5 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-5",
    "name": "Ward No 6 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.236,
    "lon": 84.15285,
    "straightKm": 0.25,
    "roadKm": 0.3,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 6 mairwa",
      "ward no 6 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "KS-003",
    "curated": true,
    "name": "Purani Bazar, Mairwa (पुरानी बाज़ार, मैरवा)",
    "category": "Market",
    "lat": 26.2385,
    "lon": 84.1525,
    "straightKm": 0.21,
    "roadKm": 0.4,
    "timeMins": 3,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "purani bazar",
      "purana bazar",
      "purani bazaar",
      "पुरानी बाजार",
      "पुरानी बाज़ार",
      "पुराना बाजार"
    ]
  },
  {
    "id": "KS-005",
    "curated": true,
    "name": "Majhauli Chowk / Guthani More, Mairwa (मझौली चौक / गुठनी मोड़)",
    "category": "Chauraha / Junction",
    "lat": 26.2358,
    "lon": 84.1492,
    "straightKm": 0.23,
    "roadKm": 0.4,
    "timeMins": 3,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "majhauli chowk",
      "majhauli road",
      "majhouli",
      "guthani more",
      "guthani mod",
      "guthni more",
      "मझौली चौक",
      "मझौली रोड",
      "गुठनी मोड़",
      "गुठनी मोड"
    ]
  },
  {
    "id": "CEN-0-6",
    "name": "Ward No 7 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23984,
    "lon": 84.15012,
    "straightKm": 0.29,
    "roadKm": 0.4,
    "timeMins": 2,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 7 mairwa",
      "ward no 7 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-7",
    "name": "Ward No 8 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23481,
    "lon": 84.14951,
    "straightKm": 0.31,
    "roadKm": 0.4,
    "timeMins": 2,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 8 mairwa",
      "ward no 8 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-8",
    "name": "Ward No 9 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23832,
    "lon": 84.1536,
    "straightKm": 0.3,
    "roadKm": 0.4,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 9 mairwa",
      "ward no 9 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-9",
    "name": "Ward No 10 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.2385,
    "lon": 84.1479,
    "straightKm": 0.32,
    "roadKm": 0.4,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 10 mairwa",
      "ward no 10 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-10",
    "name": "Ward No 11 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23432,
    "lon": 84.15219,
    "straightKm": 0.36,
    "roadKm": 0.4,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 11 mairwa",
      "ward no 11 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "KS-010",
    "curated": true,
    "name": "Adarsh Nagar / Rajendra Park, Mairwa (आदर्श नगर / राजेंद्र पार्क)",
    "category": "Colony / Locality",
    "lat": 26.235,
    "lon": 84.1535,
    "straightKm": 0.37,
    "roadKm": 0.5,
    "timeMins": 3,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "adarsh nagar",
      "rajendra park",
      "station chowk",
      "आदर्श नगर",
      "राजेंद्र पार्क"
    ]
  },
  {
    "id": "KS-013",
    "curated": true,
    "name": "Bus Stand / Auto Stand Mairwa (मैरवा बस/ऑटो स्टैंड)",
    "category": "Transport Stand",
    "lat": 26.2388,
    "lon": 84.1538,
    "straightKm": 0.34,
    "roadKm": 0.5,
    "timeMins": 3,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "bus stand",
      "auto stand",
      "tempo stand",
      "बस स्टैंड",
      "ऑटो स्टैंड",
      "टेम्पो स्टैंड"
    ]
  },
  {
    "id": "KS-014",
    "curated": true,
    "name": "Pranahi /inhoni / Mairwa Bypass Road (मैरवा बाईपास / मेन रोड)",
    "category": "Highway / Road",
    "lat": 26.2405,
    "lon": 84.1512,
    "straightKm": 0.36,
    "roadKm": 0.5,
    "timeMins": 3,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "bypass",
      "main road",
      "siwan road",
      "salempur road",
      "बाईपास",
      "मेन रोड",
      "सिवान रोड"
    ]
  },
  {
    "id": "CEN-0-11",
    "name": "Ward No 12 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24058,
    "lon": 84.15183,
    "straightKm": 0.38,
    "roadKm": 0.5,
    "timeMins": 2,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 12 mairwa",
      "ward no 12 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-12",
    "name": "Ward No 13 Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23551,
    "lon": 84.1477,
    "straightKm": 0.37,
    "roadKm": 0.5,
    "timeMins": 2,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "ward no 13 mairwa",
      "ward no 13 mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-13",
    "name": "Station Chowk Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.2365,
    "lon": 84.15443,
    "straightKm": 0.37,
    "roadKm": 0.5,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "station chowk mairwa",
      "station chowk mairwa mairwa town wards & markets",
      "station",
      "railway station",
      "relwe station",
      "teshan",
      "स्टेशन",
      "रेलवे स्टेशन",
      "टेशन",
      "bazar",
      "bazaar",
      "market"
    ]
  },
  {
    "id": "CEN-0-14",
    "name": "Malgodam Road Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24044,
    "lon": 84.14859,
    "straightKm": 0.41,
    "roadKm": 0.5,
    "timeMins": 2,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "malgodam road mairwa",
      "malgodam road mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-15",
    "name": "Dham Road Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23336,
    "lon": 84.15029,
    "straightKm": 0.44,
    "roadKm": 0.5,
    "timeMins": 2,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "dham road mairwa",
      "dham road mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mandir"
    ]
  },
  {
    "id": "CEN-0-16",
    "name": "Gola Bazar Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23994,
    "lon": 84.15393,
    "straightKm": 0.42,
    "roadKm": 0.5,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "gola bazar mairwa",
      "gola bajar mairwa",
      "gola bazar mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-17",
    "name": "Loha Patti Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23747,
    "lon": 84.14659,
    "straightKm": 0.42,
    "roadKm": 0.5,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "loha patti mairwa",
      "loha patti mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-1-2",
    "name": "Babhnauli (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23374,
    "lon": 84.15272,
    "straightKm": 0.44,
    "roadKm": 0.5,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "babhnauli",
      "vabhnauli",
      "babhnauli mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-004",
    "curated": true,
    "name": "Mairwa Railway Station (मैरवा रेलवे स्टेशन / मालगोदाम)",
    "category": "Railway Station",
    "lat": 26.2339,
    "lon": 84.1522,
    "straightKm": 0.41,
    "roadKm": 0.6,
    "timeMins": 4,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "station",
      "railway station",
      "relwe station",
      "mairwa station",
      "teshan",
      "malgodam",
      "station road",
      "स्टेशन",
      "रेलवे स्टेशन",
      "मैरवा स्टेशन",
      "टेशन",
      "मालगोदाम",
      "स्टेशन रोड"
    ]
  },
  {
    "id": "KS-007",
    "curated": true,
    "name": "Mairwa Block & Thana Road (मैरवा ब्लॉक एवं थाना रोड)",
    "category": "Government Office / Police Station",
    "lat": 26.2368,
    "lon": 84.1548,
    "straightKm": 0.4,
    "roadKm": 0.6,
    "timeMins": 4,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "block",
      "mairwa block",
      "block road",
      "thana",
      "mairwa thana",
      "police station",
      "anchal",
      "ब्लॉक",
      "मैरवा ब्लॉक",
      "थाना",
      "मैरवा थाना",
      "ब्लॉक रोड"
    ]
  },
  {
    "id": "CEN-0-18",
    "name": "Sonar Toli Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23425,
    "lon": 84.15387,
    "straightKm": 0.46,
    "roadKm": 0.6,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "sonar toli mairwa",
      "sonar toli mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-19",
    "name": "Kasera Toli Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24173,
    "lon": 84.1506,
    "straightKm": 0.49,
    "roadKm": 0.6,
    "timeMins": 2,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "kasera toli mairwa",
      "kasera toli mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-20",
    "name": "Telhatta Bazar Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23381,
    "lon": 84.14789,
    "straightKm": 0.49,
    "roadKm": 0.6,
    "timeMins": 2,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "telhatta bazar mairwa",
      "telhatta bajar mairwa",
      "telhatta bazar mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-21",
    "name": "Churi Bazar Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23792,
    "lon": 84.15541,
    "straightKm": 0.46,
    "roadKm": 0.6,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "churi bazar mairwa",
      "churi bajar mairwa",
      "churi bazar mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-22",
    "name": "Meena Bazar Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24002,
    "lon": 84.14689,
    "straightKm": 0.49,
    "roadKm": 0.6,
    "timeMins": 2,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "meena bazar mairwa",
      "meena bajar mairwa",
      "mina bazar mairwa",
      "meena bazar mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-0-25",
    "name": "Phal Mandi Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23576,
    "lon": 84.14598,
    "straightKm": 0.51,
    "roadKm": 0.6,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "phal mandi mairwa",
      "fal mandi mairwa",
      "phal mandi mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-26",
    "name": "Pranahi Tola Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23514,
    "lon": 84.15548,
    "straightKm": 0.53,
    "roadKm": 0.6,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "pranahi tola mairwa",
      "pranahi tola mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "KS-008",
    "curated": true,
    "name": "Referral Hospital Mairwa (रेफरल अस्पताल / सरकारी अस्पताल मैरवा)",
    "category": "Hospital",
    "lat": 26.2382,
    "lon": 84.1552,
    "straightKm": 0.45,
    "roadKm": 0.7,
    "timeMins": 4,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "hospital",
      "referral hospital",
      "sarkari hospital",
      "sarkari aspatal",
      "aspatal",
      "chc mairwa",
      "अस्पताल",
      "रेफरल अस्पताल",
      "सरकारी अस्पताल",
      "हॉस्पिटल"
    ]
  },
  {
    "id": "CEN-0-23",
    "name": "machhali Hatta Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23256,
    "lon": 84.15187,
    "straightKm": 0.54,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "machhali hatta mairwa",
      "machali hatta mairwa",
      "machhali hatta mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-24",
    "name": "Sabzi Mandi Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.2416,
    "lon": 84.15327,
    "straightKm": 0.53,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "sabzi mandi mairwa",
      "sabji mandi mairwa",
      "sabzi mandi mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-27",
    "name": "Inhoni Tola Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24214,
    "lon": 84.14877,
    "straightKm": 0.57,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "inhoni tola mairwa",
      "inhoni tola mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-28",
    "name": "chania Dih Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23227,
    "lon": 84.14899,
    "straightKm": 0.59,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "chania dih mairwa",
      "chania dih mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-29",
    "name": "Mairwa Nagar Panchayat Office (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23983,
    "lon": 84.15561,
    "straightKm": 0.55,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "mairwa nagar panchayat office",
      "mairwa nagar panchayat office mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-30",
    "name": "BDO Office Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23871,
    "lon": 84.14546,
    "straightKm": 0.56,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bdo office mairwa",
      "vdo office mairwa",
      "bdo office mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-31",
    "name": "CO Office Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23258,
    "lon": 84.15384,
    "straightKm": 0.61,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "co office mairwa",
      "co office mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-33",
    "name": "Sub Registrar Office Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23376,
    "lon": 84.14623,
    "straightKm": 0.61,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "sub registrar office mairwa",
      "sub registrar office mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-34",
    "name": "Electricity Office Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23681,
    "lon": 84.15665,
    "straightKm": 0.58,
    "roadKm": 0.7,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "electricity office mairwa",
      "electricity office mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "KS-006",
    "curated": true,
    "name": "Mairwa Dham / Baba Hariram Brahma Temple (मैरवा धाम / बाबा हरिराम ब्रह्म स्थान)",
    "category": "Temple / Shrine",
    "lat": 26.2398,
    "lon": 84.1565,
    "straightKm": 0.63,
    "roadKm": 0.8,
    "timeMins": 5,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (20-min Delivery)",
    "aliases": [
      "mairwa dham",
      "hariram baba",
      "hari ram brahma",
      "brahma sthan",
      "mandir",
      "baba hariram",
      "मैरवा धाम",
      "हरिराम बाबा",
      "हरिराम ब्रह्म स्थान",
      "ब्रह्म स्थान",
      "मंदिर"
    ]
  },
  {
    "id": "CEN-0-32",
    "name": "CDPO Office Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24292,
    "lon": 84.15177,
    "straightKm": 0.63,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "cdpo office mairwa",
      "cdpo office mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-35",
    "name": "BSNL Exchange Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24167,
    "lon": 84.14676,
    "straightKm": 0.63,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bsnl exchange mairwa",
      "vsnl exchange mairwa",
      "bsnl exchange mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-36",
    "name": "Dak Bangla Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23126,
    "lon": 84.15083,
    "straightKm": 0.67,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "dak bangla mairwa",
      "dak bangla mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-37",
    "name": "Inspection Bungalow Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24183,
    "lon": 84.15491,
    "straightKm": 0.65,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "inspection bungalow mairwa",
      "inspection bungalow mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-38",
    "name": "Gandhi Maidan Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23673,
    "lon": 84.14463,
    "straightKm": 0.62,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "gandhi maidan mairwa",
      "gandhi maidan mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-39",
    "name": "High School Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23351,
    "lon": 84.1558,
    "straightKm": 0.65,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "high school mairwa",
      "high schul mairwa",
      "high school mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-42",
    "name": "DAV Public School Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23902,
    "lon": 84.15708,
    "straightKm": 0.65,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "dav public school mairwa",
      "dav public schul mairwa",
      "dav public school mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-43",
    "name": "St Xavier School Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24031,
    "lon": 84.14494,
    "straightKm": 0.67,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "st xavier school mairwa",
      "st xavier schul mairwa",
      "st xavier school mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-46",
    "name": "Canara Bank Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23439,
    "lon": 84.14465,
    "straightKm": 0.7,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "canara bank mairwa",
      "canara bank mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-47",
    "name": "Uttar Bihar Gramin Bank Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23527,
    "lon": 84.15737,
    "straightKm": 0.69,
    "roadKm": 0.8,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "uttar bihar gramin bank mairwa",
      "uttar bihar gramin bank mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-40",
    "name": "Kanya High School Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24355,
    "lon": 84.14966,
    "straightKm": 0.7,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "kanya high school mairwa",
      "kanya high schul mairwa",
      "kanya high school mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-41",
    "name": "Middle School Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23186,
    "lon": 84.14737,
    "straightKm": 0.7,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "middle school mairwa",
      "middle schul mairwa",
      "middle school mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-44",
    "name": "Don Bosco School Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23106,
    "lon": 84.15311,
    "straightKm": 0.73,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "don bosco school mairwa",
      "don bosco schul mairwa",
      "don bosco school mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-45",
    "name": "Central Bank Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24353,
    "lon": 84.15334,
    "straightKm": 0.73,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "central bank mairwa",
      "central bank mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-48",
    "name": "Bank of Baroda Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24329,
    "lon": 84.14729,
    "straightKm": 0.75,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bank of baroda mairwa",
      "vank of baroda mairwa",
      "bank of baroda mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-50",
    "name": "SBI ATM Nai Bazar Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.2414,
    "lon": 84.15658,
    "straightKm": 0.73,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "sbi atm nai bazar mairwa",
      "sbi atm nai bajar mairwa",
      "sbi atm nai bazar mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-51",
    "name": "PNB ATM Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23819,
    "lon": 84.1437,
    "straightKm": 0.72,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "pnb atm mairwa",
      "pnb atm mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-52",
    "name": "Kali Mandir Nai Bazar Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.2318,
    "lon": 84.15548,
    "straightKm": 0.77,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "kali mandir nai bazar mairwa",
      "kali mandir nai bajar mairwa",
      "kali mandir nai bazar mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-55",
    "name": "Hanuman Mandir Station Road Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23768,
    "lon": 84.15822,
    "straightKm": 0.74,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "hanuman mandir station road mairwa",
      "hanuman mandir station road mairwa mairwa town wards & markets",
      "station",
      "railway station",
      "relwe station",
      "teshan",
      "स्टेशन",
      "रेलवे स्टेशन",
      "टेशन",
      "bazar",
      "bazaar",
      "market"
    ]
  },
  {
    "id": "CEN-0-59",
    "name": "Jharahi River Bridge Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23558,
    "lon": 84.14331,
    "straightKm": 0.77,
    "roadKm": 0.9,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "jharahi river bridge mairwa",
      "zharahi river bridge mairwa",
      "jharahi river bridge mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-49",
    "name": "HDFC ATM Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23044,
    "lon": 84.14933,
    "straightKm": 0.78,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "hdfc atm mairwa",
      "hdfc atm mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-53",
    "name": "Shiv Mandir Purani Bazar Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24459,
    "lon": 84.15107,
    "straightKm": 0.81,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "shiv mandir purani bazar mairwa",
      "shiv mandir purani bajar mairwa",
      "siv mandir purani bazar mairwa",
      "shiv mandir purani bazar mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-0-54",
    "name": "Durga Mandir Gola Bazar Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23206,
    "lon": 84.14563,
    "straightKm": 0.78,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "durga mandir gola bazar mairwa",
      "durga mandir gola bajar mairwa",
      "durga mandir gola bazar mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-56",
    "name": "Jama Masjid Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24207,
    "lon": 84.14503,
    "straightKm": 0.78,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "jama masjid mairwa",
      "zama maszid mairwa",
      "jama masjid mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-57",
    "name": "Idgah Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.22982,
    "lon": 84.15184,
    "straightKm": 0.84,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "idgah mairwa",
      "idgah mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-58",
    "name": "Chhath Ghat Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24358,
    "lon": 84.15512,
    "straightKm": 0.82,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "chhath ghat mairwa",
      "chath ghat mairwa",
      "chhath ghat mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-0-60",
    "name": "NH 227A Mairwa Bypass (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23348,
    "lon": 84.15754,
    "straightKm": 0.8,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "nh 227a mairwa bypass",
      "nh 227a mairwa bypass mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-61",
    "name": "Guthani More Chauraha Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.24473,
    "lon": 84.14839,
    "straightKm": 0.86,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "guthani more chauraha mairwa",
      "guthani more chauraha mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-63",
    "name": "Siwan More Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.2404,
    "lon": 84.15811,
    "straightKm": 0.8,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "siwan more mairwa",
      "siwan more mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-0-64",
    "name": "Salempur More Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23997,
    "lon": 84.14326,
    "straightKm": 0.81,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "salempur more mairwa",
      "salempur more mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa town wards & markets"
    ]
  },
  {
    "id": "CEN-1-0",
    "name": "Arazi Inglish (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.242,
    "lon": 84.15679,
    "straightKm": 0.79,
    "roadKm": 1,
    "timeMins": 2,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "arazi inglish",
      "araji inglish",
      "arazi inglis",
      "arazi inglish mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-0-62",
    "name": "Majhauli Chowk Chauraha Mairwa (Mairwa Town Wards & Markets)",
    "category": "Town Locality / Ward / Market",
    "lat": 26.23013,
    "lon": 84.14753,
    "straightKm": 0.86,
    "roadKm": 1.1,
    "timeMins": 2,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "majhauli chowk chauraha mairwa",
      "mazhauli chowk chauraha mairwa",
      "majhauli chowk chauraha mairwa mairwa town wards & markets",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-1-4",
    "name": "Baraso (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.24014,
    "lon": 84.14146,
    "straightKm": 0.98,
    "roadKm": 1.2,
    "timeMins": 3,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "baraso",
      "varaso",
      "baraso mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-7",
    "name": "Bedauli (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22998,
    "lon": 84.14576,
    "straightKm": 0.96,
    "roadKm": 1.2,
    "timeMins": 3,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bedauli",
      "vedauli",
      "bedauli mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-009",
    "curated": true,
    "name": "H.R. College, Mairwa (हरिराम कॉलेज, मैरवा)",
    "category": "College",
    "lat": 26.2415,
    "lon": 84.1585,
    "straightKm": 0.9,
    "roadKm": 1.3,
    "timeMins": 6,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (25-min Delivery)",
    "aliases": [
      "hr college",
      "h r college",
      "hariram college",
      "hari ram college",
      "college",
      "kolej",
      "हरिराम कॉलेज",
      "एच आर कॉलेज",
      "कॉलेज"
    ]
  },
  {
    "id": "CEN-1-1",
    "name": "Atwa (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.24657,
    "lon": 84.14701,
    "straightKm": 1.1,
    "roadKm": 1.3,
    "timeMins": 3,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "atwa",
      "atwa mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-5",
    "name": "Bargaon (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23571,
    "lon": 84.16189,
    "straightKm": 1.12,
    "roadKm": 1.4,
    "timeMins": 3,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bargaon",
      "vargaon",
      "bargaon mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-0",
    "name": "Akolhi (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.2373,
    "lon": 84.1628,
    "straightKm": 1.2,
    "roadKm": 1.5,
    "timeMins": 3,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "akolhi, mairwa",
      "akolhi",
      "akolhi mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841239-5",
    "name": "Bilaspur (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.23085,
    "lon": 84.16092,
    "straightKm": 1.24,
    "roadKm": 1.5,
    "timeMins": 3,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bilaspur, mairwa",
      "bilaspur",
      "vilaspur",
      "bilaspur mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-1-10",
    "name": "Bishunpura (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22762,
    "lon": 84.15873,
    "straightKm": 1.34,
    "roadKm": 1.6,
    "timeMins": 4,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bishunpura",
      "vishunpura",
      "bisunpura",
      "bishunpura mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-10",
    "name": "English (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.22642,
    "lon": 84.15587,
    "straightKm": 1.31,
    "roadKm": 1.6,
    "timeMins": 4,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "english, mairwa",
      "english",
      "englis",
      "english mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841239-15",
    "name": "Mairwa (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.2254,
    "lon": 84.14923,
    "straightKm": 1.34,
    "roadKm": 1.6,
    "timeMins": 4,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "mairwa, mairwa",
      "mairwa",
      "mairwa mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841239-20",
    "name": "Sohgra (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.22811,
    "lon": 84.14309,
    "straightKm": 1.28,
    "roadKm": 1.6,
    "timeMins": 4,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "sohgra, mairwa",
      "sohgra",
      "sohgra mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-1-12",
    "name": "Chakia (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23335,
    "lon": 84.13706,
    "straightKm": 1.44,
    "roadKm": 1.8,
    "timeMins": 4,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "chakia",
      "chakia mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-3",
    "name": "Bhalua (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.2496,
    "lon": 84.15783,
    "straightKm": 1.53,
    "roadKm": 1.9,
    "timeMins": 4,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bhalua",
      "vhalua",
      "bhalua mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-15",
    "name": "Dhamaur (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22301,
    "lon": 84.14954,
    "straightKm": 1.6,
    "roadKm": 1.9,
    "timeMins": 4,
    "direction": "दक्षिण (South)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "dhamaur",
      "dhamaur mairwa block",
      "mandir",
      "dham",
      "temple",
      "sthan",
      "मंदिर",
      "धाम",
      "स्थान",
      "mairwa block"
    ]
  },
  {
    "id": "KS-016",
    "curated": true,
    "name": "Chhotka Manjha (छोटका माँझा)",
    "category": "Village / Panchayat",
    "lat": 26.2485,
    "lon": 84.159,
    "straightKm": 1.48,
    "roadKm": 2,
    "timeMins": 6,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-min Delivery)",
    "aliases": [
      "chhotka manjha",
      "chotka manjha",
      "छोटका मांझा",
      "छोटका माँझा"
    ]
  },
  {
    "id": "KS-018",
    "curated": true,
    "name": "English Village, Mairwa (इंग्लिश गाँव)",
    "category": "Village / Panchayat",
    "lat": 26.2245,
    "lon": 84.145,
    "straightKm": 1.54,
    "roadKm": 2.1,
    "timeMins": 6,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-min Delivery)",
    "aliases": [
      "english",
      "inglish",
      "english gaon",
      "इंग्लिश",
      "इंग्लिश गांव"
    ]
  },
  {
    "id": "CEN-1-9",
    "name": "Bhopatpura (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.24778,
    "lon": 84.13801,
    "straightKm": 1.73,
    "roadKm": 2.1,
    "timeMins": 5,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "bhopatpura",
      "vhopatpura",
      "bhopatpura mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-8",
    "name": "Belaspur (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.24693,
    "lon": 84.16549,
    "straightKm": 1.81,
    "roadKm": 2.2,
    "timeMins": 5,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "belaspur",
      "velaspur",
      "belaspur mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-6",
    "name": "Barka Manjha (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.25423,
    "lon": 84.14871,
    "straightKm": 1.89,
    "roadKm": 2.3,
    "timeMins": 5,
    "direction": "उत्तर (North)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "barka manjha",
      "barka manzha",
      "varka manjha",
      "barka manjha mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-13",
    "name": "Chitmath (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23815,
    "lon": 84.1695,
    "straightKm": 1.87,
    "roadKm": 2.3,
    "timeMins": 5,
    "direction": "पूर्व (East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "chitmath",
      "chitmath mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-20",
    "name": "Dumar Chhapra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22516,
    "lon": 84.13794,
    "straightKm": 1.87,
    "roadKm": 2.3,
    "timeMins": 5,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "dumar chhapra",
      "dumar chapra",
      "dumar chhapra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-022",
    "curated": true,
    "name": "Lakshmipur / Laxmipur (लक्ष्मीपुर)",
    "category": "Village",
    "lat": 26.245,
    "lon": 84.135,
    "straightKm": 1.79,
    "roadKm": 2.4,
    "timeMins": 7,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-min Delivery)",
    "aliases": [
      "lakshmipur",
      "laxmipur",
      "lachhmipur",
      "लक्ष्मीपुर"
    ]
  },
  {
    "id": "CEN-1-17",
    "name": "Dharni Chhapra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.24284,
    "lon": 84.13171,
    "straightKm": 2,
    "roadKm": 2.4,
    "timeMins": 5,
    "direction": "पश्चिम (West)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "dharni chhapra",
      "dharni chapra",
      "dharni chhapra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-18",
    "name": "Dhusa (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22728,
    "lon": 84.16679,
    "straightKm": 1.95,
    "roadKm": 2.4,
    "timeMins": 5,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 1 — Mairwa Town Core (Fast 20-30 min Delivery)",
    "aliases": [
      "dhusa",
      "dhusa mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-015",
    "curated": true,
    "name": "Barka Manjha (बड़का माँझा)",
    "category": "Village / Panchayat",
    "lat": 26.2512,
    "lon": 84.1625,
    "straightKm": 1.93,
    "roadKm": 2.5,
    "timeMins": 7,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-40 min Delivery)",
    "aliases": [
      "barka manjha",
      "badka manjha",
      "baraka manjha",
      "manjha",
      "बड़का मांझा",
      "बड़का माँझा",
      "मांझा"
    ]
  },
  {
    "id": "KS-019",
    "curated": true,
    "name": "Kabirpur (कबीरपुर)",
    "category": "Village / Panchayat",
    "lat": 26.228,
    "lon": 84.168,
    "straightKm": 2,
    "roadKm": 2.6,
    "timeMins": 8,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-40 min Delivery)",
    "aliases": [
      "kabirpur",
      "kabeerpur",
      "कबीरपुर"
    ]
  },
  {
    "id": "KS-023",
    "curated": true,
    "name": "karangania / Karjania (करजनिया)",
    "category": "Village",
    "lat": 26.231,
    "lon": 84.132,
    "straightKm": 2,
    "roadKm": 2.6,
    "timeMins": 8,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-40 min Delivery)",
    "aliases": [
      "karjania",
      "karjaniya",
      "करजनिया"
    ]
  },
  {
    "id": "CEN-1-23",
    "name": "Gopal Chak (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.21912,
    "lon": 84.15715,
    "straightKm": 2.12,
    "roadKm": 2.6,
    "timeMins": 6,
    "direction": "दक्षिण (South)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "gopal chak",
      "gopal chak mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-020",
    "curated": true,
    "name": "Babhnauli (बभनौली)",
    "category": "Village / Panchayat",
    "lat": 26.219,
    "lon": 84.155,
    "straightKm": 2.08,
    "roadKm": 2.7,
    "timeMins": 8,
    "direction": "दक्षिण (South)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-40 min Delivery)",
    "aliases": [
      "babhnauli",
      "babhanouli",
      "vabhnauli",
      "बभनौली"
    ]
  },
  {
    "id": "CEN-1-25",
    "name": "Kabirpur (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23458,
    "lon": 84.12874,
    "straightKm": 2.22,
    "roadKm": 2.7,
    "timeMins": 6,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "kabirpur",
      "kabirpur mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-017",
    "curated": true,
    "name": "Sewtapur (सेवतापुर)",
    "category": "Village / Panchayat",
    "lat": 26.256,
    "lon": 84.148,
    "straightKm": 2.09,
    "roadKm": 2.8,
    "timeMins": 8,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-40 min Delivery)",
    "aliases": [
      "sewtapur",
      "sewatapur",
      "shewtapur",
      "सेवतापुर"
    ]
  },
  {
    "id": "CEN-1-28",
    "name": "Karjania (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.21774,
    "lon": 84.14327,
    "straightKm": 2.3,
    "roadKm": 2.8,
    "timeMins": 6,
    "direction": "दक्षिण (South)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "karjania",
      "karzania",
      "karjania mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-11",
    "name": "Chakri (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.25782,
    "lon": 84.15696,
    "straightKm": 2.36,
    "roadKm": 2.9,
    "timeMins": 6,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "chakri",
      "chakri mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-14",
    "name": "Chup Chupwa (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.25717,
    "lon": 84.14134,
    "straightKm": 2.4,
    "roadKm": 2.9,
    "timeMins": 6,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "chup chupwa",
      "chup chupwa mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-21",
    "name": "Talli (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.24043,
    "lon": 84.17459,
    "straightKm": 2.4,
    "roadKm": 2.9,
    "timeMins": 6,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "talli, mairwa",
      "talli",
      "talli mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-1-21",
    "name": "English (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.24499,
    "lon": 84.17426,
    "straightKm": 2.49,
    "roadKm": 3,
    "timeMins": 7,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "english",
      "englis",
      "english mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-26",
    "name": "Kabita (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23156,
    "lon": 84.17458,
    "straightKm": 2.46,
    "roadKm": 3,
    "timeMins": 7,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "kabita",
      "kabita mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-33",
    "name": "Lachhimipur (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22491,
    "lon": 84.12993,
    "straightKm": 2.5,
    "roadKm": 3,
    "timeMins": 7,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "lachhimipur",
      "lachimipur",
      "lachhimipur mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-16",
    "name": "Dharahra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.25472,
    "lon": 84.16709,
    "straightKm": 2.53,
    "roadKm": 3.1,
    "timeMins": 7,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "dharahra",
      "dharahra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-31",
    "name": "Kuldipa (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.21922,
    "lon": 84.16664,
    "straightKm": 2.56,
    "roadKm": 3.1,
    "timeMins": 7,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "kuldipa",
      "kuldipa mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-1",
    "name": "Anugrhnagar (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.25351,
    "lon": 84.13311,
    "straightKm": 2.52,
    "roadKm": 3.1,
    "timeMins": 7,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "anugrhnagar, mairwa",
      "anugrhnagar",
      "anugrhnagar mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841239-16",
    "name": "Punak (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.25273,
    "lon": 84.16919,
    "straightKm": 2.51,
    "roadKm": 3.1,
    "timeMins": 7,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "punak, mairwa",
      "punak",
      "punak mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-1-22",
    "name": "Ghansham Mathia (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.25511,
    "lon": 84.13315,
    "straightKm": 2.65,
    "roadKm": 3.2,
    "timeMins": 7,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "ghansham mathia",
      "ghansam mathia",
      "ghansham mathia mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-6",
    "name": "Bishunpura Bazar (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.26048,
    "lon": 84.14459,
    "straightKm": 2.65,
    "roadKm": 3.2,
    "timeMins": 7,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "bishunpura bazar, mairwa",
      "bishunpura bazar",
      "bishunpura bajar",
      "vishunpura bazar",
      "bisunpura bazar",
      "bishunpura bazar mairwa",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार"
    ]
  },
  {
    "id": "PIN-841239-11",
    "name": "Jamuaon (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.26019,
    "lon": 84.15802,
    "straightKm": 2.64,
    "roadKm": 3.2,
    "timeMins": 7,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "jamuaon, mairwa",
      "jamuaon",
      "zamuaon",
      "jamuaon mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-1-36",
    "name": "Muriyari (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.21288,
    "lon": 84.15214,
    "straightKm": 2.72,
    "roadKm": 3.3,
    "timeMins": 7,
    "direction": "दक्षिण (South)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "muriyari",
      "muriyari mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-024",
    "curated": true,
    "name": "Siswa / Siswan (सिसवा)",
    "category": "Village",
    "lat": 26.215,
    "lon": 84.142,
    "straightKm": 2.63,
    "roadKm": 3.4,
    "timeMins": 9,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (35-45 min Delivery)",
    "aliases": [
      "siswa",
      "siswan",
      "सिसवा"
    ]
  },
  {
    "id": "KS-027",
    "curated": true,
    "name": "Dharhara / Pipra (धरहरा / पिपरा)",
    "category": "Village",
    "lat": 26.254,
    "lon": 84.132,
    "straightKm": 2.63,
    "roadKm": 3.4,
    "timeMins": 9,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring",
    "aliases": [
      "dharhara",
      "pipra",
      "धरहरा",
      "पिपरा"
    ]
  },
  {
    "id": "CEN-1-30",
    "name": "Kolhuwa Dargah (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.2488,
    "lon": 84.12623,
    "straightKm": 2.76,
    "roadKm": 3.4,
    "timeMins": 7,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "kolhuwa dargah",
      "kolhuwa dargah mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-026",
    "curated": true,
    "name": "Kewal /inhouli / Pariaula (केवल / परियौला)",
    "category": "Village",
    "lat": 26.249,
    "lon": 84.175,
    "straightKm": 2.74,
    "roadKm": 3.5,
    "timeMins": 9,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring",
    "aliases": [
      "kewal",
      "pariaula",
      "pariyaula",
      "केवल",
      "परियौला"
    ]
  },
  {
    "id": "CEN-1-19",
    "name": "Domdih (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.26339,
    "lon": 84.15101,
    "straightKm": 2.9,
    "roadKm": 3.5,
    "timeMins": 8,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "domdih",
      "domdih mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-38",
    "name": "Nawada (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23924,
    "lon": 84.12223,
    "straightKm": 2.86,
    "roadKm": 3.5,
    "timeMins": 8,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "nawada",
      "nawada mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-41",
    "name": "Patkhauli (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.21574,
    "lon": 84.13547,
    "straightKm": 2.85,
    "roadKm": 3.5,
    "timeMins": 8,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "patkhauli",
      "patkhauli mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-34",
    "name": "Lashkari Chhapra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23966,
    "lon": 84.18023,
    "straightKm": 2.94,
    "roadKm": 3.6,
    "timeMins": 8,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "lashkari chhapra",
      "laskari chhapra",
      "lashkari chapra",
      "lashkari chhapra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-39",
    "name": "Parasia (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22369,
    "lon": 84.17612,
    "straightKm": 2.94,
    "roadKm": 3.6,
    "timeMins": 8,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "parasia",
      "parasia mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-29",
    "name": "Khap Siswa (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.2542,
    "lon": 84.17521,
    "straightKm": 3.07,
    "roadKm": 3.7,
    "timeMins": 8,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "khap siswa",
      "khap siswa mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-46",
    "name": "Seni Chhapra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22795,
    "lon": 84.12234,
    "straightKm": 3.03,
    "roadKm": 3.7,
    "timeMins": 8,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "seni chhapra",
      "seni chapra",
      "seni chhapra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "KS-021",
    "curated": true,
    "name": "Muriyari (मुड़ियारी)",
    "category": "Village / Panchayat",
    "lat": 26.262,
    "lon": 84.161,
    "straightKm": 2.92,
    "roadKm": 3.8,
    "timeMins": 10,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (35-45 min Delivery)",
    "aliases": [
      "muriyari",
      "mudiari",
      "mudiyari",
      "मुड़ियारी",
      "मुडियारी"
    ]
  },
  {
    "id": "CEN-1-24",
    "name": "Harnathpur (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.26277,
    "lon": 84.1639,
    "straightKm": 3.12,
    "roadKm": 3.8,
    "timeMins": 8,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "harnathpur",
      "harnathpur mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-44",
    "name": "Pipra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.21189,
    "lon": 84.16316,
    "straightKm": 3.09,
    "roadKm": 3.8,
    "timeMins": 8,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "pipra",
      "pipra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-27",
    "name": "Kaithaulia (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.26537,
    "lon": 84.14222,
    "straightKm": 3.23,
    "roadKm": 3.9,
    "timeMins": 9,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "kaithaulia",
      "kaithaulia mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-49",
    "name": "Siswa Buzurg (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.2089,
    "lon": 84.14489,
    "straightKm": 3.22,
    "roadKm": 3.9,
    "timeMins": 9,
    "direction": "दक्षिण (South)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "siswa buzurg",
      "siswa bujurg",
      "siswa buzurg mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-54",
    "name": "Ugarsen Chhapra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.21672,
    "lon": 84.12707,
    "straightKm": 3.3,
    "roadKm": 4,
    "timeMins": 9,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "ugarsen chhapra",
      "ugarsen chapra",
      "ugarsen chhapra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-35",
    "name": "Mathia (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.26309,
    "lon": 84.1325,
    "straightKm": 3.4,
    "roadKm": 4.1,
    "timeMins": 9,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "mathia",
      "mathia mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-47",
    "name": "Sewtapur (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23222,
    "lon": 84.1837,
    "straightKm": 3.33,
    "roadKm": 4.1,
    "timeMins": 9,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "sewtapur",
      "sewtapur mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-52",
    "name": "Sumeri Chhapra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.21546,
    "lon": 84.17459,
    "straightKm": 3.4,
    "roadKm": 4.1,
    "timeMins": 9,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "sumeri chhapra",
      "sumeri chapra",
      "sumeri chhapra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-42",
    "name": "Pharchhua (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.25029,
    "lon": 84.18228,
    "straightKm": 3.45,
    "roadKm": 4.2,
    "timeMins": 9,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "pharchhua",
      "farchhua",
      "pharchua",
      "pharchhua mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-43",
    "name": "Pharchhuhi (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.2565,
    "lon": 84.12375,
    "straightKm": 3.44,
    "roadKm": 4.2,
    "timeMins": 9,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "pharchhuhi",
      "farchhuhi",
      "pharchuhi",
      "pharchhuhi mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-51",
    "name": "Sitalpura (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.24628,
    "lon": 84.11774,
    "straightKm": 3.45,
    "roadKm": 4.2,
    "timeMins": 9,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "sitalpura",
      "sitalpura mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841245-4",
    "name": "Bharuli (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.21958,
    "lon": 84.17891,
    "straightKm": 3.43,
    "roadKm": 4.2,
    "timeMins": 9,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "bharuli, ziradei",
      "bharuli",
      "vharuli",
      "bharuli ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-1-57",
    "name": "Babhnauli Bazar (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.20589,
    "lon": 84.15703,
    "straightKm": 3.55,
    "roadKm": 4.3,
    "timeMins": 9,
    "direction": "दक्षिण (South)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "babhnauli bazar",
      "babhnauli bajar",
      "vabhnauli bazar",
      "babhnauli bazar mairwa block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-1-59",
    "name": "Muriyari Bazar (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.23369,
    "lon": 84.11586,
    "straightKm": 3.51,
    "roadKm": 4.3,
    "timeMins": 9,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "muriyari bazar",
      "muriyari bajar",
      "muriyari bazar mairwa block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-1-32",
    "name": "Labhri (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.2691,
    "lon": 84.15666,
    "straightKm": 3.58,
    "roadKm": 4.4,
    "timeMins": 10,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "labhri",
      "labhri mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-37",
    "name": "Narahiya (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.26386,
    "lon": 84.17183,
    "straightKm": 3.62,
    "roadKm": 4.4,
    "timeMins": 10,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "narahiya",
      "narahiya mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-62",
    "name": "Karjania More (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.20743,
    "lon": 84.13622,
    "straightKm": 3.63,
    "roadKm": 4.4,
    "timeMins": 10,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "karjania more",
      "karzania more",
      "karjania more mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-17",
    "name": "Sarhrwa (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.23887,
    "lon": 84.11483,
    "straightKm": 3.59,
    "roadKm": 4.4,
    "timeMins": 10,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "sarhrwa, mairwa",
      "sarhrwa",
      "sarhrwa mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841245-9",
    "name": "Mania (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.25296,
    "lon": 84.18257,
    "straightKm": 3.61,
    "roadKm": 4.4,
    "timeMins": 10,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "mania, ziradei",
      "mania",
      "mania ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-1-60",
    "name": "Sewtapur More (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.22356,
    "lon": 84.18453,
    "straightKm": 3.69,
    "roadKm": 4.5,
    "timeMins": 10,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "sewtapur more",
      "sewtapur more mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-12",
    "name": "Krom (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.2193,
    "lon": 84.11962,
    "straightKm": 3.7,
    "roadKm": 4.5,
    "timeMins": 10,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "krom, mairwa",
      "krom",
      "krom mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-1-55",
    "name": "Barka Manjha Paschim Tola (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.24382,
    "lon": 84.18778,
    "straightKm": 3.76,
    "roadKm": 4.6,
    "timeMins": 10,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "barka manjha paschim tola",
      "barka manzha paschim tola",
      "varka manjha paschim tola",
      "barka manjha paschim tola mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-40",
    "name": "Parasia Khurd (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.27216,
    "lon": 84.14652,
    "straightKm": 3.9,
    "roadKm": 4.8,
    "timeMins": 11,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "parasia khurd",
      "parasia khurd mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-50",
    "name": "Siswa Khurd (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.2618,
    "lon": 84.17988,
    "straightKm": 3.98,
    "roadKm": 4.8,
    "timeMins": 11,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "siswa khurd",
      "siswa khurd mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-7",
    "name": "Bishwar (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.20537,
    "lon": 84.13418,
    "straightKm": 3.92,
    "roadKm": 4.8,
    "timeMins": 11,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "bishwar, mairwa",
      "bishwar",
      "vishwar",
      "biswar",
      "bishwar mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-1-48",
    "name": "Sirsia (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.27092,
    "lon": 84.13506,
    "straightKm": 4.05,
    "roadKm": 4.9,
    "timeMins": 11,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "sirsia",
      "sirsia mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-2",
    "name": "Bargaon (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.20144,
    "lon": 84.15394,
    "straightKm": 4,
    "roadKm": 4.9,
    "timeMins": 11,
    "direction": "दक्षिण (South)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "bargaon, mairwa",
      "bargaon",
      "vargaon",
      "bargaon mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-1-45",
    "name": "Semra (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.27207,
    "lon": 84.16425,
    "straightKm": 4.09,
    "roadKm": 5,
    "timeMins": 11,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "semra",
      "semra mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-56",
    "name": "Barka Manjha Purab Tola (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.26503,
    "lon": 84.12414,
    "straightKm": 4.07,
    "roadKm": 5,
    "timeMins": 11,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "barka manjha purab tola",
      "barka manzha purab tola",
      "varka manjha purab tola",
      "barka manjha purab tola mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-2-85",
    "name": "Jamapur Chatti (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23964,
    "lon": 84.19208,
    "straightKm": 4.12,
    "roadKm": 5,
    "timeMins": 11,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "jamapur chatti",
      "zamapur chatti",
      "jamapur chatti ziradei block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "KS-030",
    "curated": true,
    "name": "Karchhui Railway Halt / Village (करछुई)",
    "category": "Railway Halt / Village",
    "lat": 26.232,
    "lon": 84.192,
    "straightKm": 4.15,
    "roadKm": 5.2,
    "timeMins": 11,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Ring",
    "aliases": [
      "karchhui",
      "karchui",
      "करछुई",
      "करछुई हॉल्ट"
    ]
  },
  {
    "id": "CEN-1-53",
    "name": "Surad Sahi (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.27716,
    "lon": 84.15329,
    "straightKm": 4.44,
    "roadKm": 5.4,
    "timeMins": 12,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "surad sahi",
      "surad sahi mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-1-58",
    "name": "Kabirpur Chatti (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.27228,
    "lon": 84.17286,
    "straightKm": 4.47,
    "roadKm": 5.4,
    "timeMins": 12,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "kabirpur chatti",
      "kabirpur chatti mairwa block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mairwa block"
    ]
  },
  {
    "id": "CEN-2-72",
    "name": "Shankarpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22959,
    "lon": 84.19477,
    "straightKm": 4.47,
    "roadKm": 5.5,
    "timeMins": 12,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "shankarpur",
      "sankarpur",
      "shankarpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-1-61",
    "name": "English More (Mairwa Block)",
    "category": "Village (Mairwa Block)",
    "lat": 26.27786,
    "lon": 84.14037,
    "straightKm": 4.63,
    "roadKm": 5.6,
    "timeMins": 12,
    "direction": "उत्तर (North)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "english more",
      "englis more",
      "english more mairwa block",
      "mairwa block"
    ]
  },
  {
    "id": "PIN-841239-8",
    "name": "Bkulari (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.25372,
    "lon": 84.19591,
    "straightKm": 4.85,
    "roadKm": 5.9,
    "timeMins": 13,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "bkulari, mairwa",
      "bkulari",
      "vkulari",
      "bkulari mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841239-13",
    "name": "Langarpura (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.22691,
    "lon": 84.19766,
    "straightKm": 4.81,
    "roadKm": 5.9,
    "timeMins": 13,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "langarpura, mairwa",
      "langarpura",
      "langarpura mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-2-64",
    "name": "Raichanda (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.24363,
    "lon": 84.19955,
    "straightKm": 4.91,
    "roadKm": 6,
    "timeMins": 13,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "raichanda",
      "raichanda ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-9-26",
    "name": "Malgodam Road Bhatpar Rani (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.23647,
    "lon": 84.10159,
    "straightKm": 4.91,
    "roadKm": 6,
    "timeMins": 13,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "malgodam road bhatpar rani",
      "malgodam road bhatpar rani bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "CEN-4-41",
    "name": "Shikuara (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.27638,
    "lon": 84.17558,
    "straightKm": 4.99,
    "roadKm": 6.1,
    "timeMins": 13,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "shikuara",
      "sikuara",
      "shikuara nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-2-51",
    "name": "Misrauli Lakheraj (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23452,
    "lon": 84.2018,
    "straightKm": 5.09,
    "roadKm": 6.2,
    "timeMins": 14,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "misrauli lakheraj",
      "misrauli lakheraz",
      "misrauli lakheraj ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-841239-18",
    "name": "Sematar (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.20336,
    "lon": 84.18474,
    "straightKm": 5.07,
    "roadKm": 6.2,
    "timeMins": 14,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "sematar, mairwa",
      "sematar",
      "sematar mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-2-59",
    "name": "Parasurampur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22122,
    "lon": 84.1998,
    "straightKm": 5.2,
    "roadKm": 6.3,
    "timeMins": 14,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "parasurampur",
      "parasurampur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-80",
    "name": "Don Bazar Ziradei (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21397,
    "lon": 84.19538,
    "straightKm": 5.15,
    "roadKm": 6.3,
    "timeMins": 14,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "don bazar ziradei",
      "don bajar jiradei",
      "don bazar ziradei ziradei block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "PIN-841239-3",
    "name": "Belaur (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.27538,
    "lon": 84.18002,
    "straightKm": 5.14,
    "roadKm": 6.3,
    "timeMins": 14,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "belaur, mairwa",
      "belaur",
      "velaur",
      "belaur mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841245-17",
    "name": "Sisahni (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.23157,
    "lon": 84.20203,
    "straightKm": 5.15,
    "roadKm": 6.3,
    "timeMins": 14,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "sisahni, ziradei",
      "sisahni",
      "sisahni ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-2-77",
    "name": "Surwal (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.25362,
    "lon": 84.20007,
    "straightKm": 5.24,
    "roadKm": 6.4,
    "timeMins": 14,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "surwal",
      "surwal ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-274703-2",
    "name": "Bhawani Chapar (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.24214,
    "lon": 84.09814,
    "straightKm": 5.28,
    "roadKm": 6.4,
    "timeMins": 14,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "bhawani chapar, pratappur",
      "bhawani chapar",
      "vhawani chapar",
      "bhawani chapar pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "PIN-841240-3",
    "name": "Tarwaparsa (Don, PIN 841240)",
    "category": "Post Office / Village",
    "lat": 26.18808,
    "lon": 84.13922,
    "straightKm": 5.6,
    "roadKm": 6.8,
    "timeMins": 15,
    "direction": "दक्षिण (South)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "tarwaparsa, don",
      "tarwaparsa",
      "tarwaparsa don",
      "don",
      "841240"
    ]
  },
  {
    "id": "PIN-274704-0",
    "name": "Balua (Bankata, PIN 274704)",
    "category": "Post Office / Village",
    "lat": 26.252,
    "lon": 84.097,
    "straightKm": 5.61,
    "roadKm": 6.8,
    "timeMins": 15,
    "direction": "पश्चिम (West)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "balua, bankata",
      "balua",
      "valua",
      "balua bankata",
      "bankata",
      "274704"
    ]
  },
  {
    "id": "CEN-2-38",
    "name": "Hasanpurwa (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22709,
    "lon": 84.20654,
    "straightKm": 5.67,
    "roadKm": 6.9,
    "timeMins": 15,
    "direction": "पूर्व (East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "hasanpurwa",
      "hasanpurwa ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-841243-7",
    "name": "Khalwa (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.28007,
    "lon": 84.18138,
    "straightKm": 5.65,
    "roadKm": 6.9,
    "timeMins": 15,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 2 — Nearby Mairwa Panchayat Ring (30-45 min Delivery)",
    "aliases": [
      "khalwa, nautan",
      "khalwa",
      "khalwa nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-2-43",
    "name": "Kakarghatti (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.24533,
    "lon": 84.20814,
    "straightKm": 5.79,
    "roadKm": 7.1,
    "timeMins": 16,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kakarghatti",
      "kakarghatti ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-28",
    "name": "Nautan Bazar (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.27909,
    "lon": 84.18616,
    "straightKm": 5.83,
    "roadKm": 7.1,
    "timeMins": 16,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "nautan bazar",
      "nautan bajar",
      "nautan bazar nautan block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-9-21",
    "name": "Parasia Bankata (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.26418,
    "lon": 84.10092,
    "straightKm": 5.8,
    "roadKm": 7.1,
    "timeMins": 16,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "parasia bankata",
      "parasia bankata bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-274703-5",
    "name": "Khurwasia (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.27155,
    "lon": 84.10512,
    "straightKm": 5.94,
    "roadKm": 7.2,
    "timeMins": 16,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khurwasia, pratappur",
      "khurwasia",
      "khurwasia pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "CEN-2-30",
    "name": "Gangauli (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23718,
    "lon": 84.21076,
    "straightKm": 5.98,
    "roadKm": 7.3,
    "timeMins": 16,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gangauli",
      "gangauli ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-33",
    "name": "Ramgarh (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.28881,
    "lon": 84.16805,
    "straightKm": 5.98,
    "roadKm": 7.3,
    "timeMins": 16,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "ramgarh",
      "ramgarh nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841239-4",
    "name": "Belauri (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.22688,
    "lon": 84.09171,
    "straightKm": 6.01,
    "roadKm": 7.3,
    "timeMins": 16,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "belauri, mairwa",
      "belauri",
      "velauri",
      "belauri mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "CEN-2-46",
    "name": "Mahamudpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21515,
    "lon": 84.20665,
    "straightKm": 6.09,
    "roadKm": 7.4,
    "timeMins": 16,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "mahamudpur",
      "mahamudpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-56",
    "name": "Narayanpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.25434,
    "lon": 84.20856,
    "straightKm": 6.06,
    "roadKm": 7.4,
    "timeMins": 16,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "narayanpur",
      "narayanpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-841239-9",
    "name": "Daraila (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.26026,
    "lon": 84.09537,
    "straightKm": 6.09,
    "roadKm": 7.4,
    "timeMins": 16,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "daraila, mairwa",
      "daraila",
      "daraila mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "KS-025",
    "curated": true,
    "name": "Titra (तितरा)",
    "category": "Village / Market",
    "lat": 26.231,
    "lon": 84.212,
    "straightKm": 6.14,
    "roadKm": 7.5,
    "timeMins": 14,
    "direction": "पूर्व (East — Siwan Road)",
    "zone": "Zone 3 — Outer Block Belt",
    "aliases": [
      "titra",
      "titara",
      "तितरा",
      "तितरा बाजार"
    ]
  },
  {
    "id": "CEN-2-67",
    "name": "Sajna (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20727,
    "lon": 84.20301,
    "straightKm": 6.19,
    "roadKm": 7.5,
    "timeMins": 17,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sajna",
      "sazna",
      "sajna ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-36",
    "name": "Semaria (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.27249,
    "lon": 84.19819,
    "straightKm": 6.13,
    "roadKm": 7.5,
    "timeMins": 17,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "semaria",
      "semaria nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-13",
    "name": "Kothilwa (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.25006,
    "lon": 84.0911,
    "straightKm": 6.12,
    "roadKm": 7.5,
    "timeMins": 17,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kothilwa",
      "kothilwa bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "CEN-4-46",
    "name": "Semaria Bazar (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.29294,
    "lon": 84.15776,
    "straightKm": 6.22,
    "roadKm": 7.6,
    "timeMins": 17,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "semaria bazar",
      "semaria bajar",
      "semaria bazar nautan block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "PIN-841245-12",
    "name": "Pachokhar (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.212,
    "lon": 84.20682,
    "straightKm": 6.26,
    "roadKm": 7.6,
    "timeMins": 17,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pachokhar, ziradei",
      "pachokhar",
      "pachokhar ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-274703-0",
    "name": "Bankul (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.278,
    "lon": 84.107,
    "straightKm": 6.29,
    "roadKm": 7.7,
    "timeMins": 17,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bankul, pratappur",
      "bankul",
      "vankul",
      "bankul pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "CEN-3-105",
    "name": "Chitakhal Bazar (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20393,
    "lon": 84.09843,
    "straightKm": 6.41,
    "roadKm": 7.8,
    "timeMins": 17,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chitakhal bazar",
      "chitakhal bajar",
      "chitakhal bazar guthani block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-4-20",
    "name": "Kurmauta (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.28915,
    "lon": 84.17893,
    "straightKm": 6.41,
    "roadKm": 7.8,
    "timeMins": 17,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kurmauta",
      "kurmauta nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-2-25",
    "name": "Chhaprapal (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22216,
    "lon": 84.21342,
    "straightKm": 6.47,
    "roadKm": 7.9,
    "timeMins": 17,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chhaprapal",
      "chaprapal",
      "chhaprapal ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-841239-14",
    "name": "Lebhri (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.28645,
    "lon": 84.11639,
    "straightKm": 6.45,
    "roadKm": 7.9,
    "timeMins": 17,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "lebhri, mairwa",
      "lebhri",
      "lebhri mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841243-12",
    "name": "Sirisia (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.294,
    "lon": 84.16682,
    "straightKm": 6.5,
    "roadKm": 7.9,
    "timeMins": 17,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sirisia, nautan",
      "sirisia",
      "sirisia nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "PIN-274703-8",
    "name": "Ratsia (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.29442,
    "lon": 84.14011,
    "straightKm": 6.44,
    "roadKm": 7.9,
    "timeMins": 17,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "ratsia, pratappur",
      "ratsia",
      "ratsia pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "CEN-2-17",
    "name": "Bharthui (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23089,
    "lon": 84.21655,
    "straightKm": 6.6,
    "roadKm": 8,
    "timeMins": 18,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bharthui",
      "vharthui",
      "bharthui ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-88",
    "name": "Karchhui Halt (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.19889,
    "lon": 84.20179,
    "straightKm": 6.64,
    "roadKm": 8.1,
    "timeMins": 18,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "karchhui halt",
      "karchui halt",
      "karchhui halt ziradei block",
      "station",
      "railway station",
      "relwe station",
      "teshan",
      "स्टेशन",
      "रेलवे स्टेशन",
      "टेशन",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-9-18",
    "name": "Bahuara (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.22763,
    "lon": 84.08552,
    "straightKm": 6.6,
    "roadKm": 8.1,
    "timeMins": 18,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bahuara",
      "vahuara",
      "bahuara bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "PIN-841239-19",
    "name": "Seotapur (Mairwa, PIN 841239)",
    "category": "Post Office / Village",
    "lat": 26.29724,
    "lon": 84.14818,
    "straightKm": 6.67,
    "roadKm": 8.1,
    "timeMins": 18,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "seotapur, mairwa",
      "seotapur",
      "seotapur mairwa",
      "mairwa",
      "841239"
    ]
  },
  {
    "id": "PIN-841243-2",
    "name": "Chainpur Hata (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.27614,
    "lon": 84.20114,
    "straightKm": 6.62,
    "roadKm": 8.1,
    "timeMins": 18,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chainpur hata, nautan",
      "chainpur hata",
      "chainpur hata nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-2-22",
    "name": "Bishunpura Ziradei (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.24386,
    "lon": 84.21808,
    "straightKm": 6.75,
    "roadKm": 8.2,
    "timeMins": 18,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bishunpura ziradei",
      "bishunpura jiradei",
      "vishunpura ziradei",
      "bisunpura ziradei",
      "bishunpura ziradei ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-69",
    "name": "Sanjalpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.26335,
    "lon": 84.21192,
    "straightKm": 6.75,
    "roadKm": 8.2,
    "timeMins": 18,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sanjalpur",
      "sanzalpur",
      "sanjalpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-274704-2",
    "name": "Inguri Bazar (Bankata, PIN 274704)",
    "category": "Post Office / Village",
    "lat": 26.21614,
    "lon": 84.08814,
    "straightKm": 6.68,
    "roadKm": 8.2,
    "timeMins": 18,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "inguri bazar, bankata",
      "inguri bazar",
      "inguri bajar",
      "inguri bazar bankata",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-2-35",
    "name": "Hardopatti (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.25229,
    "lon": 84.21739,
    "straightKm": 6.84,
    "roadKm": 8.4,
    "timeMins": 18,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "hardopatti",
      "hardopatti ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-274704-3",
    "name": "Parsia Chhitani Singh (Bankata, PIN 274704)",
    "category": "Post Office / Village",
    "lat": 26.29008,
    "lon": 84.11422,
    "straightKm": 6.91,
    "roadKm": 8.4,
    "timeMins": 18,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "parsia chhitani singh, bankata",
      "parsia chhitani singh",
      "parsia chitani singh",
      "parsia chhitani singh bankata",
      "bankata",
      "274704"
    ]
  },
  {
    "id": "KS-031",
    "curated": true,
    "name": "Bankata Railway Station & Block (बनकटा — यूपी बॉर्डर)",
    "category": "Railway Station / Block",
    "lat": 26.252,
    "lon": 84.085,
    "straightKm": 6.76,
    "roadKm": 8.5,
    "timeMins": 15,
    "direction": "पश्चिम (West — UP Border)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bankata",
      "bankata station",
      "बनकटा",
      "बनकटा स्टेशन"
    ]
  },
  {
    "id": "CEN-2-33",
    "name": "Gobrahi (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21194,
    "lon": 84.21467,
    "straightKm": 6.97,
    "roadKm": 8.5,
    "timeMins": 19,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gobrahi",
      "gobrahi ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-92",
    "name": "Surwar Gondi (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20934,
    "lon": 84.08856,
    "straightKm": 6.95,
    "roadKm": 8.5,
    "timeMins": 19,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "surwar gondi",
      "surwar gondi guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-15",
    "name": "Jagdishpur Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.28623,
    "lon": 84.19466,
    "straightKm": 6.98,
    "roadKm": 8.5,
    "timeMins": 19,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "jagdishpur nautan",
      "zagdishpur nautan",
      "jagdispur nautan",
      "jagdishpur nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-29",
    "name": "Salempur Chauraha (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.28317,
    "lon": 84.1029,
    "straightKm": 6.99,
    "roadKm": 8.5,
    "timeMins": 19,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "salempur chauraha",
      "salempur chauraha bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-841245-1",
    "name": "Bardaha (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.24621,
    "lon": 84.22031,
    "straightKm": 7,
    "roadKm": 8.5,
    "timeMins": 19,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bardaha, ziradei",
      "bardaha",
      "vardaha",
      "bardaha ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-3-84",
    "name": "Samatanr (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19551,
    "lon": 84.09769,
    "straightKm": 7.05,
    "roadKm": 8.6,
    "timeMins": 19,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "samatanr",
      "samatanr guthani block",
      "guthani block"
    ]
  },
  {
    "id": "PIN-841245-14",
    "name": "Ruiyabangra (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.27915,
    "lon": 84.20359,
    "straightKm": 7.02,
    "roadKm": 8.6,
    "timeMins": 19,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "ruiyabangra, ziradei",
      "ruiyabangra",
      "ruiyabangra ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-841435-3",
    "name": "Chitakhal (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.21008,
    "lon": 84.08722,
    "straightKm": 7.03,
    "roadKm": 8.6,
    "timeMins": 19,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chitakhal, guthani",
      "chitakhal",
      "chitakhal guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "CEN-2-54",
    "name": "Munra (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20328,
    "lon": 84.21166,
    "straightKm": 7.15,
    "roadKm": 8.7,
    "timeMins": 19,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "munra",
      "munra ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "KS-032",
    "curated": true,
    "name": "Pratappur Sugar Mill / Bazar (प्रतापपुर चीनी मिल / यूपी बॉर्डर)",
    "category": "Town / Market",
    "lat": 26.278,
    "lon": 84.095,
    "straightKm": 7.17,
    "roadKm": 8.8,
    "timeMins": 16,
    "direction": "उत्तर-पश्चिम (North-West — UP Border)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pratappur",
      "partappur",
      "sugar mill",
      "chini mill",
      "प्रतापपुर",
      "प्रतापपुर चीनी मिल"
    ]
  },
  {
    "id": "CEN-2-9",
    "name": "Baroha (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23611,
    "lon": 84.22321,
    "straightKm": 7.22,
    "roadKm": 8.8,
    "timeMins": 19,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "baroha",
      "varoha",
      "baroha ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-97",
    "name": "Tanrwa Tiwari (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.1875,
    "lon": 84.10505,
    "straightKm": 7.18,
    "roadKm": 8.8,
    "timeMins": 19,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "tanrwa tiwari",
      "tanrwa tiwari guthani block",
      "guthani block"
    ]
  },
  {
    "id": "PIN-841435-8",
    "name": "Trwa Parsia (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.18842,
    "lon": 84.10311,
    "straightKm": 7.23,
    "roadKm": 8.8,
    "timeMins": 19,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "trwa parsia, guthani",
      "trwa parsia",
      "trwa parsia guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "PIN-841243-4",
    "name": "Jagdishpur Kothi (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.30158,
    "lon": 84.13891,
    "straightKm": 7.24,
    "roadKm": 8.8,
    "timeMins": 19,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "jagdishpur kothi, nautan",
      "jagdishpur kothi",
      "zagdishpur kothi",
      "jagdispur kothi",
      "jagdishpur kothi nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-4-23",
    "name": "Misir Chak (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.28096,
    "lon": 84.20498,
    "straightKm": 7.26,
    "roadKm": 8.9,
    "timeMins": 20,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "misir chak",
      "misir chak nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-4-44",
    "name": "Tirmanpur (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.27114,
    "lon": 84.21314,
    "straightKm": 7.26,
    "roadKm": 8.9,
    "timeMins": 20,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "tirmanpur",
      "tirmanpur nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-274703-7",
    "name": "Rahimpur (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.24607,
    "lon": 84.07838,
    "straightKm": 7.29,
    "roadKm": 8.9,
    "timeMins": 20,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "rahimpur, pratappur",
      "rahimpur",
      "rahimpur pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "CEN-2-12",
    "name": "Bhaisakhal (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22085,
    "lon": 84.22222,
    "straightKm": 7.35,
    "roadKm": 9,
    "timeMins": 20,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhaisakhal",
      "vhaisakhal",
      "bhaisakhal ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-48",
    "name": "Majhwalia (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.26056,
    "lon": 84.2201,
    "straightKm": 7.38,
    "roadKm": 9,
    "timeMins": 20,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "majhwalia",
      "mazhwalia",
      "majhwalia ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-71",
    "name": "Nainijor (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20098,
    "lon": 84.08903,
    "straightKm": 7.37,
    "roadKm": 9,
    "timeMins": 20,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "nainijor",
      "nainizor",
      "nainijor guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-25",
    "name": "Murarpatti (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.30194,
    "lon": 84.16645,
    "straightKm": 7.35,
    "roadKm": 9,
    "timeMins": 20,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "murarpatti",
      "murarpatti nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841237-4",
    "name": "Machakna (Bhatpokhar, PIN 841237)",
    "category": "Post Office / Village",
    "lat": 26.25958,
    "lon": 84.22091,
    "straightKm": 7.42,
    "roadKm": 9,
    "timeMins": 20,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "machakna, bhatpokhar",
      "machakna",
      "machakna bhatpokhar",
      "bhatpokhar",
      "841237"
    ]
  },
  {
    "id": "CEN-4-12",
    "name": "Gobardhana (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.30026,
    "lon": 84.17774,
    "straightKm": 7.49,
    "roadKm": 9.1,
    "timeMins": 20,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gobardhana",
      "gobardhana nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-4-7",
    "name": "Bishunpura Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.2957,
    "lon": 84.18953,
    "straightKm": 7.55,
    "roadKm": 9.2,
    "timeMins": 20,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bishunpura nautan",
      "vishunpura nautan",
      "bisunpura nautan",
      "bishunpura nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-5",
    "name": "Rampur Buzurg (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.24501,
    "lon": 84.07542,
    "straightKm": 7.57,
    "roadKm": 9.2,
    "timeMins": 20,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "rampur buzurg",
      "rampur bujurg",
      "rampur buzurg bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-2-4",
    "name": "Banthu Salona (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22803,
    "lon": 84.22686,
    "straightKm": 7.65,
    "roadKm": 9.3,
    "timeMins": 20,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "banthu salona",
      "vanthu salona",
      "banthu salona ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-14",
    "name": "Bhaluwahi (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.24603,
    "lon": 84.22673,
    "straightKm": 7.63,
    "roadKm": 9.3,
    "timeMins": 20,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhaluwahi",
      "vhaluwahi",
      "bhaluwahi ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-9-8",
    "name": "Bhatpar Rani Station (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.26817,
    "lon": 84.08284,
    "straightKm": 7.6,
    "roadKm": 9.3,
    "timeMins": 20,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhatpar rani station",
      "vhatpar rani station",
      "bhatpar rani station bankata & bhatpar rani (up border belt)",
      "station",
      "railway station",
      "relwe station",
      "teshan",
      "स्टेशन",
      "रेलवे स्टेशन",
      "टेशन",
      "bazar",
      "bazaar"
    ]
  },
  {
    "id": "CEN-2-20",
    "name": "Bijaipur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2122,
    "lon": 84.22314,
    "straightKm": 7.74,
    "roadKm": 9.4,
    "timeMins": 21,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bijaipur",
      "bizaipur",
      "vijaipur",
      "bijaipur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-75",
    "name": "Sisahani (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.19474,
    "lon": 84.2115,
    "straightKm": 7.69,
    "roadKm": 9.4,
    "timeMins": 21,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sisahani",
      "sisahani ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-82",
    "name": "Badhenya (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.27156,
    "lon": 84.21807,
    "straightKm": 7.71,
    "roadKm": 9.4,
    "timeMins": 21,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "badhenya",
      "vadhenya",
      "badhenya ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-79",
    "name": "Pataua Khurd (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.21191,
    "lon": 84.07825,
    "straightKm": 7.77,
    "roadKm": 9.5,
    "timeMins": 21,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pataua khurd",
      "pataua khurd guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-2-27",
    "name": "Chhotka Manjha (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2547,
    "lon": 84.22767,
    "straightKm": 7.9,
    "roadKm": 9.6,
    "timeMins": 21,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chhotka manjha",
      "chhotka manzha",
      "chotka manjha",
      "chhotka manjha ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-63",
    "name": "Mairitanr (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18763,
    "lon": 84.09485,
    "straightKm": 7.86,
    "roadKm": 9.6,
    "timeMins": 21,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "mairitanr",
      "mairitanr guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-100",
    "name": "Tendua (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.21948,
    "lon": 84.07457,
    "straightKm": 7.86,
    "roadKm": 9.6,
    "timeMins": 21,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "tendua",
      "tendua guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-2-41",
    "name": "Jamapur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20225,
    "lon": 84.22053,
    "straightKm": 7.97,
    "roadKm": 9.7,
    "timeMins": 21,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "jamapur",
      "zamapur",
      "jamapur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-38",
    "name": "Semra Khurd (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.30826,
    "lon": 84.15761,
    "straightKm": 7.92,
    "roadKm": 9.7,
    "timeMins": 21,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "semra khurd",
      "semra khurd nautan block",
      "nautan block"
    ]
  },
  {
    "id": "KS-037",
    "curated": true,
    "name": "Jamapur Bazar (जामापुर बाज़ार)",
    "category": "Market / Village",
    "lat": 26.212,
    "lon": 84.225,
    "straightKm": 7.92,
    "roadKm": 9.8,
    "timeMins": 18,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block Belt",
    "aliases": [
      "jamapur",
      "जमापुर",
      "जामापुर"
    ]
  },
  {
    "id": "CEN-3-50",
    "name": "Kelharua (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19269,
    "lon": 84.08714,
    "straightKm": 8.06,
    "roadKm": 9.8,
    "timeMins": 22,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kelharua",
      "kelharua guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-58",
    "name": "Kishunpura (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20365,
    "lon": 84.0798,
    "straightKm": 8.01,
    "roadKm": 9.8,
    "timeMins": 22,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kishunpura",
      "kisunpura",
      "kishunpura guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-76",
    "name": "Panre Gondi (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18006,
    "lon": 84.10116,
    "straightKm": 8.07,
    "roadKm": 9.8,
    "timeMins": 22,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "panre gondi",
      "panre gondi guthani block",
      "guthani block"
    ]
  },
  {
    "id": "PIN-841245-20",
    "name": "Zeradei (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.22081,
    "lon": 84.23029,
    "straightKm": 8.14,
    "roadKm": 9.9,
    "timeMins": 22,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "zeradei, ziradei",
      "zeradei",
      "jeradei",
      "zeradei ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-2-1",
    "name": "Baikunthpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23483,
    "lon": 84.23272,
    "straightKm": 8.17,
    "roadKm": 10,
    "timeMins": 22,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "baikunthpur",
      "vaikunthpur",
      "baikunthpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-61",
    "name": "Phulwaria (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2679,
    "lon": 84.22571,
    "straightKm": 8.21,
    "roadKm": 10,
    "timeMins": 22,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "phulwaria",
      "fulwaria",
      "phulwaria ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-9-10",
    "name": "Bhingari Bazar (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.22833,
    "lon": 84.06889,
    "straightKm": 8.23,
    "roadKm": 10,
    "timeMins": 22,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhingari bazar",
      "bhingari bajar",
      "vhingari bazar",
      "bhingari bazar bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-4-10",
    "name": "Gamhirpur (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.29249,
    "lon": 84.20713,
    "straightKm": 8.32,
    "roadKm": 10.1,
    "timeMins": 22,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gamhirpur",
      "gamhirpur nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-4-31",
    "name": "Qadir Chak (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.28109,
    "lon": 84.21787,
    "straightKm": 8.27,
    "roadKm": 10.1,
    "timeMins": 22,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "qadir chak",
      "qadir chak nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-16",
    "name": "pipra Uttar Patti (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.28425,
    "lon": 84.08614,
    "straightKm": 8.3,
    "roadKm": 10.1,
    "timeMins": 22,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pipra uttar patti",
      "pipra uttar patti bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-841245-6",
    "name": "Gaziapur (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.25318,
    "lon": 84.23179,
    "straightKm": 8.27,
    "roadKm": 10.1,
    "timeMins": 22,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gaziapur, ziradei",
      "gaziapur",
      "gajiapur",
      "gaziapur ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-841245-7",
    "name": "Kpmishrauli (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.19807,
    "lon": 84.22138,
    "straightKm": 8.28,
    "roadKm": 10.1,
    "timeMins": 22,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kpmishrauli, ziradei",
      "kpmishrauli",
      "kpmisrauli",
      "kpmishrauli ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "KS-028",
    "curated": true,
    "name": "Ziradei / Jiradei (जीरादेई — देशरत्न डॉ. राजेंद्र प्रसाद जन्मस्थली)",
    "category": "Town / Railway Station / Block",
    "lat": 26.23,
    "lon": 84.238,
    "straightKm": 8.73,
    "roadKm": 10.2,
    "timeMins": 18,
    "direction": "पूर्व (East — Siwan Road)",
    "zone": "Zone 3 — Outer Block Belt (Bulk / Party Order Delivery)",
    "aliases": [
      "ziradei",
      "jiradei",
      "jeeradei",
      "ziradai",
      "jiradai",
      "जीरादेई",
      "जिरादेई",
      "जीरादेई स्टेशन"
    ]
  },
  {
    "id": "CEN-2-6",
    "name": "Bardahan (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.24293,
    "lon": 84.23453,
    "straightKm": 8.37,
    "roadKm": 10.2,
    "timeMins": 22,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bardahan",
      "vardahan",
      "bardahan ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-7",
    "name": "Barheya (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2173,
    "lon": 84.2314,
    "straightKm": 8.34,
    "roadKm": 10.2,
    "timeMins": 22,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "barheya",
      "varheya",
      "barheya ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-274702-13",
    "name": "Sarya (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.25461,
    "lon": 84.06886,
    "straightKm": 8.4,
    "roadKm": 10.2,
    "timeMins": 22,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sarya, bhatpar rani",
      "sarya",
      "sarya bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-2-40",
    "name": "Hir Makriar (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.26188,
    "lon": 84.23221,
    "straightKm": 8.56,
    "roadKm": 10.4,
    "timeMins": 23,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "hir makriar",
      "hir makriar ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-62",
    "name": "Piprahia (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.19347,
    "lon": 84.22133,
    "straightKm": 8.56,
    "roadKm": 10.4,
    "timeMins": 23,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "piprahia",
      "piprahia ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-2",
    "name": "Balwa (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.30079,
    "lon": 84.19898,
    "straightKm": 8.54,
    "roadKm": 10.4,
    "timeMins": 23,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "balwa",
      "valwa",
      "balwa nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-2-28",
    "name": "Dharampur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20436,
    "lon": 84.22878,
    "straightKm": 8.6,
    "roadKm": 10.5,
    "timeMins": 23,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "dharampur",
      "dharampur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-37",
    "name": "Dhaula (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19484,
    "lon": 84.07873,
    "straightKm": 8.6,
    "roadKm": 10.5,
    "timeMins": 23,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "dhaula",
      "dhaula guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-66",
    "name": "Malchaur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.21165,
    "lon": 84.06825,
    "straightKm": 8.72,
    "roadKm": 10.6,
    "timeMins": 23,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "malchaur",
      "malchaur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-89",
    "name": "Sohagra (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17049,
    "lon": 84.10545,
    "straightKm": 8.7,
    "roadKm": 10.6,
    "timeMins": 23,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sohagra",
      "sohagra guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-4",
    "name": "Baraipatti (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.30947,
    "lon": 84.1837,
    "straightKm": 8.67,
    "roadKm": 10.6,
    "timeMins": 23,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "baraipatti",
      "varaipatti",
      "baraipatti nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-4-17",
    "name": "Khap Bankat (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.31314,
    "lon": 84.17047,
    "straightKm": 8.65,
    "roadKm": 10.6,
    "timeMins": 23,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khap bankat",
      "khap bankat nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-2-19",
    "name": "Bhikpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2526,
    "lon": 84.23696,
    "straightKm": 8.76,
    "roadKm": 10.7,
    "timeMins": 24,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhikpur",
      "vhikpur",
      "bhikpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-42",
    "name": "Gothini (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18067,
    "lon": 84.08965,
    "straightKm": 8.77,
    "roadKm": 10.7,
    "timeMins": 24,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gothini",
      "gothini guthani block",
      "guthani block"
    ]
  },
  {
    "id": "PIN-841245-15",
    "name": "Sanjalpur (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.2181,
    "lon": 84.23643,
    "straightKm": 8.8,
    "roadKm": 10.7,
    "timeMins": 24,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sanjalpur, ziradei",
      "sanjalpur",
      "sanzalpur",
      "sanjalpur ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-841243-10",
    "name": "Sahpur (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.30112,
    "lon": 84.20307,
    "straightKm": 8.8,
    "roadKm": 10.7,
    "timeMins": 24,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sahpur, nautan",
      "sahpur",
      "sahpur nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-3-45",
    "name": "Jataur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20343,
    "lon": 84.0708,
    "straightKm": 8.83,
    "roadKm": 10.8,
    "timeMins": 24,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "jataur",
      "zataur",
      "jataur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-9-0",
    "name": "Bankata Bazar (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.258,
    "lon": 84.06488,
    "straightKm": 8.87,
    "roadKm": 10.8,
    "timeMins": 24,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bankata bazar",
      "bankata bajar",
      "vankata bazar",
      "bankata bazar bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-2-2",
    "name": "Balaipur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22127,
    "lon": 84.23877,
    "straightKm": 8.95,
    "roadKm": 10.9,
    "timeMins": 24,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "balaipur",
      "valaipur",
      "balaipur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-15",
    "name": "Bharauli (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20993,
    "lon": 84.2354,
    "straightKm": 8.97,
    "roadKm": 10.9,
    "timeMins": 24,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bharauli",
      "vharauli",
      "bharauli ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-55",
    "name": "Kharkharia (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17391,
    "lon": 84.0954,
    "straightKm": 8.96,
    "roadKm": 10.9,
    "timeMins": 24,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kharkharia",
      "kharkharia guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-87",
    "name": "Selaur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.2186,
    "lon": 84.06359,
    "straightKm": 8.95,
    "roadKm": 10.9,
    "timeMins": 24,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "selaur",
      "selaur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-29",
    "name": "Chitakhal (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18475,
    "lon": 84.08226,
    "straightKm": 9,
    "roadKm": 11,
    "timeMins": 24,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chitakhal",
      "chitakhal guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-18",
    "name": "Khap Misrauli (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.29203,
    "lon": 84.21807,
    "straightKm": 9.05,
    "roadKm": 11,
    "timeMins": 24,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khap misrauli",
      "khap misrauli nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-23",
    "name": "Sohanpur Bazar (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.21079,
    "lon": 84.06562,
    "straightKm": 9,
    "roadKm": 11,
    "timeMins": 24,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sohanpur bazar",
      "sohanpur bajar",
      "sohanpur bazar bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "PIN-274704-1",
    "name": "Bankata (Bankata, PIN 274704)",
    "category": "Post Office / Village",
    "lat": 26.26821,
    "lon": 84.06731,
    "straightKm": 9.01,
    "roadKm": 11,
    "timeMins": 24,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bankata, bankata",
      "bankata",
      "vankata",
      "bankata bankata",
      "274704"
    ]
  },
  {
    "id": "CEN-2-74",
    "name": "Singahi (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.27361,
    "lon": 84.23375,
    "straightKm": 9.2,
    "roadKm": 11.2,
    "timeMins": 25,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "singahi",
      "singahi ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-274703-3",
    "name": "Bhopatpura (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.31608,
    "lon": 84.12422,
    "straightKm": 9.15,
    "roadKm": 11.2,
    "timeMins": 25,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhopatpura, pratappur",
      "bhopatpura",
      "vhopatpura",
      "bhopatpura pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "CEN-2-0",
    "name": "Akolhi (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23,
    "lon": 84.24306,
    "straightKm": 9.24,
    "roadKm": 11.3,
    "timeMins": 25,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "akolhi",
      "akolhi ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-11",
    "name": "Berhea (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.24672,
    "lon": 84.24325,
    "straightKm": 9.28,
    "roadKm": 11.3,
    "timeMins": 25,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "berhea",
      "verhea",
      "berhea ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-49",
    "name": "Makundpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.19502,
    "lon": 84.23048,
    "straightKm": 9.24,
    "roadKm": 11.3,
    "timeMins": 25,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "makundpur",
      "makundpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-9-3",
    "name": "Pratappur Bazar (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.27368,
    "lon": 84.06702,
    "straightKm": 9.28,
    "roadKm": 11.3,
    "timeMins": 25,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pratappur bazar",
      "pratappur bajar",
      "pratappur bazar bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-2-3",
    "name": "Bangra (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23803,
    "lon": 84.24416,
    "straightKm": 9.31,
    "roadKm": 11.4,
    "timeMins": 25,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bangra",
      "vangra",
      "bangra ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-83",
    "name": "Sakara Bazar (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.18562,
    "lon": 84.22454,
    "straightKm": 9.34,
    "roadKm": 11.4,
    "timeMins": 25,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sakara bazar",
      "sakara bajar",
      "sakara bazar ziradei block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-3-24",
    "name": "Chaumukha Kalan (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19371,
    "lon": 84.07044,
    "straightKm": 9.37,
    "roadKm": 11.4,
    "timeMins": 25,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chaumukha kalan",
      "chaumukha kalan guthani block",
      "guthani block"
    ]
  },
  {
    "id": "KS-029",
    "curated": true,
    "name": "Thepaha Bazar (ठेपहाँ बाज़ार)",
    "category": "Market / Village",
    "lat": 26.258,
    "lon": 84.242,
    "straightKm": 9.38,
    "roadKm": 11.5,
    "timeMins": 20,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block Belt",
    "aliases": [
      "thepaha",
      "thepahan",
      "thepha",
      "ठेपहा",
      "ठेपहाँ",
      "ठेपहाँ बाजार"
    ]
  },
  {
    "id": "CEN-2-53",
    "name": "Muian (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.26716,
    "lon": 84.23936,
    "straightKm": 9.43,
    "roadKm": 11.5,
    "timeMins": 25,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "muian",
      "muian ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-30",
    "name": "Pipra Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.32122,
    "lon": 84.16303,
    "straightKm": 9.41,
    "roadKm": 11.5,
    "timeMins": 25,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pipra nautan",
      "pipra nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-2",
    "name": "Pratappur Sugar Mill (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.24096,
    "lon": 84.0565,
    "straightKm": 9.42,
    "roadKm": 11.5,
    "timeMins": 25,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pratappur sugar mill",
      "pratappur sugar mill bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-841245-10",
    "name": "Miyan Ke Bhatkan (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.21912,
    "lon": 84.24307,
    "straightKm": 9.42,
    "roadKm": 11.5,
    "timeMins": 25,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "miyan ke bhatkan, ziradei",
      "miyan ke bhatkan",
      "miyan ke bhatkan ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-274703-6",
    "name": "Paratappur (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.30118,
    "lon": 84.08879,
    "straightKm": 9.42,
    "roadKm": 11.5,
    "timeMins": 25,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "paratappur, pratappur",
      "paratappur",
      "paratappur pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "CEN-2-32",
    "name": "Gaziapur Bedaulia (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.25864,
    "lon": 84.24293,
    "straightKm": 9.49,
    "roadKm": 11.6,
    "timeMins": 26,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gaziapur bedaulia",
      "gajiapur bedaulia",
      "gaziapur bedaulia ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-68",
    "name": "Mian Gondi (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16515,
    "lon": 84.099,
    "straightKm": 9.55,
    "roadKm": 11.6,
    "timeMins": 26,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "mian gondi",
      "mian gondi guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-5",
    "name": "Basdewa (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.30346,
    "lon": 84.21142,
    "straightKm": 9.52,
    "roadKm": 11.6,
    "timeMins": 26,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "basdewa",
      "vasdewa",
      "basdewa nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841243-5",
    "name": "Kabirpur (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.30555,
    "lon": 84.20812,
    "straightKm": 9.5,
    "roadKm": 11.6,
    "timeMins": 26,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kabirpur, nautan",
      "kabirpur",
      "kabirpur nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-3-16",
    "name": "Bhathahi (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18529,
    "lon": 84.07378,
    "straightKm": 9.62,
    "roadKm": 11.7,
    "timeMins": 26,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhathahi",
      "vhathahi",
      "bhathahi guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-9",
    "name": "Galimapur (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.31984,
    "lon": 84.17901,
    "straightKm": 9.6,
    "roadKm": 11.7,
    "timeMins": 26,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "galimapur",
      "galimapur nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841245-11",
    "name": "Narianpur (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.25289,
    "lon": 84.24522,
    "straightKm": 9.57,
    "roadKm": 11.7,
    "timeMins": 26,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "narianpur, ziradei",
      "narianpur",
      "narianpur ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-2-36",
    "name": "Harpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.19922,
    "lon": 84.23815,
    "straightKm": 9.69,
    "roadKm": 11.8,
    "timeMins": 26,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "harpur",
      "harpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-32",
    "name": "Danraila (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20033,
    "lon": 84.06287,
    "straightKm": 9.69,
    "roadKm": 11.8,
    "timeMins": 26,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "danraila",
      "danraila guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-53",
    "name": "Khap Misraulia (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20874,
    "lon": 84.05935,
    "straightKm": 9.66,
    "roadKm": 11.8,
    "timeMins": 26,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khap misraulia",
      "khap misraulia guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-102",
    "name": "Guthani Chauraha (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15952,
    "lon": 84.10722,
    "straightKm": 9.68,
    "roadKm": 11.8,
    "timeMins": 26,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "guthani chauraha",
      "guthani chauraha guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-39",
    "name": "Shahpur (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.28716,
    "lon": 84.23072,
    "straightKm": 9.71,
    "roadKm": 11.8,
    "timeMins": 26,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "shahpur",
      "sahpur",
      "shahpur nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-274702-8",
    "name": "Kothilwa (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.28142,
    "lon": 84.06711,
    "straightKm": 9.68,
    "roadKm": 11.8,
    "timeMins": 26,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kothilwa, bhatpar rani",
      "kothilwa",
      "kothilwa bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "PIN-274703-1",
    "name": "Bansopatti (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.29421,
    "lon": 84.07731,
    "straightKm": 9.68,
    "roadKm": 11.8,
    "timeMins": 26,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bansopatti, pratappur",
      "bansopatti",
      "vansopatti",
      "bansopatti pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "CEN-2-10",
    "name": "Belwasa (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2148,
    "lon": 84.24511,
    "straightKm": 9.73,
    "roadKm": 11.9,
    "timeMins": 26,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "belwasa",
      "velwasa",
      "belwasa ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "KS-035",
    "curated": true,
    "name": "Nautan Bazar & Block (नौतन बाज़ार)",
    "category": "Town / Block",
    "lat": 26.312,
    "lon": 84.198,
    "straightKm": 9.54,
    "roadKm": 12,
    "timeMins": 22,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block Belt",
    "aliases": [
      "nautan",
      "noutan",
      "nautan bazar",
      "नौतन",
      "नौतन बाजार"
    ]
  },
  {
    "id": "CEN-2-5",
    "name": "Banthu Sriram (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22335,
    "lon": 84.24846,
    "straightKm": 9.86,
    "roadKm": 12,
    "timeMins": 26,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "banthu sriram",
      "vanthu sriram",
      "banthu sriram ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-21",
    "name": "Biswar (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17513,
    "lon": 84.08126,
    "straightKm": 9.8,
    "roadKm": 12,
    "timeMins": 26,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "biswar",
      "viswar",
      "biswar guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-34",
    "name": "Deuria (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16955,
    "lon": 84.0875,
    "straightKm": 9.83,
    "roadKm": 12,
    "timeMins": 26,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "deuria",
      "deuria guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-1",
    "name": "Balua Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.3182,
    "lon": 84.19123,
    "straightKm": 9.85,
    "roadKm": 12,
    "timeMins": 26,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "balua nautan",
      "valua nautan",
      "balua nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841245-5",
    "name": "Chhitanpur (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.22355,
    "lon": 84.24812,
    "straightKm": 9.83,
    "roadKm": 12,
    "timeMins": 26,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chhitanpur, ziradei",
      "chhitanpur",
      "chitanpur",
      "chhitanpur ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-841240-1",
    "name": "Mahuwal Mahal (Don, PIN 841240)",
    "category": "Post Office / Village",
    "lat": 26.16621,
    "lon": 84.09231,
    "straightKm": 9.83,
    "roadKm": 12,
    "timeMins": 26,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "mahuwal mahal, don",
      "mahuwal mahal",
      "mahuwal mahal don",
      "don",
      "841240"
    ]
  },
  {
    "id": "CEN-2-23",
    "name": "Chandauli Gangauli (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20582,
    "lon": 84.24344,
    "straightKm": 9.88,
    "roadKm": 12.1,
    "timeMins": 27,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chandauli gangauli",
      "chandauli gangauli ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-0",
    "name": "Agaunta (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.312,
    "lon": 84.2045,
    "straightKm": 9.88,
    "roadKm": 12.1,
    "timeMins": 27,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "agaunta",
      "agaunta nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841245-0",
    "name": "Banthu Sriram (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.23,
    "lon": 84.25,
    "straightKm": 9.93,
    "roadKm": 12.1,
    "timeMins": 27,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "banthu sriram, ziradei",
      "banthu sriram",
      "vanthu sriram",
      "banthu sriram ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-2-70",
    "name": "Santhu (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.1875,
    "lon": 84.23468,
    "straightKm": 10.03,
    "roadKm": 12.2,
    "timeMins": 27,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "santhu",
      "santhu ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-74",
    "name": "Pachnerua (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.21513,
    "lon": 84.0538,
    "straightKm": 9.99,
    "roadKm": 12.2,
    "timeMins": 27,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pachnerua",
      "pachnerua guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-9-24",
    "name": "Khampar (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.30085,
    "lon": 84.07956,
    "straightKm": 10.02,
    "roadKm": 12.2,
    "timeMins": 27,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khampar",
      "khampar bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "CEN-2-8",
    "name": "Barhulia (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23521,
    "lon": 84.25226,
    "straightKm": 10.12,
    "roadKm": 12.3,
    "timeMins": 27,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "barhulia",
      "varhulia",
      "barhulia ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-24",
    "name": "Chandpali (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.25195,
    "lon": 84.25058,
    "straightKm": 10.08,
    "roadKm": 12.3,
    "timeMins": 27,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chandpali",
      "chandpali ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-841243-0",
    "name": "B.P.Ekderwsa (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.312,
    "lon": 84.21,
    "straightKm": 10.19,
    "roadKm": 12.4,
    "timeMins": 27,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "b.p.ekderwsa, nautan",
      "b.p.ekderwsa",
      "v.p.ekderwsa",
      "b.p.ekderwsa nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "PIN-841240-0",
    "name": "Chandparsa (Don, PIN 841240)",
    "category": "Post Office / Village",
    "lat": 26.15,
    "lon": 84.122,
    "straightKm": 10.13,
    "roadKm": 12.4,
    "timeMins": 27,
    "direction": "दक्षिण (South)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chandparsa, don",
      "chandparsa",
      "chandparsa don",
      "don",
      "841240"
    ]
  },
  {
    "id": "CEN-2-87",
    "name": "Ziradei Railway Station (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.27713,
    "lon": 84.24365,
    "straightKm": 10.26,
    "roadKm": 12.5,
    "timeMins": 28,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "ziradei railway station",
      "jiradei railway station",
      "ziradei railway station ziradei block",
      "station",
      "railway station",
      "relwe station",
      "teshan",
      "स्टेशन",
      "रेलवे स्टेशन",
      "टेशन",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-26",
    "name": "Narayanpur Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.29784,
    "lon": 84.22864,
    "straightKm": 10.27,
    "roadKm": 12.5,
    "timeMins": 28,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "narayanpur nautan",
      "narayanpur nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-15",
    "name": "Chakia Bankata (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.21881,
    "lon": 84.04992,
    "straightKm": 10.27,
    "roadKm": 12.5,
    "timeMins": 28,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chakia bankata",
      "chakia bankata bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-841245-2",
    "name": "Barhulia (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.19414,
    "lon": 84.24114,
    "straightKm": 10.21,
    "roadKm": 12.5,
    "timeMins": 28,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "barhulia, ziradei",
      "barhulia",
      "varhulia",
      "barhulia ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-841245-19",
    "name": "Titra (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.28994,
    "lon": 84.23538,
    "straightKm": 10.26,
    "roadKm": 12.5,
    "timeMins": 28,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "titra, ziradei",
      "titra",
      "titra ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-2-16",
    "name": "Bharthua (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.24344,
    "lon": 84.25395,
    "straightKm": 10.31,
    "roadKm": 12.6,
    "timeMins": 28,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bharthua",
      "vharthua",
      "bharthua ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-45",
    "name": "Kishunpur Misrauli (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.26178,
    "lon": 84.25094,
    "straightKm": 10.35,
    "roadKm": 12.6,
    "timeMins": 28,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kishunpur misrauli",
      "kisunpur misrauli",
      "kishunpur misrauli ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-8",
    "name": "Basuhari (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17715,
    "lon": 84.0721,
    "straightKm": 10.32,
    "roadKm": 12.6,
    "timeMins": 28,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "basuhari",
      "vasuhari",
      "basuhari guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-11",
    "name": "Belauri (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18854,
    "lon": 84.06319,
    "straightKm": 10.29,
    "roadKm": 12.6,
    "timeMins": 28,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "belauri",
      "velauri",
      "belauri guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-47",
    "name": "Kaleyani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16178,
    "lon": 84.09113,
    "straightKm": 10.3,
    "roadKm": 12.6,
    "timeMins": 28,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kaleyani",
      "kaleyani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-2-66",
    "name": "Ruia (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2701,
    "lon": 84.24837,
    "straightKm": 10.39,
    "roadKm": 12.7,
    "timeMins": 28,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "ruia",
      "ruia ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-9-11",
    "name": "Raghunathpur Bankata (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.29065,
    "lon": 84.06524,
    "straightKm": 10.39,
    "roadKm": 12.7,
    "timeMins": 28,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "raghunathpur bankata",
      "raghunathpur bankata bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "CEN-2-57",
    "name": "Narindpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.19184,
    "lon": 84.24332,
    "straightKm": 10.52,
    "roadKm": 12.8,
    "timeMins": 28,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "narindpur",
      "narindpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-19",
    "name": "Bihari Khurd (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19435,
    "lon": 84.05697,
    "straightKm": 10.51,
    "roadKm": 12.8,
    "timeMins": 28,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bihari khurd",
      "vihari khurd",
      "bihari khurd guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-40",
    "name": "Geyaspur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20352,
    "lon": 84.05227,
    "straightKm": 10.52,
    "roadKm": 12.8,
    "timeMins": 28,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "geyaspur",
      "geyaspur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-81",
    "name": "Piparpanti (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15511,
    "lon": 84.10004,
    "straightKm": 10.45,
    "roadKm": 12.8,
    "timeMins": 28,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "piparpanti",
      "piparpanti guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-13",
    "name": "Harpur Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.30678,
    "lon": 84.22174,
    "straightKm": 10.47,
    "roadKm": 12.8,
    "timeMins": 28,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "harpur nautan",
      "harpur nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-4-22",
    "name": "Mathia Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.32979,
    "lon": 84.17243,
    "straightKm": 10.51,
    "roadKm": 12.8,
    "timeMins": 28,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "mathia nautan",
      "mathia nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-4-43",
    "name": "Tali Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.33168,
    "lon": 84.15967,
    "straightKm": 10.53,
    "roadKm": 12.8,
    "timeMins": 28,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "tali nautan",
      "tali nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841243-1",
    "name": "Barkamanjha (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.32821,
    "lon": 84.18031,
    "straightKm": 10.53,
    "roadKm": 12.8,
    "timeMins": 28,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "barkamanjha, nautan",
      "barkamanjha",
      "barkamanzha",
      "varkamanjha",
      "barkamanjha nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-2-18",
    "name": "Bhatkan Khem (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21444,
    "lon": 84.25363,
    "straightKm": 10.57,
    "roadKm": 12.9,
    "timeMins": 28,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhatkan khem",
      "vhatkan khem",
      "bhatkan khem ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-95",
    "name": "Talidal Chand (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.21973,
    "lon": 84.04679,
    "straightKm": 10.56,
    "roadKm": 12.9,
    "timeMins": 28,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "talidal chand",
      "talidal chand guthani block",
      "guthani block"
    ]
  },
  {
    "id": "PIN-841245-16",
    "name": "Shiopur Sakra (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.24543,
    "lon": 84.25639,
    "straightKm": 10.57,
    "roadKm": 12.9,
    "timeMins": 28,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "shiopur sakra, ziradei",
      "shiopur sakra",
      "siopur sakra",
      "shiopur sakra ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "CEN-2-13",
    "name": "Bhalua Makund (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22593,
    "lon": 84.25649,
    "straightKm": 10.62,
    "roadKm": 13,
    "timeMins": 29,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhalua makund",
      "vhalua makund",
      "bhalua makund ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-841235-9",
    "name": "Tariwani (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.14296,
    "lon": 84.13457,
    "straightKm": 10.62,
    "roadKm": 13,
    "timeMins": 29,
    "direction": "दक्षिण (South)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "tariwani, assaon",
      "tariwani",
      "tariwani assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "CEN-3-3",
    "name": "Bahelia (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17994,
    "lon": 84.06409,
    "straightKm": 10.75,
    "roadKm": 13.1,
    "timeMins": 29,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bahelia",
      "vahelia",
      "bahelia guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-13",
    "name": "Bhalua Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16798,
    "lon": 84.07629,
    "straightKm": 10.71,
    "roadKm": 13.1,
    "timeMins": 29,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhalua guthani",
      "vhalua guthani",
      "bhalua guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-2-31",
    "name": "Garar (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20592,
    "lon": 84.25348,
    "straightKm": 10.82,
    "roadKm": 13.2,
    "timeMins": 29,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "garar",
      "garar ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-44",
    "name": "Khargi Rampur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.19817,
    "lon": 84.24979,
    "straightKm": 10.79,
    "roadKm": 13.2,
    "timeMins": 29,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khargi rampur",
      "khargi rampur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-9-7",
    "name": "Bhatpar Rani Bazar (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.2332,
    "lon": 84.04212,
    "straightKm": 10.85,
    "roadKm": 13.2,
    "timeMins": 29,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhatpar rani bazar",
      "bhatpar rani bajar",
      "vhatpar rani bazar",
      "bhatpar rani bazar bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "PIN-841435-0",
    "name": "Balua (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.172,
    "lon": 84.07,
    "straightKm": 10.85,
    "roadKm": 13.2,
    "timeMins": 29,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "balua, guthani",
      "balua",
      "valua",
      "balua guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "CEN-2-37",
    "name": "Harpur Madanpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2531,
    "lon": 84.25896,
    "straightKm": 10.93,
    "roadKm": 13.3,
    "timeMins": 29,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "harpur madanpur",
      "harpur madanpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-26",
    "name": "Chilamarwa (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16109,
    "lon": 84.0816,
    "straightKm": 10.93,
    "roadKm": 13.3,
    "timeMins": 29,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chilamarwa",
      "chilamarwa guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-61",
    "name": "Kurmha (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20948,
    "lon": 84.04585,
    "straightKm": 10.92,
    "roadKm": 13.3,
    "timeMins": 29,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kurmha",
      "kurmha guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-3",
    "name": "Bara Shikuara (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.32231,
    "lon": 84.2059,
    "straightKm": 10.93,
    "roadKm": 13.3,
    "timeMins": 29,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bara shikuara",
      "vara shikuara",
      "bara sikuara",
      "bara shikuara nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841435-6",
    "name": "Srikalpur (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.19518,
    "lon": 84.05179,
    "straightKm": 10.93,
    "roadKm": 13.3,
    "timeMins": 29,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "srikalpur, guthani",
      "srikalpur",
      "srikalpur guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "PIN-841243-9",
    "name": "Pachphera (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.33496,
    "lon": 84.14257,
    "straightKm": 10.89,
    "roadKm": 13.3,
    "timeMins": 29,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pachphera, nautan",
      "pachphera",
      "pachfera",
      "pachphera nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-4-6",
    "name": "Bishambharpur (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.3286,
    "lon": 84.19354,
    "straightKm": 11.01,
    "roadKm": 13.4,
    "timeMins": 29,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bishambharpur",
      "vishambharpur",
      "bisambharpur",
      "bishambharpur nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841235-6",
    "name": "Mathia (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.14318,
    "lon": 84.18379,
    "straightKm": 10.97,
    "roadKm": 13.4,
    "timeMins": 29,
    "direction": "दक्षिण (South)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "mathia, assaon",
      "mathia",
      "mathia assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "CEN-2-21",
    "name": "Bikaur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23316,
    "lon": 84.26152,
    "straightKm": 11.05,
    "roadKm": 13.5,
    "timeMins": 30,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bikaur",
      "vikaur",
      "bikaur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-60",
    "name": "Kurmauli (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15273,
    "lon": 84.092,
    "straightKm": 11.09,
    "roadKm": 13.5,
    "timeMins": 30,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kurmauli",
      "kurmauli guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-14",
    "name": "Hathaunji (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.33258,
    "lon": 84.18353,
    "straightKm": 11.08,
    "roadKm": 13.5,
    "timeMins": 30,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "hathaunji",
      "hathaunzi",
      "hathaunji nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-1",
    "name": "Bankata Railway Station (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.26744,
    "lon": 84.0447,
    "straightKm": 11.1,
    "roadKm": 13.5,
    "timeMins": 30,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bankata railway station",
      "vankata railway station",
      "bankata railway station bankata & bhatpar rani (up border belt)",
      "station",
      "railway station",
      "relwe station",
      "teshan",
      "स्टेशन",
      "रेलवे स्टेशन",
      "टेशन",
      "bazar",
      "bazaar"
    ]
  },
  {
    "id": "CEN-2-29",
    "name": "Fajulhi (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.24289,
    "lon": 84.26253,
    "straightKm": 11.16,
    "roadKm": 13.6,
    "timeMins": 30,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "fajulhi",
      "fazulhi",
      "fajulhi ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-8",
    "name": "Dewan Chak (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.31868,
    "lon": 84.2163,
    "straightKm": 11.16,
    "roadKm": 13.6,
    "timeMins": 30,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "dewan chak",
      "dewan chak nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841235-3",
    "name": "Harnatar (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.15808,
    "lon": 84.21922,
    "straightKm": 11.15,
    "roadKm": 13.6,
    "timeMins": 30,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "harnatar, assaon",
      "harnatar",
      "harnatar assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "CEN-2-26",
    "name": "Chhitanpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21897,
    "lon": 84.26187,
    "straightKm": 11.26,
    "roadKm": 13.7,
    "timeMins": 30,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chhitanpur",
      "chitanpur",
      "chhitanpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-58",
    "name": "Pakaulia (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.26201,
    "lon": 84.26005,
    "straightKm": 11.23,
    "roadKm": 13.7,
    "timeMins": 30,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pakaulia",
      "pakaulia ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-6",
    "name": "Bangra Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18478,
    "lon": 84.05456,
    "straightKm": 11.24,
    "roadKm": 13.7,
    "timeMins": 30,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bangra guthani",
      "vangra guthani",
      "bangra guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-27",
    "name": "Chiraua (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19643,
    "lon": 84.04778,
    "straightKm": 11.24,
    "roadKm": 13.7,
    "timeMins": 30,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chiraua",
      "chiraua guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-6-56",
    "name": "Sultanpur Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.16456,
    "lon": 84.22924,
    "straightKm": 11.26,
    "roadKm": 13.7,
    "timeMins": 30,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sultanpur andar",
      "sultanpur andar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-2-79",
    "name": "Titara (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.27036,
    "lon": 84.25848,
    "straightKm": 11.35,
    "roadKm": 13.8,
    "timeMins": 30,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "titara",
      "titara ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-47",
    "name": "Khalwa Bazar (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.29874,
    "lon": 84.241,
    "straightKm": 11.29,
    "roadKm": 13.8,
    "timeMins": 30,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khalwa bazar",
      "khalwa bajar",
      "khalwa bazar nautan block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-2-78",
    "name": "Thepaha Raja Ram (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.18668,
    "lon": 84.25009,
    "straightKm": 11.39,
    "roadKm": 13.9,
    "timeMins": 31,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "thepaha raja ram",
      "thepaha raza ram",
      "thepaha raja ram ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-0",
    "name": "Arazi Ekbari (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.172,
    "lon": 84.063,
    "straightKm": 11.38,
    "roadKm": 13.9,
    "timeMins": 31,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "arazi ekbari",
      "araji ekbari",
      "arazi ekbari guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-9-6",
    "name": "Sohanpur (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.28324,
    "lon": 84.04822,
    "straightKm": 11.43,
    "roadKm": 13.9,
    "timeMins": 31,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sohanpur",
      "sohanpur bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "CEN-3-5",
    "name": "Balua (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16542,
    "lon": 84.06834,
    "straightKm": 11.47,
    "roadKm": 14,
    "timeMins": 31,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "balua",
      "valua",
      "balua guthani block",
      "guthani block"
    ]
  },
  {
    "id": "PIN-841435-5",
    "name": "Guthni (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.16555,
    "lon": 84.06812,
    "straightKm": 11.48,
    "roadKm": 14,
    "timeMins": 31,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "guthni, guthani",
      "guthni",
      "guthni guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "PIN-841235-1",
    "name": "Done (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.13621,
    "lon": 84.17231,
    "straightKm": 11.45,
    "roadKm": 14,
    "timeMins": 31,
    "direction": "दक्षिण (South)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "done, assaon",
      "done",
      "done assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "CEN-3-39",
    "name": "Gareria (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15286,
    "lon": 84.08321,
    "straightKm": 11.56,
    "roadKm": 14.1,
    "timeMins": 31,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gareria",
      "gareria guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-82",
    "name": "Rewasi (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.2131,
    "lon": 84.03829,
    "straightKm": 11.54,
    "roadKm": 14.1,
    "timeMins": 31,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "rewasi",
      "rewasi guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-94",
    "name": "Tali Khurd (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14453,
    "lon": 84.09829,
    "straightKm": 11.57,
    "roadKm": 14.1,
    "timeMins": 31,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "tali khurd",
      "tali khurd guthani block",
      "guthani block"
    ]
  },
  {
    "id": "KS-033",
    "curated": true,
    "name": "Guthani Bazar & Block (गुठनी बाज़ार एवं चौराहा)",
    "category": "Town / Block",
    "lat": 26.172,
    "lon": 84.058,
    "straightKm": 11.76,
    "roadKm": 14.2,
    "timeMins": 24,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block Belt",
    "aliases": [
      "guthani",
      "guthni",
      "guthani bazar",
      "guthani chauraha",
      "गुठनी",
      "गुठनी बाजार",
      "गुठनी चौराहा"
    ]
  },
  {
    "id": "CEN-2-39",
    "name": "Hasua (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21065,
    "lon": 84.26349,
    "straightKm": 11.62,
    "roadKm": 14.2,
    "timeMins": 31,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "hasua",
      "hasua ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-65",
    "name": "Repura (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.1937,
    "lon": 84.25729,
    "straightKm": 11.68,
    "roadKm": 14.2,
    "timeMins": 31,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "repura",
      "repura ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-21",
    "name": "Marachhi (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.31606,
    "lon": 84.22819,
    "straightKm": 11.67,
    "roadKm": 14.2,
    "timeMins": 31,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "marachhi",
      "marachi",
      "marachhi nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-4-34",
    "name": "Rampur Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.30882,
    "lon": 84.23629,
    "straightKm": 11.66,
    "roadKm": 14.2,
    "timeMins": 31,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "rampur nautan",
      "rampur nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-4-35",
    "name": "Sagra (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.34061,
    "lon": 84.17154,
    "straightKm": 11.67,
    "roadKm": 14.2,
    "timeMins": 31,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sagra",
      "sagra nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841243-6",
    "name": "Keelpur (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.33518,
    "lon": 84.19179,
    "straightKm": 11.62,
    "roadKm": 14.2,
    "timeMins": 31,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "keelpur, nautan",
      "keelpur",
      "kilpur",
      "keelpur nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-2-34",
    "name": "Gonthi (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22753,
    "lon": 84.26783,
    "straightKm": 11.72,
    "roadKm": 14.3,
    "timeMins": 31,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gonthi",
      "gonthi ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-50",
    "name": "Manian (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.25092,
    "lon": 84.26746,
    "straightKm": 11.73,
    "roadKm": 14.3,
    "timeMins": 31,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "manian",
      "manian ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-52",
    "name": "Miyan Ke Bhathkan (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20195,
    "lon": 84.26187,
    "straightKm": 11.76,
    "roadKm": 14.3,
    "timeMins": 31,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "miyan ke bhathkan",
      "miyan ke bhathkan ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-14",
    "name": "Bhalui (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18785,
    "lon": 84.04686,
    "straightKm": 11.74,
    "roadKm": 14.3,
    "timeMins": 31,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhalui",
      "vhalui",
      "bhalui guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-48",
    "name": "Karamdaha (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20222,
    "lon": 84.04029,
    "straightKm": 11.7,
    "roadKm": 14.3,
    "timeMins": 31,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "karamdaha",
      "karamdaha guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-6-48",
    "name": "Pipra Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.17212,
    "lon": 84.24325,
    "straightKm": 11.73,
    "roadKm": 14.3,
    "timeMins": 31,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pipra andar",
      "pipra andar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-3-18",
    "name": "Bihari Buzurg (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15661,
    "lon": 84.07346,
    "straightKm": 11.84,
    "roadKm": 14.4,
    "timeMins": 32,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bihari buzurg",
      "bihari bujurg",
      "vihari buzurg",
      "bihari buzurg guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-9-28",
    "name": "lar Road (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.20794,
    "lon": 84.03699,
    "straightKm": 11.81,
    "roadKm": 14.4,
    "timeMins": 32,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "lar road",
      "lar road bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "CEN-2-42",
    "name": "Jiradei (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23877,
    "lon": 84.27,
    "straightKm": 11.89,
    "roadKm": 14.5,
    "timeMins": 32,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "jiradei",
      "ziradei",
      "jiradei ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-1",
    "name": "Arazi Ekwari (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17678,
    "lon": 84.05278,
    "straightKm": 11.87,
    "roadKm": 14.5,
    "timeMins": 32,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "arazi ekwari",
      "araji ekwari",
      "arazi ekwari guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-87",
    "name": "Tiar (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.1317,
    "lon": 84.13444,
    "straightKm": 11.86,
    "roadKm": 14.5,
    "timeMins": 32,
    "direction": "दक्षिण (South)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "tiar",
      "tiar darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-9-4",
    "name": "Shrirampur (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.25415,
    "lon": 84.03325,
    "straightKm": 11.87,
    "roadKm": 14.5,
    "timeMins": 32,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "shrirampur",
      "srirampur",
      "shrirampur bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-4-11",
    "name": "Gandharpa (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.33347,
    "lon": 84.20473,
    "straightKm": 11.97,
    "roadKm": 14.6,
    "timeMins": 32,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gandharpa",
      "gandharpa nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-274703-4",
    "name": "Hata (Pratappur, PIN 274703)",
    "category": "Post Office / Village",
    "lat": 26.26758,
    "lon": 84.03591,
    "straightKm": 11.94,
    "roadKm": 14.6,
    "timeMins": 32,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "hata, pratappur",
      "hata",
      "hata pratappur",
      "pratappur",
      "274703"
    ]
  },
  {
    "id": "CEN-2-71",
    "name": "Shakra (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2593,
    "lon": 84.26938,
    "straightKm": 12.07,
    "roadKm": 14.7,
    "timeMins": 32,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "shakra",
      "sakra",
      "shakra ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "PIN-274702-0",
    "name": "Ahirauli Baghel (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.265,
    "lon": 84.034,
    "straightKm": 12.05,
    "roadKm": 14.7,
    "timeMins": 32,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "ahirauli baghel, bhatpar rani",
      "ahirauli baghel",
      "ahirauli baghel bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "PIN-274702-5",
    "name": "Bhatpar Rani (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.25855,
    "lon": 84.03212,
    "straightKm": 12.07,
    "roadKm": 14.7,
    "timeMins": 32,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhatpar rani, bhatpar rani",
      "bhatpar rani",
      "vhatpar rani",
      "bhatpar rani bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-3-73",
    "name": "Olia (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14323,
    "lon": 84.09001,
    "straightKm": 12.09,
    "roadKm": 14.8,
    "timeMins": 33,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "olia",
      "olia guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-6-43",
    "name": "Pandapali (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.15362,
    "lon": 84.22873,
    "straightKm": 12.13,
    "roadKm": 14.8,
    "timeMins": 33,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pandapali",
      "pandapali andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-9-19",
    "name": "sikatiya (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.30213,
    "lon": 84.05296,
    "straightKm": 12.13,
    "roadKm": 14.8,
    "timeMins": 33,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sikatiya",
      "sikatiya bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-841245-3",
    "name": "Bhaisakhal (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.26808,
    "lon": 84.26722,
    "straightKm": 12.1,
    "roadKm": 14.8,
    "timeMins": 33,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhaisakhal, ziradei",
      "bhaisakhal",
      "vhaisakhal",
      "bhaisakhal ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-841243-11",
    "name": "Semaria (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.33489,
    "lon": 84.20522,
    "straightKm": 12.13,
    "roadKm": 14.8,
    "timeMins": 33,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "semaria, nautan",
      "semaria",
      "semaria nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-2-47",
    "name": "Mahmudpur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21967,
    "lon": 84.2715,
    "straightKm": 12.2,
    "roadKm": 14.9,
    "timeMins": 33,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "mahmudpur",
      "mahmudpur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-16",
    "name": "Khalwa (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.32926,
    "lon": 84.21848,
    "straightKm": 12.25,
    "roadKm": 14.9,
    "timeMins": 33,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khalwa",
      "khalwa nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-6-35",
    "name": "Mahammadpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.16207,
    "lon": 84.23996,
    "straightKm": 12.21,
    "roadKm": 14.9,
    "timeMins": 33,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "mahammadpur",
      "mahammadpur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-3-2",
    "name": "Arazi Inglish Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16337,
    "lon": 84.05876,
    "straightKm": 12.33,
    "roadKm": 15,
    "timeMins": 33,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "arazi inglish guthani",
      "araji inglish guthani",
      "arazi inglis guthani",
      "arazi inglish guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-35",
    "name": "Dhanauti (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19404,
    "lon": 84.03762,
    "straightKm": 12.28,
    "roadKm": 15,
    "timeMins": 33,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "dhanauti",
      "dhanauti guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-103",
    "name": "Sohagra Dham Mandir (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.21466,
    "lon": 84.03,
    "straightKm": 12.31,
    "roadKm": 15,
    "timeMins": 33,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sohagra dham mandir",
      "sohagra dham mandir guthani block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "mandir"
    ]
  },
  {
    "id": "CEN-4-27",
    "name": "Narkatia (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.34371,
    "lon": 84.18473,
    "straightKm": 12.3,
    "roadKm": 15,
    "timeMins": 33,
    "direction": "उत्तर (North)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "narkatia",
      "narkatia nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841435-1",
    "name": "Bhlua (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.18821,
    "lon": 84.04031,
    "straightKm": 12.3,
    "roadKm": 15,
    "timeMins": 33,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhlua, guthani",
      "bhlua",
      "vhlua",
      "bhlua guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "PIN-274702-3",
    "name": "Barka Gaon (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.30308,
    "lon": 84.05122,
    "straightKm": 12.33,
    "roadKm": 15,
    "timeMins": 33,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "barka gaon, bhatpar rani",
      "barka gaon",
      "varka gaon",
      "barka gaon bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-3-10",
    "name": "Belaur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15697,
    "lon": 84.06503,
    "straightKm": 12.37,
    "roadKm": 15.1,
    "timeMins": 33,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "belaur",
      "velaur",
      "belaur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-69",
    "name": "Misir Chhapara (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20498,
    "lon": 84.03221,
    "straightKm": 12.37,
    "roadKm": 15.1,
    "timeMins": 33,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "misir chhapara",
      "misir chapara",
      "misir chhapara guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-19",
    "name": "Kilpur (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.34102,
    "lon": 84.19666,
    "straightKm": 12.4,
    "roadKm": 15.1,
    "timeMins": 33,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "kilpur",
      "kilpur nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841237-1",
    "name": "Bhikhpur (Bhatpokhar, PIN 841237)",
    "category": "Post Office / Village",
    "lat": 26.28621,
    "lon": 84.26231,
    "straightKm": 12.38,
    "roadKm": 15.1,
    "timeMins": 33,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bhikhpur, bhatpokhar",
      "bhikhpur",
      "vhikhpur",
      "bhikhpur bhatpokhar",
      "bhatpokhar",
      "841237"
    ]
  },
  {
    "id": "CEN-2-55",
    "name": "Nandpali (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23193,
    "lon": 84.27581,
    "straightKm": 12.48,
    "roadKm": 15.2,
    "timeMins": 33,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "nandpali",
      "nandpali ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-60",
    "name": "Pathardei (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21051,
    "lon": 84.27238,
    "straightKm": 12.49,
    "roadKm": 15.2,
    "timeMins": 33,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pathardei",
      "pathardei ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-2-63",
    "name": "Pokhrera (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.2458,
    "lon": 84.27527,
    "straightKm": 12.45,
    "roadKm": 15.2,
    "timeMins": 33,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pokhrera",
      "pokhrera ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-52",
    "name": "Khap Lebhri (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14426,
    "lon": 84.08161,
    "straightKm": 12.44,
    "roadKm": 15.2,
    "timeMins": 33,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khap lebhri",
      "khap lebhri guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-74",
    "name": "Rahtawa (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.1277,
    "lon": 84.12316,
    "straightKm": 12.5,
    "roadKm": 15.2,
    "timeMins": 33,
    "direction": "दक्षिण (South)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "rahtawa",
      "rahtawa darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-274702-10",
    "name": "Maripar (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.25412,
    "lon": 84.02707,
    "straightKm": 12.48,
    "roadKm": 15.2,
    "timeMins": 33,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "maripar, bhatpar rani",
      "maripar",
      "maripar bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "PIN-274704-4",
    "name": "Sohanpur (Bankata, PIN 274704)",
    "category": "Post Office / Village",
    "lat": 26.24158,
    "lon": 84.02591,
    "straightKm": 12.47,
    "roadKm": 15.2,
    "timeMins": 33,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sohanpur, bankata",
      "sohanpur",
      "sohanpur bankata",
      "bankata",
      "274704"
    ]
  },
  {
    "id": "CEN-2-86",
    "name": "Titra Dhala (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.19165,
    "lon": 84.26551,
    "straightKm": 12.52,
    "roadKm": 15.3,
    "timeMins": 34,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "titra dhala",
      "titra dhala ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-31",
    "name": "Damodra (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14819,
    "lon": 84.07331,
    "straightKm": 12.57,
    "roadKm": 15.3,
    "timeMins": 34,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "damodra",
      "damodra guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-9-20",
    "name": "Ruhiadih (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.22325,
    "lon": 84.02599,
    "straightKm": 12.55,
    "roadKm": 15.3,
    "timeMins": 34,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "ruhiadih",
      "ruhiadih bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-274702-2",
    "name": "Bankata Amethia (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.22914,
    "lon": 84.02514,
    "straightKm": 12.57,
    "roadKm": 15.3,
    "timeMins": 34,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bankata amethia, bhatpar rani",
      "bankata amethia",
      "vankata amethia",
      "bankata amethia bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-2-73",
    "name": "Sikia (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.20091,
    "lon": 84.27037,
    "straightKm": 12.6,
    "roadKm": 15.4,
    "timeMins": 34,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sikia",
      "sikia ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-9",
    "name": "Bauri (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17804,
    "lon": 84.04337,
    "straightKm": 12.58,
    "roadKm": 15.4,
    "timeMins": 34,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bauri",
      "vauri",
      "bauri guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-22",
    "name": "Chain Chhapra (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18571,
    "lon": 84.0383,
    "straightKm": 12.61,
    "roadKm": 15.4,
    "timeMins": 34,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "chain chhapra",
      "chain chapra",
      "chain chhapra guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-79",
    "name": "Saraharwa (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.12399,
    "lon": 84.15133,
    "straightKm": 12.6,
    "roadKm": 15.4,
    "timeMins": 34,
    "direction": "दक्षिण (South)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "saraharwa",
      "saraharwa darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-9-12",
    "name": "Jaitpura (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.24014,
    "lon": 84.02418,
    "straightKm": 12.63,
    "roadKm": 15.4,
    "timeMins": 34,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "jaitpura",
      "zaitpura",
      "jaitpura bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "KS-036",
    "curated": true,
    "name": "Bhatpar Rani (भाटपार रानी — देवरिया, UP)",
    "category": "Town / Railway Station",
    "lat": 26.265,
    "lon": 84.022,
    "straightKm": 13.21,
    "roadKm": 15.5,
    "timeMins": 26,
    "direction": "पश्चिम (West — UP)",
    "zone": "Zone 3 — Outer Block & UP Border Belt",
    "aliases": [
      "bhatpar",
      "bhatpar rani",
      "bhatpaar",
      "भाटपार",
      "भाटपार रानी"
    ]
  },
  {
    "id": "CEN-5-66",
    "name": "Parasia Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.12369,
    "lon": 84.13982,
    "straightKm": 12.68,
    "roadKm": 15.5,
    "timeMins": 34,
    "direction": "दक्षिण (South)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "parasia darauli",
      "parasia darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-3-4",
    "name": "Bakulari (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17005,
    "lon": 84.04698,
    "straightKm": 12.78,
    "roadKm": 15.6,
    "timeMins": 34,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "bakulari",
      "vakulari",
      "bakulari guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-107",
    "name": "odkhor Chatti (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.13416,
    "lon": 84.09367,
    "straightKm": 12.81,
    "roadKm": 15.6,
    "timeMins": 34,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "odkhor chatti",
      "odkhor chatti guthani block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-29",
    "name": "Partappur Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.32855,
    "lon": 84.22949,
    "straightKm": 12.82,
    "roadKm": 15.6,
    "timeMins": 34,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "partappur nautan",
      "partappur nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-6-40",
    "name": "Moglanipur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.17372,
    "lon": 84.25796,
    "straightKm": 12.82,
    "roadKm": 15.6,
    "timeMins": 34,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "moglanipur",
      "moglanipur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-2-84",
    "name": "Narendrapur Bazar (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.25377,
    "lon": 84.27814,
    "straightKm": 12.83,
    "roadKm": 15.7,
    "timeMins": 35,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "narendrapur bazar",
      "narendrapur bajar",
      "narendrapur bazar ziradei block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-6-51",
    "name": "Sahsaraon (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.14049,
    "lon": 84.22102,
    "straightKm": 12.85,
    "roadKm": 15.7,
    "timeMins": 35,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sahsaraon",
      "sahsaraon andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-2-68",
    "name": "Salrapur (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22307,
    "lon": 84.27945,
    "straightKm": 12.93,
    "roadKm": 15.8,
    "timeMins": 35,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "salrapur",
      "salrapur ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-42",
    "name": "Siswa Nautan (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.32325,
    "lon": 84.23908,
    "straightKm": 12.99,
    "roadKm": 15.8,
    "timeMins": 35,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "siswa nautan",
      "siswa nautan nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-6-27",
    "name": "Jaijor (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.165,
    "lon": 84.25245,
    "straightKm": 12.94,
    "roadKm": 15.8,
    "timeMins": 35,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "jaijor",
      "zaizor",
      "jaijor andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-9-9",
    "name": "Nonar Pandey (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.26992,
    "lon": 84.02613,
    "straightKm": 12.95,
    "roadKm": 15.8,
    "timeMins": 35,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "nonar pandey",
      "nonar pandey bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-841245-18",
    "name": "Thepaha Bazar (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.19606,
    "lon": 84.27194,
    "straightKm": 12.92,
    "roadKm": 15.8,
    "timeMins": 35,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "thepaha bazar, ziradei",
      "thepaha bazar",
      "thepaha bajar",
      "thepaha bazar ziradei",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-2-76",
    "name": "Surujpura (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.23815,
    "lon": 84.28164,
    "straightKm": 13.05,
    "roadKm": 15.9,
    "timeMins": 35,
    "direction": "पूर्व (East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "surujpura",
      "suruzpura",
      "surujpura ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-56",
    "name": "Khilwa (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19607,
    "lon": 84.02888,
    "straightKm": 13,
    "roadKm": 15.9,
    "timeMins": 35,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "khilwa",
      "khilwa guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-24",
    "name": "Misrauli Khas (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.34018,
    "lon": 84.21415,
    "straightKm": 13.06,
    "roadKm": 15.9,
    "timeMins": 35,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "misrauli khas",
      "misrauli khas nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-3-90",
    "name": "Sohrai (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.20535,
    "lon": 84.02385,
    "straightKm": 13.16,
    "roadKm": 16,
    "timeMins": 35,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "sohrai",
      "sohrai guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-6-22",
    "name": "Gaura (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.15184,
    "lon": 84.24081,
    "straightKm": 13.08,
    "roadKm": 16,
    "timeMins": 35,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "gaura",
      "gaura andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-9-14",
    "name": "Pachरुखिया (Pachrukhia) (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.2893,
    "lon": 84.033,
    "straightKm": 13.09,
    "roadKm": 16,
    "timeMins": 35,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "pachरुखिया (pachrukhia)",
      "pachरुखिया",
      "pachरुखिया bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "PIN-274702-15",
    "name": "Tikampar (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.2531,
    "lon": 84.02043,
    "straightKm": 13.12,
    "roadKm": 16,
    "timeMins": 35,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & UP-Bihar Border Belt",
    "aliases": [
      "tikampar, bhatpar rani",
      "tikampar",
      "tikampar bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-2-81",
    "name": "Gangpaliya (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.21292,
    "lon": 84.28051,
    "straightKm": 13.22,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gangpaliya",
      "gangpaliya ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-3-7",
    "name": "Barpalia (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15944,
    "lon": 84.05148,
    "straightKm": 13.16,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barpalia",
      "varpalia",
      "barpalia guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-23",
    "name": "Chakia Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14808,
    "lon": 84.06338,
    "straightKm": 13.21,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chakia guthani",
      "chakia guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-86",
    "name": "Sarphora (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.13408,
    "lon": 84.0852,
    "straightKm": 13.22,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarphora",
      "sarfora",
      "sarphora guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-53",
    "name": "Mahuja (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.12034,
    "lon": 84.12955,
    "straightKm": 13.18,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mahuja",
      "mahuza",
      "mahuja darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-30",
    "name": "Katwar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.14373,
    "lon": 84.23191,
    "straightKm": 13.18,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "katwar",
      "katwar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-53",
    "name": "Sanchipur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.18013,
    "lon": 84.26665,
    "straightKm": 13.19,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sanchipur",
      "sanchipur andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841245-8",
    "name": "Makariyar (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.24642,
    "lon": 84.28311,
    "straightKm": 13.23,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "makariyar, ziradei",
      "makariyar",
      "makariyar ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-841237-2",
    "name": "Hathura (Bhatpokhar, PIN 841237)",
    "category": "Post Office / Village",
    "lat": 26.23414,
    "lon": 84.28314,
    "straightKm": 13.2,
    "roadKm": 16.1,
    "timeMins": 35,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hathura, bhatpokhar",
      "hathura",
      "hathura bhatpokhar",
      "bhatpokhar",
      "841237"
    ]
  },
  {
    "id": "CEN-5-82",
    "name": "Sham Bodi (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.12536,
    "lon": 84.10529,
    "straightKm": 13.25,
    "roadKm": 16.2,
    "timeMins": 36,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sham bodi",
      "sam bodi",
      "sham bodi darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841227-9",
    "name": "Khalishpur (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.23296,
    "lon": 84.28457,
    "straightKm": 13.35,
    "roadKm": 16.3,
    "timeMins": 36,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khalishpur, siwan",
      "khalishpur",
      "khalispur",
      "khalishpur siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-274702-11",
    "name": "Pakri Baboo (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.28789,
    "lon": 84.02922,
    "straightKm": 13.37,
    "roadKm": 16.3,
    "timeMins": 36,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pakri baboo, bhatpar rani",
      "pakri baboo",
      "pakri babu",
      "pakri baboo bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-3-15",
    "name": "Bharauli Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15215,
    "lon": 84.05543,
    "straightKm": 13.43,
    "roadKm": 16.4,
    "timeMins": 36,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bharauli guthani",
      "vharauli guthani",
      "bharauli guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-17",
    "name": "Bhulauli (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17288,
    "lon": 84.03679,
    "straightKm": 13.45,
    "roadKm": 16.4,
    "timeMins": 36,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhulauli",
      "vhulauli",
      "bhulauli guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-43",
    "name": "Harpur Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18716,
    "lon": 84.02847,
    "straightKm": 13.42,
    "roadKm": 16.4,
    "timeMins": 36,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "harpur guthani",
      "harpur guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-44",
    "name": "Jamuaon (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14053,
    "lon": 84.06966,
    "straightKm": 13.47,
    "roadKm": 16.4,
    "timeMins": 36,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jamuaon",
      "zamuaon",
      "jamuaon guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-65",
    "name": "Majhawalia Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.13611,
    "lon": 84.07708,
    "straightKm": 13.45,
    "roadKm": 16.4,
    "timeMins": 36,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "majhawalia guthani",
      "mazhawalia guthani",
      "majhawalia guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-40",
    "name": "Shahpur Misrauli (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.35292,
    "lon": 84.19056,
    "straightKm": 13.45,
    "roadKm": 16.4,
    "timeMins": 36,
    "direction": "उत्तर (North)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "shahpur misrauli",
      "sahpur misrauli",
      "shahpur misrauli nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-5-61",
    "name": "Narauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.12119,
    "lon": 84.114,
    "straightKm": 13.43,
    "roadKm": 16.4,
    "timeMins": 36,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "narauli",
      "narauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "KS-034",
    "curated": true,
    "name": "Sohagra Dham / Baba Hansnath Temple (सोहगरा धाम — बाबा हंसनाथ मंदिर)",
    "category": "Famous Temple",
    "lat": 26.192,
    "lon": 84.022,
    "straightKm": 13.8,
    "roadKm": 16.5,
    "timeMins": 28,
    "direction": "पश्चिम (West)",
    "zone": "Zone 3 — Outer Block & Border Belt",
    "aliases": [
      "sohagra",
      "sohagara",
      "sohagra dham",
      "hansnath baba",
      "सोहगरा",
      "सोहगरा धाम",
      "हंसनाथ बाबा"
    ]
  },
  {
    "id": "CEN-2-89",
    "name": "Dr Rajendra Prasad Smarak Ziradei (Ziradei Block)",
    "category": "Village (Ziradei Block)",
    "lat": 26.22847,
    "lon": 84.28598,
    "straightKm": 13.52,
    "roadKm": 16.5,
    "timeMins": 36,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dr rajendra prasad smarak ziradei",
      "dr rajendra prasad smarak jiradei",
      "dr razendra prasad smarak ziradei",
      "dr rajendra prasad smarak ziradei ziradei block",
      "ziradei block"
    ]
  },
  {
    "id": "CEN-4-32",
    "name": "Rahimpur (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.34877,
    "lon": 84.20432,
    "straightKm": 13.49,
    "roadKm": 16.5,
    "timeMins": 36,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rahimpur",
      "rahimpur nautan block",
      "nautan block"
    ]
  },
  {
    "id": "PIN-841245-13",
    "name": "Piprahiya (Ziradei, PIN 841245)",
    "category": "Post Office / Village",
    "lat": 26.21961,
    "lon": 84.28486,
    "straightKm": 13.51,
    "roadKm": 16.5,
    "timeMins": 36,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "piprahiya, ziradei",
      "piprahiya",
      "piprahiya ziradei",
      "ziradei",
      "841245"
    ]
  },
  {
    "id": "PIN-841234-3",
    "name": "Darauli (Darauli, PIN 841234)",
    "category": "Post Office / Village",
    "lat": 26.11608,
    "lon": 84.15722,
    "straightKm": 13.5,
    "roadKm": 16.5,
    "timeMins": 36,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "darauli, darauli",
      "darauli",
      "darauli darauli",
      "841234"
    ]
  },
  {
    "id": "CEN-3-12",
    "name": "Bhagwanpur Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16295,
    "lon": 84.04239,
    "straightKm": 13.62,
    "roadKm": 16.6,
    "timeMins": 37,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhagwanpur guthani",
      "vhagwanpur guthani",
      "bhagwanpur guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-30",
    "name": "Chorbharia (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.1791,
    "lon": 84.03106,
    "straightKm": 13.59,
    "roadKm": 16.6,
    "timeMins": 37,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chorbharia",
      "chorbharia guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-6-14",
    "name": "Chitaur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.15447,
    "lon": 84.25131,
    "straightKm": 13.62,
    "roadKm": 16.6,
    "timeMins": 37,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chitaur",
      "chitaur andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841231-1",
    "name": "Bhwrajpur (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.15121,
    "lon": 84.24731,
    "straightKm": 13.58,
    "roadKm": 16.6,
    "timeMins": 37,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhwrajpur, andar",
      "bhwrajpur",
      "bhwrazpur",
      "vhwrajpur",
      "bhwrajpur andar",
      "andar",
      "841231"
    ]
  },
  {
    "id": "PIN-841227-4",
    "name": "Benusar Bujurg (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.19958,
    "lon": 84.28091,
    "straightKm": 13.64,
    "roadKm": 16.6,
    "timeMins": 37,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "benusar bujurg, siwan",
      "benusar bujurg",
      "benusar buzurg",
      "venusar bujurg",
      "benusar bujurg siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "CEN-5-45",
    "name": "Khor (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.11422,
    "lon": 84.14275,
    "straightKm": 13.71,
    "roadKm": 16.7,
    "timeMins": 37,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khor",
      "khor darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-58",
    "name": "Munjwania (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.11447,
    "lon": 84.15312,
    "straightKm": 13.66,
    "roadKm": 16.7,
    "timeMins": 37,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "munjwania",
      "munzwania",
      "munjwania darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841243-8",
    "name": "Nautan (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.32842,
    "lon": 84.24311,
    "straightKm": 13.68,
    "roadKm": 16.7,
    "timeMins": 37,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nautan, nautan",
      "nautan",
      "nautan nautan",
      "841243"
    ]
  },
  {
    "id": "PIN-841231-4",
    "name": "Jaijore (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.12458,
    "lon": 84.20591,
    "straightKm": 13.69,
    "roadKm": 16.7,
    "timeMins": 37,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jaijore, andar",
      "jaijore",
      "zaizore",
      "jaijore andar",
      "andar",
      "841231"
    ]
  },
  {
    "id": "CEN-4-37",
    "name": "Semra Buzurg (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.34165,
    "lon": 84.22491,
    "straightKm": 13.75,
    "roadKm": 16.8,
    "timeMins": 37,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "semra buzurg",
      "semra bujurg",
      "semra buzurg nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-3-77",
    "name": "Panrepar (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19536,
    "lon": 84.02049,
    "straightKm": 13.81,
    "roadKm": 16.9,
    "timeMins": 37,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "panrepar",
      "panrepar guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-9-27",
    "name": "BRDPG College Bhatpar Rani (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.30622,
    "lon": 84.03482,
    "straightKm": 13.87,
    "roadKm": 16.9,
    "timeMins": 37,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "brdpg college bhatpar rani",
      "vrdpg college bhatpar rani",
      "brdpg college bhatpar rani bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-9-17",
    "name": "Khoribari (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.25973,
    "lon": 84.01313,
    "straightKm": 13.96,
    "roadKm": 17,
    "timeMins": 37,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khoribari",
      "khoribari bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-841231-6",
    "name": "Nadiwan (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.15818,
    "lon": 84.25879,
    "straightKm": 13.91,
    "roadKm": 17,
    "timeMins": 37,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nadiwan, andar",
      "nadiwan",
      "nadiwan andar",
      "andar",
      "841231"
    ]
  },
  {
    "id": "CEN-5-40",
    "name": "Karnai (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.11432,
    "lon": 84.1214,
    "straightKm": 13.99,
    "roadKm": 17.1,
    "timeMins": 38,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "karnai",
      "karnai darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-19",
    "name": "Fatehpur Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.16246,
    "lon": 84.26373,
    "straightKm": 14.01,
    "roadKm": 17.1,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "fatehpur andar",
      "fatehpur andar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-38",
    "name": "Mirpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.13146,
    "lon": 84.22678,
    "straightKm": 14,
    "roadKm": 17.1,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mirpur",
      "mirpur andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841235-0",
    "name": "Belaon (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.12,
    "lon": 84.202,
    "straightKm": 14.01,
    "roadKm": 17.1,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "belaon, assaon",
      "belaon",
      "velaon",
      "belaon assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "PIN-841235-8",
    "name": "Murena (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.13642,
    "lon": 84.23511,
    "straightKm": 14.02,
    "roadKm": 17.1,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "murena, assaon",
      "murena",
      "murena assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "CEN-3-36",
    "name": "Dharampur Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14156,
    "lon": 84.05814,
    "straightKm": 14.1,
    "roadKm": 17.2,
    "timeMins": 38,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dharampur guthani",
      "dharampur guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-71",
    "name": "Pihuli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.11139,
    "lon": 84.16376,
    "straightKm": 14.06,
    "roadKm": 17.2,
    "timeMins": 38,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pihuli",
      "pihuli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-3-20",
    "name": "Bishunpura Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.1544,
    "lon": 84.04331,
    "straightKm": 14.15,
    "roadKm": 17.3,
    "timeMins": 38,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bishunpura guthani",
      "vishunpura guthani",
      "bisunpura guthani",
      "bishunpura guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-32",
    "name": "Harnatanr (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.11064,
    "lon": 84.13361,
    "straightKm": 14.19,
    "roadKm": 17.3,
    "timeMins": 38,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "harnatanr",
      "harnatanr darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-32",
    "name": "Kherhai (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.16979,
    "lon": 84.27098,
    "straightKm": 14.15,
    "roadKm": 17.3,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kherhai",
      "kherhai andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841240-2",
    "name": "Merhi (Don, PIN 841240)",
    "category": "Post Office / Village",
    "lat": 26.11414,
    "lon": 84.11314,
    "straightKm": 14.2,
    "roadKm": 17.3,
    "timeMins": 38,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "merhi, don",
      "merhi",
      "merhi don",
      "don",
      "841240"
    ]
  },
  {
    "id": "CEN-3-25",
    "name": "Chaumukha Khurd (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16425,
    "lon": 84.03369,
    "straightKm": 14.23,
    "roadKm": 17.4,
    "timeMins": 38,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chaumukha khurd",
      "chaumukha khurd guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-64",
    "name": "Mairitanr Diara (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18548,
    "lon": 84.01998,
    "straightKm": 14.27,
    "roadKm": 17.4,
    "timeMins": 38,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mairitanr diara",
      "mairitanr diara guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-6-9",
    "name": "Bhaurajpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.14242,
    "lon": 84.24704,
    "straightKm": 14.27,
    "roadKm": 17.4,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhaurajpur",
      "bhaurazpur",
      "vhaurajpur",
      "bhaurajpur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-17",
    "name": "Dharamkhor (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.13608,
    "lon": 84.23895,
    "straightKm": 14.29,
    "roadKm": 17.4,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dharamkhor",
      "dharamkhor andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-59",
    "name": "Asaon Bazar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.12433,
    "lon": 84.21861,
    "straightKm": 14.27,
    "roadKm": 17.4,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "asaon bazar",
      "asaon bajar",
      "asaon bazar andar block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-3-28",
    "name": "Chit Bisraon (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14665,
    "lon": 84.04888,
    "straightKm": 14.32,
    "roadKm": 17.5,
    "timeMins": 39,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chit bisraon",
      "chit bisraon guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-99",
    "name": "Tekania (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.12603,
    "lon": 84.07775,
    "straightKm": 14.36,
    "roadKm": 17.5,
    "timeMins": 39,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tekania",
      "tekania guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-4-45",
    "name": "Nautan Block Chauraha (Nautan Block)",
    "category": "Village (Nautan Block)",
    "lat": 26.3528,
    "lon": 84.21462,
    "straightKm": 14.33,
    "roadKm": 17.5,
    "timeMins": 39,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nautan block chauraha",
      "nautan block chauraha nautan block",
      "nautan block"
    ]
  },
  {
    "id": "CEN-9-25",
    "name": "coca Cola More Bhatpar (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.24269,
    "lon": 84.00701,
    "straightKm": 14.35,
    "roadKm": 17.5,
    "timeMins": 39,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "coca cola more bhatpar",
      "coca cola more bhatpar bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "PIN-841435-2",
    "name": "Chakari (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.13614,
    "lon": 84.06114,
    "straightKm": 14.38,
    "roadKm": 17.5,
    "timeMins": 39,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chakari, guthani",
      "chakari",
      "chakari guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "PIN-841235-4",
    "name": "Kanhauli (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.10958,
    "lon": 84.13091,
    "straightKm": 14.34,
    "roadKm": 17.5,
    "timeMins": 39,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kanhauli, assaon",
      "kanhauli",
      "kanhauli assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "CEN-3-57",
    "name": "Khirauli (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.13426,
    "lon": 84.06326,
    "straightKm": 14.41,
    "roadKm": 17.6,
    "timeMins": 39,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khirauli",
      "khirauli guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-9-22",
    "name": "Hata Bankata (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.28506,
    "lon": 84.01611,
    "straightKm": 14.44,
    "roadKm": 17.6,
    "timeMins": 39,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hata bankata",
      "hata bankata bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी",
      "bankata & bhatpar rani (up border belt)"
    ]
  },
  {
    "id": "CEN-3-38",
    "name": "Ekwari (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16912,
    "lon": 84.02688,
    "straightKm": 14.51,
    "roadKm": 17.7,
    "timeMins": 39,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ekwari",
      "ekwari guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-51",
    "name": "Khap Jataur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17647,
    "lon": 84.0222,
    "straightKm": 14.51,
    "roadKm": 17.7,
    "timeMins": 39,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khap jataur",
      "khap zataur",
      "khap jataur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-78",
    "name": "Parari (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.12916,
    "lon": 84.06995,
    "straightKm": 14.48,
    "roadKm": 17.7,
    "timeMins": 39,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "parari",
      "parari guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-48",
    "name": "Lachhuman Chak (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.11282,
    "lon": 84.1076,
    "straightKm": 14.5,
    "roadKm": 17.7,
    "timeMins": 39,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lachhuman chak",
      "lachuman chak",
      "lachhuman chak darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-69",
    "name": "Paterha (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.116,
    "lon": 84.09829,
    "straightKm": 14.47,
    "roadKm": 17.7,
    "timeMins": 39,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "paterha",
      "paterha darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841237-0",
    "name": "Ballia (Bhatpokhar, PIN 841237)",
    "category": "Post Office / Village",
    "lat": 26.27,
    "lon": 84.292,
    "straightKm": 14.54,
    "roadKm": 17.7,
    "timeMins": 39,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ballia, bhatpokhar",
      "ballia",
      "vallia",
      "ballia bhatpokhar",
      "bhatpokhar",
      "841237"
    ]
  },
  {
    "id": "PIN-274702-7",
    "name": "Khampar (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.23307,
    "lon": 84.00538,
    "straightKm": 14.51,
    "roadKm": 17.7,
    "timeMins": 39,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khampar, bhatpar rani",
      "khampar",
      "khampar bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-6-6",
    "name": "Balia Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.1507,
    "lon": 84.26078,
    "straightKm": 14.6,
    "roadKm": 17.8,
    "timeMins": 39,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "balia andar",
      "valia andar",
      "balia andar andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841235-5",
    "name": "Kumhti (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.11355,
    "lon": 84.20012,
    "straightKm": 14.62,
    "roadKm": 17.8,
    "timeMins": 39,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kumhti, assaon",
      "kumhti",
      "kumhti assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "PIN-274702-6",
    "name": "Bhingari Bazar (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.28818,
    "lon": 84.01579,
    "straightKm": 14.6,
    "roadKm": 17.8,
    "timeMins": 39,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhingari bazar, bhatpar rani",
      "bhingari bazar",
      "bhingari bajar",
      "vhingari bazar",
      "bhingari bazar bhatpar rani",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार"
    ]
  },
  {
    "id": "CEN-3-98",
    "name": "Tarka (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.19245,
    "lon": 84.01261,
    "straightKm": 14.66,
    "roadKm": 17.9,
    "timeMins": 39,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tarka",
      "tarka guthani block",
      "guthani block"
    ]
  },
  {
    "id": "PIN-841243-3",
    "name": "Chotka Manjha (Nautan, PIN 841243)",
    "category": "Post Office / Village",
    "lat": 26.35008,
    "lon": 84.22722,
    "straightKm": 14.67,
    "roadKm": 17.9,
    "timeMins": 39,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chotka manjha, nautan",
      "chotka manjha",
      "chotka manzha",
      "chotka manjha nautan",
      "nautan",
      "841243"
    ]
  },
  {
    "id": "CEN-5-37",
    "name": "Karanpura (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.10432,
    "lon": 84.15188,
    "straightKm": 14.79,
    "roadKm": 18,
    "timeMins": 40,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "karanpura",
      "karanpura darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-45",
    "name": "Pareji (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.1736,
    "lon": 84.28072,
    "straightKm": 14.77,
    "roadKm": 18,
    "timeMins": 40,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pareji",
      "parezi",
      "pareji andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-3-33",
    "name": "Darzi Chak (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15414,
    "lon": 84.03493,
    "straightKm": 14.81,
    "roadKm": 18.1,
    "timeMins": 40,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "darzi chak",
      "darji chak",
      "darzi chak guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-90",
    "name": "Krishnapali Bazar (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.11643,
    "lon": 84.08865,
    "straightKm": 14.81,
    "roadKm": 18.1,
    "timeMins": 40,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "krishnapali bazar",
      "krishnapali bajar",
      "krisnapali bazar",
      "krishnapali bazar darauli block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-3-49",
    "name": "Kareji (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.13741,
    "lon": 84.05057,
    "straightKm": 14.95,
    "roadKm": 18.2,
    "timeMins": 40,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kareji",
      "karezi",
      "kareji guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-84",
    "name": "Sonbarsa (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.10509,
    "lon": 84.17374,
    "straightKm": 14.88,
    "roadKm": 18.2,
    "timeMins": 40,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sonbarsa",
      "sonbarsa darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841226-4",
    "name": "Chakra (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.21008,
    "lon": 84.29741,
    "straightKm": 14.93,
    "roadKm": 18.2,
    "timeMins": 40,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chakra, siwan head po",
      "chakra",
      "chakra siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "CEN-5-24",
    "name": "Duba (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.10301,
    "lon": 84.14233,
    "straightKm": 14.96,
    "roadKm": 18.3,
    "timeMins": 40,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "duba",
      "duba darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-27",
    "name": "Gangpalia (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.10614,
    "lon": 84.11622,
    "straightKm": 14.99,
    "roadKm": 18.3,
    "timeMins": 40,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gangpalia",
      "gangpalia darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-25",
    "name": "Hata (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.12548,
    "lon": 84.23514,
    "straightKm": 15.02,
    "roadKm": 18.3,
    "timeMins": 40,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hata",
      "hata andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841226-9",
    "name": "Hardia (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.24346,
    "lon": 84.30107,
    "straightKm": 15,
    "roadKm": 18.3,
    "timeMins": 40,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hardia, siwan head po",
      "hardia",
      "hardia siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "CEN-3-41",
    "name": "Goharua (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14456,
    "lon": 84.04073,
    "straightKm": 15.07,
    "roadKm": 18.4,
    "timeMins": 40,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "goharua",
      "goharua guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-85",
    "name": "Sarea Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.18153,
    "lon": 84.01259,
    "straightKm": 15.12,
    "roadKm": 18.4,
    "timeMins": 40,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarea guthani",
      "sarea guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-19",
    "name": "Daraili (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.10376,
    "lon": 84.12681,
    "straightKm": 15.04,
    "roadKm": 18.4,
    "timeMins": 40,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "daraili",
      "daraili darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-50",
    "name": "Loharpura (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.10184,
    "lon": 84.16157,
    "straightKm": 15.1,
    "roadKm": 18.4,
    "timeMins": 40,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "loharpura",
      "loharpura darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-11",
    "name": "Bikrampur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.15531,
    "lon": 84.27137,
    "straightKm": 15.09,
    "roadKm": 18.4,
    "timeMins": 40,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bikrampur",
      "vikrampur",
      "bikrampur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-1",
    "name": "Amnaura (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.14087,
    "lon": 84.25859,
    "straightKm": 15.19,
    "roadKm": 18.5,
    "timeMins": 41,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "amnaura",
      "amnaura andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-3-46",
    "name": "Jhajhaur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15731,
    "lon": 84.027,
    "straightKm": 15.22,
    "roadKm": 18.6,
    "timeMins": 41,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jhajhaur",
      "zhazhaur",
      "jhajhaur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-70",
    "name": "Misrauli Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.12997,
    "lon": 84.05471,
    "straightKm": 15.31,
    "roadKm": 18.7,
    "timeMins": 41,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "misrauli guthani",
      "misrauli guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-9-30",
    "name": "Majhauli Raj (Bankata & Bhatpar Rani (UP Border Belt))",
    "category": "UP Border Village / Market",
    "lat": 26.27202,
    "lon": 84.00182,
    "straightKm": 15.35,
    "roadKm": 18.7,
    "timeMins": 41,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "majhauli raj",
      "mazhauli raz",
      "majhauli raj bankata & bhatpar rani (up border belt)",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-3-59",
    "name": "Kunresar (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16332,
    "lon": 84.02023,
    "straightKm": 15.41,
    "roadKm": 18.8,
    "timeMins": 41,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kunresar",
      "kunresar guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-72",
    "name": "Odikhor (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17159,
    "lon": 84.01525,
    "straightKm": 15.37,
    "roadKm": 18.8,
    "timeMins": 41,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "odikhor",
      "odikhor guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-6-4",
    "name": "Arazi Barwa (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.13261,
    "lon": 84.25147,
    "straightKm": 15.38,
    "roadKm": 18.8,
    "timeMins": 41,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "arazi barwa",
      "araji barwa",
      "arazi barwa andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-24",
    "name": "Hakma (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.16166,
    "lon": 84.28028,
    "straightKm": 15.42,
    "roadKm": 18.8,
    "timeMins": 41,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hakma",
      "hakma andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-46",
    "name": "Patar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.11696,
    "lon": 84.22692,
    "straightKm": 15.39,
    "roadKm": 18.8,
    "timeMins": 41,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "patar",
      "patar andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841435-7",
    "name": "Tenua (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.14007,
    "lon": 84.04138,
    "straightKm": 15.37,
    "roadKm": 18.8,
    "timeMins": 41,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tenua, guthani",
      "tenua",
      "tenua guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "PIN-841234-6",
    "name": "Krishnapali (Darauli, PIN 841234)",
    "category": "Post Office / Village",
    "lat": 26.10118,
    "lon": 84.12179,
    "straightKm": 15.41,
    "roadKm": 18.8,
    "timeMins": 41,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "krishnapali, darauli",
      "krishnapali",
      "krisnapali",
      "krishnapali darauli",
      "darauli",
      "841234"
    ]
  },
  {
    "id": "PIN-274702-1",
    "name": "Bahiari Baghel (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.28121,
    "lon": 84.00431,
    "straightKm": 15.4,
    "roadKm": 18.8,
    "timeMins": 41,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bahiari baghel, bhatpar rani",
      "bahiari baghel",
      "vahiari baghel",
      "bahiari baghel bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-3-91",
    "name": "Sonahula (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.12408,
    "lon": 84.06067,
    "straightKm": 15.48,
    "roadKm": 18.9,
    "timeMins": 42,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sonahula",
      "sonahula guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-35",
    "name": "Kanaila (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.1034,
    "lon": 84.10451,
    "straightKm": 15.59,
    "roadKm": 19,
    "timeMins": 42,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kanaila",
      "kanaila darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841227-17",
    "name": "Ukhai (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.21157,
    "lon": 84.30403,
    "straightKm": 15.55,
    "roadKm": 19,
    "timeMins": 42,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ukhai, siwan",
      "ukhai",
      "ukhai siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "CEN-3-54",
    "name": "Kharaunti (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14557,
    "lon": 84.03195,
    "straightKm": 15.64,
    "roadKm": 19.1,
    "timeMins": 42,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kharaunti",
      "kharaunti guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-62",
    "name": "Lachhmipur Guthani (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.13587,
    "lon": 84.04151,
    "straightKm": 15.69,
    "roadKm": 19.1,
    "timeMins": 42,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lachhmipur guthani",
      "lachmipur guthani",
      "lachhmipur guthani guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-11",
    "name": "Belsui (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09706,
    "lon": 84.13398,
    "straightKm": 15.69,
    "roadKm": 19.1,
    "timeMins": 42,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "belsui",
      "velsui",
      "belsui darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-56",
    "name": "Mathia Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.10573,
    "lon": 84.09445,
    "straightKm": 15.68,
    "roadKm": 19.1,
    "timeMins": 42,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mathia darauli",
      "mathia darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-85",
    "name": "Makhdum Sarai Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.23083,
    "lon": 84.3073,
    "straightKm": 15.62,
    "roadKm": 19.1,
    "timeMins": 42,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "makhdum sarai siwan",
      "makhdum sarai siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841227-14",
    "name": "Sarwe (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.25915,
    "lon": 84.30559,
    "straightKm": 15.62,
    "roadKm": 19.1,
    "timeMins": 42,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarwe, siwan",
      "sarwe",
      "sarwe siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "CEN-6-58",
    "name": "Utarwar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.17388,
    "lon": 84.29178,
    "straightKm": 15.73,
    "roadKm": 19.2,
    "timeMins": 42,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "utarwar",
      "utarwar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-5-63",
    "name": "Nepura (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09601,
    "lon": 84.17046,
    "straightKm": 15.84,
    "roadKm": 19.3,
    "timeMins": 42,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nepura",
      "nepura darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-12",
    "name": "Chandauli Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.12389,
    "lon": 84.24583,
    "straightKm": 15.78,
    "roadKm": 19.3,
    "timeMins": 42,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chandauli andar",
      "chandauli andar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-3",
    "name": "Arakpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.14475,
    "lon": 84.27248,
    "straightKm": 15.92,
    "roadKm": 19.4,
    "timeMins": 43,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "arakpur",
      "arakpur andar block",
      "andar block"
    ]
  },
  {
    "id": "KS-041",
    "curated": true,
    "name": "Andar Bazar & Block (आंदर बाज़ार)",
    "category": "Town / Block",
    "lat": 26.135,
    "lon": 84.265,
    "straightKm": 16.1,
    "roadKm": 19.5,
    "timeMins": 30,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District Belt",
    "aliases": [
      "andar",
      "aandar",
      "andar bazar",
      "आंदर",
      "आंदर बाजार"
    ]
  },
  {
    "id": "CEN-3-106",
    "name": "Tali Bazar (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.17579,
    "lon": 84.00638,
    "straightKm": 15.95,
    "roadKm": 19.5,
    "timeMins": 43,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tali bazar",
      "tali bajar",
      "tali bazar guthani block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-5-16",
    "name": "Biswania (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09332,
    "lon": 84.14618,
    "straightKm": 16.02,
    "roadKm": 19.5,
    "timeMins": 43,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "biswania",
      "viswania",
      "biswania darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-72",
    "name": "Sujaon (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22006,
    "lon": 84.31018,
    "straightKm": 16.01,
    "roadKm": 19.5,
    "timeMins": 43,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sujaon",
      "suzaon",
      "sujaon siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841231-3",
    "name": "Gaighat (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.17308,
    "lon": 84.29422,
    "straightKm": 15.99,
    "roadKm": 19.5,
    "timeMins": 43,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gaighat, andar",
      "gaighat",
      "gaighat andar",
      "andar",
      "841231"
    ]
  },
  {
    "id": "PIN-274702-12",
    "name": "Pipra Uttar Patti (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.247,
    "lon": 83.99082,
    "straightKm": 15.99,
    "roadKm": 19.5,
    "timeMins": 43,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pipra uttar patti, bhatpar rani",
      "pipra uttar patti",
      "pipra uttar patti bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-3-67",
    "name": "Mamaur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14952,
    "lon": 84.0234,
    "straightKm": 16.03,
    "roadKm": 19.6,
    "timeMins": 43,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mamaur",
      "mamaur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-14",
    "name": "Bhothia (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09627,
    "lon": 84.11516,
    "straightKm": 16.08,
    "roadKm": 19.6,
    "timeMins": 43,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhothia",
      "vhothia",
      "bhothia darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-29",
    "name": "Gopalpur Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09269,
    "lon": 84.15596,
    "straightKm": 16.09,
    "roadKm": 19.6,
    "timeMins": 43,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gopalpur darauli",
      "gopalpur darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841236-4",
    "name": "Rajanpura (Hussainganj, PIN 841236)",
    "category": "Post Office / Village",
    "lat": 26.15458,
    "lon": 84.28291,
    "straightKm": 16.07,
    "roadKm": 19.6,
    "timeMins": 43,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rajanpura, hussainganj",
      "rajanpura",
      "razanpura",
      "rajanpura hussainganj",
      "hussainganj",
      "841236"
    ]
  },
  {
    "id": "CEN-3-83",
    "name": "Rimafat Chhapra (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.12811,
    "lon": 84.04469,
    "straightKm": 16.11,
    "roadKm": 19.7,
    "timeMins": 43,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rimafat chhapra",
      "rimafat chapra",
      "rimafat chhapra guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-3-93",
    "name": "Tali Buzurg (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.16508,
    "lon": 84.00998,
    "straightKm": 16.19,
    "roadKm": 19.7,
    "timeMins": 43,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tali buzurg",
      "tali bujurg",
      "tali buzurg guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-77",
    "name": "Repura Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.10492,
    "lon": 84.08478,
    "straightKm": 16.13,
    "roadKm": 19.7,
    "timeMins": 43,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "repura darauli",
      "repura darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-3-80",
    "name": "Pataua Lakhraj (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.15615,
    "lon": 84.01585,
    "straightKm": 16.21,
    "roadKm": 19.8,
    "timeMins": 44,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pataua lakhraj",
      "pataua lakhraz",
      "pataua lakhraj guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-6-33",
    "name": "Khodai Chak (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.11306,
    "lon": 84.23667,
    "straightKm": 16.26,
    "roadKm": 19.8,
    "timeMins": 44,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khodai chak",
      "khodai chak andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-37",
    "name": "Masudaha (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.16306,
    "lon": 84.29046,
    "straightKm": 16.2,
    "roadKm": 19.8,
    "timeMins": 44,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "masudaha",
      "masudaha andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-3-75",
    "name": "Pachnerui (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.13713,
    "lon": 84.03179,
    "straightKm": 16.28,
    "roadKm": 19.9,
    "timeMins": 44,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pachnerui",
      "pachnerui guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-6",
    "name": "Bandhai (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09273,
    "lon": 84.12404,
    "straightKm": 16.3,
    "roadKm": 19.9,
    "timeMins": 44,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bandhai",
      "vandhai",
      "bandhai darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-3-104",
    "name": "Jataur Bazar (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.12139,
    "lon": 84.04979,
    "straightKm": 16.37,
    "roadKm": 20,
    "timeMins": 44,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jataur bazar",
      "jataur bajar",
      "zataur bazar",
      "jataur bazar guthani block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-6-16",
    "name": "Deuriya Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.15133,
    "lon": 84.28438,
    "straightKm": 16.4,
    "roadKm": 20,
    "timeMins": 44,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "deuriya andar",
      "deuriya andar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-64",
    "name": "Rampur Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2351,
    "lon": 84.3153,
    "straightKm": 16.41,
    "roadKm": 20,
    "timeMins": 44,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rampur siwan",
      "rampur siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-80",
    "name": "Darbar Road Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20333,
    "lon": 84.31083,
    "straightKm": 16.4,
    "roadKm": 20,
    "timeMins": 44,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "darbar road siwan",
      "darbar road siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-43",
    "name": "Singarpatti (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.18428,
    "lon": 84.30445,
    "straightKm": 16.42,
    "roadKm": 20,
    "timeMins": 44,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "singarpatti",
      "singarpatti hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841234-1",
    "name": "Balhu (Darauli, PIN 841234)",
    "category": "Post Office / Village",
    "lat": 26.09421,
    "lon": 84.11031,
    "straightKm": 16.42,
    "roadKm": 20,
    "timeMins": 44,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "balhu, darauli",
      "balhu",
      "valhu",
      "balhu darauli",
      "darauli",
      "841234"
    ]
  },
  {
    "id": "CEN-7-77",
    "name": "Hospital Road Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24581,
    "lon": 84.31586,
    "straightKm": 16.49,
    "roadKm": 20.1,
    "timeMins": 44,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hospital road siwan",
      "hospital road siwan siwan sadar & city",
      "hospital",
      "aspatal",
      "अस्पताल",
      "हॉस्पिटल",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-22",
    "name": "Don Buzurg (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09379,
    "lon": 84.1053,
    "straightKm": 16.59,
    "roadKm": 20.2,
    "timeMins": 44,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "don buzurg",
      "don bujurg",
      "don buzurg darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-0",
    "name": "Ailashgarh Khas (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.135,
    "lon": 84.27115,
    "straightKm": 16.54,
    "roadKm": 20.2,
    "timeMins": 44,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ailashgarh khas",
      "ailasgarh khas",
      "ailashgarh khas andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841227-12",
    "name": "Papaur (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.192,
    "lon": 84.30882,
    "straightKm": 16.55,
    "roadKm": 20.2,
    "timeMins": 44,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "papaur, siwan",
      "papaur",
      "papaur siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-841438-4",
    "name": "Jignamath (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.35458,
    "lon": 84.25291,
    "straightKm": 16.54,
    "roadKm": 20.2,
    "timeMins": 44,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jignamath, mirganj",
      "jignamath",
      "zignamath",
      "jignamath mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-5-42",
    "name": "Kasihari (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08799,
    "lon": 84.16446,
    "straightKm": 16.66,
    "roadKm": 20.3,
    "timeMins": 45,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kasihari",
      "kasihari darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-3-88",
    "name": "Sirkarpur (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14124,
    "lon": 84.02219,
    "straightKm": 16.7,
    "roadKm": 20.4,
    "timeMins": 45,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sirkarpur",
      "sirkarpur guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-7-51",
    "name": "Molnapur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22534,
    "lon": 84.31771,
    "straightKm": 16.7,
    "roadKm": 20.4,
    "timeMins": 45,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "molnapur",
      "molnapur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-59",
    "name": "Pararia (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21109,
    "lon": 84.31557,
    "straightKm": 16.69,
    "roadKm": 20.4,
    "timeMins": 45,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pararia",
      "pararia siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841235-7",
    "name": "Murakhap (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.08807,
    "lon": 84.17338,
    "straightKm": 16.75,
    "roadKm": 20.4,
    "timeMins": 45,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "murakhap, assaon",
      "murakhap",
      "murakhap assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "KS-040",
    "curated": true,
    "name": "Darauli Bazar & Block (दरौली — सरयू नदी घाट)",
    "category": "Town / Block",
    "lat": 26.078,
    "lon": 84.128,
    "straightKm": 17.85,
    "roadKm": 20.5,
    "timeMins": 32,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District Belt",
    "aliases": [
      "darauli",
      "darouli",
      "दरौली",
      "दरौली बाजार"
    ]
  },
  {
    "id": "CEN-3-96",
    "name": "Tanrwa Khurd (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.12901,
    "lon": 84.0339,
    "straightKm": 16.77,
    "roadKm": 20.5,
    "timeMins": 45,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tanrwa khurd",
      "tanrwa khurd guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-3",
    "name": "Balahu (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08715,
    "lon": 84.13502,
    "straightKm": 16.77,
    "roadKm": 20.5,
    "timeMins": 45,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "balahu",
      "valahu",
      "balahu darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-43",
    "name": "Kewtalia (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09547,
    "lon": 84.09398,
    "straightKm": 16.76,
    "roadKm": 20.5,
    "timeMins": 45,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kewtalia",
      "kewtalia darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-7",
    "name": "Bangra Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.11957,
    "lon": 84.25699,
    "straightKm": 16.84,
    "roadKm": 20.5,
    "timeMins": 45,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bangra andar",
      "vangra andar",
      "bangra andar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-20",
    "name": "Fazilpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.11338,
    "lon": 84.24695,
    "straightKm": 16.79,
    "roadKm": 20.5,
    "timeMins": 45,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "fazilpur",
      "fajilpur",
      "fazilpur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-3-101",
    "name": "Thegwalia (Guthani Block)",
    "category": "Village (Guthani Block)",
    "lat": 26.14807,
    "lon": 84.01349,
    "straightKm": 16.92,
    "roadKm": 20.6,
    "timeMins": 45,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "thegwalia",
      "thegwalia guthani block",
      "guthani block"
    ]
  },
  {
    "id": "CEN-5-76",
    "name": "Rampur Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08729,
    "lon": 84.17773,
    "straightKm": 16.9,
    "roadKm": 20.6,
    "timeMins": 45,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rampur darauli",
      "rampur darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-8",
    "name": "Belahi (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.14132,
    "lon": 84.28232,
    "straightKm": 16.92,
    "roadKm": 20.6,
    "timeMins": 45,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "belahi",
      "velahi",
      "belahi andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-90",
    "name": "Vidya Bhawan Mahila College Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.25663,
    "lon": 84.3195,
    "straightKm": 16.96,
    "roadKm": 20.7,
    "timeMins": 46,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "vidya bhawan mahila college siwan",
      "vidya bhawan mahila college siwan siwan sadar & city",
      "college",
      "kolej",
      "कॉलेज",
      "महाविद्यालय",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841231-0",
    "name": "Andar (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.135,
    "lon": 84.277,
    "straightKm": 16.97,
    "roadKm": 20.7,
    "timeMins": 46,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "andar, andar",
      "andar",
      "andar andar",
      "841231"
    ]
  },
  {
    "id": "CEN-5-8",
    "name": "Basuapur (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08393,
    "lon": 84.14425,
    "straightKm": 17.07,
    "roadKm": 20.8,
    "timeMins": 46,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "basuapur",
      "vasuapur",
      "basuapur darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-2",
    "name": "Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.1244,
    "lon": 84.26593,
    "straightKm": 17.02,
    "roadKm": 20.8,
    "timeMins": 46,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "andar",
      "andar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-54",
    "name": "Siuri (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.10254,
    "lon": 84.233,
    "straightKm": 17.08,
    "roadKm": 20.8,
    "timeMins": 46,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "siuri",
      "siuri andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841226-17",
    "name": "Siwan (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.22207,
    "lon": 84.32053,
    "straightKm": 17.01,
    "roadKm": 20.8,
    "timeMins": 46,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "siwan, siwan head po",
      "siwan",
      "siwan siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "CEN-8-30",
    "name": "Markan (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.17403,
    "lon": 84.30774,
    "straightKm": 17.16,
    "roadKm": 20.9,
    "timeMins": 46,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "markan",
      "markan hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841227-1",
    "name": "Barhni (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.22621,
    "lon": 84.32231,
    "straightKm": 17.15,
    "roadKm": 20.9,
    "timeMins": 46,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barhni, siwan",
      "barhni",
      "varhni",
      "barhni siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "CEN-6-50",
    "name": "Sadalpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.16041,
    "lon": 84.30078,
    "straightKm": 17.23,
    "roadKm": 21,
    "timeMins": 46,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sadalpur",
      "sadalpur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-8-35",
    "name": "Partappur Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.19303,
    "lon": 84.31607,
    "straightKm": 17.21,
    "roadKm": 21,
    "timeMins": 46,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "partappur hussainganj",
      "partappur hussainganz",
      "partappur hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-48",
    "name": "Chhapiya Bazar (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.20344,
    "lon": 84.31948,
    "straightKm": 17.24,
    "roadKm": 21,
    "timeMins": 46,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chhapiya bazar",
      "chhapiya bajar",
      "chapiya bazar",
      "chhapiya bazar hussainganj block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "CEN-5-21",
    "name": "Dobhia (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.0816,
    "lon": 84.1548,
    "straightKm": 17.32,
    "roadKm": 21.1,
    "timeMins": 46,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dobhia",
      "dobhia darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-64",
    "name": "Netwar (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.09353,
    "lon": 84.08419,
    "straightKm": 17.32,
    "roadKm": 21.1,
    "timeMins": 46,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "netwar",
      "netwar darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-29",
    "name": "Kanhpakar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.15066,
    "lon": 84.2948,
    "straightKm": 17.3,
    "roadKm": 21.1,
    "timeMins": 46,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kanhpakar",
      "kanhpakar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-38",
    "name": "Khudra (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21738,
    "lon": 84.32279,
    "straightKm": 17.3,
    "roadKm": 21.1,
    "timeMins": 46,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khudra",
      "khudra siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-43",
    "name": "Majahida (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.23692,
    "lon": 84.32451,
    "straightKm": 17.32,
    "roadKm": 21.1,
    "timeMins": 46,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "majahida",
      "mazahida",
      "majahida siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-38",
    "name": "Renua (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.16134,
    "lon": 84.30243,
    "straightKm": 17.33,
    "roadKm": 21.1,
    "timeMins": 46,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "renua",
      "renua hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841231-5",
    "name": "Kherai (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.12855,
    "lon": 84.27512,
    "straightKm": 17.32,
    "roadKm": 21.1,
    "timeMins": 46,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kherai, andar",
      "kherai",
      "kherai andar",
      "andar",
      "841231"
    ]
  },
  {
    "id": "CEN-5-1",
    "name": "Amarpur (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08351,
    "lon": 84.12199,
    "straightKm": 17.34,
    "roadKm": 21.2,
    "timeMins": 47,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "amarpur",
      "amarpur darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-9",
    "name": "Bauna (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08496,
    "lon": 84.11115,
    "straightKm": 17.4,
    "roadKm": 21.2,
    "timeMins": 47,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bauna",
      "vauna",
      "bauna darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-56",
    "name": "Pachaura (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24658,
    "lon": 84.32495,
    "straightKm": 17.4,
    "roadKm": 21.2,
    "timeMins": 47,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pachaura",
      "pachaura siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-67",
    "name": "Sarsa (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19615,
    "lon": 84.31901,
    "straightKm": 17.39,
    "roadKm": 21.2,
    "timeMins": 47,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarsa",
      "sarsa siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841435-4",
    "name": "Dumrahar (Guthani, PIN 841435)",
    "category": "Post Office / Village",
    "lat": 26.16158,
    "lon": 83.99891,
    "straightKm": 17.34,
    "roadKm": 21.2,
    "timeMins": 47,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dumrahar, guthani",
      "dumrahar",
      "dumrahar guthani",
      "guthani",
      "841435"
    ]
  },
  {
    "id": "PIN-841226-14",
    "name": "S.S.Factory (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.26965,
    "lon": 84.32209,
    "straightKm": 17.45,
    "roadKm": 21.3,
    "timeMins": 47,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "s.s.factory, siwan head po",
      "s.s.factory",
      "s.s.factory siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "CEN-7-46",
    "name": "Makariar (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20459,
    "lon": 84.32291,
    "straightKm": 17.55,
    "roadKm": 21.4,
    "timeMins": 47,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "makariar",
      "makariar siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-88",
    "name": "DAV College Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.18717,
    "lon": 84.31771,
    "straightKm": 17.56,
    "roadKm": 21.4,
    "timeMins": 47,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dav college siwan",
      "dav college siwan siwan sadar & city",
      "college",
      "kolej",
      "कॉलेज",
      "महाविद्यालय",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841235-2",
    "name": "Draili Mathia (Assaon, PIN 841235)",
    "category": "Post Office / Village",
    "lat": 26.08414,
    "lon": 84.19314,
    "straightKm": 17.55,
    "roadKm": 21.4,
    "timeMins": 47,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "draili mathia, assaon",
      "draili mathia",
      "draili mathia assaon",
      "assaon",
      "841235"
    ]
  },
  {
    "id": "CEN-5-30",
    "name": "Gosopali (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08619,
    "lon": 84.09696,
    "straightKm": 17.64,
    "roadKm": 21.5,
    "timeMins": 47,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gosopali",
      "gosopali darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-55",
    "name": "Marera (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.0802,
    "lon": 84.17109,
    "straightKm": 17.59,
    "roadKm": 21.5,
    "timeMins": 47,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "marera",
      "marera darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-5",
    "name": "Asaon (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.12692,
    "lon": 84.2777,
    "straightKm": 17.64,
    "roadKm": 21.5,
    "timeMins": 47,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "asaon",
      "asaon andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-30",
    "name": "Jamsikri (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2282,
    "lon": 84.32731,
    "straightKm": 17.63,
    "roadKm": 21.5,
    "timeMins": 47,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jamsikri",
      "zamsikri",
      "jamsikri siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-22",
    "name": "Khajrauni (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.18243,
    "lon": 84.31695,
    "straightKm": 17.66,
    "roadKm": 21.5,
    "timeMins": 47,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khajrauni",
      "khazrauni",
      "khajrauni hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841237-3",
    "name": "Hussainganj (Bhatpokhar, PIN 841237)",
    "category": "Post Office / Village",
    "lat": 26.30808,
    "lon": 84.30922,
    "straightKm": 17.65,
    "roadKm": 21.5,
    "timeMins": 47,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hussainganj, bhatpokhar",
      "hussainganj",
      "hussainganz",
      "hussainganj bhatpokhar",
      "bhatpokhar",
      "841237"
    ]
  },
  {
    "id": "CEN-6-41",
    "name": "Nahuni (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.10129,
    "lon": 84.24378,
    "straightKm": 17.74,
    "roadKm": 21.6,
    "timeMins": 48,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nahuni",
      "nahuni andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-5-0",
    "name": "Agsara (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.078,
    "lon": 84.13377,
    "straightKm": 17.8,
    "roadKm": 21.7,
    "timeMins": 48,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "agsara",
      "agsara darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841234-0",
    "name": "Amarpur (Darauli, PIN 841234)",
    "category": "Post Office / Village",
    "lat": 26.078,
    "lon": 84.14,
    "straightKm": 17.75,
    "roadKm": 21.7,
    "timeMins": 48,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "amarpur, darauli",
      "amarpur",
      "amarpur darauli",
      "darauli",
      "841234"
    ]
  },
  {
    "id": "PIN-841231-7",
    "name": "Nand Pur Amwari (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.10307,
    "lon": 84.24838,
    "straightKm": 17.82,
    "roadKm": 21.7,
    "timeMins": 48,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nand pur amwari, andar",
      "nand pur amwari",
      "nand pur amwari andar",
      "andar",
      "841231"
    ]
  },
  {
    "id": "PIN-841438-12",
    "name": "Mirganj (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.347,
    "lon": 84.28082,
    "straightKm": 17.8,
    "roadKm": 21.7,
    "timeMins": 48,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mirganj, mirganj",
      "mirganj",
      "mirganz",
      "mirganj mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-7-69",
    "name": "Shampur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.25623,
    "lon": 84.32856,
    "straightKm": 17.85,
    "roadKm": 21.8,
    "timeMins": 48,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "shampur",
      "sampur",
      "shampur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841226-12",
    "name": "Markan (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.2025,
    "lon": 84.32532,
    "straightKm": 17.83,
    "roadKm": 21.8,
    "timeMins": 48,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "markan, siwan head po",
      "markan",
      "markan siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "CEN-6-15",
    "name": "Dehunra (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.11062,
    "lon": 84.26184,
    "straightKm": 17.92,
    "roadKm": 21.9,
    "timeMins": 48,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dehunra",
      "dehunra andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-21",
    "name": "Gahilapur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.13884,
    "lon": 84.29357,
    "straightKm": 17.97,
    "roadKm": 21.9,
    "timeMins": 48,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gahilapur",
      "gahilapur andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841438-7",
    "name": "Koila Deva (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.33307,
    "lon": 84.29538,
    "straightKm": 17.92,
    "roadKm": 21.9,
    "timeMins": 48,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "koila deva, mirganj",
      "koila deva",
      "koila deva mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "KS-044",
    "curated": true,
    "name": "Lar Town / Lar Road (लार / लार रोड)",
    "category": "Town",
    "lat": 26.202,
    "lon": 83.968,
    "straightKm": 18.6,
    "roadKm": 22,
    "timeMins": 35,
    "direction": "दक्षिण-पश्चिम (South-West — UP)",
    "zone": "Zone 4 — District & Highway Belt",
    "aliases": [
      "lar",
      "lar road",
      "लार",
      "लार रोड"
    ]
  },
  {
    "id": "CEN-5-34",
    "name": "Indrak Chak (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07518,
    "lon": 84.16199,
    "straightKm": 18.06,
    "roadKm": 22,
    "timeMins": 48,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "indrak chak",
      "indrak chak darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-28",
    "name": "Jamalpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.10386,
    "lon": 84.2538,
    "straightKm": 18.05,
    "roadKm": 22,
    "timeMins": 48,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jamalpur",
      "zamalpur",
      "jamalpur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-5-85",
    "name": "Tanrwa (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08898,
    "lon": 84.07567,
    "straightKm": 18.12,
    "roadKm": 22.1,
    "timeMins": 49,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tanrwa",
      "tanrwa darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-13",
    "name": "Chhajwa (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.13006,
    "lon": 84.28746,
    "straightKm": 18.12,
    "roadKm": 22.1,
    "timeMins": 49,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chhajwa",
      "chhazwa",
      "chajwa",
      "chhajwa andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-25",
    "name": "Dharam Makariar (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2121,
    "lon": 84.33016,
    "straightKm": 18.11,
    "roadKm": 22.1,
    "timeMins": 49,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dharam makariar",
      "dharam makariar siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-13",
    "name": "Bhitauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07337,
    "lon": 84.14907,
    "straightKm": 18.23,
    "roadKm": 22.2,
    "timeMins": 49,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhitauli",
      "vhitauli",
      "bhitauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-17",
    "name": "Chakri Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07901,
    "lon": 84.10356,
    "straightKm": 18.22,
    "roadKm": 22.2,
    "timeMins": 49,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chakri darauli",
      "chakri darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-89",
    "name": "Don Bazar (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07626,
    "lon": 84.18267,
    "straightKm": 18.19,
    "roadKm": 22.2,
    "timeMins": 49,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "don bazar",
      "don bajar",
      "don bazar darauli block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-6-10",
    "name": "Bhitauli Andar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.11654,
    "lon": 84.27364,
    "straightKm": 18.18,
    "roadKm": 22.2,
    "timeMins": 49,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhitauli andar",
      "vhitauli andar",
      "bhitauli andar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-8-17",
    "name": "Hasanpurwa Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.16612,
    "lon": 84.31502,
    "straightKm": 18.2,
    "roadKm": 22.2,
    "timeMins": 49,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hasanpurwa hussainganj",
      "hasanpurwa hussainganz",
      "hasanpurwa hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-46",
    "name": "Tetaria (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.14632,
    "lon": 84.30257,
    "straightKm": 18.21,
    "roadKm": 22.2,
    "timeMins": 49,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tetaria",
      "tetaria hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-5-4",
    "name": "Bali Punak (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07575,
    "lon": 84.1153,
    "straightKm": 18.31,
    "roadKm": 22.3,
    "timeMins": 49,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bali punak",
      "vali punak",
      "bali punak darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-51",
    "name": "Lokaichhapra (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.08315,
    "lon": 84.08674,
    "straightKm": 18.3,
    "roadKm": 22.3,
    "timeMins": 49,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lokaichhapra",
      "lokaichapra",
      "lokaichhapra darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-17",
    "name": "Bishambharpur Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22145,
    "lon": 84.33352,
    "straightKm": 18.31,
    "roadKm": 22.3,
    "timeMins": 49,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bishambharpur siwan",
      "vishambharpur siwan",
      "bisambharpur siwan",
      "bishambharpur siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841227-6",
    "name": "Chhapmathia (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.23318,
    "lon": 84.33379,
    "straightKm": 18.26,
    "roadKm": 22.3,
    "timeMins": 49,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chhapmathia, siwan",
      "chhapmathia",
      "chapmathia",
      "chhapmathia siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "CEN-6-42",
    "name": "Pachokhar (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.14565,
    "lon": 84.30387,
    "straightKm": 18.36,
    "roadKm": 22.4,
    "timeMins": 49,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pachokhar",
      "pachokhar andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-22",
    "name": "Chhotpur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.23535,
    "lon": 84.33516,
    "straightKm": 18.39,
    "roadKm": 22.4,
    "timeMins": 49,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chhotpur",
      "chotpur",
      "chhotpur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-35",
    "name": "Kararua (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24438,
    "lon": 84.33441,
    "straightKm": 18.33,
    "roadKm": 22.4,
    "timeMins": 49,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kararua",
      "kararua siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-27",
    "name": "Machakna (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.19607,
    "lon": 84.329,
    "straightKm": 18.36,
    "roadKm": 22.4,
    "timeMins": 49,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "machakna",
      "machakna hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841236-1",
    "name": "Bhikhpur Bhgwanpur (Hussainganj, PIN 841236)",
    "category": "Post Office / Village",
    "lat": 26.18121,
    "lon": 84.32431,
    "straightKm": 18.4,
    "roadKm": 22.4,
    "timeMins": 49,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhikhpur bhgwanpur, hussainganj",
      "bhikhpur bhgwanpur",
      "vhikhpur bhgwanpur",
      "bhikhpur bhgwanpur hussainganj",
      "hussainganj",
      "841236"
    ]
  },
  {
    "id": "PIN-274702-14",
    "name": "Sawarenji (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.31415,
    "lon": 83.98759,
    "straightKm": 18.38,
    "roadKm": 22.4,
    "timeMins": 49,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sawarenji, bhatpar rani",
      "sawarenji",
      "sawarenzi",
      "sawarenji bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "KS-039",
    "curated": true,
    "name": "Siwan Junction & Siwan City (सिवान शहर एवं जंक्शन — बबुनिया मोड़, अस्पताल रोड)",
    "category": "District Headquarters / City",
    "lat": 26.2205,
    "lon": 84.3565,
    "straightKm": 20.6,
    "roadKm": 22.5,
    "timeMins": 35,
    "direction": "पूर्व (East — NH-227A)",
    "zone": "Zone 4 — District Belt (Travel-Safe Box Packing & Bulk Orders)",
    "aliases": [
      "siwan",
      "sivan",
      "siwan junction",
      "babुनिया more",
      "babunia more",
      "chhapra road",
      "सिवान",
      "सीवान",
      "सिवान जंक्शन",
      "बबुनिया मोड़"
    ]
  },
  {
    "id": "CEN-7-33",
    "name": "Kalinjra (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20115,
    "lon": 84.3315,
    "straightKm": 18.47,
    "roadKm": 22.5,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kalinjra",
      "kalinzra",
      "kalinjra siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-54",
    "name": "Naupali (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19187,
    "lon": 84.32827,
    "straightKm": 18.41,
    "roadKm": 22.5,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "naupali",
      "naupali siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-25",
    "name": "Kharsara (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.15514,
    "lon": 84.31108,
    "straightKm": 18.42,
    "roadKm": 22.5,
    "timeMins": 50,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kharsara",
      "kharsara hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841234-5",
    "name": "Keotalia (Darauli, PIN 841234)",
    "category": "Post Office / Village",
    "lat": 26.07155,
    "lon": 84.13812,
    "straightKm": 18.48,
    "roadKm": 22.5,
    "timeMins": 50,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "keotalia, darauli",
      "keotalia",
      "keotalia darauli",
      "darauli",
      "841234"
    ]
  },
  {
    "id": "PIN-841227-7",
    "name": "Gaushalaroad Siwan (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.17807,
    "lon": 84.32338,
    "straightKm": 18.43,
    "roadKm": 22.5,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gaushalaroad siwan, siwan",
      "gaushalaroad siwan",
      "gausalaroad siwan",
      "gaushalaroad siwan siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-841231-8",
    "name": "Tiyan (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.15142,
    "lon": 84.31011,
    "straightKm": 18.54,
    "roadKm": 22.6,
    "timeMins": 50,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tiyan, andar",
      "tiyan",
      "tiyan andar",
      "andar",
      "841231"
    ]
  },
  {
    "id": "CEN-5-5",
    "name": "Balia Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07042,
    "lon": 84.13992,
    "straightKm": 18.59,
    "roadKm": 22.7,
    "timeMins": 50,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "balia darauli",
      "valia darauli",
      "balia darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-82",
    "name": "Tarwara More Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.26503,
    "lon": 84.33514,
    "straightKm": 18.64,
    "roadKm": 22.7,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tarwara more siwan",
      "tarwara more siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-14",
    "name": "Gosopali Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.18516,
    "lon": 84.32783,
    "straightKm": 18.59,
    "roadKm": 22.7,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gosopali hussainganj",
      "gosopali hussainganz",
      "gosopali hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-7-48",
    "name": "Mirapur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.25324,
    "lon": 84.33732,
    "straightKm": 18.68,
    "roadKm": 22.8,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mirapur",
      "mirapur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-75",
    "name": "Thakur Pachlakhi (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.18272,
    "lon": 84.3281,
    "straightKm": 18.7,
    "roadKm": 22.8,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "thakur pachlakhi",
      "thakur pachlakhi siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-9",
    "name": "Darweshpur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.17268,
    "lon": 84.3234,
    "straightKm": 18.66,
    "roadKm": 22.8,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "darweshpur",
      "darwespur",
      "darweshpur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-40",
    "name": "Sarea Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.20509,
    "lon": 84.33471,
    "straightKm": 18.69,
    "roadKm": 22.8,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarea hussainganj",
      "sarea hussainganz",
      "sarea hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-5-68",
    "name": "Pataua Buzurg (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07011,
    "lon": 84.17524,
    "straightKm": 18.75,
    "roadKm": 22.9,
    "timeMins": 50,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pataua buzurg",
      "pataua bujurg",
      "pataua buzurg darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841226-1",
    "name": "Barheya (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.23671,
    "lon": 84.33881,
    "straightKm": 18.75,
    "roadKm": 22.9,
    "timeMins": 50,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barheya, siwan head po",
      "barheya",
      "varheya",
      "barheya siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-274509-13",
    "name": "Rampur Buzurg (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.28161,
    "lon": 83.96886,
    "straightKm": 18.8,
    "roadKm": 22.9,
    "timeMins": 50,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rampur buzurg, salempur",
      "rampur buzurg",
      "rampur bujurg",
      "rampur buzurg salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "PIN-274702-4",
    "name": "Bhathwa Tiwari (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.25458,
    "lon": 83.96291,
    "straightKm": 18.84,
    "roadKm": 23,
    "timeMins": 51,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhathwa tiwari, bhatpar rani",
      "bhathwa tiwari",
      "vhathwa tiwari",
      "bhathwa tiwari bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-5-2",
    "name": "Babhnauli Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06805,
    "lon": 84.12887,
    "straightKm": 18.95,
    "roadKm": 23.1,
    "timeMins": 51,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "babhnauli darauli",
      "vabhnauli darauli",
      "babhnauli darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-18",
    "name": "Doaen (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.1161,
    "lon": 84.28399,
    "straightKm": 18.93,
    "roadKm": 23.1,
    "timeMins": 51,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "doaen",
      "doaen andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-23",
    "name": "Ghataila (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.10563,
    "lon": 84.27161,
    "straightKm": 18.97,
    "roadKm": 23.1,
    "timeMins": 51,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ghataila",
      "ghataila andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-9",
    "name": "Batrauli (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22704,
    "lon": 84.34065,
    "straightKm": 18.97,
    "roadKm": 23.1,
    "timeMins": 51,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "batrauli",
      "vatrauli",
      "batrauli siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-38",
    "name": "Karmaha (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07468,
    "lon": 84.09215,
    "straightKm": 19.01,
    "roadKm": 23.2,
    "timeMins": 51,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "karmaha",
      "karmaha darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-34",
    "name": "Kodaila (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.13199,
    "lon": 84.30123,
    "straightKm": 19.04,
    "roadKm": 23.2,
    "timeMins": 51,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kodaila",
      "kodaila andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841438-17",
    "name": "Radhaganj (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.36657,
    "lon": 84.27603,
    "straightKm": 19.04,
    "roadKm": 23.2,
    "timeMins": 51,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "radhaganj, mirganj",
      "radhaganj",
      "radhaganz",
      "radhaganj mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-5-26",
    "name": "Dumarahar Khurd (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06543,
    "lon": 84.1552,
    "straightKm": 19.12,
    "roadKm": 23.3,
    "timeMins": 51,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dumarahar khurd",
      "dumarahar khurd darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-47",
    "name": "Kumhti (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06623,
    "lon": 84.16617,
    "straightKm": 19.09,
    "roadKm": 23.3,
    "timeMins": 51,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kumhti",
      "kumhti darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-12",
    "name": "Bhada Khurd (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2107,
    "lon": 84.33959,
    "straightKm": 19.06,
    "roadKm": 23.3,
    "timeMins": 51,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhada khurd",
      "vhada khurd",
      "bhada khurd siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-72",
    "name": "Piprahia Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.07753,
    "lon": 84.07874,
    "straightKm": 19.17,
    "roadKm": 23.4,
    "timeMins": 51,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "piprahia darauli",
      "piprahia darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-49",
    "name": "Rakauli (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.09251,
    "lon": 84.25587,
    "straightKm": 19.21,
    "roadKm": 23.4,
    "timeMins": 51,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rakauli",
      "rakauli andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841227-15",
    "name": "Siwan Mission House (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.1981,
    "lon": 84.33843,
    "straightKm": 19.22,
    "roadKm": 23.4,
    "timeMins": 51,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "siwan mission house, siwan",
      "siwan mission house",
      "siwan mission house siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-274702-9",
    "name": "Kukur Ghanti (Bhatpar Rani, PIN 274702)",
    "category": "Post Office / Village",
    "lat": 26.28796,
    "lon": 83.96657,
    "straightKm": 19.22,
    "roadKm": 23.4,
    "timeMins": 51,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kukur ghanti, bhatpar rani",
      "kukur ghanti",
      "kukur ghanti bhatpar rani",
      "bhatpar rani",
      "274702"
    ]
  },
  {
    "id": "CEN-6-26",
    "name": "Hujhujipur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.1216,
    "lon": 84.29399,
    "straightKm": 19.23,
    "roadKm": 23.5,
    "timeMins": 52,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hujhujipur",
      "huzhuzipur",
      "hujhujipur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-6-36",
    "name": "Manpur Pateji (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.09762,
    "lon": 84.26518,
    "straightKm": 19.28,
    "roadKm": 23.5,
    "timeMins": 52,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "manpur pateji",
      "manpur patezi",
      "manpur pateji andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-8-33",
    "name": "Paighambarpur Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.14228,
    "lon": 84.31266,
    "straightKm": 19.3,
    "roadKm": 23.5,
    "timeMins": 52,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "paighambarpur hussainganj",
      "paighambarpur hussainganz",
      "paighambarpur hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841236-6",
    "name": "Siswan Kala (Hussainganj, PIN 841236)",
    "category": "Post Office / Village",
    "lat": 26.18818,
    "lon": 84.33579,
    "straightKm": 19.24,
    "roadKm": 23.5,
    "timeMins": 52,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "siswan kala, hussainganj",
      "siswan kala",
      "siswan kala hussainganj",
      "hussainganj",
      "841236"
    ]
  },
  {
    "id": "PIN-841438-2",
    "name": "J.Jagarnath (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.32914,
    "lon": 84.31514,
    "straightKm": 19.3,
    "roadKm": 23.5,
    "timeMins": 52,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "j.jagarnath, mirganj",
      "j.jagarnath",
      "z.zagarnath",
      "j.jagarnath mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-5-12",
    "name": "Bharsanda (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06758,
    "lon": 84.11001,
    "straightKm": 19.31,
    "roadKm": 23.6,
    "timeMins": 52,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bharsanda",
      "vharsanda",
      "bharsanda darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-14",
    "name": "Bhanta Pokhar (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.23768,
    "lon": 84.34442,
    "straightKm": 19.31,
    "roadKm": 23.6,
    "timeMins": 52,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhanta pokhar",
      "vhanta pokhar",
      "bhanta pokhar siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-20",
    "name": "Chakra (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20143,
    "lon": 84.34058,
    "straightKm": 19.35,
    "roadKm": 23.6,
    "timeMins": 52,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chakra",
      "chakra siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-41",
    "name": "Lohsi Khurd (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19077,
    "lon": 84.33778,
    "straightKm": 19.36,
    "roadKm": 23.6,
    "timeMins": 52,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lohsi khurd",
      "lohsi khurd siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-61",
    "name": "Pithauri (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.26111,
    "lon": 84.34334,
    "straightKm": 19.38,
    "roadKm": 23.6,
    "timeMins": 52,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pithauri",
      "pithauri siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841231-2",
    "name": "Faridpur (Andar, PIN 841231)",
    "category": "Post Office / Village",
    "lat": 26.09914,
    "lon": 84.26814,
    "straightKm": 19.32,
    "roadKm": 23.6,
    "timeMins": 52,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "faridpur, andar",
      "faridpur",
      "faridpur andar",
      "andar",
      "841231"
    ]
  },
  {
    "id": "PIN-841438-23",
    "name": "Sundri (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.31814,
    "lon": 84.32239,
    "straightKm": 19.32,
    "roadKm": 23.6,
    "timeMins": 52,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sundri, mirganj",
      "sundri",
      "sundri mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-5-25",
    "name": "Dumarahar Buzurg (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06907,
    "lon": 84.09999,
    "straightKm": 19.39,
    "roadKm": 23.7,
    "timeMins": 52,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dumarahar buzurg",
      "dumarahar bujurg",
      "dumarahar buzurg darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-55",
    "name": "Sonkara (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.13734,
    "lon": 84.31093,
    "straightKm": 19.46,
    "roadKm": 23.7,
    "timeMins": 52,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sonkara",
      "sonkara andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-4",
    "name": "Balchandhata (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21839,
    "lon": 84.34456,
    "straightKm": 19.44,
    "roadKm": 23.7,
    "timeMins": 52,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "balchandhata",
      "valchandhata",
      "balchandhata siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-27",
    "name": "Hari Balmha (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24696,
    "lon": 84.34543,
    "straightKm": 19.44,
    "roadKm": 23.7,
    "timeMins": 52,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hari balmha",
      "hari balmha siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-4",
    "name": "Chak Hazi (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.16252,
    "lon": 84.32799,
    "straightKm": 19.54,
    "roadKm": 23.8,
    "timeMins": 52,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chak hazi",
      "chak haji",
      "chak hazi hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-12",
    "name": "Fazilpur Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.1535,
    "lon": 84.32215,
    "straightKm": 19.47,
    "roadKm": 23.8,
    "timeMins": 52,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "fazilpur hussainganj",
      "fajilpur hussainganj",
      "fazilpur hussainganz",
      "fazilpur hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-5-7",
    "name": "Barheya Punak (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06353,
    "lon": 84.12048,
    "straightKm": 19.56,
    "roadKm": 23.9,
    "timeMins": 53,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barheya punak",
      "varheya punak",
      "barheya punak darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-8-19",
    "name": "Hathauri Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.19343,
    "lon": 84.34069,
    "straightKm": 19.56,
    "roadKm": 23.9,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hathauri hussainganj",
      "hathauri hussainganz",
      "hathauri hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841226-7",
    "name": "Dhanuti (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.18857,
    "lon": 84.33988,
    "straightKm": 19.62,
    "roadKm": 23.9,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dhanuti, siwan head po",
      "dhanuti",
      "dhanuti siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-841227-11",
    "name": "Nathuchhap (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.23289,
    "lon": 84.34722,
    "straightKm": 19.6,
    "roadKm": 23.9,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nathuchhap, siwan",
      "nathuchhap",
      "nathuchap",
      "nathuchhap siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-274509-18",
    "name": "Tulsi Bara (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.25806,
    "lon": 83.95594,
    "straightKm": 19.57,
    "roadKm": 23.9,
    "timeMins": 53,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tulsi bara, salempur",
      "tulsi bara",
      "tulsi bara salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-5-10",
    "name": "Belaon (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06068,
    "lon": 84.1361,
    "straightKm": 19.7,
    "roadKm": 24,
    "timeMins": 53,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "belaon",
      "velaon",
      "belaon darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-18",
    "name": "Chandaur (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06027,
    "lon": 84.14581,
    "straightKm": 19.69,
    "roadKm": 24,
    "timeMins": 53,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chandaur",
      "chandaur darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-8-6",
    "name": "Chhapiya Buzurg (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.18126,
    "lon": 84.33763,
    "straightKm": 19.65,
    "roadKm": 24,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chhapiya buzurg",
      "chhapiya bujurg",
      "chapiya buzurg",
      "chhapiya buzurg hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-6-31",
    "name": "Khardara (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.10576,
    "lon": 84.2838,
    "straightKm": 19.75,
    "roadKm": 24.1,
    "timeMins": 53,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khardara",
      "khardara andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-62",
    "name": "Puraina (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.18135,
    "lon": 84.33863,
    "straightKm": 19.74,
    "roadKm": 24.1,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "puraina",
      "puraina siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841438-9",
    "name": "Lakri Dargah (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.38796,
    "lon": 84.25657,
    "straightKm": 19.79,
    "roadKm": 24.1,
    "timeMins": 53,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lakri dargah, mirganj",
      "lakri dargah",
      "lakri dargah mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-8-1",
    "name": "Bali (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.17108,
    "lon": 84.33536,
    "straightKm": 19.83,
    "roadKm": 24.2,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bali",
      "vali",
      "bali hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841227-10",
    "name": "Mahuwari (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.19912,
    "lon": 84.34507,
    "straightKm": 19.84,
    "roadKm": 24.2,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mahuwari, siwan",
      "mahuwari",
      "mahuwari siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-841226-6",
    "name": "Chapra Road (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.24368,
    "lon": 84.35029,
    "straightKm": 19.91,
    "roadKm": 24.3,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chapra road, siwan head po",
      "chapra road",
      "chapra road siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-841226-20",
    "name": "Tetria (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.21131,
    "lon": 84.34879,
    "straightKm": 19.96,
    "roadKm": 24.3,
    "timeMins": 53,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tetria, siwan head po",
      "tetria",
      "tetria siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-274509-8",
    "name": "Dol Chhapra (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.30842,
    "lon": 83.96711,
    "straightKm": 19.95,
    "roadKm": 24.3,
    "timeMins": 53,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dol chhapra, salempur",
      "dol chhapra",
      "dol chapra",
      "dol chhapra salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-5-59",
    "name": "Munra Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06799,
    "lon": 84.08448,
    "straightKm": 19.96,
    "roadKm": 24.4,
    "timeMins": 54,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "munra darauli",
      "munra darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-1",
    "name": "Aghaila (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22568,
    "lon": 84.35085,
    "straightKm": 19.99,
    "roadKm": 24.4,
    "timeMins": 54,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "aghaila",
      "aghaila siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-40",
    "name": "Lohsi Kalan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.25465,
    "lon": 84.35029,
    "straightKm": 19.99,
    "roadKm": 24.4,
    "timeMins": 54,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lohsi kalan",
      "lohsi kalan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "KS-042",
    "curated": true,
    "name": "Hussainganj (हुसैनगंज — सिवान)",
    "category": "Town / Block",
    "lat": 26.165,
    "lon": 84.342,
    "straightKm": 20.7,
    "roadKm": 24.5,
    "timeMins": 38,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District Belt",
    "aliases": [
      "hussainganj",
      "husainganj",
      "हुसैनगंज"
    ]
  },
  {
    "id": "CEN-5-81",
    "name": "Sarna (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05854,
    "lon": 84.17645,
    "straightKm": 20.04,
    "roadKm": 24.5,
    "timeMins": 54,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarna",
      "sarna darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-47",
    "name": "Pateji (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.12245,
    "lon": 84.30569,
    "straightKm": 20.05,
    "roadKm": 24.5,
    "timeMins": 54,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pateji",
      "patezi",
      "pateji andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-7",
    "name": "Barhan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20689,
    "lon": 84.34943,
    "straightKm": 20.1,
    "roadKm": 24.5,
    "timeMins": 54,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barhan",
      "varhan",
      "barhan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-32",
    "name": "Nawalpur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.20103,
    "lon": 84.3482,
    "straightKm": 20.1,
    "roadKm": 24.5,
    "timeMins": 54,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nawalpur",
      "nawalpur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-5-39",
    "name": "Karmaul (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05595,
    "lon": 84.15704,
    "straightKm": 20.18,
    "roadKm": 24.6,
    "timeMins": 54,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "karmaul",
      "karmaul darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-39",
    "name": "Modassilpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.1115,
    "lon": 84.29596,
    "straightKm": 20.14,
    "roadKm": 24.6,
    "timeMins": 54,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "modassilpur",
      "modassilpur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-6",
    "name": "Bansopali (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.23435,
    "lon": 84.35278,
    "straightKm": 20.15,
    "roadKm": 24.6,
    "timeMins": 54,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bansopali",
      "vansopali",
      "bansopali siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-28",
    "name": "Hasanpurwa Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19303,
    "lon": 84.34662,
    "straightKm": 20.14,
    "roadKm": 24.6,
    "timeMins": 54,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hasanpurwa siwan",
      "hasanpurwa siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-20",
    "name": "Jurkan (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.14261,
    "lon": 84.32331,
    "straightKm": 20.18,
    "roadKm": 24.6,
    "timeMins": 54,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jurkan",
      "zurkan",
      "jurkan hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841438-20",
    "name": "Sathi (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.35581,
    "lon": 84.30429,
    "straightKm": 20.19,
    "roadKm": 24.6,
    "timeMins": 54,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sathi, mirganj",
      "sathi",
      "sathi mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-5-60",
    "name": "Mura Khap (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05579,
    "lon": 84.16718,
    "straightKm": 20.25,
    "roadKm": 24.7,
    "timeMins": 54,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mura khap",
      "mura khap darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-44",
    "name": "Parari (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.09634,
    "lon": 84.27933,
    "straightKm": 20.25,
    "roadKm": 24.7,
    "timeMins": 54,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "parari",
      "parari andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841227-5",
    "name": "Chanaur (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.20355,
    "lon": 84.35012,
    "straightKm": 20.23,
    "roadKm": 24.7,
    "timeMins": 54,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chanaur, siwan",
      "chanaur",
      "chanaur siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "CEN-5-20",
    "name": "Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05772,
    "lon": 84.11107,
    "straightKm": 20.36,
    "roadKm": 24.8,
    "timeMins": 55,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "darauli",
      "darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-74",
    "name": "Tanrwa Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.26723,
    "lon": 84.35195,
    "straightKm": 20.33,
    "roadKm": 24.8,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tanrwa siwan",
      "tanrwa siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841227-0",
    "name": "Barhan Bazar (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.21,
    "lon": 84.352,
    "straightKm": 20.3,
    "roadKm": 24.8,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barhan bazar, siwan",
      "barhan bazar",
      "barhan bajar",
      "varhan bazar",
      "barhan bazar siwan",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार"
    ]
  },
  {
    "id": "CEN-5-15",
    "name": "Bilak (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05513,
    "lon": 84.12504,
    "straightKm": 20.42,
    "roadKm": 24.9,
    "timeMins": 55,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bilak",
      "vilak",
      "bilak darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-46",
    "name": "Kishunpali (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.06108,
    "lon": 84.09228,
    "straightKm": 20.45,
    "roadKm": 24.9,
    "timeMins": 55,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kishunpali",
      "kisunpali",
      "kishunpali darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-19",
    "name": "Bishunpurwa (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24472,
    "lon": 84.35538,
    "straightKm": 20.42,
    "roadKm": 24.9,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bishunpurwa",
      "vishunpurwa",
      "bisunpurwa",
      "bishunpurwa siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-83",
    "name": "Chhapra Road Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.17295,
    "lon": 84.34208,
    "straightKm": 20.38,
    "roadKm": 24.9,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chhapra road siwan",
      "chapra road siwan",
      "chhapra road siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841227-2",
    "name": "Basopali (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.17414,
    "lon": 84.34314,
    "straightKm": 20.43,
    "roadKm": 24.9,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "basopali, siwan",
      "basopali",
      "vasopali",
      "basopali siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "CEN-6-57",
    "name": "Tiae (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.08864,
    "lon": 84.27146,
    "straightKm": 20.45,
    "roadKm": 25,
    "timeMins": 55,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tiae",
      "tiae andar block",
      "andar block"
    ]
  },
  {
    "id": "PIN-841438-15",
    "name": "Paikauli Baddo (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.3531,
    "lon": 84.31043,
    "straightKm": 20.47,
    "roadKm": 25,
    "timeMins": 55,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "paikauli baddo, mirganj",
      "paikauli baddo",
      "paikauli baddo mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-5-33",
    "name": "Hathauri (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05742,
    "lon": 84.10142,
    "straightKm": 20.6,
    "roadKm": 25.1,
    "timeMins": 55,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hathauri",
      "hathauri darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-8-11",
    "name": "Faridpur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.18603,
    "lon": 84.3486,
    "straightKm": 20.54,
    "roadKm": 25.1,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "faridpur",
      "faridpur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841234-4",
    "name": "Gauri (Darauli, PIN 841234)",
    "category": "Post Office / Village",
    "lat": 26.06758,
    "lon": 84.06891,
    "straightKm": 20.57,
    "roadKm": 25.1,
    "timeMins": 55,
    "direction": "दक्षिण-पश्चिम (South-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gauri, darauli",
      "gauri",
      "gauri darauli",
      "darauli",
      "841234"
    ]
  },
  {
    "id": "PIN-841226-15",
    "name": "Sarsar (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.2086,
    "lon": 84.35493,
    "straightKm": 20.61,
    "roadKm": 25.1,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarsar, siwan head po",
      "sarsar",
      "sarsar siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "CEN-7-15",
    "name": "Bharthui Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19899,
    "lon": 84.35371,
    "straightKm": 20.68,
    "roadKm": 25.2,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bharthui siwan",
      "vharthui siwan",
      "bharthui siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-49",
    "name": "Mohammadpur Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.18302,
    "lon": 84.34845,
    "straightKm": 20.62,
    "roadKm": 25.2,
    "timeMins": 55,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mohammadpur siwan",
      "mohammadpur siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-41",
    "name": "Shahbazpur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.1301,
    "lon": 84.32003,
    "straightKm": 20.67,
    "roadKm": 25.2,
    "timeMins": 55,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "shahbazpur",
      "shahbajpur",
      "sahbazpur",
      "shahbazpur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-5-31",
    "name": "Gumawar (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05056,
    "lon": 84.14564,
    "straightKm": 20.77,
    "roadKm": 25.3,
    "timeMins": 56,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gumawar",
      "gumawar darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-8-7",
    "name": "Chhapiya Khurd (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.14903,
    "lon": 84.3337,
    "straightKm": 20.72,
    "roadKm": 25.3,
    "timeMins": 56,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chhapiya khurd",
      "chapiya khurd",
      "chhapiya khurd hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841227-16",
    "name": "Surwala (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.22543,
    "lon": 84.35839,
    "straightKm": 20.75,
    "roadKm": 25.3,
    "timeMins": 56,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "surwala, siwan",
      "surwala",
      "surwala siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "CEN-5-23",
    "name": "Don Khurd (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05044,
    "lon": 84.1342,
    "straightKm": 20.85,
    "roadKm": 25.4,
    "timeMins": 56,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "don khurd",
      "don khurd darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-6-52",
    "name": "Salahpur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.10092,
    "lon": 84.29399,
    "straightKm": 20.84,
    "roadKm": 25.4,
    "timeMins": 56,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "salahpur",
      "salahpur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-7-2",
    "name": "Amlori (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21115,
    "lon": 84.35732,
    "straightKm": 20.8,
    "roadKm": 25.4,
    "timeMins": 56,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "amlori",
      "amlori siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-53",
    "name": "Nathuchhap (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.26031,
    "lon": 84.35796,
    "straightKm": 20.82,
    "roadKm": 25.4,
    "timeMins": 56,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nathuchhap",
      "nathuchap",
      "nathuchhap siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841226-19",
    "name": "Tarwa (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.28044,
    "lon": 84.35388,
    "straightKm": 20.81,
    "roadKm": 25.4,
    "timeMins": 56,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tarwa, siwan head po",
      "tarwa",
      "tarwa siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "CEN-6-60",
    "name": "Pateji Bahadur (Andar Block)",
    "category": "Village (Andar Block)",
    "lat": 26.11133,
    "lon": 84.30676,
    "straightKm": 20.94,
    "roadKm": 25.5,
    "timeMins": 56,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pateji bahadur",
      "patezi bahadur",
      "pateji bahadur andar block",
      "andar block"
    ]
  },
  {
    "id": "CEN-5-80",
    "name": "Sarea Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.05974,
    "lon": 84.07943,
    "straightKm": 20.99,
    "roadKm": 25.6,
    "timeMins": 56,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarea darauli",
      "sarea darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-8-3",
    "name": "Bindwal (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.1751,
    "lon": 84.34974,
    "straightKm": 21.02,
    "roadKm": 25.6,
    "timeMins": 56,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bindwal",
      "vindwal",
      "bindwal hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-45",
    "name": "Surapur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.20497,
    "lon": 84.35828,
    "straightKm": 21.01,
    "roadKm": 25.6,
    "timeMins": 56,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "surapur",
      "surapur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841241-4",
    "name": "Jasauli (Pachrukhi, PIN 841241)",
    "category": "Post Office / Village",
    "lat": 26.17958,
    "lon": 84.35091,
    "straightKm": 20.97,
    "roadKm": 25.6,
    "timeMins": 56,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jasauli, pachrukhi",
      "jasauli",
      "zasauli",
      "jasauli pachrukhi",
      "pachrukhi",
      "841241"
    ]
  },
  {
    "id": "CEN-7-11",
    "name": "Bhada Kalan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.23842,
    "lon": 84.36212,
    "straightKm": 21.08,
    "roadKm": 25.7,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhada kalan",
      "vhada kalan",
      "bhada kalan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-32",
    "name": "Kaira Tal (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.25119,
    "lon": 84.36178,
    "straightKm": 21.1,
    "roadKm": 25.7,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kaira tal",
      "kaira tal siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841438-10",
    "name": "Line Bazar (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.35412,
    "lon": 84.31707,
    "straightKm": 21.06,
    "roadKm": 25.7,
    "timeMins": 57,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "line bazar, mirganj",
      "line bazar",
      "line bajar",
      "line bazar mirganj",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "PIN-841438-22",
    "name": "Sawraje (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.38565,
    "lon": 84.28251,
    "straightKm": 21.08,
    "roadKm": 25.7,
    "timeMins": 57,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sawraje, mirganj",
      "sawraje",
      "sawraze",
      "sawraje mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-7-0",
    "name": "Adli (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2205,
    "lon": 84.36192,
    "straightKm": 21.14,
    "roadKm": 25.8,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "adli",
      "adli siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-28",
    "name": "Gauri (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.04878,
    "lon": 84.11749,
    "straightKm": 21.23,
    "roadKm": 25.9,
    "timeMins": 57,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gauri",
      "gauri darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-3",
    "name": "Baghra (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2291,
    "lon": 84.3631,
    "straightKm": 21.19,
    "roadKm": 25.9,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "baghra",
      "vaghra",
      "baghra siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-36",
    "name": "Khagaura (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.18752,
    "lon": 84.35666,
    "straightKm": 21.27,
    "roadKm": 25.9,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khagaura",
      "khagaura siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-24",
    "name": "Khairanti (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.19261,
    "lon": 84.35782,
    "straightKm": 21.24,
    "roadKm": 25.9,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khairanti",
      "khairanti hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841226-10",
    "name": "Jiyan (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.20962,
    "lon": 84.36157,
    "straightKm": 21.25,
    "roadKm": 25.9,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jiyan, siwan head po",
      "jiyan",
      "ziyan",
      "jiyan siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-841226-11",
    "name": "Mahodipur (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.24339,
    "lon": 84.36372,
    "straightKm": 21.24,
    "roadKm": 25.9,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mahodipur, siwan head po",
      "mahodipur",
      "mahodipur siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "KS-038",
    "curated": true,
    "name": "Hathua / Mirganj (हथुआ / मीरगंज)",
    "category": "Town",
    "lat": 26.365,
    "lon": 84.312,
    "straightKm": 21.4,
    "roadKm": 26,
    "timeMins": 42,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt",
    "aliases": [
      "hathua",
      "mirganj",
      "meerganj",
      "हथुआ",
      "मीरगंज"
    ]
  },
  {
    "id": "CEN-5-52",
    "name": "Mahpalwa (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.04603,
    "lon": 84.1552,
    "straightKm": 21.28,
    "roadKm": 26,
    "timeMins": 57,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mahpalwa",
      "mahpalwa darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-70",
    "name": "Siari (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.17496,
    "lon": 84.35294,
    "straightKm": 21.32,
    "roadKm": 26,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "siari",
      "siari siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-0",
    "name": "Baghauni (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.165,
    "lon": 84.34836,
    "straightKm": 21.29,
    "roadKm": 26,
    "timeMins": 57,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "baghauni",
      "vaghauni",
      "baghauni hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-2",
    "name": "Bararam (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.15402,
    "lon": 84.34296,
    "straightKm": 21.29,
    "roadKm": 26,
    "timeMins": 57,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bararam",
      "vararam",
      "bararam hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-28",
    "name": "Mahpur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.13275,
    "lon": 84.3304,
    "straightKm": 21.36,
    "roadKm": 26.1,
    "timeMins": 57,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mahpur",
      "mahpur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-5-73",
    "name": "Punak Buzurg (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.04485,
    "lon": 84.16489,
    "straightKm": 21.45,
    "roadKm": 26.2,
    "timeMins": 58,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "punak buzurg",
      "punak bujurg",
      "punak buzurg darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-87",
    "name": "Purana Qila Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.27099,
    "lon": 84.36256,
    "straightKm": 21.44,
    "roadKm": 26.2,
    "timeMins": 58,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "purana qila siwan",
      "purana qila siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841438-1",
    "name": "Baleshra (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.38121,
    "lon": 84.29431,
    "straightKm": 21.46,
    "roadKm": 26.2,
    "timeMins": 58,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "baleshra, mirganj",
      "baleshra",
      "valeshra",
      "balesra",
      "baleshra mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-5-67",
    "name": "Parmanandpur (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.0521,
    "lon": 84.08813,
    "straightKm": 21.53,
    "roadKm": 26.3,
    "timeMins": 58,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "parmanandpur",
      "parmanandpur darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-10",
    "name": "Benusar (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20421,
    "lon": 84.36412,
    "straightKm": 21.59,
    "roadKm": 26.3,
    "timeMins": 58,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "benusar",
      "venusar",
      "benusar siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-41",
    "name": "Karom (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.04638,
    "lon": 84.10809,
    "straightKm": 21.66,
    "roadKm": 26.4,
    "timeMins": 58,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "karom",
      "karom darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-23",
    "name": "Dewapali (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19459,
    "lon": 84.36233,
    "straightKm": 21.63,
    "roadKm": 26.4,
    "timeMins": 58,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dewapali",
      "dewapali siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-15",
    "name": "Habibnagar (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.13976,
    "lon": 84.33873,
    "straightKm": 21.66,
    "roadKm": 26.4,
    "timeMins": 58,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "habibnagar",
      "habibnagar hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841234-7",
    "name": "Sareyarampur (Darauli, PIN 841234)",
    "category": "Post Office / Village",
    "lat": 26.04607,
    "lon": 84.11138,
    "straightKm": 21.63,
    "roadKm": 26.4,
    "timeMins": 58,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sareyarampur, darauli",
      "sareyarampur",
      "sareyarampur darauli",
      "darauli",
      "841234"
    ]
  },
  {
    "id": "PIN-841226-2",
    "name": "Barkagaon (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.18464,
    "lon": 84.35964,
    "straightKm": 21.64,
    "roadKm": 26.4,
    "timeMins": 58,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barkagaon, siwan head po",
      "barkagaon",
      "varkagaon",
      "barkagaon siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "CEN-5-36",
    "name": "Kanhauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.04293,
    "lon": 84.12817,
    "straightKm": 21.73,
    "roadKm": 26.5,
    "timeMins": 58,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kanhauli",
      "kanhauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-54",
    "name": "Majhaulia Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.04755,
    "lon": 84.09798,
    "straightKm": 21.75,
    "roadKm": 26.5,
    "timeMins": 58,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "majhaulia darauli",
      "mazhaulia darauli",
      "majhaulia darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "PIN-841226-5",
    "name": "Chapia Bujurg (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.21405,
    "lon": 84.36662,
    "straightKm": 21.68,
    "roadKm": 26.5,
    "timeMins": 58,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chapia bujurg, siwan head po",
      "chapia bujurg",
      "chapia buzurg",
      "chapia bujurg siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-841438-5",
    "name": "K.K. Kararia (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.35855,
    "lon": 84.32212,
    "straightKm": 21.76,
    "roadKm": 26.5,
    "timeMins": 58,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "k.k. kararia, mirganj",
      "k.k. kararia",
      "k.k. kararia mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-5-44",
    "name": "Khairati (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.04173,
    "lon": 84.14144,
    "straightKm": 21.77,
    "roadKm": 26.6,
    "timeMins": 59,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khairati",
      "khairati darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-5",
    "name": "Baletha (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21337,
    "lon": 84.3677,
    "straightKm": 21.8,
    "roadKm": 26.6,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "baletha",
      "valetha",
      "baletha siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-66",
    "name": "Sarabe (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.26346,
    "lon": 84.36761,
    "straightKm": 21.81,
    "roadKm": 26.6,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarabe",
      "sarabe siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841234-2",
    "name": "Bishwania (Darauli, PIN 841234)",
    "category": "Post Office / Village",
    "lat": 26.04214,
    "lon": 84.13114,
    "straightKm": 21.79,
    "roadKm": 26.6,
    "timeMins": 59,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bishwania, darauli",
      "bishwania",
      "vishwania",
      "biswania",
      "bishwania darauli",
      "darauli",
      "841234"
    ]
  },
  {
    "id": "PIN-841226-0",
    "name": "Amlori (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.2205,
    "lon": 84.3685,
    "straightKm": 21.79,
    "roadKm": 26.6,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "amlori, siwan head po",
      "amlori",
      "amlori siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-841227-3",
    "name": "Benusar (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.24808,
    "lon": 84.36922,
    "straightKm": 21.82,
    "roadKm": 26.6,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "benusar, siwan",
      "benusar",
      "venusar",
      "benusar siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-841236-0",
    "name": "Aranda (Hussainganj, PIN 841236)",
    "category": "Post Office / Village",
    "lat": 26.165,
    "lon": 84.354,
    "straightKm": 21.81,
    "roadKm": 26.6,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "aranda, hussainganj",
      "aranda",
      "aranda hussainganj",
      "hussainganj",
      "841236"
    ]
  },
  {
    "id": "CEN-7-24",
    "name": "Dhanauti Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24402,
    "lon": 84.36998,
    "straightKm": 21.87,
    "roadKm": 26.7,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dhanauti siwan",
      "dhanauti siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841236-5",
    "name": "Rampur Ke Tola (Hussainganj, PIN 841236)",
    "category": "Post Office / Village",
    "lat": 26.15855,
    "lon": 84.35212,
    "straightKm": 21.91,
    "roadKm": 26.7,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rampur ke tola, hussainganj",
      "rampur ke tola",
      "rampur ke tola hussainganj",
      "hussainganj",
      "841236"
    ]
  },
  {
    "id": "CEN-7-45",
    "name": "Majhwa (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.25455,
    "lon": 84.37037,
    "straightKm": 21.98,
    "roadKm": 26.8,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "majhwa",
      "mazhwa",
      "majhwa siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-16",
    "name": "Harihans (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.18191,
    "lon": 84.36206,
    "straightKm": 21.96,
    "roadKm": 26.8,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "harihans",
      "harihans hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-7-8",
    "name": "Barhea (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22608,
    "lon": 84.37178,
    "straightKm": 22.07,
    "roadKm": 26.9,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barhea",
      "varhea",
      "barhea siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-57",
    "name": "Pachlakhi (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.17961,
    "lon": 84.3622,
    "straightKm": 22.04,
    "roadKm": 26.9,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pachlakhi",
      "pachlakhi siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841438-18",
    "name": "Rasulpur (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.33106,
    "lon": 84.34594,
    "straightKm": 22.07,
    "roadKm": 26.9,
    "timeMins": 59,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rasulpur, mirganj",
      "rasulpur",
      "rasulpur mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "KS-043",
    "curated": true,
    "name": "Salempur Junction (सलेमपुर — देवरिया, UP)",
    "category": "Town / Junction",
    "lat": 26.292,
    "lon": 83.922,
    "straightKm": 23.6,
    "roadKm": 27,
    "timeMins": 42,
    "direction": "पश्चिम (West — UP)",
    "zone": "Zone 4 — District & Highway Belt",
    "aliases": [
      "salempur",
      "सलेमपुर"
    ]
  },
  {
    "id": "CEN-7-91",
    "name": "Sadar Hospital Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.16858,
    "lon": 84.35939,
    "straightKm": 22.17,
    "roadKm": 27,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sadar hospital siwan",
      "sadar hospital siwan siwan sadar & city",
      "hospital",
      "aspatal",
      "अस्पताल",
      "हॉस्पिटल",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-8",
    "name": "Chhata (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.17155,
    "lon": 84.35993,
    "straightKm": 22.11,
    "roadKm": 27,
    "timeMins": 59,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chhata",
      "chata",
      "chhata hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-7-16",
    "name": "Bhatwalia (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2349,
    "lon": 84.37359,
    "straightKm": 22.22,
    "roadKm": 27.1,
    "timeMins": 60,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhatwalia",
      "vhatwalia",
      "bhatwalia siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-37",
    "name": "Rasulpur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.19405,
    "lon": 84.36836,
    "straightKm": 22.23,
    "roadKm": 27.1,
    "timeMins": 60,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rasulpur",
      "rasulpur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-5-65",
    "name": "Oini (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.03664,
    "lon": 84.14998,
    "straightKm": 22.32,
    "roadKm": 27.2,
    "timeMins": 60,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "oini",
      "oini darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-8-5",
    "name": "Chanp (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.15663,
    "lon": 84.35515,
    "straightKm": 22.27,
    "roadKm": 27.2,
    "timeMins": 60,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chanp",
      "chanp hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-49",
    "name": "Chanp Bazar (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.121,
    "lon": 84.33255,
    "straightKm": 22.27,
    "roadKm": 27.2,
    "timeMins": 60,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chanp bazar",
      "chanp bajar",
      "chanp bazar hussainganj block",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "PIN-841236-3",
    "name": "Hasanpura (Hussainganj, PIN 841236)",
    "category": "Post Office / Village",
    "lat": 26.20308,
    "lon": 84.37122,
    "straightKm": 22.31,
    "roadKm": 27.2,
    "timeMins": 60,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hasanpura, hussainganj",
      "hasanpura",
      "hasanpura hussainganj",
      "hussainganj",
      "841236"
    ]
  },
  {
    "id": "CEN-5-49",
    "name": "Lenja (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.03814,
    "lon": 84.11943,
    "straightKm": 22.37,
    "roadKm": 27.3,
    "timeMins": 60,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lenja",
      "lenza",
      "lenja darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-8-10",
    "name": "Dhankhar (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.14588,
    "lon": 84.35095,
    "straightKm": 22.41,
    "roadKm": 27.3,
    "timeMins": 60,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dhankhar",
      "dhankhar hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841226-16",
    "name": "Satation Road (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.23593,
    "lon": 84.37489,
    "straightKm": 22.35,
    "roadKm": 27.3,
    "timeMins": 60,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "satation road, siwan head po",
      "satation road",
      "satation road siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-841438-0",
    "name": "B.A. Pakwalia (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.365,
    "lon": 84.324,
    "straightKm": 22.35,
    "roadKm": 27.3,
    "timeMins": 60,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "b.a. pakwalia, mirganj",
      "b.a. pakwalia",
      "v.a. pakwalia",
      "b.a. pakwalia mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "PIN-274509-3",
    "name": "Barthi (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.33008,
    "lon": 83.95122,
    "straightKm": 22.41,
    "roadKm": 27.3,
    "timeMins": 60,
    "direction": "उत्तर-पश्चिम (North-West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "barthi, salempur",
      "barthi",
      "varthi",
      "barthi salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "PIN-274509-16",
    "name": "Srinagar (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.30743,
    "lon": 83.94039,
    "straightKm": 22.38,
    "roadKm": 27.3,
    "timeMins": 60,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "srinagar, salempur",
      "srinagar",
      "srinagar salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-7-18",
    "name": "Bishunpur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20383,
    "lon": 84.37325,
    "straightKm": 22.5,
    "roadKm": 27.4,
    "timeMins": 60,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bishunpur",
      "vishunpur",
      "bisunpur",
      "bishunpur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-274509-0",
    "name": "Ahirauli (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.292,
    "lon": 83.934,
    "straightKm": 22.46,
    "roadKm": 27.4,
    "timeMins": 60,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ahirauli, salempur",
      "ahirauli",
      "ahirauli salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "PIN-274509-5",
    "name": "Chero (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.28555,
    "lon": 83.93212,
    "straightKm": 22.46,
    "roadKm": 27.4,
    "timeMins": 60,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chero, salempur",
      "chero",
      "chero salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-7-44",
    "name": "Majhaulia Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.1864,
    "lon": 84.36914,
    "straightKm": 22.5,
    "roadKm": 27.5,
    "timeMins": 61,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "majhaulia siwan",
      "mazhaulia siwan",
      "majhaulia siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-57",
    "name": "Misraulia Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.03451,
    "lon": 84.13406,
    "straightKm": 22.61,
    "roadKm": 27.6,
    "timeMins": 61,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "misraulia darauli",
      "misraulia darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-86",
    "name": "Tariwan (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.0343,
    "lon": 84.15934,
    "straightKm": 22.59,
    "roadKm": 27.6,
    "timeMins": 61,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tariwan",
      "tariwan darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-88",
    "name": "Ukrenri (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.04255,
    "lon": 84.08674,
    "straightKm": 22.58,
    "roadKm": 27.6,
    "timeMins": 61,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ukrenri",
      "ukrenri darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-13",
    "name": "Bhadaura (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21614,
    "lon": 84.37631,
    "straightKm": 22.62,
    "roadKm": 27.6,
    "timeMins": 61,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhadaura",
      "vhadaura",
      "bhadaura siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-274509-2",
    "name": "Balepur (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.25614,
    "lon": 83.92514,
    "straightKm": 22.6,
    "roadKm": 27.6,
    "timeMins": 61,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "balepur, salempur",
      "balepur",
      "valepur",
      "balepur salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-5-62",
    "name": "Narayanpur Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.03637,
    "lon": 84.109,
    "straightKm": 22.73,
    "roadKm": 27.7,
    "timeMins": 61,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "narayanpur darauli",
      "narayanpur darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-31",
    "name": "Jiaen (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.1947,
    "lon": 84.37308,
    "straightKm": 22.67,
    "roadKm": 27.7,
    "timeMins": 61,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jiaen",
      "ziaen",
      "jiaen siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-36",
    "name": "Rashid Chak (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.12629,
    "lon": 84.34218,
    "straightKm": 22.74,
    "roadKm": 27.7,
    "timeMins": 61,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "rashid chak",
      "rasid chak",
      "rashid chak hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-5-75",
    "name": "Ram Punak (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.03782,
    "lon": 84.0978,
    "straightKm": 22.81,
    "roadKm": 27.8,
    "timeMins": 61,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ram punak",
      "ram punak darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-37",
    "name": "Khalispur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24525,
    "lon": 84.37896,
    "straightKm": 22.77,
    "roadKm": 27.8,
    "timeMins": 61,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khalispur",
      "khalispur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-23",
    "name": "Khanpur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.13458,
    "lon": 84.34884,
    "straightKm": 22.82,
    "roadKm": 27.8,
    "timeMins": 61,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khanpur",
      "khanpur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841236-2",
    "name": "Dhanutihata (Hussainganj, PIN 841236)",
    "category": "Post Office / Village",
    "lat": 26.12914,
    "lon": 84.34514,
    "straightKm": 22.82,
    "roadKm": 27.8,
    "timeMins": 61,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "dhanutihata, hussainganj",
      "dhanutihata",
      "dhanutihata hussainganj",
      "hussainganj",
      "841236"
    ]
  },
  {
    "id": "PIN-841438-6",
    "name": "Kailgarh (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.38818,
    "lon": 84.30579,
    "straightKm": 22.8,
    "roadKm": 27.8,
    "timeMins": 61,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kailgarh, mirganj",
      "kailgarh",
      "kailgarh mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-7-79",
    "name": "JP Chowk Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.26374,
    "lon": 84.37844,
    "straightKm": 22.89,
    "roadKm": 27.9,
    "timeMins": 61,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jp chowk siwan",
      "zp chowk siwan",
      "jp chowk siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-274509-10",
    "name": "Itahua Chandauli (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.28112,
    "lon": 83.92707,
    "straightKm": 22.84,
    "roadKm": 27.9,
    "timeMins": 61,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "itahua chandauli, salempur",
      "itahua chandauli",
      "itahua chandauli salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-7-58",
    "name": "Paighambarpur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.25479,
    "lon": 84.38012,
    "straightKm": 22.95,
    "roadKm": 28,
    "timeMins": 62,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "paighambarpur",
      "paighambarpur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-78",
    "name": "Station Road Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.17409,
    "lon": 84.36945,
    "straightKm": 22.92,
    "roadKm": 28,
    "timeMins": 62,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "station road siwan",
      "station road siwan siwan sadar & city",
      "station",
      "railway station",
      "relwe station",
      "teshan",
      "स्टेशन",
      "रेलवे स्टेशन",
      "टेशन",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-13",
    "name": "Gopalpur Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.15989,
    "lon": 84.36526,
    "straightKm": 23.06,
    "roadKm": 28.1,
    "timeMins": 62,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gopalpur hussainganj",
      "gopalpur hussainganz",
      "gopalpur hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-29",
    "name": "Mahual (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.18121,
    "lon": 84.37286,
    "straightKm": 23.01,
    "roadKm": 28.1,
    "timeMins": 62,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mahual",
      "mahual hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-7-21",
    "name": "Chanaur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22389,
    "lon": 84.3817,
    "straightKm": 23.08,
    "roadKm": 28.2,
    "timeMins": 62,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chanaur",
      "chanaur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-29",
    "name": "Jafra (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.23431,
    "lon": 84.38279,
    "straightKm": 23.14,
    "roadKm": 28.2,
    "timeMins": 62,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jafra",
      "zafra",
      "jafra siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-78",
    "name": "Sahjaniya (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.02864,
    "lon": 84.14177,
    "straightKm": 23.22,
    "roadKm": 28.3,
    "timeMins": 62,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sahjaniya",
      "sahzaniya",
      "sahjaniya darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-5-70",
    "name": "Patkhauli Darauli (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.02957,
    "lon": 84.12421,
    "straightKm": 23.25,
    "roadKm": 28.4,
    "timeMins": 62,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "patkhauli darauli",
      "patkhauli darauli darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-26",
    "name": "Gopalpur Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20868,
    "lon": 84.38207,
    "straightKm": 23.29,
    "roadKm": 28.4,
    "timeMins": 62,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gopalpur siwan",
      "gopalpur siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-21",
    "name": "Karhanu (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.16898,
    "lon": 84.37158,
    "straightKm": 23.3,
    "roadKm": 28.4,
    "timeMins": 62,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "karhanu",
      "karhanu hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-18",
    "name": "Hathaura (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.14543,
    "lon": 84.36166,
    "straightKm": 23.39,
    "roadKm": 28.5,
    "timeMins": 63,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hathaura",
      "hathaura hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841227-8",
    "name": "Hakam (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.22642,
    "lon": 84.38511,
    "straightKm": 23.4,
    "roadKm": 28.5,
    "timeMins": 63,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "hakam, siwan",
      "hakam",
      "hakam siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-841438-14",
    "name": "Mohamadpur (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.41415,
    "lon": 84.27759,
    "straightKm": 23.37,
    "roadKm": 28.5,
    "timeMins": 63,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mohamadpur, mirganj",
      "mohamadpur",
      "mohamadpur mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-7-65",
    "name": "Salempur Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.18161,
    "lon": 84.37717,
    "straightKm": 23.42,
    "roadKm": 28.6,
    "timeMins": 63,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "salempur siwan",
      "salempur siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-274509-15",
    "name": "Sohnag (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.2801,
    "lon": 83.92043,
    "straightKm": 23.46,
    "roadKm": 28.6,
    "timeMins": 63,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sohnag, salempur",
      "sohnag",
      "sohnag salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "PIN-841226-3",
    "name": "Bhantapokher (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.25858,
    "lon": 84.38572,
    "straightKm": 23.55,
    "roadKm": 28.7,
    "timeMins": 63,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bhantapokher, siwan head po",
      "bhantapokher",
      "vhantapokher",
      "bhantapokher siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-841438-21",
    "name": "Sawana (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.36813,
    "lon": 84.33579,
    "straightKm": 23.49,
    "roadKm": 28.7,
    "timeMins": 63,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sawana, mirganj",
      "sawana",
      "sawana mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-7-39",
    "name": "Lakri Makariar (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19977,
    "lon": 84.38381,
    "straightKm": 23.61,
    "roadKm": 28.8,
    "timeMins": 63,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lakri makariar",
      "lakri makariar siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-5-83",
    "name": "Sobhan Chak (Darauli Block)",
    "category": "Village (Darauli Block)",
    "lat": 26.02743,
    "lon": 84.11266,
    "straightKm": 23.65,
    "roadKm": 28.9,
    "timeMins": 64,
    "direction": "दक्षिण (South)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sobhan chak",
      "sobhan chak darauli block",
      "darauli block"
    ]
  },
  {
    "id": "CEN-7-50",
    "name": "Mohiuddinpur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24292,
    "lon": 84.38807,
    "straightKm": 23.67,
    "roadKm": 28.9,
    "timeMins": 64,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mohiuddinpur",
      "mohiuddinpur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-52",
    "name": "Mura (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19044,
    "lon": 84.38208,
    "straightKm": 23.65,
    "roadKm": 28.9,
    "timeMins": 64,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mura",
      "mura siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841438-11",
    "name": "M. Madho (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.38789,
    "lon": 84.31922,
    "straightKm": 23.71,
    "roadKm": 28.9,
    "timeMins": 64,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "m. madho, mirganj",
      "m. madho",
      "m. madho mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "PIN-274509-11",
    "name": "Madhawapur (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.31489,
    "lon": 83.92922,
    "straightKm": 23.72,
    "roadKm": 28.9,
    "timeMins": 64,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "madhawapur, salempur",
      "madhawapur",
      "madhawapur salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-7-34",
    "name": "Karanpura Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21785,
    "lon": 84.38846,
    "straightKm": 23.8,
    "roadKm": 29,
    "timeMins": 64,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "karanpura siwan",
      "karanpura siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-42",
    "name": "Mahuari (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22989,
    "lon": 84.39079,
    "straightKm": 23.95,
    "roadKm": 29.2,
    "timeMins": 64,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mahuari",
      "mahuari siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-71",
    "name": "Sirishtapur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2519,
    "lon": 84.39012,
    "straightKm": 23.92,
    "roadKm": 29.2,
    "timeMins": 64,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sirishtapur",
      "siristapur",
      "sirishtapur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-31",
    "name": "Nathpur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.13472,
    "lon": 84.36147,
    "straightKm": 23.92,
    "roadKm": 29.2,
    "timeMins": 64,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nathpur",
      "nathpur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841227-13",
    "name": "Sahlaur (Siwan, PIN 841227)",
    "category": "Post Office / Village",
    "lat": 26.19961,
    "lon": 84.38686,
    "straightKm": 23.92,
    "roadKm": 29.2,
    "timeMins": 64,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sahlaur, siwan",
      "sahlaur",
      "sahlaur siwan",
      "siwan",
      "841227"
    ]
  },
  {
    "id": "PIN-841438-16",
    "name": "Pakri (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.38043,
    "lon": 84.33039,
    "straightKm": 23.95,
    "roadKm": 29.2,
    "timeMins": 64,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pakri, mirganj",
      "pakri",
      "pakri mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-8-44",
    "name": "Sonahula Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.12497,
    "lon": 84.35683,
    "straightKm": 24.06,
    "roadKm": 29.3,
    "timeMins": 64,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sonahula hussainganj",
      "sonahula hussainganz",
      "sonahula hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-26",
    "name": "Khodai Bari (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.15113,
    "lon": 84.37202,
    "straightKm": 24.06,
    "roadKm": 29.4,
    "timeMins": 65,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "khodai bari",
      "khodai bari hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-8-42",
    "name": "Sidhaul (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.17602,
    "lon": 84.38225,
    "straightKm": 24.07,
    "roadKm": 29.4,
    "timeMins": 65,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sidhaul",
      "sidhaul hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-7-47",
    "name": "Mardapur (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.20943,
    "lon": 84.39239,
    "straightKm": 24.3,
    "roadKm": 29.6,
    "timeMins": 65,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mardapur",
      "mardapur siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-86",
    "name": "Naya Bazar Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.17941,
    "lon": 84.38597,
    "straightKm": 24.33,
    "roadKm": 29.7,
    "timeMins": 65,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "naya bazar siwan",
      "naya bajar siwan",
      "naya bazar siwan siwan sadar & city",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी",
      "चट्टी"
    ]
  },
  {
    "id": "CEN-8-34",
    "name": "Pakaulia Hussainganj (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.16189,
    "lon": 84.37952,
    "straightKm": 24.31,
    "roadKm": 29.7,
    "timeMins": 65,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pakaulia hussainganj",
      "pakaulia hussainganz",
      "pakaulia hussainganj hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "PIN-841241-1",
    "name": "Champ (Pachrukhi, PIN 841241)",
    "category": "Post Office / Village",
    "lat": 26.20621,
    "lon": 84.39231,
    "straightKm": 24.34,
    "roadKm": 29.7,
    "timeMins": 65,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "champ, pachrukhi",
      "champ",
      "champ pachrukhi",
      "pachrukhi",
      "841241"
    ]
  },
  {
    "id": "CEN-7-63",
    "name": "Ramapali (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.23743,
    "lon": 84.39643,
    "straightKm": 24.5,
    "roadKm": 29.9,
    "timeMins": 66,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "ramapali",
      "ramapali siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841438-13",
    "name": "Mishra Batrahan (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.35461,
    "lon": 84.35886,
    "straightKm": 24.5,
    "roadKm": 29.9,
    "timeMins": 66,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "mishra batrahan, mirganj",
      "mishra batrahan",
      "misra batrahan",
      "mishra batrahan mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "CEN-7-55",
    "name": "Orma Makund (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22256,
    "lon": 84.39702,
    "straightKm": 24.61,
    "roadKm": 30,
    "timeMins": 66,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "orma makund",
      "orma makund siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-60",
    "name": "Phulwaria Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.19962,
    "lon": 84.39334,
    "straightKm": 24.55,
    "roadKm": 30,
    "timeMins": 66,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "phulwaria siwan",
      "fulwaria siwan",
      "phulwaria siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-73",
    "name": "Tahira (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.18933,
    "lon": 84.39119,
    "straightKm": 24.57,
    "roadKm": 30,
    "timeMins": 66,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tahira",
      "tahira siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841226-18",
    "name": "Siwan Chowk Bazar (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.18656,
    "lon": 84.39044,
    "straightKm": 24.56,
    "roadKm": 30,
    "timeMins": 66,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "siwan chowk bazar, siwan head po",
      "siwan chowk bazar",
      "siwan chowk bajar",
      "siwan chowk bazar siwan head po",
      "bazar",
      "bazaar",
      "market",
      "mandi",
      "chatti",
      "बाजार",
      "बाज़ार",
      "मंडी"
    ]
  },
  {
    "id": "PIN-274509-7",
    "name": "Deoria  Urf Shampur (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.26007,
    "lon": 83.90538,
    "straightKm": 24.61,
    "roadKm": 30,
    "timeMins": 66,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "deoria  urf shampur, salempur",
      "deoria  urf shampur",
      "deoria  urf sampur",
      "deoria  urf shampur salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-8-39",
    "name": "Salonepur (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.14066,
    "lon": 84.37406,
    "straightKm": 24.73,
    "roadKm": 30.2,
    "timeMins": 66,
    "direction": "दक्षिण-पूर्व (South-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "salonepur",
      "salonepur hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-7-84",
    "name": "Gopalganj More Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.24597,
    "lon": 84.39951,
    "straightKm": 24.82,
    "roadKm": 30.3,
    "timeMins": 67,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gopalganj more siwan",
      "gopalganz more siwan",
      "gopalganj more siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841226-8",
    "name": "Habibnagar (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.23692,
    "lon": 84.40161,
    "straightKm": 25.01,
    "roadKm": 30.5,
    "timeMins": 67,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "habibnagar, siwan head po",
      "habibnagar",
      "habibnagar siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-274509-6",
    "name": "Chordiha (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.31518,
    "lon": 83.91579,
    "straightKm": 24.98,
    "roadKm": 30.5,
    "timeMins": 67,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "chordiha, salempur",
      "chordiha",
      "chordiha salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "CEN-7-68",
    "name": "Sarsar (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21308,
    "lon": 84.40092,
    "straightKm": 25.09,
    "roadKm": 30.6,
    "timeMins": 67,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarsar",
      "sarsar siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-7-76",
    "name": "Babunia More Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.22923,
    "lon": 84.40326,
    "straightKm": 25.2,
    "roadKm": 30.7,
    "timeMins": 68,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "babunia more siwan",
      "vabunia more siwan",
      "babunia more siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "CEN-8-47",
    "name": "Tikri (Hussainganj Block)",
    "category": "Village (Hussainganj Block)",
    "lat": 26.152,
    "lon": 84.38413,
    "straightKm": 25.14,
    "roadKm": 30.7,
    "timeMins": 68,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "tikri",
      "tikri hussainganj block",
      "hussainganj block"
    ]
  },
  {
    "id": "CEN-7-81",
    "name": "Kachahari Road Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.2022,
    "lon": 84.40205,
    "straightKm": 25.36,
    "roadKm": 30.9,
    "timeMins": 68,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "kachahari road siwan",
      "kachahari road siwan siwan sadar & city",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841226-13",
    "name": "Partap Pur (Siwan Head PO, PIN 841226)",
    "category": "Post Office / Village",
    "lat": 26.21011,
    "lon": 84.40336,
    "straightKm": 25.37,
    "roadKm": 31,
    "timeMins": 68,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "partap pur, siwan head po",
      "partap pur",
      "partap pur siwan head po",
      "siwan head po",
      "841226"
    ]
  },
  {
    "id": "PIN-841241-6",
    "name": "Pachrukhi (Pachrukhi, PIN 841241)",
    "category": "Post Office / Village",
    "lat": 26.21318,
    "lon": 84.40379,
    "straightKm": 25.38,
    "roadKm": 31,
    "timeMins": 68,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pachrukhi, pachrukhi",
      "pachrukhi",
      "pachrukhi pachrukhi",
      "841241"
    ]
  },
  {
    "id": "CEN-7-89",
    "name": "ZA Islamia College Siwan (Siwan Sadar & City)",
    "category": "Siwan City & Block Locality",
    "lat": 26.21886,
    "lon": 84.40791,
    "straightKm": 25.73,
    "roadKm": 31.4,
    "timeMins": 69,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "za islamia college siwan",
      "ja islamia college siwan",
      "za islamia college siwan siwan sadar & city",
      "college",
      "kolej",
      "कॉलेज",
      "महाविद्यालय",
      "siwan sadar & city"
    ]
  },
  {
    "id": "PIN-841241-7",
    "name": "Sarauti (Pachrukhi, PIN 841241)",
    "category": "Post Office / Village",
    "lat": 26.15807,
    "lon": 84.39338,
    "straightKm": 25.76,
    "roadKm": 31.4,
    "timeMins": 69,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sarauti, pachrukhi",
      "sarauti",
      "sarauti pachrukhi",
      "pachrukhi",
      "841241"
    ]
  },
  {
    "id": "PIN-274509-1",
    "name": "Bakuchi (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.30821,
    "lon": 83.90431,
    "straightKm": 25.81,
    "roadKm": 31.5,
    "timeMins": 69,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "bakuchi, salempur",
      "bakuchi",
      "vakuchi",
      "bakuchi salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "PIN-841438-8",
    "name": "Lachhwar (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.38142,
    "lon": 84.35711,
    "straightKm": 26.07,
    "roadKm": 31.8,
    "timeMins": 70,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "lachhwar, mirganj",
      "lachhwar",
      "lachwar",
      "lachhwar mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "PIN-841438-19",
    "name": "Sakhekhas (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.42494,
    "lon": 84.30938,
    "straightKm": 26.17,
    "roadKm": 31.9,
    "timeMins": 70,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "sakhekhas, mirganj",
      "sakhekhas",
      "sakhekhas mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "PIN-274509-12",
    "name": "Pipara Ramdhar (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.274,
    "lon": 83.89082,
    "straightKm": 26.25,
    "roadKm": 32,
    "timeMins": 70,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "pipara ramdhar, salempur",
      "pipara ramdhar",
      "pipara ramdhar salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "PIN-841438-3",
    "name": "Jagarnath (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.40308,
    "lon": 84.34122,
    "straightKm": 26.45,
    "roadKm": 32.3,
    "timeMins": 71,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "jagarnath, mirganj",
      "jagarnath",
      "zagarnath",
      "jagarnath mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "PIN-274509-17",
    "name": "Thengval Dubey (Salempur, PIN 274509)",
    "category": "Post Office / Village",
    "lat": 26.29357,
    "lon": 83.88603,
    "straightKm": 27.13,
    "roadKm": 33.1,
    "timeMins": 73,
    "direction": "पश्चिम (West)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "thengval dubey, salempur",
      "thengval dubey",
      "thengval dubey salempur",
      "salempur",
      "274509"
    ]
  },
  {
    "id": "PIN-841241-0",
    "name": "Badram (Pachrukhi, PIN 841241)",
    "category": "Post Office / Village",
    "lat": 26.19,
    "lon": 84.422,
    "straightKm": 27.56,
    "roadKm": 33.6,
    "timeMins": 74,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "badram, pachrukhi",
      "badram",
      "vadram",
      "badram pachrukhi",
      "pachrukhi",
      "841241"
    ]
  },
  {
    "id": "PIN-841241-5",
    "name": "Nainpura (Pachrukhi, PIN 841241)",
    "category": "Post Office / Village",
    "lat": 26.18355,
    "lon": 84.42012,
    "straightKm": 27.52,
    "roadKm": 33.6,
    "timeMins": 74,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "nainpura, pachrukhi",
      "nainpura",
      "nainpura pachrukhi",
      "pachrukhi",
      "841241"
    ]
  },
  {
    "id": "PIN-841438-24",
    "name": "Uchkagaon (Mirganj, PIN 841438)",
    "category": "Post Office / Village",
    "lat": 26.41696,
    "lon": 84.342,
    "straightKm": 27.6,
    "roadKm": 33.7,
    "timeMins": 74,
    "direction": "उत्तर-पूर्व (North-East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "uchkagaon, mirganj",
      "uchkagaon",
      "uchkagaon mirganj",
      "mirganj",
      "841438"
    ]
  },
  {
    "id": "PIN-841241-2",
    "name": "Gambhria (Pachrukhi, PIN 841241)",
    "category": "Post Office / Village",
    "lat": 26.15414,
    "lon": 84.41314,
    "straightKm": 27.76,
    "roadKm": 33.9,
    "timeMins": 75,
    "direction": "पूर्व (East)",
    "zone": "Zone 4 — District & Highway Belt (Bulk Order / Travel Pack)",
    "aliases": [
      "gambhria, pachrukhi",
      "gambhria",
      "gambhria pachrukhi",
      "pachrukhi",
      "841241"
    ]
  }
];

function normalizeQueryToken(str) {
  return String(str || "")
    .toLowerCase()
    .replace(/z/g, "j")
    .replace(/ph/g, "f")
    .replace(/sh/g, "s")
    .replace(/ee/g, "i")
    .replace(/oo/g, "u")
    .replace(/aa/g, "a")
    .replace(/[^a-z0-9\u0900-\u097F\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Ultra-fast 0.5ms in-memory search across all landmarks + aliases
function searchMairwaLandmarks(userQuery, maxResults = 5) {
  if (!userQuery) return [];
  const rawLower = String(userQuery).toLowerCase().trim();
  const normQuery = normalizeQueryToken(rawLower);
  const words = rawLower.split(/\s+/).filter((w) => w.length >= 3);
  const normWords = normQuery.split(/\s+/).filter((w) => w.length >= 3);

  const scored = [];

  for (let i = 0; i < LANDMARKS.length; i++) {
    const item = LANDMARKS[i];
    const nameLow = item.name.toLowerCase();
    const normName = normalizeQueryToken(nameLow);
    const aliases = Array.isArray(item.aliases) ? item.aliases : [];

    let score = 0;

    if (rawLower.includes(nameLow) || aliases.some((a) => a.length >= 3 && rawLower.includes(a))) {
      score += 100;
    }

    if (
      score < 100 &&
      (normQuery.includes(normName) ||
        aliases.some((a) => {
          const na = normalizeQueryToken(a);
          return na.length >= 3 && normQuery.includes(na);
        }))
    ) {
      score += 85;
    }

    if (score === 0) {
      for (const w of words) {
        if (w.length < 3) continue;
        if (["kahan", "kitna", "kitni", "duri", "dukan", "delivery", "order", "mairwa", "bihar", "hai", "se", "tak"].includes(w)) {
          continue;
        }
        if (nameLow.includes(w) || aliases.some((a) => a.includes(w))) {
          score += 45;
        }
      }
      for (const nw of normWords) {
        if (nw.length < 3) continue;
        if (["kahan", "kitna", "kitni", "duri", "dukan", "delivery", "order", "mairwa", "bihar", "hai"].includes(nw)) {
          continue;
        }
        if (normName.includes(nw) || aliases.some((a) => normalizeQueryToken(a).includes(nw))) {
          score += 35;
        }
      }
    }

    if (score > 0) {
      if (item.curated) score += 15;
      scored.push({ item, score });
    }
  }

  scored.sort((a, b) => b.score - a.score || (a.item.roadKm || 0) - (b.item.roadKm || 0));
  return scored.slice(0, maxResults).map((s) => s.item);
}

module.exports = {
  SHOP_LOCATION,
  LANDMARKS,
  searchMairwaLandmarks
};
