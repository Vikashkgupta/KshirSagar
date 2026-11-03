// File: src/components/modals/AIMitrModal.jsx
// Universal AI Assistant (ChatGPT-style Math, GK, Coding, World Info) + Live KshirSagar Website & Airtable RAG
// Connected to Redux cartSlice (addToCart), uiSlice (toggleCart) & local menuData

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { toggleCart } from '../../store/uiSlice';
// import { menuData as staticMenuData } from '../../data/menuData';
import * as menuDataModule from '../../data/menuData';

const QUICK_PROMPTS = [
  '🍬 आज की स्पेशल मिठाई और रेट बताओ',
  '🏷️ एयरटेबल के लाइव ऑफ़र्स क्या हैं?',
  '🍕 ₹500 के बजट में पार्टी कॉम्बो बनाओ',
  '🧮 Math या दुनिया का कोई भी सवाल पूछो',
  '📍 दुकान कब खुलती है और कहाँ है?'
];

const INITIAL_WELCOME =
  '🙏 **नमस्ते! मैं क्षीर सागर AI मित्र हूँ।**\n\n' +
  'आप मेरा इस्तेमाल **दोनों कामों** के लिए कर सकते हैं:\n' +
  '1️⃣ **KshirSagar स्मार्ट असिस्टेंट:** वेबसाइट पर लिखा कोई भी डेटा, **Airtable का लाइव मेन्यू कार्ड, रेट्स, ऑफ़र्स**, कस्टम केक या दुकान की टाइमिंग पूछें।\n' +
  '2️⃣ **Normal ChatGPT की तरह:** मुझसे **Math के सवाल, जनरल नॉलेज (GK), कोडिंग, साइंस, या बाहरी दुनिया का कोई भी सवाल** पूछें—मैं सब बताऊँगा!\n\n' +
  'नीचे किसी भी बटन पर टैप करें या अपना सवाल लिखें:';

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
  const [thinkingStep, setThinkingStep] = useState('✨ AI सोच रहा है...');
  const [chips, setChips] = useState(QUICK_PROMPTS);
  const [isListening, setIsListening] = useState(false);
  const [addedKeys, setAddedKeys] = useState({});
  const [liveMenuCache, setLiveMenuCache] = useState([]);
  const [liveOffersCache, setLiveOffersCache] = useState([]);
  const messagesEndRef = useRef(null);

  // Global helper so MobileBottomNav's 5th button can open/close this modal
  useEffect(() => {
    window.toggleKshirSagarAI = () => setIsOpen((prev) => !prev);
    window.openKshirSagarAI = () => setIsOpen(true);
    window.closeKshirSagarAI = () => setIsOpen(false);
  }, []);

  // Pre-fetch live Airtable Menu & Offers from your existing endpoints when opened
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
        // Fallback handled gracefully
      }
    }

    loadLiveSiteData();
  }, [isOpen, liveMenuCache.length]);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Reads visible text from the live frontend DOM (#landing) so AI knows everything written on the website
  const getFrontendWebsiteText = () => {
    try {
      const landingEl = document.getElementById('landing') || document.querySelector('main');
      if (!landingEl) return '';
      return (landingEl.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 3000);
    } catch {
      return '';
    }
  };

  // Normalizes static/live menu items so AI always has full menu data
  const getNormalizedClientMenu = () => {
    if (liveMenuCache.length > 0) {
      return liveMenuCache.map((item, i) => ({
        id: item.id || `live-${i}`,
        name: item.name || item.Name || item.fields?.Name || 'Special Item',
        category: item.category || item.Category || item.fields?.Category || 'Sweets',
        price: Number(item.price || item.Price || item.fields?.Price || 0),
        unit: item.unit || item.variant || item.fields?.Unit || '',
        image: item.image || item.img || item.fields?.Image || '/sweet.jpg'
      })).filter((x) => x.price > 0);
    }

    if (Array.isArray(staticMenuData) && staticMenuData.length > 0) {
      return staticMenuData.map((item, i) => ({
        id: item.id || `static-${i}`,
        name: item.name || item.title || 'Special',
        category: item.category || 'Sweets',
        price: Number(item.price || item.halfPrice || item.fullPrice || 0),
        unit: item.variant || item.unit || '',
        image: item.image || item.img || '/sweet.jpg'
      })).filter((x) => x.price > 0);
    }

    return null;
  };

  const renderFormattedText = (rawText) => {
    const html = String(rawText || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#6b1d1d;">$1</strong>')
      .replace(
        /`(.*?)`/g,
        '<code style="background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;">$1</code>'
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
    setThinkingStep('🧠 Analyzing Question & Live Data...');

    const t1 = setTimeout(() => setThinkingStep('✨ Generating Response...'), 750);

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

      clearTimeout(t1);

      const data = await response.json();
      const botMsg = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: data.reply || 'यहाँ आपके सवाल का जवाब है:',
        recommendedItems: Array.isArray(data.recommendedItems) ? data.recommendedItems : []
      };

      setMessages((prev) => [...prev, botMsg]);

      if (Array.isArray(data.quickFollowUps) && data.quickFollowUps.length > 0) {
        setChips(data.quickFollowUps);
      }
    } catch (error) {
      clearTimeout(t1);
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-err-' + Date.now(),
          sender: 'bot',
          text:
            '⚠️ कनेक्शन में थोड़ी दिक्कत आई। अगर आप लोकल (`npm run dev`) पर टेस्ट कर रहे हैं, तो Netlify Functions चलाने के लिए `npx netlify dev` चलाएँ या Netlify पर डिप्लॉय करें।',
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
    setTimeout(() => {
      setAddedKeys((prev) => ({ ...prev, [k]: false }));
    }, 1400);
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Voice input के लिए कृपया Chrome ब्राउज़र का उपयोग करें।');
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
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '82vh',
          maxHeight: '670px',
          backgroundColor: '#fdfaf5',
          borderTopLeftRadius: '26px',
          borderTopRightRadius: '26px',
          border: '1px solid #f3e5cc',
          boxShadow: '0 -12px 40px rgba(107, 29, 29, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          marginBottom: '74px'
        }}
      >
        {/* Top Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #6b1d1d 0%, #9a3412 55%, #d97706 100%)',
            color: '#ffffff',
            padding: '13px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.18)',
                border: '1px solid rgba(254, 243, 199, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '21px', color: '#fde68a' }}>
                auto_awesome
              </span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                क्षीर सागर AI मित्र
                <span
                  style={{
                    fontSize: '9.5px',
                    background: '#16a34a',
                    color: '#ffffff',
                    padding: '2px 7px',
                    borderRadius: '99px',
                    fontWeight: 700
                  }}
                >
                  AI + LIVE DATA
                </span>
              </div>
              <div style={{ fontSize: '11px', color: '#fde68a' }}>
                Ask Anything (Math, GK, World) + Live Menu & Offers
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {totalQty > 0 && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  dispatch(toggleCart(true));
                }}
                style={{
                  background: '#fde68a',
                  color: '#6b1d1d',
                  border: 'none',
                  borderRadius: '99px',
                  padding: '4px 10px',
                  fontSize: '11px',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                🛒 Cart ({totalQty})
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.18)',
                border: 'none',
                color: '#ffffff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 700
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Store Quick Strip */}
        <div
          style={{
            background: '#fff8eb',
            borderBottom: '1px solid #f5deb3',
            padding: '6px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            color: '#7c2d12'
          }}
        >
          <span>⏰ 8:00 AM – 10:00 PM • 📍 Nai Bazar, Mairwa</span>
          <a
            href="https://wa.me/918226935738?text=Namaste%20KshirSagar!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#dcfce7',
              color: '#166534',
              padding: '2px 9px',
              borderRadius: '99px',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            💬 WhatsApp
          </a>
        </div>

        {/* Messages Feed */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              <div
                style={{
                  maxWidth: '88%',
                  padding: '10px 13px',
                  borderRadius: '16px',
                  fontSize: '13px',
                  lineHeight: 1.55,
                  backgroundColor: msg.sender === 'user' ? '#d97706' : '#ffffff',
                  color: msg.sender === 'user' ? '#ffffff' : '#292524',
                  border: msg.sender === 'user' ? 'none' : '1px solid #f0e4d0',
                  borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                  boxShadow: '0 2px 8px rgba(107, 29, 29, 0.06)'
                }}
              >
                {renderFormattedText(msg.text)}
              </div>

              {/* Suggested Menu Item Cards (Only shown when AI recommends food items) */}
              {msg.sender === 'bot' &&
                Array.isArray(msg.recommendedItems) &&
                msg.recommendedItems.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginTop: '8px',
                      width: '100%'
                    }}
                  >
                    {msg.recommendedItems.map((item, idx) => {
                      const key = item.id || item.name || idx;
                      const isAdded = !!addedKeys[key];
                      return (
                        <div
                          key={key}
                          style={{
                            background: '#ffffff',
                            border: '1px solid #f3d6a4',
                            borderRadius: '14px',
                            padding: '8px 11px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '10px',
                            boxShadow: '0 2px 6px rgba(217, 119, 6, 0.08)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                            <img
                              src={item.image || '/sweet.jpg'}
                              alt={item.name}
                              onError={(e) => {
                                e.currentTarget.src = '/sweet.jpg';
                              }}
                              style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                                border: '1px solid #f3e5cc',
                                flexShrink: 0
                              }}
                            />
                            <div style={{ minWidth: 0 }}>
                              <div
                                style={{
                                  fontWeight: 700,
                                  fontSize: '13px',
                                  color: '#6b1d1d',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis'
                                }}
                              >
                                {item.name}
                              </div>
                              <div style={{ fontSize: '11.5px', color: '#d97706', fontWeight: 700 }}>
                                ₹{item.price} {item.unit ? `• ${item.unit}` : ''}
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleAddToReduxCart(item)}
                            style={{
                              background: isAdded ? '#166534' : '#d97706',
                              color: '#ffffff',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '6px 12px',
                              fontSize: '11.5px',
                              fontWeight: 700,
                              cursor: 'pointer',
                              flexShrink: 0,
                              transition: 'background 0.2s'
                            }}
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

          {isLoading && (
            <div
              style={{
                alignSelf: 'flex-start',
                background: '#fff8eb',
                border: '1px solid #f59e0b',
                color: '#92400e',
                padding: '8px 13px',
                borderRadius: '12px',
                fontSize: '11.5px',
                fontWeight: 600
              }}
            >
              {thinkingStep}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Chips */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
            padding: '8px 12px',
            background: '#ffffff',
            borderTop: '1px solid #f3e5cc'
          }}
        >
          {chips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => sendMessage(chip)}
              style={{
                background: '#fff8eb',
                color: '#7c2d12',
                border: '1px solid #f3d6a4',
                borderRadius: '999px',
                padding: '5px 11px',
                fontSize: '11px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          style={{
            padding: '10px 12px',
            background: '#ffffff',
            borderTop: '1px solid #f0e4d0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <button
            type="button"
            onClick={handleVoiceInput}
            title="बोलकर पूछें (Voice Input)"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1px solid #f3d6a4',
              background: isListening ? '#fee2e2' : '#fff8eb',
              color: isListening ? '#dc2626' : '#b45309',
              cursor: 'pointer',
              fontSize: '16px',
              flexShrink: 0
            }}
          >
            🎙️
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? '🎙️ बोलिए, मैं सुन रहा हूँ...' : 'मेन्यू, ऑफ़र, या दुनिया का कोई भी सवाल पूछें...'}
            style={{
              flex: 1,
              border: '1px solid #e7d8c1',
              borderRadius: '999px',
              padding: '9px 14px',
              fontSize: '13px',
              outline: 'none',
              color: '#292524',
              background: '#fdfaf5'
            }}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #6b1d1d, #d97706)',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '15px',
              flexShrink: 0
            }}
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIMitrModal;