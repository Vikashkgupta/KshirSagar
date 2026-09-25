import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, toggleTimeWarning, toggleSuccessModal } from '../../store/uiSlice';
import { changeQuantity, addToCart, clearCart, setOrderType, setTip } from '../../store/cartSlice';
import { submitOrderWebhook, generateWhatsAppLink } from '../../utils/api';

const CartModal = () => {
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector(state => state.ui);
  const { items, orderType, tip } = useSelector(state => state.cart);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');

  // Email option
  const [wantEmail, setWantEmail] = useState(false);
  const [email, setEmail] = useState('');

  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const addressRef = useRef(null);
  const emailRef = useRef(null);

  const totalQty = items.reduce((acc, item) => acc + item.qty, 0);
  const baseTotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const grandTotal = baseTotal + tip;

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        dispatch(toggleCart(false));
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isCartOpen, dispatch]);

  const shakeField = (ref) => {
    if (ref.current) {
      ref.current.classList.remove('animate-[shake_0.4s_ease]');
      void ref.current.offsetWidth;

      ref.current.classList.add(
        'animate-[shake_0.4s_ease]',
        '!border-[#e57373]',
        '!shadow-[0_0_0_3px_rgba(229,57,53,0.1)]'
      );

      ref.current.focus();

      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.remove(
            'animate-[shake_0.4s_ease]',
            '!border-[#e57373]',
            '!shadow-[0_0_0_3px_rgba(229,57,53,0.1)]'
          );
        }
      }, 500);
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    const mobileRaw = mobile.replace(/\D/g, '');
    let hasError = false;

    if (orderType === 'Delivery' && !address.trim()) {
      shakeField(addressRef);
      hasError = true;
    }

    if (mobileRaw.length !== 10) {
      shakeField(mobileRef);
      hasError = true;
    }

    if (!name.trim()) {
      shakeField(nameRef);
      hasError = true;
    }

    // Email validation only when user selected email option
    if (wantEmail) {
      const emailRaw = email.trim();

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRaw || !emailPattern.test(emailRaw)) {
        shakeField(emailRef);
        hasError = true;
      }
    }

    if (hasError) return;

    const h = new Date().getHours();

    if (h < 10 || h >= 20) {
      dispatch(toggleTimeWarning(true));

      // In a real implementation, you'd store the pending payload
      // in state and fire it from the TimeWarningModal if they click
      // "Send Anyway"
    } else {
      executeOrder();
    }
  };

  const executeOrder = () => {
    const payload = {
      name: name.trim(),
      mobile: mobile.replace(/\D/g, ''),
      address: address.trim(),
      instructions: instructions.trim(),
      total: grandTotal,
      tip,
      orderType,

      // Email will be empty when the customer doesn't select the option
      customerEmail: wantEmail ? email.trim() : ''
    };

    const webhookPayload = {
      ...payload,

      orderType: orderType === 'Pickup'
        ? 'Store Pickup'
        : 'Delivery',

      address: orderType === 'Pickup'
        ? 'N/A'
        : payload.address,

      items: items
        .map(
          i =>
            `🔸 ${i.qty} x ${i.name}${
              i.variant ? ` (${i.variant})` : ''
            }`
        )
        .join('\n'),

      instruction: payload.instructions || 'None',

      // Explicit email field for Airtable / automation
      customerEmail: wantEmail ? email.trim() : ''
    };

    submitOrderWebhook(webhookPayload);

    const waLink = generateWhatsAppLink(payload, items);

    // Clear cart
    dispatch(clearCart());

    // Reset form
    setName('');
    setMobile('');
    setAddress('');
    setInstructions('');

    // Reset email option
    setWantEmail(false);
    setEmail('');

    dispatch(toggleCart(false));
    dispatch(toggleSuccessModal(true));

    window.open(waLink, '_blank');
  };

  const handleAddon = (name, price, emoji) => {
    dispatch(
      addToCart({
        name,
        price,
        variant: '',
        emoji,
        category: 'Add-on'
      })
    );
  };

  return (
    <div
      className={`fixed inset-0 z-[1300] bg-white/85 backdrop-blur-sm flex items-end justify-end md:justify-end max-md:justify-center transition-opacity duration-300 ${
        isCartOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay Click */}
      <div
        className="absolute inset-0 z-0"
        onClick={() => dispatch(toggleCart(false))}
      />

      {/* Modal Drawer */}
      <div
        className={`relative z-10 w-full md:w-[440px] max-w-[100vw] h-[100dvh] max-h-[100dvh] bg-gradient-to-br from-[#120e08]/97 to-[#0a0804]/99 border-t md:border-t-0 md:border-l border-[#E79227]/18 shadow-[-8px_0_60px_rgba(0,0,0,0.6),-2px_0_20px_rgba(231,146,39,0.06)] flex flex-col pt-[env(safe-area-inset-top,0px)] transition-transform duration-350 cubic-bezier(0.22,1,0.36,1) ${
          isCartOpen
            ? 'translate-x-0'
            : 'translate-x-full max-md:translate-y-full max-md:translate-x-0'
        } dark:from-[#fdfaf0]/98 dark:to-[#ffffff]/99`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-[1.4rem_1.5rem_1rem] border-b border-[#E79227]/10 shrink-0">
          <div className="font-playfair text-[1.3rem] font-bold text-[#E79227]">
            🛒 My Cart{' '}
            <span className="text-[0.75rem] text-[#555] font-inter font-normal ml-[0.4rem]">
              {totalQty > 0
                ? `(${totalQty} item${totalQty > 1 ? 's' : ''})`
                : ''}
            </span>
          </div>

          <button
            onClick={() => dispatch(toggleCart(false))}
            className="w-[34px] h-[34px] rounded-full border border-white/10 bg-white/5 text-[#888] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#E79227]/12 hover:text-[#E79227] dark:border-black/10 dark:bg-black/5"
          >
            &#10005;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto cart-scroll flex flex-col">

          {/* Cart Items */}
          <div className="p-[0.8rem_1.2rem] flex-1">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-[3rem] px-[2rem] gap-[0.8rem] text-[#3a3a3a] font-inter text-center dark:text-[#bbb]">
                <div className="text-[3.5rem] opacity-40">
                  🍽️
                </div>

                <p className="text-[0.85rem] leading-[1.6]">
                  Your cart is empty.
                  <br />
                  Add something delicious from the menu!
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center gap-[0.85rem] p-[0.85rem_0.6rem] border-b border-white/5 animate-[fadeUp_0.25s_ease_both] last:border-none"
                >
                  <div className="text-[1.5rem] w-[40px] h-[40px] min-w-[40px] rounded-full bg-white/70 border border-[#E79227]/15 flex items-center justify-center">
                    {item.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-playfair text-[0.88rem] text-[#4b4846] font-bold whitespace-nowrap overflow-hidden text-ellipsis dark:text-[#1a1a1a]">
                      {item.name}
                    </div>

                    {item.variant && (
                      <div className="font-inter text-[0.68rem] text-[#E79227] mt-[0.12rem]">
                        {item.variant}
                      </div>
                    )}

                    <div className="font-inter text-[0.78rem] text-[#666161] mt-[0.14rem]">
                      ₹{item.price} each
                    </div>
                  </div>

                  <div className="flex items-center gap-[0.4rem] shrink-0">
                    <button
                      onClick={() =>
                        dispatch(
                          changeQuantity({
                            key: item.key,
                            delta: -1
                          })
                        )
                      }
                      className="w-[28px] h-[28px] rounded-full border border-[#e53935]/35 bg-[#e53935]/5 text-[#e57373] text-[1rem] font-bold flex items-center justify-center transition-colors active:scale-90 hover:bg-[#e53935]/15"
                    >
                      −
                    </button>

                    <span className="font-inter text-[0.88rem] font-bold text-[#818080] min-w-[18px] text-center dark:text-[#545353]">
                      {item.qty}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          changeQuantity({
                            key: item.key,
                            delta: 1
                          })
                        )
                      }
                      className="w-[28px] h-[28px] rounded-full border border-[#E79227]/30 bg-[#E79227]/5 text-[#E79227] text-[1rem] font-bold flex items-center justify-center transition-colors active:scale-90 hover:bg-[#E79227]/15"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      dispatch(
                        changeQuantity({
                          key: item.key,
                          delta: -item.qty
                        })
                      )
                    }
                    className="w-[26px] h-[26px] rounded-full border border-[#e53935]/25 bg-transparent text-[#666] text-[0.75rem] flex items-center justify-center ml-[0.2rem] transition-colors hover:bg-[#e53935]/15 hover:text-[#e57373] shrink-0"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Add-ons */}
          <div className="p-[1rem_1.4rem_0.5rem] border-t border-[#E79227]/10 bg-white/50 shrink-0 dark:bg-white/50">
            <div className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-[#E79227] mb-[0.4rem]">
              🍴 FREQUENTLY BOUGHT TOGETHER
            </div>

            <div className="flex gap-[0.6rem] overflow-x-auto pb-[0.5rem] no-scrollbar">
              {[
                {
                  name: 'Extra Sambhar',
                  price: 5,
                  emoji: '🍲'
                },
                {
                  name: 'Extra Pav',
                  price: 5,
                  emoji: '🍞'
                },
                {
                  name: 'Extra Chutney',
                  price: 2,
                  emoji: '🥣'
                },
                {
                  name: 'Extra Onion',
                  price: 2,
                  emoji: '🧅'
                },
                {
                  name: 'Extra Salad',
                  price: 5,
                  emoji: '🥗'
                },
                {
                  name: 'Extra Green Chilli',
                  price: 2,
                  emoji: '🌶️'
                }
              ].map((addon) => (
                <div
                  key={addon.name}
                  className="min-w-[130px] bg-white/5 border border-white/5 rounded-[10px] p-[0.6rem] flex flex-col gap-[0.4rem] dark:bg-black/5 dark:border-[#E79227]/20"
                >
                  <div className="text-[0.75rem] text-[#7b6e65] font-inter font-semibold whitespace-nowrap overflow-hidden text-ellipsis dark:text-[#333]">
                    {addon.name}
                  </div>

                  <div className="text-[0.7rem] text-[#E79227] font-inter font-bold">
                    ₹{addon.price}
                  </div>

                  <button
                    onClick={() =>
                      handleAddon(
                        addon.name,
                        addon.price,
                        addon.emoji
                      )
                    }
                    className="bg-[#E79227]/10 border border-[#E79227]/30 text-[#E79227] rounded-md p-[0.3rem] text-[0.65rem] font-bold transition-colors hover:bg-[#E79227]/20"
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Footer */}
          <div className="shrink-0 p-[1rem_1.4rem_1.3rem] bg-white/70 pb-[calc(85px+env(safe-area-inset-bottom,0px))] md:pb-[1.3rem] dark:bg-white/50">

            {/* ORDER TYPE */}
            <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-[#E79227] mb-[0.4rem] block">
              🚚 ORDER TYPE
            </label>

            <div className="flex gap-[0.5rem] mb-[0.8rem]">
              <button
                onClick={() =>
                  dispatch(setOrderType('Delivery'))
                }
                className={`flex-1 p-[0.6rem] rounded-lg border font-inter text-[0.8rem] font-semibold transition-colors ${
                  orderType === 'Delivery'
                    ? 'bg-[#E79227]/10 border-[#E79227] text-[#E79227]'
                    : 'bg-white/5 border-[#E79227]/30 text-[#4A4A4A] dark:bg-black/5 dark:text-[#555]'
                }`}
              >
                🛵 Delivery
              </button>

              <button
                onClick={() =>
                  dispatch(setOrderType('Pickup'))
                }
                className={`flex-1 p-[0.6rem] rounded-lg border font-inter text-[0.8rem] font-semibold transition-colors ${
                  orderType === 'Pickup'
                    ? 'bg-[#E79227]/10 border-[#E79227] text-[#E79227]'
                    : 'bg-white/5 border-[#E79227]/30 text-[#4A4A4A] dark:bg-black/5 dark:text-[#555]'
                }`}
              >
                🛍️ Store Pickup
              </button>
            </div>

            {/* NAME */}
            <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-[#E79227] mb-[0.4rem] mt-[0.8rem] block">
              👤 NAME *
            </label>

            <input
              ref={nameRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full bg-white/5 border border-[#E79227]/20 rounded-[10px] text-[#393939] font-inter text-[0.82rem] p-[0.65rem_0.9rem] outline-none transition-all placeholder:text-[#9f9e9e] focus:border-[#E79227]/55 focus:shadow-[0_0_0_3px_rgba(231,146,39,0.06)] dark:bg-black/5 dark:border-[#E79227]/30 dark:text-[#1a1a1a] dark:placeholder:text-[#bbb]"
              placeholder="Enter your name…"
            />

            {/* MOBILE */}
            <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-[#E79227] mb-[0.4rem] mt-[0.8rem] block">
              📱 MOBILE NUMBER *
            </label>

            <input
              ref={mobileRef}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="tel"
              className="w-full bg-white/5 border border-[#E79227]/20 rounded-[10px] text-[#393939] font-inter text-[0.82rem] p-[0.65rem_0.9rem] outline-none transition-all placeholder:text-[#9f9e9e] focus:border-[#E79227]/55 focus:shadow-[0_0_0_3px_rgba(231,146,39,0.06)] dark:bg-black/5 dark:border-[#E79227]/30 dark:text-[#1a1a1a] dark:placeholder:text-[#bbb]"
              placeholder="10-digit number"
            />

            {/* ADDRESS */}
            {orderType === 'Delivery' && (
              <div className="animate-[fadeUp_0.2s_ease_both]">
                <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-[#E79227] mb-[0.4rem] mt-[0.8rem] block">
                  📍 COMPLETE DELIVERY ADDRESS *
                </label>

                <textarea
                  ref={addressRef}
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                  rows="3"
                  className="w-full min-h-[66px] resize-none bg-white/5 border border-[#E79227]/20 rounded-[10px] text-[#393939] font-inter text-[0.82rem] p-[0.65rem_0.9rem] outline-none transition-all placeholder:text-[#9f9e9e] focus:border-[#E79227]/55 focus:shadow-[0_0_0_3px_rgba(231,146,39,0.06)] dark:bg-black/5 dark:border-[#E79227]/30 dark:text-[#1a1a1a] dark:placeholder:text-[#bbb]"
                  placeholder="House no., street, landmark, area, city…"
                />
              </div>
            )}

            {/* COOKING INSTRUCTIONS */}
            <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-[#E79227] mb-[0.4rem] mt-[0.8rem] block">
              👨‍🍳 COOKING INSTRUCTIONS
            </label>

            <textarea
              value={instructions}
              onChange={(e) =>
                setInstructions(e.target.value)
              }
              rows="2"
              className="w-full resize-none bg-white/5 border border-[#E79227]/20 rounded-[10px] text-[#393939] font-inter text-[0.82rem] p-[0.65rem_0.9rem] outline-none transition-all placeholder:text-[#9f9e9e] focus:border-[#E79227]/55 focus:shadow-[0_0_0_3px_rgba(231,146,39,0.06)] dark:bg-black/5 dark:border-[#E79227]/30 dark:text-[#1a1a1a] dark:placeholder:text-[#bbb]"
              placeholder="Make it spicy, extra onions..."
            />

            {/* EMAIL OPTION */}
            <div className="mt-[0.8rem] rounded-[10px] bg-[#f2fbf5] border border-[#dcefe2] p-[0.65rem_0.7rem] dark:bg-[#102218] dark:border-[#24452f]">

              <div className="flex items-start justify-between gap-[0.65rem]">

                <div className="flex items-start gap-[0.55rem] min-w-0">
                  <div className="w-[28px] h-[28px] min-w-[28px] rounded-full bg-white border border-[#25b96f]/20 flex items-center justify-center text-[#12a85b] mt-[1px] dark:bg-[#183322]">
                    <span className="text-[0.95rem] leading-none">✉</span>
                  </div>

                  <div className="min-w-0">
                    <div className="font-inter text-[0.76rem] font-semibold text-[#E79227] leading-[1.25]">
                      Want your order details on email?
                    </div>
                    <div className="font-inter text-[0.62rem] text-[#6f776f] mt-[0.18rem] leading-[1.35] dark:text-[#aab5ad]">
                      Get a copy of your order details on your email.
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setWantEmail(!wantEmail);

                    if (wantEmail) {
                      setEmail('');
                    }
                  }}
                  className="flex items-center gap-[0.35rem] shrink-0 mt-[1px] cursor-pointer"
                  aria-label="Email order confirmation"
                  aria-pressed={wantEmail}
                >
                  <span
                    className={`w-[18px] h-[18px] rounded-[4px] border flex items-center justify-center transition-all duration-200 ${
                      wantEmail
                        ? 'bg-[#12b866] border-[#12b866] scale-100'
                        : 'bg-white border-[#cfd8d1] dark:bg-[#17221b] dark:border-[#4d5c52]'
                    }`}
                  >
                    {wantEmail && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12.5l4 4L19 7" />
                      </svg>
                    )}
                  </span>

                  <span className="font-inter text-[0.64rem] font-semibold text-[#333] whitespace-nowrap dark:text-[#ddd]">
                    Yes, email me
                  </span>
                </button>

              </div>

              {/* EMAIL INPUT */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  wantEmail
                    ? 'grid-rows-[1fr] opacity-100 mt-[0.6rem]'
                    : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                }`}
              >
                <div className="overflow-hidden">

                  <label className="font-inter text-[0.62rem] font-bold tracking-[0.08em] text-[#159653] mb-[0.35rem] block">
                    ✉ EMAIL ADDRESS
                  </label>

                  <input
                    ref={emailRef}
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className="w-full bg-white border border-[#bfe2cc] rounded-[8px] text-[#393939] font-inter text-[0.78rem] p-[0.62rem_0.75rem] outline-none transition-all placeholder:text-[#999] focus:border-[#12b866] focus:shadow-[0_0_0_3px_rgba(18,184,102,0.08)] dark:bg-[#142119] dark:border-[#376047] dark:text-[#f1f1f1] dark:placeholder:text-[#89958d]"
                    placeholder="Enter your email address..."
                  />

                </div>
              </div>

            </div>
<br />
            {/* TIP */}
            <div className="mt-[0.8rem]">
              <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-[#E79227] mb-[0.4rem] block">
                ❤️ SHOW SOME LOVE TO THE CHEF
              </label>

              <div className="flex gap-[0.5rem] mb-[0.8rem]">
                {[20, 50, 100].map((t) => (
                  <button
                    key={t}
                    onClick={() =>
                      dispatch(
                        setTip(tip === t ? 0 : t)
                      )
                    }
                    className={`flex-1 p-[0.6rem] rounded-lg border font-inter text-[0.8rem] font-semibold transition-colors ${
                      tip === t
                        ? 'bg-[#E79227]/10 border-[#E79227] text-[#E79227]'
                        : 'bg-white/5 border-[#E79227]/30 text-[#4A4A4A] dark:bg-black/5 dark:text-[#555] hover:bg-[#E79227]/10 hover:text-[#E79227] hover:border-[#E79227]'
                    }`}
                  >
                    + ₹{t}
                  </button>
                ))}
              </div>
            </div>

            {/* TOTAL */}
            <div className="flex justify-between items-baseline m-[0.9rem_0_0.3rem]">
              <div className="font-inter text-[0.78rem] text-[#555] dark:text-[#888]">
                Reference Total
              </div>

              <div className="font-playfair text-[1.4rem] font-black bg-clip-text text-transparent bg-gradient-to-br from-[#E79227] to-[#E79227]">
                ₹{grandTotal}
              </div>
            </div>

            {/* NOTE */}
            <div className="font-inter text-[0.67rem] text-[#3a3a3a] leading-[1.55] mb-[0.9rem] p-[0.5rem_0.7rem] bg-[#E79227]/5 border-l-2 border-[#E79227]/30 rounded-r-md dark:text-[#999]">
              ⚠️ Note: Final price will be confirmed by staff on WhatsApp. This is only an estimated reference.
            </div>

            {/* CHECKOUT */}
            <button
              onClick={handleCheckout}
              disabled={items.length === 0}
              className="w-full p-[0.88rem] rounded-xl border-none bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white font-inter text-[0.92rem] font-bold tracking-[0.03em] flex items-center justify-center gap-[0.5rem] shadow-[0_4px_18px_rgba(37,211,102,0.25)] transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
            >
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>

              Checkout via WhatsApp
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;