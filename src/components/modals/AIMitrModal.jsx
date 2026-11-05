// File: src/components/modals/AIMitrModal.jsx
// Full-Page ChatGPT Mobile/Desktop UI/UX Replica for KshirSagar AI Mitr
// Directly replaces the old bottom-sheet with the exact full-page ChatGPT layout shown in your screenshot!

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { toggleCart } from '../../store/uiSlice';
import * as menuDataModule from '../../data/menuData';
import { useModalBack } from '../../hooks/useModalBack';

const QUICK_PROMPTS = [
  '🍬 आज की स्पेशल मिठाई और रेट बताओ',
  '🍕 ₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो',
  '📍 दुकान कब खुलती है और कहाँ है?',
  '🧮 15% of 840 कितना होता है?',
  '🏷️ आज के लाइव ऑफ़र्स क्या हैं?'
];

const INITIAL_WELCOME =
  '🙏 **नमस्ते! मैं क्षीर सागर AI मित्र हूँ।**\n\n' +
  'आप मुझसे **नॉर्मल ChatGPT की तरह** दुनिया का कोई भी सवाल पूछ सकते हैं (Math, सामान्य ज्ञान, कोडिंग, साइंस) या फिर **KshirSagar का लाइव मेन्यू, रेट्स, और ऑफ़र्स** जान सकते हैं।\n\n' +
  'नीचे किसी भी सुझाव पर टैप करें या अपना सवाल लिखें:';

const AIMitrModal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const [isOpen, setIsOpen] = useState(false);
  // Integrates with centralized Android physical/gesture Back button & Escape key stack
  useModalBack(isOpen, () => setIsOpen(false), 'ai-mitr-modal');

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
  const messagesEndRef = useRef(null);

  useEffect(() => {
    window.toggleKshirSagarAI = () => setIsOpen((prev) => !prev);
    window.openKshirSagarAI = () => setIsOpen(true);
    window.closeKshirSagarAI = () => setIsOpen(false);
  }, []);

  const showToast = (text) => {
    setToastText(text);
    setTimeout(() => setToastText(''), 2200);
  };

  // Pre-fetch live Airtable Menu & Offers
  useEffect(() => {
    if (!isOpen || liveMenuCache.length > 0) return;

    async function loadLiveSiteData() {
      try {
        const [mRes, oRes] = await Promise.allSettled([
          fetch('/.netlify/functions/menu'),
          fetch('/.netlify/functions/offers')
        ]);

        if (mRes.status === 'fulfilled' && mRes.value.ok) {
          const mJson = await mRes.value.json();
          const list = Array.isArray(mJson) ? mJson : mJson.menu || mJson.records || [];
          if (list.length > 0) setLiveMenuCache(list);
        }

        if (oRes.status === 'fulfilled' && oRes.value.ok) {
          const oJson = await oRes.value.json();
          const oList = Array.isArray(oJson) ? oJson : oJson.offers || oJson.records || [];
          if (oList.length > 0) setLiveOffersCache(oList);
        }
      } catch (e) {
        // Fallback handled
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
      return Array.isArray(raw) ? raw : [];
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
          price: Number(item.price || item.Price || item.fields?.Price || 0),
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
          price: Number(item.price || item.halfPrice || item.fullPrice || 0),
          unit: item.variant || item.unit || '',
          image: item.image || item.img || '/sweet.jpg'
        }))
        .filter((x) => x.price > 0);
    }

    return null;
  };

  const renderFormattedText = (rawText) => {
    const html = String(rawText || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(
        /`(.*?)`/g,
        '<code class="bg-gray-100 text-amber-800 px-1.5 py-0.5 rounded text-xs font-mono font-bold">$1</code>'
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

    try {
      const historyPayload = messages.slice(-8).map((m) => ({
        role: m.sender === 'bot' ? 'assistant' : 'user',
        content: m.text
      }));

      const response = await fetch('/.netlify/functions/aiChat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
          clientMenu: getNormalizedClientMenu(),
          clientOffers: liveOffersCache.length > 0 ? liveOffersCache : null,
          pageContext: getFrontendWebsiteText()
        })
      });

      const data = await response.json();
      const botMsg = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: data.reply || 'यहाँ आपके सवाल का उत्तर है।',
        recommendedItems: Array.isArray(data.recommendedItems) ? data.recommendedItems : []
      };

      setMessages((prev) => [...prev, botMsg]);

      if (Array.isArray(data.quickFollowUps) && data.quickFollowUps.length > 0) {
        setChips(data.quickFollowUps);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-err-' + Date.now(),
          sender: 'bot',
          text:
            '⚠️ कनेक्शन में थोड़ी दिक्कत आई। अगर आप लोकल पर टेस्ट कर रहे हैं, तो `npx netlify dev` चलाएँ या Netlify पर डिप्लॉय करें।',
          recommendedItems: []
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
    showToast(`${item.name} कार्ट में जोड़ दिया गया!`);
    setTimeout(() => {
      setAddedKeys((prev) => ({ ...prev, [k]: false }));
    }, 1400);
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('वॉइस इनपुट के लिए Chrome ब्राउज़र का उपयोग करें।');
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
    <div className="fixed inset-0 z-[10000] bg-white flex flex-col h-screen w-screen overflow-hidden text-[#0d0d0d]">
      
      {/* Toast Alert Notification */}
      {toastText && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[10002] bg-gray-900 text-white text-xs px-4 py-2 rounded-full shadow-lg transition-all">
          {toastText}
        </div>
      )}

      {/* ================= 1. TOP HEADER (Matching Screenshot) ================= */}
      <header className="flex-none flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-md border-b border-gray-100 z-20">
        <div className="flex items-center gap-3">
          {/* Back Button (Closes Full Page Mode cleanly) */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors"
            title="पीछे जाएँ (Back)"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div>
            <h1 className="text-base font-semibold text-gray-900 leading-tight flex items-center gap-1.5">
              <span>KshirSagar AI Mitr</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            </h1>
            <p className="text-xs text-gray-500">Live Menu & ChatGPT Assistance</p>
          </div>
        </div>

        {/* Right Header Actions: Cart Badge + New Chat + Three Dots Menu */}
        <div className="flex items-center gap-1">
          {totalQty > 0 && (
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                dispatch(toggleCart(true));
              }}
              className="mr-1 bg-amber-100 text-amber-900 text-xs px-2.5 py-1.5 rounded-full font-semibold hover:bg-amber-200 transition-colors"
              title="Cart खोलें"
            >
              🛒 {totalQty}
            </button>
          )}

          {/* New Chat Edit Icon */}
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
              showToast('नया चैट सत्र शुरू हुआ');
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors"
            title="नया चैट शुरू करें"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>

          {/* Three Dots Menu Icon */}
          <button
            type="button"
            onClick={() => setShowOptions(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors"
            title="विकल्प"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </header>

      {/* ================= 2. CHAT FEED (Full Page) ================= */}
      <main className="flex-1 overflow-y-auto px-4 py-5 space-y-6 max-w-3xl w-full mx-auto" style={{ scrollbarWidth: 'none' }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'user' ? (
              // User message bubble (Gray rounded pill bubble on right)
              <div className="max-w-[85%] sm:max-w-[75%] bg-[#f4f4f4] rounded-[24px] px-5 py-4 text-[14.5px] leading-relaxed text-[#0d0d0d] shadow-sm">
                {renderFormattedText(msg.text)}
              </div>
            ) : (
              // AI message (Clean ChatGPT typography with optional dish cards)
              <div className="max-w-[96%] sm:max-w-[88%] text-[14.5px] leading-relaxed text-[#0d0d0d] space-y-2">
                {renderFormattedText(msg.text)}

                {/* Render food cards if AI recommends items from KshirSagar Menu */}
                {Array.isArray(msg.recommendedItems) && msg.recommendedItems.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {msg.recommendedItems.map((item, idx) => {
                      const key = item.id || item.name || idx;
                      const isAdded = !!addedKeys[key];
                      return (
                        <div
                          key={key}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <img
                              src={item.image || '/sweet.jpg'}
                              alt={item.name}
                              onError={(e) => {
                                e.currentTarget.src = '/sweet.jpg';
                              }}
                              className="w-10 h-10 rounded-lg object-cover border border-amber-200 flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="font-semibold text-xs text-gray-900 truncate">{item.name}</div>
                              <div className="text-xs text-amber-700 font-bold">
                                ₹{item.price} {item.unit ? `• ${item.unit}` : ''}
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleAddToReduxCart(item)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold shadow active:scale-95 transition-all text-white flex-shrink-0 ${
                              isAdded ? 'bg-emerald-600' : 'bg-amber-600 hover:bg-amber-700'
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

        {/* Typing indicator */}
        {isLoading && (
          <div className="w-full flex justify-start">
            <div className="flex items-center gap-1.5 py-2 px-1 text-gray-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
              <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </main>

      {/* ================= 3. BOTTOM INPUT DOCK (Matching Screenshot) ================= */}
      <footer className="flex-none px-4 py-3 bg-white border-t border-gray-100 max-w-3xl w-full mx-auto">
        {/* Quick prompt chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-medium text-gray-600" style={{ scrollbarWidth: 'none' }}>
          {chips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => sendMessage(chip)}
              className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 whitespace-nowrap active:scale-95 transition-all"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Bar Pill */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="relative flex items-center bg-[#f4f4f4] rounded-full px-3 py-1.5 shadow-inner"
        >
          {/* Plus Button */}
          <button
            type="button"
            onClick={() => showToast('अतिरिक्त अटैचमेंट विकल्प')}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 active:scale-95 transition-transform"
            title="विकल्प"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? '🎙️ बोलिए, मैं सुन रहा हूँ...' : 'Reply to ChatGPT'}
            className="flex-1 bg-transparent px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
            autoComplete="off"
          />

          {/* Right Controls: Mic + Blue Waveform Sphere Button */}
          <div className="flex items-center gap-1.5 pr-0.5">
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
                isListening ? 'text-red-500 animate-pulse' : 'text-gray-600 hover:text-gray-900'
              }`}
              title="बोलकर पूछें (Voice input)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>

            {/* Blue Action Button (Toggles between Wave icon & Send arrow) */}
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#1b64f2] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
              title="Send"
            >
              {input.trim().length > 0 ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="9" width="2" height="6" rx="1" />
                  <rect x="7" y="5" width="2" height="14" rx="1" />
                  <rect x="11" y="2" width="2" height="20" rx="1" />
                  <rect x="15" y="6" width="2" height="12" rx="1" />
                  <rect x="19" y="9" width="2" height="6" rx="1" />
                </svg>
              )}
            </button>
          </div>
        </form>
      </footer>

      {/* Options Dropdown Modal */}
      {showOptions && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[10005] flex items-end md:items-center justify-center p-0 md:p-4"
          onClick={() => setShowOptions(false)}
        >
          <div
            className="bg-white w-full max-w-sm rounded-t-2xl md:rounded-2xl p-5 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="font-semibold text-gray-900 text-sm">चैट सेटिंग्स व विकल्प</h3>
              <button
                type="button"
                onClick={() => setShowOptions(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <button
                type="button"
                onClick={() => {
                  setMessages([]);
                  setShowOptions(false);
                  showToast('चैट हिस्ट्री साफ़ कर दी गई');
                }}
                className="w-full text-left p-2.5 rounded-lg hover:bg-gray-100 flex items-center gap-2.5"
              >
                <span>🗑️</span> <span>चैट हिस्ट्री साफ़ करें (Clear Chat)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowOptions(false);
                  setIsOpen(false);
                }}
                className="w-full text-left p-2.5 rounded-lg hover:bg-gray-100 flex items-center gap-2.5"
              >
                <span>🏪</span> <span>KshirSagar वेबसाइट पर वापस जाएँ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIMitrModal;