// File: src/components/modals/AIMitrModal.jsx
// Laddu AI — Ultra-Clean Monochrome Full-Page AI Interface + Unique Visitor Session Tracking + Direct URL Support (`?ai=1` or `#ai`)

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { toggleCart } from '../../store/uiSlice';
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
  address: 'Nai Bazar, Mairwa (Siwan), Bihar',
  phone: '+91 8226935738',
  whatsapp: '+91 8226935738',
  website: 'https://kshirsagarsweets.netlify.app/'
};

const QUICK_PROMPTS = [
  '🍬 आज की स्पेशल मिठाई और रेट बताओ',
  '🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो',
  '🏷️ आज के स्पेशल ऑफ़र्स क्या हैं?',
  '📍 दुकान कब खुलती है और कहाँ है?',
  '🧮 कोई भी सवाल या कैलकुलेशन पूछो'
];

const INITIAL_WELCOME =
  'नमस्ते! 👋 KshirSagar में आपका स्वागत है। \n\n' +
  'मैं हूँ Laddu AI! बताइए, आज आपकी क्या मदद करूँ? 😊';

// Generates or retrieves a persistent Visitor Session ID (e.g., "KS-8492-A1B2") in localStorage
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

// Detects if the user already typed their name/mobile in the Cart form so we can attach it to their chat log
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

function getShortDeviceLabel() {
  try {
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const platform = isAndroid ? 'Android' : isIOS ? 'iPhone' : 'Desktop';
    return `${platform} (${window.innerWidth}x${window.innerHeight})`;
  } catch {
    return 'Web Browser';
  }
}

const AIMitrModal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const [isOpen, setIsOpen] = useState(false);
  useModalBack(isOpen, () => setIsOpen(false), 'ai-mitr-modal');

  const [sessionId] = useState(() => getOrCreateVisitorSessionId());
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: INITIAL_WELCOME,
      recommendedItems: []
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chips, setChips] = useState(QUICK_PROMPTS);
  const [isListening, setIsListening] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [toastText, setToastText] = useState('');
  const [addedKeys, setAddedKeys] = useState({});
  const [liveMenuCache, setLiveMenuCache] = useState([]);
  const [liveOffersCache, setLiveOffersCache] = useState([]);
  const [logoError, setLogoError] = useState(false);
  const messagesEndRef = useRef(null);

  const canSend = input.trim().length > 0 && !isLoading;

  useEffect(() => {
    window.toggleKshirSagarAI = () => setIsOpen((prev) => !prev);
    window.openKshirSagarAI = () => setIsOpen(true);
    window.closeKshirSagarAI = () => setIsOpen(false);

    // Direct shareable URL support: https://kshirsagarsweets.netlify.app/?ai=1 or #ai or /ai
    const search = window.location.search.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    if (search.includes('ai=1') || search.includes('laddu') || hash.includes('ai') || path === '/ai') {
      setIsOpen(true);
    }
  }, []);

  const showToast = (text) => {
    setToastText(text);
    setTimeout(() => setToastText(''), 2000);
  };

  const fetchFunctionJson = async (path, options = {}) => {
    try {
      const localRes = await fetch(path, options);
      const contentType = localRes.headers.get('content-type') || '';
      if (localRes.ok && contentType.includes('application/json')) {
        return await localRes.json();
      }
    } catch {
      // Fallback to remote live Netlify function if on localhost
    }

    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      try {
        const remoteRes = await fetch(`${LIVE_NETLIFY_BASE}${path}`, options);
        const remoteType = remoteRes.headers.get('content-type') || '';
        if (remoteRes.ok && remoteType.includes('application/json')) {
          return await remoteRes.json();
        }
      } catch {
        // Handled by local engine
      }
    }

    return null;
  };

  useEffect(() => {
    if (!isOpen || liveMenuCache.length > 0) return;

    async function loadLiveSiteData() {
      const [mJson, oJson] = await Promise.all([
        fetchFunctionJson('/.netlify/functions/menu'),
        fetchFunctionJson('/.netlify/functions/offers')
      ]);

      if (mJson) {
        const list = Array.isArray(mJson) ? mJson : mJson.menu || mJson.records || [];
        if (list.length > 0) setLiveMenuCache(list);
      }

      if (oJson) {
        const oList = Array.isArray(oJson) ? oJson : oJson.offers || oJson.records || [];
        if (oList.length > 0) setLiveOffersCache(oList);
      }
    }

    loadLiveSiteData();
  }, [isOpen, liveMenuCache.length]);

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

  const formatOffersReply = (offersList) => {
    if (!Array.isArray(offersList) || offersList.length === 0) {
      return '🎉 **क्षीर सागर स्पेशल ऑफ़र्स:**\n\n• **Festival Sweet Deal:** ₹500 से ऊपर के ऑर्डर पर विशेष छूट\n• **Party Combo Offer:** पिज़्ज़ा, केक और स्नैक्स पर डायरेक्ट होम डिलीवरी सुविधा';
    }

    const lines = offersList.map((o) => {
      const title = o.title || o.Title || o.Name || 'स्पेशल ऑफ़र';
      const code = o.code || o.Code || o.PromoCode || '';
      const discount = o.discount || o.Discount || o.description || o.Description || '';
      let line = `• **${title}**`;
      if (code && code !== 'undefined') line += ` — कोड: \`${code}\``;
      if (discount && discount !== 'undefined') line += ` (${discount})`;
      return line;
    });

    return `🎉 **क्षीर सागर के स्पेशल ऑफ़र्स:**\n\n${lines.join('\n')}`;
  };

  const buildLocalOfflineReply = (userMessage, menu) => {
    const q = (userMessage || '').trim();
    const lower = q.toLowerCase();

    if (/^(hi+|hello+|hey+|namaste|pranam|ram ram|hlo|हाय|नमस्ते|हेलो)$/i.test(q)) {
      return {
        reply: 'नमस्ते! बताइए, आज मैं आपकी क्या मदद कर सकता हूँ?',
        recommendedItems: [],
        quickFollowUps: QUICK_PROMPTS
      };
    }

    const mathPercent = lower.match(/(\d+(?:\.\d+)?)\s*%\s*(?:of|ka|की|का)\s*(\d+(?:\.\d+)?)/);
    if (mathPercent) {
      const pct = Number(mathPercent[1]);
      const total = Number(mathPercent[2]);
      const ans = (pct / 100) * total;
      return {
        reply: `**${total}** का **${pct}%** = **${ans}** होता है।`,
        recommendedItems: [],
        quickFollowUps: QUICK_PROMPTS
      };
    }

    const cleanMath = q.replace(/[^0-9+\-*/().\s]/g, '').trim();
    if (/^\d+(?:\.\d+)?\s*[+\-*/]\s*\d+/.test(cleanMath)) {
      try {
        const result = Function(`"use strict"; return (${cleanMath})`)();
        if (typeof result === 'number' && isFinite(result)) {
          return {
            reply: `\`${cleanMath} = ${result}\``,
            recommendedItems: [],
            quickFollowUps: QUICK_PROMPTS
          };
        }
      } catch {
        // continue
      }
    }

    if (
      lower.includes('time') ||
      lower.includes('kab') ||
      lower.includes('address') ||
      lower.includes('kahan') ||
      lower.includes('location') ||
      lower.includes('phone') ||
      lower.includes('number') ||
      lower.includes('dukan') ||
      lower.includes('shop') ||
      lower.includes('खुलती') ||
      lower.includes('कहाँ') ||
      lower.includes('पता')
    ) {
      return {
        reply:
          `**${STORE_PROFILE.name}** (${STORE_PROFILE.established})\n\n` +
          `• **समय:** ${STORE_PROFILE.timings}\n` +
          `• **पता:** ${STORE_PROFILE.address}\n` +
          `• **मोबाइल / WhatsApp:** ${STORE_PROFILE.phone}`,
        recommendedItems: [],
        quickFollowUps: QUICK_PROMPTS
      };
    }

    if (lower.includes('offer') || lower.includes('discount') || lower.includes('ऑफ़र')) {
      return {
        reply: formatOffersReply(liveOffersCache),
        recommendedItems: menu.slice(0, 3),
        quickFollowUps: QUICK_PROMPTS
      };
    }

    const budgetMatch = lower.match(/(\d{3,4})/);
    if (budgetMatch || lower.includes('combo') || lower.includes('party') || lower.includes('कॉम्बो') || lower.includes('बजट')) {
      const budget = budgetMatch ? Number(budgetMatch[1]) : 500;
      const picked = [];
      let sum = 0;
      for (const item of menu) {
        if (sum + item.price <= budget && picked.length < 4) {
          picked.push(item);
          sum += item.price;
        }
      }
      const finalItems = picked.length > 0 ? picked : menu.slice(0, 3);
      const total = finalItems.reduce((a, b) => a + b.price, 0);
      return {
        reply:
          `**₹${budget} के बजट में कॉम्बो सुझाव (कुल: ₹${total}):**\n\n` +
          finalItems.map((i) => `• **${i.name}** — ₹${i.price}`).join('\n'),
        recommendedItems: finalItems,
        quickFollowUps: QUICK_PROMPTS
      };
    }

    return {
      reply:
        `**क्षीर सागर के प्रमुख आइटम्स और रेट्स:**\n\n` +
        menu
          .slice(0, 6)
          .map((m) => `• **${m.name}** — ₹${m.price}`)
          .join('\n'),
      recommendedItems: menu.slice(0, 3),
      quickFollowUps: QUICK_PROMPTS
    };
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

    try {
      const historyPayload = messages.slice(-8).map((m) => ({
        role: m.sender === 'bot' ? 'assistant' : 'user',
        content: m.text
      }));

      const data = await fetchFunctionJson('/.netlify/functions/aiChat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          customerName,
          customerMobile,
          deviceInfo: getShortDeviceLabel(),
          message: trimmed,
          history: historyPayload,
          clientMenu: activeMenu,
          clientOffers: liveOffersCache.length > 0 ? liveOffersCache : null,
          pageContext: getFrontendWebsiteText()
        })
      });

      if (data && data.reply) {
        if (data.debugError) {
          console.warn('[Laddu AI Backend Diagnostic]:', data.debugError);
        }

        setMessages((prev) => [
          ...prev,
          {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            text: data.reply,
            recommendedItems: Array.isArray(data.recommendedItems) ? data.recommendedItems : []
          }
        ]);

        if (Array.isArray(data.quickFollowUps) && data.quickFollowUps.length > 0) {
          setChips(data.quickFollowUps);
        }
      } else {
        const localReply = buildLocalOfflineReply(trimmed, activeMenu);
        setMessages((prev) => [
          ...prev,
          {
            id: 'bot-local-' + Date.now(),
            sender: 'bot',
            text: localReply.reply,
            recommendedItems: localReply.recommendedItems
          }
        ]);
      }
    } catch (error) {
      console.warn('[Laddu AI Notice]:', error);
      const localReply = buildLocalOfflineReply(trimmed, activeMenu);
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-fallback-' + Date.now(),
          sender: 'bot',
          text: localReply.reply,
          recommendedItems: localReply.recommendedItems
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToReduxCart = (item) => {
    const emojiMap = {
      Sweets: '🍬',
      Namkeen: '🥜',
      Snacks: '🥟',
      Pizza: '🍕'
    };

    dispatch(
      addToCart({
        name: item.name,
        price: Number(item.price || 0),
        variant: item.unit || 'Regular',
        emoji: emojiMap[item.category] || '🍽️',
        category: item.category || 'Sweets'
      })
    );

    const k = item.id || item.name;
    setAddedKeys((prev) => ({ ...prev, [k]: true }));
    showToast(`${item.name} कार्ट में जोड़ दिया गया`);
    setTimeout(() => {
      setAddedKeys((prev) => ({ ...prev, [k]: false }));
    }, 1400);
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
          {totalQty > 0 && (
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                dispatch(toggleCart(true));
              }}
              className="mr-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs px-3 py-1.5 rounded-full font-semibold transition-colors flex items-center gap-1"
              title="Cart खोलें"
            >
              <span>🛒</span>
              <span>{totalQty}</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setMessages([
                {
                  id: 'welcome-' + Date.now(),
                  sender: 'bot',
                  text: INITIAL_WELCOME,
                  recommendedItems: []
                }
              ]);
              showToast('नया चैट शुरू हुआ');
            }}
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
        {messages.map((msg) => (
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

                {Array.isArray(msg.recommendedItems) && msg.recommendedItems.length > 0 && (
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
                            onClick={() => handleAddToReduxCart(item)}
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
        ))}

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
          className="flex items-center gap-2 overflow-x-auto pb-2.5 text-xs text-neutral-700"
          style={{ scrollbarWidth: 'none' }}
        >
          {chips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => sendMessage(chip)}
              className="px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 whitespace-nowrap active:scale-95 transition-all border-0 outline-none focus:outline-none"
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
                  setMessages([
                    {
                      id: 'welcome-' + Date.now(),
                      sender: 'bot',
                      text: INITIAL_WELCOME,
                      recommendedItems: []
                    }
                  ]);
                  setShowOptions(false);
                  showToast('चैट साफ़ कर दी गई');
                }}
                className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-100 flex items-center gap-3 transition-colors"
              >
                <span>🗑️</span> <span>Clear Chat</span>
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