// File: src/components/modals/AIMitrModal.jsx
// Ultra-Clean Luxury UI for KshirSagar AI Mitr
// Matches KshirSagar's Soft Ivory, Warm Gold (#d97706) & Minimalist Aesthetic

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { toggleCart } from '../../store/uiSlice';

const QUICK_PROMPTS = [
  { icon: '🍬', label: 'स्पेशल मिठाइयाँ', prompt: 'आज की स्पेशल मिठाई और रेट बताओ' },
  { icon: '🎉', label: '₹500 पार्टी कॉम्बो', prompt: '₹500 के बजट में पार्टी कॉम्बो सजेस्ट करो' },
  { icon: '🎂', label: 'कस्टम केक', prompt: 'Custom Cake और बेकरी आइटम्स बताओ' },
  { icon: '🏷️', label: 'लाइव ऑफ़र्स', prompt: 'आज के लाइव डिस्काउंट ऑफ़र्स क्या हैं?' },
  { icon: '📍', label: 'दुकान का समय व पता', prompt: 'दुकान कब खुलती है, पता और नंबर बताओ' }
];

const INITIAL_WELCOME =
  'नमस्ते! 🙏 **क्षीर सागर** में आपका स्वागत है।\nमैं आपके लिए ताज़ा मिठाइयाँ, पार्टी कॉम्बो, लाइव रेट्स या दुकान की जानकारी तुरंत बता सकता हूँ।';

const LOCAL_MENU_ITEMS = [
  { id: 'm1', name: 'Kaju Katli', category: 'Sweets', price: 840, unit: '1 kg', image: '/sweet.jpg' },
  { id: 'm2', name: 'Rasmalai', category: 'Sweets', price: 45, unit: '1 pc', image: '/sweet.jpg' },
  { id: 'm3', name: 'Desi Ghee Ghewar', category: 'Sweets', price: 480, unit: '1 kg', image: '/sweet.jpg' },
  { id: 'm4', name: 'Truffle Cake', category: 'Sweets', price: 450, unit: '500g', image: '/sweet.jpg' },
  { id: 'm5', name: 'Paneer Pizza (Full)', category: 'Pizza', price: 199, unit: 'Regular', image: '/pizza.png' },
  { id: 'm6', name: 'Veg Chowmein (Full)', category: 'Snacks', price: 110, unit: 'Full', image: '/snak.jpg' },
  { id: 'm7', name: 'Crispy Samosa', category: 'Snacks', price: 20, unit: '2 pcs', image: '/snak.jpg' },
  { id: 'm8', name: 'Special Mixture Namkeen', category: 'Namkeen', price: 280, unit: '1 kg', image: '/namkeen.jpg' }
];

const getInstantLocalReply = (query) => {
  const q = String(query || '').toLowerCase();

  // Strictly ONLY opening/closing time
  if (q.includes('kitne bje') || q.includes('kab khul') || q.includes('kab band') || q.includes('time') || q.includes('timing') || q.includes('समय')) {
    return {
      reply: '⏰ हमारी दुकान रोज़ **सुबह 8:00 बजे खुलती है** और **रात 10:00 बजे बंद होती है** (सातों दिन खुली रहती है)।',
      recommendedItems: []
    };
  }

  // Strictly ONLY address
  if (q.includes('पता') || q.includes('kahan') || q.includes('address') || q.includes('location')) {
    return {
      reply: '📍 हमारा पता है: **नई बाज़ार, मैरवा (सिवान), पावर हाउस के पास**।',
      recommendedItems: []
    };
  }

  // Strictly ONLY phone number
  if (q.includes('number') || q.includes('phone') || q.includes('mobile') || q.includes('नंबर')) {
    return {
      reply: '📞 हमारा मोबाइल और WhatsApp नंबर है: **+91 8226935738**',
      recommendedItems: []
    };
  }

  // Weather query on local fallback
  if (q.includes('mausam') || q.includes('weather') || q.includes('मौसम')) {
    return {
      reply: '🌤️ अभी मैरवा में मौसम काफ़ी सुहावना है! ऐसे मौसम में गरमा-गरम समोसे या रसमलाई का स्वाद ज़रूर लें।',
      recommendedItems: []
    };
  }

  if (q.includes('ऑफ़र') || q.includes('offer') || q.includes('discount') || q.includes('कूपन')) {
    return {
      reply:
        '🏷️ **आज के लाइव ऑफ़र्स:**\n' +
        '• `KSHIR10` — ₹500 से ऊपर के ऑर्डर पर **10% की छूट**\n' +
        '• `PARTY50` — पिज़्ज़ा + स्नैक्स कॉम्बो पर **Flat ₹50 OFF**',
      recommendedItems: []
    };
  }

  if (q.includes('500') || q.includes('पार्टी') || q.includes('कॉम्बो') || q.includes('combo') || q.includes('party') || q.includes('budget')) {
    return {
      reply:
        '🎉 **₹500 के बजट में बेस्ट पार्टी कॉम्बो (कुल: ₹374):**\n' +
        '• **Paneer Pizza (Full)** — ₹199\n' +
        '• **Veg Chowmein (Full)** — ₹110\n' +
        '• **Rasmalai (1 pc)** — ₹45\n' +
        '• **Crispy Samosa (2 pcs)** — ₹20',
      recommendedItems: [LOCAL_MENU_ITEMS[4], LOCAL_MENU_ITEMS[5], LOCAL_MENU_ITEMS[1], LOCAL_MENU_ITEMS[6]]
    };
  }

  if (q.includes('केक') || q.includes('cake') || q.includes('बेकरी')) {
    return {
      reply: '🎂 हमारे पास बर्थडे और एनिवर्सरी के लिए ताज़ा **Truffle Cake** और कस्टम डिज़ाइन केक उपलब्ध हैं:',
      recommendedItems: [LOCAL_MENU_ITEMS[3]]
    };
  }

  return {
    reply: '🍬 **आज की हमारी सबसे लोकप्रिय मिठाइयाँ और स्पेशल आइटम्स:**',
    recommendedItems: [LOCAL_MENU_ITEMS[0], LOCAL_MENU_ITEMS[1], LOCAL_MENU_ITEMS[2], LOCAL_MENU_ITEMS[4]]
  };
};

const AIMitrModal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const [isOpen, setIsOpen] = useState(false);
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
  const [thinkingStep, setThinkingStep] = useState('मेन्यू चेक कर रहा हूँ...');
  const [isListening, setIsListening] = useState(false);
  const [addedKeys, setAddedKeys] = useState({});
  const messagesEndRef = useRef(null);

  useEffect(() => {
    window.toggleKshirSagarAI = () => setIsOpen((prev) => !prev);
    window.openKshirSagarAI = () => setIsOpen(true);
    window.closeKshirSagarAI = () => setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const renderFormattedText = (rawText) => {
    const html = String(rawText || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-stone-900">$1</strong>')
      .replace(
        /`(.*?)`/g,
        '<span class="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-semibold">$1</span>'
      )
      .replace(/\n/g, '<br/>');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
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
    setThinkingStep('मेन्यू और रेट्स देख रहा हूँ...');

    const t1 = setTimeout(() => setThinkingStep('बेस्ट ऑफ़र्स मिला रहा हूँ...'), 700);

    try {
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.sender === 'bot' ? 'assistant' : 'user',
        content: m.text
      }));

      const response = await fetch('/.netlify/functions/aiChat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
          clientGeminiKey: import.meta.env?.VITE_GEMINI_API_KEY || ''
        })
      });

      clearTimeout(t1);

      if (!response.ok) {
        throw new Error('Netlify function not running on Vite port');
      }

      const data = await response.json();
      const botMsg = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: data.reply || 'यहाँ हमारे मेन्यू से आपके लिए कुछ बेहतरीन विकल्प हैं:',
        recommendedItems: Array.isArray(data.recommendedItems) ? data.recommendedItems : []
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      clearTimeout(t1);
      const fallback = getInstantLocalReply(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-local-' + Date.now(),
          sender: 'bot',
          text: fallback.reply,
          recommendedItems: fallback.recommendedItems
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
        emoji: emojiMap[item.category] || '🍬',
        category: item.category || 'Sweets'
      })
    );

    const k = item.id || item.name;
    setAddedKeys((prev) => ({ ...prev, [k]: true }));
    setTimeout(() => {
      setAddedKeys((prev) => ({ ...prev, [k]: false }));
    }, 1400);
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

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
    <div
      className="fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-sm flex items-end md:items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      {/* Hide Ugly Scrollbar Utility */}
      <style>{`
        .ks-no-scrollbar::-webkit-scrollbar { display: none; }
        .ks-no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Main Sheet Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md h-[78vh] max-h-[640px] bg-[#FAF7F2] rounded-t-[28px] md:rounded-[28px] shadow-[0_-12px_45px_rgba(0,0,0,0.18)] border border-amber-200/60 flex flex-col overflow-hidden mb-[64px] md:mb-0"
      >
        {/* Top Drag Handle (Mobile Sheet Feel) */}
        <div className="bg-white pt-2.5 pb-1 flex justify-center">
          <div className="w-10 h-1 bg-stone-200 rounded-full" />
        </div>

        {/* Clean White & Gold Luxury Header */}
        <div className="bg-white px-4 pb-3 pt-1 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Sparkle Gold Avatar */}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-sm shadow-amber-500/20">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-stone-800 text-[15px] tracking-tight">
                  क्षीर सागर AI सहायक
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-medium">
                Nai Bazar, Mairwa • 8 AM – 10 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {totalQty > 0 && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  dispatch(toggleCart(true));
                }}
                className="flex items-center gap-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-1.5 rounded-full text-xs font-bold transition-colors"
              >
                <span>🛒</span>
                <span>{totalQty}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 ks-no-scrollbar">
          {/* Quick Welcome Action Cards (Shown cleanly at top) */}
          <div className="grid grid-cols-2 gap-2 pb-1">
            {QUICK_PROMPTS.slice(0, 4).map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => sendMessage(item.prompt)}
                className="flex items-center gap-2 bg-white hover:bg-amber-50/60 border border-stone-200/80 hover:border-amber-300 rounded-xl p-2.5 text-left transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-xs font-semibold text-stone-700 truncate">{item.label}</span>
              </button>
            ))}
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-amber-600 text-white rounded-br-sm shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-200/80 rounded-bl-sm shadow-[0_2px_10px_rgba(0,0,0,0.03)]'
                }`}
              >
                {renderFormattedText(msg.text)}
              </div>

              {/* Clean Product Cards */}
              {msg.sender === 'bot' &&
                Array.isArray(msg.recommendedItems) &&
                msg.recommendedItems.length > 0 && (
                  <div className="w-full mt-2.5 space-y-2">
                    {msg.recommendedItems.map((item, idx) => {
                      const key = item.id || item.name || idx;
                      const isAdded = !!addedKeys[key];
                      return (
                        <div
                          key={key}
                          className="bg-white border border-stone-200/90 rounded-2xl p-2.5 flex items-center justify-between gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-amber-300 transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={item.image || '/sweet.jpg'}
                              alt={item.name}
                              onError={(e) => {
                                e.currentTarget.src = '/sweet.jpg';
                              }}
                              className="w-12 h-12 rounded-xl object-cover border border-stone-100 flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <h4 className="font-bold text-stone-800 text-[13px] truncate">
                                {item.name}
                              </h4>
                              <p className="text-xs font-bold text-amber-600 mt-0.5">
                                ₹{item.price}{' '}
                                {item.unit && (
                                  <span className="text-stone-400 font-normal">• {item.unit}</span>
                                )}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleAddToReduxCart(item)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${
                              isAdded
                                ? 'bg-emerald-600 text-white'
                                : 'bg-amber-50 hover:bg-amber-600 text-amber-700 hover:text-white border border-amber-200'
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
          ))}

          {/* Minimal Loading Indicator */}
          {isLoading && (
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 px-3.5 py-2 rounded-2xl text-xs text-stone-600 font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>{thinkingStep}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Clean Bottom Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="bg-white px-3 py-2.5 border-t border-stone-200/80 flex items-center gap-2"
        >
          {/* SVG Mic Button */}
          <button
            type="button"
            onClick={handleVoiceInput}
            title="बोलकर पूछें"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
              isListening
                ? 'bg-red-50 text-red-600 border border-red-200 animate-pulse'
                : 'bg-stone-100 hover:bg-amber-50 text-stone-600 hover:text-amber-600'
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
            </svg>
          </button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? 'बोलिए, मैं सुन रहा हूँ...' : 'मिठाई, प्राइस या कॉम्बो पूछें...'}
            className="flex-1 bg-stone-100/80 focus:bg-white border border-transparent focus:border-amber-300 rounded-full px-4 py-2.5 text-[13px] text-stone-800 placeholder-stone-400 outline-none transition-all"
          />

          {/* SVG Send Button */}
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 disabled:bg-stone-200 text-white flex items-center justify-center transition-colors flex-shrink-0 shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIMitrModal;