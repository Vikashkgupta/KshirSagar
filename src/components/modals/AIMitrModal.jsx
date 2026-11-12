// File: src/components/modals/AIMitrModal.jsx
// Laddu AI — True Backend SSE Token-by-Token Streaming Consumer (`ReadableStream` + `TextDecoder`)
// Exact Store Pin: 26.2373274° N, 84.1508169° E | Plus Code: 65P2+W8 Mairwa, Bihar | Nai Bazar, Mairwa, Bihar 841239
// Google Maps Short URL: https://maps.app.goo.gl/gWg1gvrsDVqRSqjt9

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeQuantity, clearCart, restoreLastOrder } from '../../store/cartSlice';
import { toggleCart, toggleCustomRequest } from '../../store/uiSlice';
import * as menuDataModule from '../../data/menuData';
import { useModalBack } from '../../hooks/useModalBack';

// ============================================================================
// 👉 APNA CUTE LADDU AI PNG LOGO LINK YAHAN DAALEIN:
// ============================================================================
const LADDU_AI_LOGO = '/laddu.png';

const LIVE_NETLIFY_BASE = 'https://kshirsagarsweets.netlify.app';

const STORE_PROFILE = {
  aiName: 'Laddu AI',
  name: 'KshirSagar Sweets & Bakers (क्षीर सागर स्वीट्स एंड बेकर्स)',
  established: 'Since 1998 — Tradition of Excellence',
  tagline: 'हमेशा कुछ नया (Hamesha Kuch Naya)',
  timings: 'सुबह 8:00 बजे से रात 10:00 बजे तक (सातों दिन खुला)',
  address: 'Nai Bazar, Mairwa, Bihar 841239',
  plusCode: '65P2+W8 Mairwa, Bihar',
  lat: 26.2373274,
  lon: 84.1508169,
  googleMapsUrl: 'https://maps.app.goo.gl/gWg1gvrsDVqRSqjt9',
  phone: '+91 8226935738',
  whatsapp: '+91 8226935738',
  website: 'https://kshirsagarsweets.netlify.app/'
};

const QUICK_PROMPTS = [
  '🍬 आज की स्पेशल मिठाई और रेट बताओ',
  '🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो',
  '🏷️ आज के स्पेशल ऑफ़र्स क्या हैं?',
  '📍 दुकान कब खुलती है और कहाँ है?',
  '✨ कुछ नया और रोचक बताओ'
];

const INITIAL_WELCOME =
  'Hi 👋 KshirSagar में आपका स्वागत है!\n\n' +
  'मैं हूँ Laddu AI! बताइए, आज आपकी क्या मदद करूँ? 😊';

function getOrCreateVisitorSessionId() {
  try {
    const key = 'kshirsagar_laddu_session_id';
    let existing = localStorage.getItem(key);
    if (!existing) {
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const randHex = Math.random().toString(36).substring(2, 6).toUpperCase();
      existing = `KS-${randNum}-${randHex}`;
      localStorage.setItem(key, existing);
    }
    return existing;
  } catch {
    return 'KS-GUEST';
  }
}

function checkAndIncrementVisitCount() {
  try {
    const countKey = 'kshirsagar_visit_count';
    const prev = Number(localStorage.getItem(countKey) || 0);
    localStorage.setItem(countKey, String(prev + 1));
    return prev > 0;
  } catch {
    return false;
  }
}

function getKnownCustomerIdentity() {
  try {
    const nameEl = document.getElementById('cart-name');
    const mobileEl = document.getElementById('cart-mobile');
    const name = (nameEl?.value || localStorage.getItem('ks_customer_name') || '').trim();
    const mobile = (mobileEl?.value || localStorage.getItem('ks_customer_mobile') || '').trim();
    if (name) localStorage.setItem('ks_customer_name', name);
    if (mobile) localStorage.setItem('ks_customer_mobile', mobile);
    return {
      customerName: name || 'Guest User',
      customerMobile: mobile || ''
    };
  } catch {
    return { customerName: 'Guest User', customerMobile: '' };
  }
}

function calcDistanceFromMairwaShop(lat, lon) {
  const R = 6371;
  const dLat = ((lat - STORE_PROFILE.lat) * Math.PI) / 180;
  const dLon = ((lon - STORE_PROFILE.lon) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((STORE_PROFILE.lat * Math.PI) / 180) *
      Math.cos((lat * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightKm = R * c;
  const roadKm = Math.max(0.1, straightKm * 1.22);
  return roadKm.toFixed(1);
}

async function getCompleteDeviceBatteryAndLocationContext(cachedGeoStr) {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent || '' : '';
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const os = isAndroid ? 'Android' : isIOS ? 'iPhone' : 'Desktop';
  const screenStr = typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '';

  let isBraveBrowser = false;
  try {
    if (typeof navigator !== 'undefined' && navigator.brave && typeof navigator.brave.isBrave === 'function') {
      isBraveBrowser = await navigator.brave.isBrave();
    }
  } catch {}

  const browserLabel = isBraveBrowser ? 'Brave Browser' : /Edg/i.test(ua) ? 'Edge' : /Chrome/i.test(ua) ? 'Chrome' : 'Browser';
  const platform = `${os} • ${browserLabel} (${screenStr})`;

  let batteryText = 'ब्राउज़र द्वारा छुपाया गया';
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.getBattery === 'function') {
      const bat = await navigator.getBattery();
      const pct = Math.round((bat.level || 0) * 100);

      if (isBraveBrowser && pct === 100 && bat.charging === true && bat.chargingTime === 0) {
        batteryText =
          'Brave Browser Privacy Shield चालू होने के कारण Brave असली बैटरी छुपाकर हमेशा नकली "100% Charging" भेजता है (सटीक बैटरी % देखने के लिए ऊपर Brave के शेर आइकॉन पर टैप करके Shields बंद करें या Chrome में खोलें)';
      } else {
        batteryText = `${pct}% (${bat.charging ? '⚡ चार्ज हो रहा है (Charging)' : 'चार्जिंग पर नहीं है (Not Charging)'})`;
      }
    }
  } catch {}

  let networkText = typeof navigator !== 'undefined' && navigator.onLine === false ? 'Offline' : 'Online';
  try {
    const conn = navigator?.connection || navigator?.mozConnection || navigator?.webkitConnection;
    if (conn) {
      const parts = [];
      if (conn.effectiveType) parts.push(String(conn.effectiveType).toUpperCase());
      if (typeof conn.downlink === 'number') parts.push(`${conn.downlink} Mbps`);
      if (parts.length > 0) networkText = parts.join(' • ');
    }
  } catch {}

  return {
    platform,
    isBraveBrowser,
    batteryText,
    networkText,
    locationText: cachedGeoStr || ''
  };
}

function getLocalISTClockSummary() {
  const now = new Date();
  const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const istDate = new Date(istString);

  const formattedDate = new Intl.DateTimeFormat('hi-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(now);

  const formattedTime = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).format(now);

  const totalMins = istDate.getHours() * 60 + istDate.getMinutes();
  const isShopOpen = totalMins >= 480 && totalMins < 1320;
  const isDeliveryOpen = totalMins >= 600 && totalMins < 1200;

  const shopStatusNote = isShopOpen
    ? `🟢 दुकान अभी खुली है (रात 10:00 बजे तक)`
    : `🔴 दुकान अभी बंद है (सुबह 8:00 बजे खुलेगी)`;
  const deliveryStatusNote = isDeliveryOpen
    ? `🚴 होम डिलीवरी अभी चालू है (सुबह 10:00 से रात 8:00 बजे तक)`
    : `🏬 होम डिलीवरी का समय सुबह 10:00 से रात 8:00 बजे तक है`;

  return { formattedDate, formattedTime, shopStatusNote, deliveryStatusNote };
}

const AIMitrModal = () => {
  const dispatch = useDispatch();
  const { items: cartItems, orderType, tip } = useSelector((state) => state.cart);
  const activeDishPopup = useSelector((state) => state.ui?.dishPopup);

  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const baseTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const grandTotal = baseTotal + (tip || 0);

  const [isOpen, setIsOpen] = useState(false);
  useModalBack(isOpen, () => setIsOpen(false), 'ai-mitr-modal');

  const [sessionId] = useState(() => getOrCreateVisitorSessionId());
  const [isReturningVisitor] = useState(() => checkAndIncrementVisitCount());
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: INITIAL_WELCOME,
      recommendedItems: [],
      whatsappOrderText: '',
      isStreaming: false
    }
  ]);
  const [hasSyncedSupabase, setHasSyncedSupabase] = useState(false);
  const [userLocationText, setUserLocationText] = useState('');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMsgId, setStreamingMsgId] = useState(null);
  const [chips, setChips] = useState(QUICK_PROMPTS);
  const [isListening, setIsListening] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [toastText, setToastText] = useState('');
  const [addedKeys, setAddedKeys] = useState({});
  const [liveMenuCache, setLiveMenuCache] = useState([]);
  const [liveOffersCache, setLiveOffersCache] = useState([]);
  const [recentViewedDishes, setRecentViewedDishes] = useState([]);
  const [logoError, setLogoError] = useState(false);

  const messagesEndRef = useRef(null);
  const streamTimerRef = useRef(null);

  const canSend = input.trim().length > 0 && !isLoading;

  useEffect(() => {
    return () => {
      if (streamTimerRef.current) {
        clearInterval(streamTimerRef.current);
      }
    };
  }, []);

  // Fallback progressive word stream (only used if running in a local/buffered environment where SSE headers aren't returned)
  const streamBotReplyFallback = ({ fullText, recommendedItems = [], whatsappOrderText = '' }) => {
    if (streamTimerRef.current) {
      clearInterval(streamTimerRef.current);
      streamTimerRef.current = null;
    }

    const msgId = 'bot-' + Date.now();
    const safeFull = String(fullText || '');
    const tokens = safeFull.match(/\S+\s*|\n+/g) || [safeFull];
    const stepSize = tokens.length > 140 ? 4 : tokens.length > 70 ? 2 : 1;
    let index = stepSize;

    setStreamingMsgId(msgId);
    setMessages((prev) => [
      ...prev,
      {
        id: msgId,
        sender: 'bot',
        text: tokens.slice(0, stepSize).join(''),
        recommendedItems: [],
        whatsappOrderText: '',
        isStreaming: true
      }
    ]);

    streamTimerRef.current = setInterval(() => {
      index += stepSize;
      if (index >= tokens.length) {
        clearInterval(streamTimerRef.current);
        streamTimerRef.current = null;
        setStreamingMsgId(null);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === msgId
              ? {
                  ...m,
                  text: safeFull,
                  recommendedItems,
                  whatsappOrderText,
                  isStreaming: false
                }
              : m
          )
        );
      } else {
        const partial = tokens.slice(0, index).join('');
        setMessages((prev) =>
          prev.map((m) => (m.id === msgId ? { ...m, text: partial } : m))
        );
      }
    }, 22);
  };

  const handleClearScreenChat = (toastMessage = 'चैट साफ़ कर दी गई') => {
    if (streamTimerRef.current) {
      clearInterval(streamTimerRef.current);
      streamTimerRef.current = null;
    }
    setStreamingMsgId(null);
    try {
      localStorage.setItem('ks_chat_cleared_at', new Date().toISOString());
    } catch {}
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        sender: 'bot',
        text: INITIAL_WELCOME,
        recommendedItems: [],
        whatsappOrderText: '',
        isStreaming: false
      }
    ]);
    showToast(toastMessage);
  };

  useEffect(() => {
    const dishName = activeDishPopup?.activeDish?.item?.name;
    if (activeDishPopup?.isOpen && dishName) {
      setRecentViewedDishes((prev) => {
        const updated = [dishName, ...prev.filter((d) => d !== dishName)].slice(0, 5);
        try {
          sessionStorage.setItem('ks_recent_dishes', JSON.stringify(updated));
        } catch {}
        return updated;
      });
    }
  }, [activeDishPopup]);

  const tryDetectPreciseLocation = (forcePrompt = false) => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) return;

    const runGeo = () => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const distKm = calcDistanceFromMairwaShop(lat, lon);
          let placeLabel = `GPS (${lat.toFixed(4)}, ${lon.toFixed(4)}) • क्षीर सागर (Nai Bazar, Mairwa 841239) से सड़क दूरी: ~${distKm} km`;

          try {
            const revRes = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16&addressdetails=1`
            );
            if (revRes.ok) {
              const revData = await revRes.json();
              const addr = revData.address || {};
              const area =
                addr.suburb ||
                addr.neighbourhood ||
                addr.village ||
                addr.town ||
                addr.city ||
                addr.county ||
                '';
              const distName = addr.state_district || addr.state || '';
              if (area) {
                placeLabel = `${area}${distName ? ', ' + distName : ''} (दुकान से सड़क दूरी: ~${distKm} km)`;
              }
            }
          } catch {}

          setUserLocationText(placeLabel);
          try {
            sessionStorage.setItem('ks_user_location_text', placeLabel);
          } catch {}
        },
        () => {},
        { enableHighAccuracy: false, timeout: 4000, maximumAge: 600000 }
      );
    };

    if (forcePrompt) {
      runGeo();
      return;
    }

    if (navigator.permissions && typeof navigator.permissions.query === 'function') {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((res) => {
          if (res.state === 'granted') runGeo();
        })
        .catch(() => {});
    }
  };

  useEffect(() => {
    try {
      const savedRecent = JSON.parse(sessionStorage.getItem('ks_recent_dishes') || '[]');
      if (Array.isArray(savedRecent) && savedRecent.length > 0) {
        setRecentViewedDishes(savedRecent);
      }
      const savedLoc = sessionStorage.getItem('ks_user_location_text') || '';
      if (savedLoc) setUserLocationText(savedLoc);
    } catch {}

    tryDetectPreciseLocation(false);

    window.toggleKshirSagarAI = () => setIsOpen((prev) => !prev);
    window.openKshirSagarAI = () => setIsOpen(true);
    window.closeKshirSagarAI = () => setIsOpen(false);

    const search = window.location.search.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    if (search.includes('ai=1') || search.includes('laddu') || hash.includes('ai') || path === '/ai') {
      setIsOpen(true);
    }
  }, []);

  const showToast = (text) => {
    setToastText(text);
    setTimeout(() => setToastText(''), 2200);
  };

  const handleSpeakMessage = (msgId, rawText) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      showToast('आपका ब्राउज़र ऑडियो सपोर्ट नहीं करता');
      return;
    }

    if (speakingMsgId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanSpeech = String(rawText || '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/[•#*_~]/g, ' ');

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.lang = 'hi-IN';
    utterance.rate = 1.02;
    utterance.onend = () => setSpeakingMsgId(null);
    utterance.onerror = () => setSpeakingMsgId(null);

    setSpeakingMsgId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  const fetchFunctionJson = async (path, options = {}) => {
    try {
      const localRes = await fetch(path, options);
      const contentType = localRes.headers.get('content-type') || '';
      if (localRes.ok && contentType.includes('application/json')) {
        return await localRes.json();
      }
    } catch {}

    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      try {
        const remoteRes = await fetch(`${LIVE_NETLIFY_BASE}${path}`, options);
        const remoteType = remoteRes.headers.get('content-type') || '';
        if (remoteRes.ok && remoteType.includes('application/json')) {
          return await remoteRes.json();
        }
      } catch {}
    }

    return null;
  };

  useEffect(() => {
    if (!isOpen) return;

    async function syncHistoryAndMenu() {
      const [mJson, oJson, sessionData] = await Promise.all([
        liveMenuCache.length === 0 ? fetchFunctionJson('/.netlify/functions/menu') : Promise.resolve(null),
        liveOffersCache.length === 0 ? fetchFunctionJson('/.netlify/functions/offers') : Promise.resolve(null),
        !hasSyncedSupabase
          ? fetchFunctionJson(`/.netlify/functions/aiChat?sessionId=${encodeURIComponent(sessionId)}`)
          : Promise.resolve(null)
      ]);

      if (mJson) {
        const list = Array.isArray(mJson) ? mJson : mJson.menu || mJson.records || [];
        if (list.length > 0) setLiveMenuCache(list);
      }

      if (oJson) {
        const oList = Array.isArray(oJson) ? oJson : oJson.offers || oJson.records || [];
        if (oList.length > 0) setLiveOffersCache(oList);
      }

      if (!hasSyncedSupabase) {
        setHasSyncedSupabase(true);
        const savedConv = sessionData?.session?.conversation;
        if (Array.isArray(savedConv) && savedConv.length > 0) {
          let clearedAt = '';
          try {
            clearedAt = localStorage.getItem('ks_chat_cleared_at') || '';
          } catch {}

          const visibleConv = clearedAt
            ? savedConv.filter((turn) => turn.timestamp && turn.timestamp > clearedAt)
            : savedConv;

          if (visibleConv.length > 0) {
            const restoredMsgs = visibleConv.map((turn, idx) => ({
              id: `db-${idx}-${Date.now()}`,
              sender: turn.role === 'user' ? 'user' : 'bot',
              text: String(turn.text || ''),
              recommendedItems: [],
              whatsappOrderText: '',
              isStreaming: false
            }));
            setMessages((prev) => (prev.length <= 1 ? [prev[0], ...restoredMsgs] : prev));
          }
        }

        if (
          sessionData?.session?.customer_name &&
          sessionData.session.customer_name !== 'Guest User'
        ) {
          try {
            localStorage.setItem('ks_customer_name', sessionData.session.customer_name);
          } catch {}
        }
      }
    }

    syncHistoryAndMenu();
  }, [isOpen, sessionId, hasSyncedSupabase, liveMenuCache.length, liveOffersCache.length]);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const getFrontendWebsiteText = () => {
    try {
      const landingEl = document.getElementById('landing') || document.querySelector('main');
      if (!landingEl) return '';
      return (landingEl.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 3000);
    } catch {
      return '';
    }
  };

  const getStaticMenuFallback = () => {
    try {
      const raw =
        menuDataModule.default ||
        menuDataModule.menuData ||
        menuDataModule.MENU_DATA ||
        menuDataModule.items ||
        Object.values(menuDataModule).find((v) => Array.isArray(v));
      if (Array.isArray(raw)) return raw;
      if (raw && typeof raw === 'object') {
        const flattened = [];
        Object.entries(raw).forEach(([cat, arr]) => {
          if (Array.isArray(arr)) {
            arr.forEach((item) => flattened.push({ ...item, category: item.category || cat }));
          }
        });
        if (flattened.length > 0) return flattened;
      }
      return [];
    } catch {
      return [];
    }
  };

  const getNormalizedClientMenu = () => {
    if (liveMenuCache.length > 0) {
      return liveMenuCache
        .map((item, i) => ({
          id: item.id || `live-${i}`,
          name: item.name || item.Name || item.fields?.Name || 'Special Item',
          category: item.category || item.Category || item.fields?.Category || 'Sweets',
          price: Number(String(item.price || item.Price || item.fields?.Price || 0).split('/')[0].replace(/[^\d.]/g, '')),
          unit: item.unit || item.variant || item.fields?.Unit || '',
          image: item.image || item.img || item.fields?.Image || '/sweet.jpg'
        }))
        .filter((x) => x.price > 0);
    }

    const staticList = getStaticMenuFallback();
    if (staticList.length > 0) {
      return staticList
        .map((item, i) => ({
          id: item.id || `static-${i}`,
          name: item.name || item.title || 'Special',
          category: item.category || 'Sweets',
          price: Number(String(item.price || item.halfPrice || item.fullPrice || 0).split('/')[0].replace(/[^\d.]/g, '')),
          unit: item.variant || item.unit || '',
          image: item.image || item.img || '/sweet.jpg'
        }))
        .filter((x) => x.price > 0);
    }

    return [
      { id: 'm1', name: 'Kaju Katli', category: 'Sweets', price: 840, unit: '1 kg', image: '/sweet.jpg' },
      { id: 'm2', name: 'Rasmalai', category: 'Sweets', price: 45, unit: '1 pc', image: '/sweet.jpg' },
      { id: 'm3', name: 'Desi Ghee Ghewar', category: 'Sweets', price: 500, unit: '1 kg', image: '/sweet.jpg' },
      { id: 'm4', name: 'Soan Papdi', category: 'Sweets', price: 200, unit: '1 kg', image: '/sweet.jpg' },
      { id: 'm5', name: 'Red Velvet Cake', category: 'Sweets', price: 450, unit: '500g', image: '/sweet.jpg' },
      { id: 'm6', name: 'Paneer Pizza (Full)', category: 'Pizza', price: 199, unit: 'Regular', image: '/pizza.png' },
      { id: 'm7', name: 'Veg Chowmein (Full)', category: 'Snacks', price: 110, unit: 'Full', image: '/snak.jpg' },
      { id: 'm8', name: 'Onion Pakoda', category: 'Snacks', price: 50, unit: 'Plate', image: '/snak.jpg' }
    ];
  };

  const handleRemoveFromReduxCart = (itemName, qtyToRemove = 99) => {
    const target = String(itemName || '').toLowerCase().trim();
    if (!target) return;

    const match = cartItems.find(
      (c) =>
        c.name.toLowerCase() === target ||
        c.name.toLowerCase().includes(target) ||
        target.includes(c.name.toLowerCase())
    );

    if (match && match.key) {
      const delta = -Math.max(1, Number(qtyToRemove || match.qty));
      dispatch(changeQuantity({ key: match.key, delta }));
      showToast(`${match.name} कार्ट से हटा दिया गया`);
    }
  };

  const handleAddToReduxCart = (item, customQty = 1) => {
    const emojiMap = {
      Sweets: '🍬',
      Namkeen: '🥜',
      Snacks: '🥟',
      Pizza: '🍕'
    };

    const count = Math.max(1, Number(customQty || 1));
    for (let i = 0; i < count; i++) {
      dispatch(
        addToCart({
          name: item.name,
          price: Number(item.price || 0),
          variant: item.unit || 'Regular',
          emoji: emojiMap[item.category] || '🍽️',
          category: item.category || 'Sweets'
        })
      );
    }

    const k = item.id || item.name;
    setAddedKeys((prev) => ({ ...prev, [k]: true }));
    showToast(`${item.name} कार्ट में जोड़ दिया गया`);
    setTimeout(() => {
      setAddedKeys((prev) => ({ ...prev, [k]: false }));
    }, 1400);
  };

  // Applies cart/modal actions returned from either SSE `done` event or buffered JSON response
  const executeAiMetadataActions = (metaData) => {
    if (!metaData) return;

    if (metaData.detectedCustomerName && String(metaData.detectedCustomerName).trim()) {
      try {
        localStorage.setItem('ks_customer_name', String(metaData.detectedCustomerName).trim());
      } catch {}
    }

    if (Array.isArray(metaData.autoAddItems) && metaData.autoAddItems.length > 0) {
      metaData.autoAddItems.forEach((item) => {
        handleAddToReduxCart(item, item.qty || 1);
      });
    }

    if (Array.isArray(metaData.autoRemoveItems) && metaData.autoRemoveItems.length > 0) {
      metaData.autoRemoveItems.forEach((rem) => {
        handleRemoveFromReduxCart(rem.name, rem.qty || 99);
      });
    }

    if (metaData.action === 'CLEAR_CART') {
      dispatch(clearCart());
      showToast('कार्ट खाली (0) कर दिया गया');
    } else if (metaData.action === 'RESTORE_LAST_ORDER') {
      dispatch(restoreLastOrder());
      showToast('पिछला ऑर्डर वापस कार्ट में आ गया');
    } else if (metaData.action === 'OPEN_CART') {
      setTimeout(() => {
        setIsOpen(false);
        dispatch(toggleCart(true));
      }, 900);
    } else if (metaData.action === 'OPEN_CUSTOM_CAKE') {
      setTimeout(() => {
        setIsOpen(false);
        dispatch(toggleCustomRequest(true));
      }, 900);
    }

    if (Array.isArray(metaData.quickFollowUps) && metaData.quickFollowUps.length > 0) {
      setChips(metaData.quickFollowUps);
    }
  };

  const renderFormattedText = (rawText) => {
    const html = String(rawText || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-neutral-900">$1</strong>')
      .replace(
        /`(.*?)`/g,
        '<code class="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-xs font-mono font-medium">$1</code>'
      )
      .replace(/\n\n/g, '</p><p class="mt-3">')
      .replace(/\n/g, '<br/>');

    return <span dangerouslySetInnerHTML={{ __html: `<p>${html}</p>` }} />;
  };

  const sendMessage = async (textToSend) => {
    const trimmed = String(textToSend || input || '').trim();
    if (!trimmed || isLoading) return;

    const lowerMsg = trimmed.toLowerCase();

    if (
      !userLocationText &&
      (/\b(location|kahan|duri|distance|km|kitni dur)\b/i.test(lowerMsg) ||
        lowerMsg.includes('लोकेशन') ||
        lowerMsg.includes('कहाँ') ||
        lowerMsg.includes('दूरी'))
    ) {
      tryDetectPreciseLocation(true);
    }

    if (
      (/\b(cart|कार्ट)\b/i.test(lowerMsg) && /\b(0|zero|clear|empty|khali|खाली|साफ़|साफ)\b/i.test(lowerMsg)) ||
      lowerMsg.includes('cart 0') ||
      lowerMsg.includes('clear cart')
    ) {
      dispatch(clearCart());
      showToast('कार्ट खाली (0) कर दिया गया');
    }

    const userMsg = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: trimmed
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const activeMenu = getNormalizedClientMenu();
    const { customerName, customerMobile } = getKnownCustomerIdentity();
    const silentDevice = await getCompleteDeviceBatteryAndLocationContext(userLocationText);

    try {
      const historyPayload = messages.slice(-8).map((m) => ({
        role: m.sender === 'bot' ? 'assistant' : 'user',
        content: m.text
      }));

      const requestPayload = {
        stream: true,
        sessionId,
        isReturningVisitor,
        customerName,
        customerMobile,
        deviceInfo: `${silentDevice.platform} | Bat: ${silentDevice.batteryText.slice(0, 35)} | Net: ${silentDevice.networkText}`,
        clientDevice: silentDevice,
        clientCart: {
          items: cartItems.map((i) => ({
            key: i.key,
            name: i.name,
            price: i.price,
            qty: i.qty,
            variant: i.variant || ''
          })),
          totalQty,
          grandTotal,
          orderType
        },
        recentViewedDishes,
        message: trimmed,
        history: historyPayload,
        clientMenu: activeMenu,
        clientOffers: liveOffersCache.length > 0 ? liveOffersCache : null,
        pageContext: getFrontendWebsiteText()
      };

      const targetUrl =
        typeof window !== 'undefined' && window.location.hostname === 'localhost'
          ? `${LIVE_NETLIFY_BASE}/.netlify/functions/aiChat`
          : '/.netlify/functions/aiChat';

      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload)
      });

      const contentType = response.headers.get('content-type') || '';

      // CASE 1: TRUE BACKEND SSE STREAM (`text/event-stream`) — Reads tokens live as Gemini generates them!
      if (response.ok && contentType.includes('text/event-stream') && response.body) {
        const botMsgId = 'bot-sse-' + Date.now();
        setStreamingMsgId(botMsgId);
        setIsLoading(false);

        setMessages((prev) => [
          ...prev,
          {
            id: botMsgId,
            sender: 'bot',
            text: '',
            recommendedItems: [],
            whatsappOrderText: '',
            isStreaming: true
          }
        ]);

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';
        let liveAccumulated = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const cleanLine = line.trim();
            if (!cleanLine.startsWith('data:')) continue;
            const jsonStr = cleanLine.slice(5).trim();
            if (!jsonStr) continue;

            try {
              const evt = JSON.parse(jsonStr);
              if (evt.type === 'delta' && evt.text) {
                liveAccumulated += evt.text;
                const snapshot = liveAccumulated;
                setMessages((prev) =>
                  prev.map((m) => (m.id === botMsgId ? { ...m, text: snapshot } : m))
                );
              } else if (evt.type === 'done') {
                const finalTxt = evt.reply || liveAccumulated;
                setStreamingMsgId(null);
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === botMsgId
                      ? {
                          ...m,
                          text: finalTxt,
                          recommendedItems: Array.isArray(evt.recommendedItems) ? evt.recommendedItems : [],
                          whatsappOrderText: evt.whatsappOrderText || '',
                          isStreaming: false
                        }
                      : m
                  )
                );
                executeAiMetadataActions(evt);
              }
            } catch {}
          }
        }

        setStreamingMsgId(null);
        setMessages((prev) =>
          prev.map((m) => (m.id === botMsgId ? { ...m, isStreaming: false } : m))
        );
        return;
      }

      // CASE 2: BUFFERED JSON RESPONSE FALLBACK
      const data = response.ok && contentType.includes('application/json') ? await response.json() : null;

      if (data && data.reply) {
        executeAiMetadataActions(data);
        streamBotReplyFallback({
          fullText: data.reply,
          recommendedItems: Array.isArray(data.recommendedItems) ? data.recommendedItems : [],
          whatsappOrderText: data.whatsappOrderText || ''
        });
      } else {
        const clock = getLocalISTClockSummary();
        streamBotReplyFallback({
          fullText:
            `**क्षीर सागर के प्रमुख आइटम्स और रेट्स (${clock.shopStatusNote}):**\n\n` +
            activeMenu
              .slice(0, 6)
              .map((m) => `• **${m.name}** — ₹${m.price}`)
              .join('\n'),
          recommendedItems: activeMenu.slice(0, 3),
          whatsappOrderText: ''
        });
      }
    } catch (error) {
      console.warn('[Laddu AI Notice]:', error);
      streamBotReplyFallback({
        fullText:
          `**क्षीर सागर के प्रमुख आइटम्स और रेट्स:**\n\n` +
          activeMenu
            .slice(0, 6)
            .map((m) => `• **${m.name}** — ₹${m.price}`)
            .join('\n'),
        recommendedItems: activeMenu.slice(0, 3),
        whatsappOrderText: ''
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('वॉइस इनपुट के लिए Chrome ब्राउज़र का उपयोग करें');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN';
    recognition.interimResults = false;

    setIsListening(true);
    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript;
      setIsListening(false);
      setInput(spoken);
      sendMessage(spoken);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-white flex flex-col h-[100dvh] w-screen overflow-hidden text-neutral-900 font-sans">
      
      {/* Toast Notification */}
      {toastText && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[10002] bg-neutral-900 text-white text-xs px-4 py-2 rounded-full shadow-md transition-all font-medium">
          {toastText}
        </div>
      )}

      {/* ================= 1. MINIMAL MONOCHROME TOP HEADER ================= */}
      <header className="flex-none flex items-center justify-between px-3 sm:px-5 py-3 bg-white border-b border-neutral-100 z-20">
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 transition-colors flex-shrink-0"
            title="वापस जाएँ"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden flex-shrink-0">
            {!logoError && LADDU_AI_LOGO ? (
              <img
                src={LADDU_AI_LOGO}
                alt="Laddu AI"
                onError={() => setLogoError(true)}
                className="w-full h-full rounded-full object-contain object-center select-none"
              />
            ) : (
              <span className="text-sm font-bold text-neutral-800 select-none">L</span>
            )}
          </div>

          <div className="min-w-0">
            <h1 className="text-[15px] font-semibold text-neutral-900 leading-tight truncate">
              Laddu AI
            </h1>
            <p className="text-[11px] text-neutral-400 truncate">
              KshirSagar Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Clean SVG Cart Button */}
          {totalQty > 0 && (
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                dispatch(toggleCart(true));
              }}
              className="mr-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs px-3 py-1.5 rounded-full font-semibold transition-colors flex items-center gap-1.5"
              title="Cart खोलें"
            >
              <svg className="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>{totalQty}</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => handleClearScreenChat('नया चैट शुरू हुआ')}
            className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            title="नया चैट शुरू करें"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setShowOptions(true)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            title="विकल्प"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </header>

      {/* ================= 2. FULL-PAGE CONVERSATION FEED ================= */}
      <main
        className="flex-1 overflow-y-auto px-4 py-5 space-y-6 max-w-3xl w-full mx-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {messages.map((msg) => {
          const isMsgStreaming = Boolean(msg.isStreaming || streamingMsgId === msg.id);
          return (
            <div
              key={msg.id}
              className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'user' ? (
                <div className="max-w-[85%] sm:max-w-[75%] bg-neutral-100 rounded-[22px] px-4 py-3 text-[14.5px] leading-relaxed text-neutral-900">
                  {renderFormattedText(msg.text)}
                </div>
              ) : (
                <div className="max-w-[96%] sm:max-w-[88%] text-[14.5px] leading-relaxed text-neutral-900 space-y-2">
                  {renderFormattedText(msg.text)}

                  {/* Feature #17: Clean Minimal SVG Speaker ("सुनें") & Stop ("रोकें") Button */}
                  {!isMsgStreaming && (
                    <div className="flex items-center gap-3 pt-0.5">
                      <button
                        type="button"
                        onClick={() => handleSpeakMessage(msg.id, msg.text)}
                        className={`inline-flex items-center gap-1.5 text-[11px] font-medium transition-colors ${
                          speakingMsgId === msg.id
                            ? 'text-neutral-900'
                            : 'text-neutral-400 hover:text-neutral-700'
                        }`}
                        title={speakingMsgId === msg.id ? 'आवाज़ रोकें' : 'यह जवाब सुनें'}
                      >
                        {speakingMsgId === msg.id ? (
                          <>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="2" fill="currentColor" />
                            </svg>
                            <span>रोकें</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"
                              />
                            </svg>
                            <span>सुनें</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {!isMsgStreaming && msg.whatsappOrderText && (
                    <div className="pt-1.5">
                      <a
                        href={`https://wa.me/918226935738?text=${encodeURIComponent(msg.whatsappOrderText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold no-underline transition-all active:scale-95"
                      >
                        <span>💬 WhatsApp पर यह ऑर्डर भेजें</span>
                      </a>
                    </div>
                  )}

                  {!isMsgStreaming && Array.isArray(msg.recommendedItems) && msg.recommendedItems.length > 0 && (
                    <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {msg.recommendedItems.map((item, idx) => {
                        const key = item.id || item.name || idx;
                        const isAdded = !!addedKeys[key];
                        return (
                          <div
                            key={key}
                            className="flex items-center justify-between p-2.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100/80 transition-colors"
                          >
                            <div className="flex items-center gap-3 min-w-0 pr-2">
                              <img
                                src={item.image || '/sweet.jpg'}
                                alt={item.name}
                                onError={(e) => {
                                  e.currentTarget.src = '/sweet.jpg';
                                }}
                                className="w-11 h-11 rounded-xl object-cover bg-neutral-200 flex-shrink-0"
                              />
                              <div style={{ minWidth: 0 }}>
                                <div className="font-semibold text-xs text-neutral-900 truncate">{item.name}</div>
                                <div className="text-xs text-neutral-500 font-medium">
                                  ₹{item.price} {item.unit ? `• ${item.unit}` : ''}
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleAddToReduxCart(item, 1)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold active:scale-95 transition-all flex-shrink-0 ${
                                isAdded
                                  ? 'bg-neutral-300 text-neutral-800'
                                  : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                              }`}
                            >
                              {isAdded ? '✓ Added' : '+ Add'}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="w-full flex justify-start">
            <div className="flex items-center gap-1.5 py-2 px-1">
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
              <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </main>

      {/* ================= 3. ULTRA-CLEAN BOTTOM INPUT DOCK ================= */}
      <footer className="flex-none px-3 sm:px-4 py-3 bg-white max-w-3xl w-full mx-auto">
        <div
          className="flex items-center gap-2 overflow-x-auto pb-2.5 text-xs text-neutral-600"
          style={{ scrollbarWidth: 'none' }}
        >
          {chips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => sendMessage(chip)}
              className="px-2.5 py-1 rounded-full bg-transparent hover:text-neutral-950 text-neutral-600 whitespace-nowrap active:scale-95 transition-all border-0 outline-none focus:outline-none font-medium"
            >
              {chip}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (canSend) sendMessage(input);
          }}
          className="flex items-center bg-neutral-100 rounded-full pl-4 pr-1.5 py-1.5"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? 'Listening...' : 'Ask anything...'}
            className="flex-1 bg-transparent py-1.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none border-0"
            autoComplete="off"
          />

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isListening
                  ? 'bg-neutral-900 text-white animate-pulse'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
              title="Voice Input"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>

            <button
              type="submit"
              disabled={!canSend}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                canSend
                  ? 'bg-neutral-900 text-white cursor-pointer active:scale-95'
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              }`}
              title="Send"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </footer>

      {showOptions && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-[10005] flex items-end md:items-center justify-center p-0 md:p-4"
          onClick={() => setShowOptions(false)}
        >
          <div
            className="bg-white w-full max-w-sm rounded-t-2xl md:rounded-2xl p-5 space-y-3 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-neutral-100 pb-2.5">
              <span className="font-semibold text-neutral-900 text-sm">Options</span>
              <button
                type="button"
                onClick={() => setShowOptions(false)}
                className="text-neutral-400 hover:text-neutral-700 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="space-y-1 text-sm text-neutral-700">
              <button
                type="button"
                onClick={() => {
                  handleClearScreenChat('चैट साफ़ कर दी गई');
                  setShowOptions(false);
                }}
                className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-100 flex items-center gap-3 transition-colors"
              >
                <span>🗑️</span> <span>Clear Chat</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  tryDetectPreciseLocation(true);
                  setShowOptions(false);
                  showToast('GPS लोकेशन अपडेट की जा रही है...');
                }}
                className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-100 flex items-center gap-3 transition-colors"
              >
                <span>📍</span> <span>Update Exact GPS Location</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowOptions(false);
                  setIsOpen(false);
                }}
                className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-100 flex items-center gap-3 transition-colors"
              >
                <span>←</span> <span>Back to Website</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIMitrModal;