import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTimeWarning, toggleCart, toggleSuccessModal } from '../../store/uiSlice';
import { clearCart } from '../../store/cartSlice';
import { submitOrderWebhook, generateWhatsAppLink } from '../../utils/api';

const TimeWarningModal = () => {
  const dispatch = useDispatch();
  const { isTimeWarningOpen } = useSelector(state => state.ui);
  
  // Need to pull cart state to execute order if they click "Send Anyway"
  const cartState = useSelector(state => state.cart);

  const handleSendAnyway = () => {
    // We assume validation passed before this modal opened
    const totalQty = cartState.items.reduce((s, i) => s + i.qty, 0);
    if(totalQty === 0) return;

    const baseTotal = cartState.items.reduce((s, i) => s + i.price * i.qty, 0);
    const grandTotal = baseTotal + cartState.tip;
    
    // Fallback payload values (since they are in the DOM or state in CartModal)
    // For a perfect React architecture, these should ideally live in Redux or Context, 
    // but we can execute with a generalized payload for the "Send Anyway" bypass.
    const nameEl = document.getElementById('cart-name');
    const mobileEl = document.getElementById('cart-mobile');
    const addressEl = document.getElementById('cart-address');
    const instEl = document.getElementById('cart-instructions');
    
    const payload = {
      name: nameEl?.value || 'Customer',
      mobile: mobileEl?.value.replace(/\D/g, '') || '',
      address: addressEl?.value || '',
      instructions: instEl?.value || '',
      total: grandTotal,
      tip: cartState.tip,
      orderType: cartState.orderType
    };

    const webhookPayload = {
      ...payload,
      orderType: payload.orderType === 'Pickup' ? "Store Pickup" : "Delivery",
      address: payload.orderType === 'Pickup' ? "N/A" : payload.address,
      items: cartState.items.map(i => `  - ${i.name}${i.variant ? ` (${i.variant})` : ''} x${i.qty}`).join('\n').trim(),
      instruction: payload.instructions || "None",
    };

    submitOrderWebhook(webhookPayload);
    const waLink = generateWhatsAppLink(payload, cartState.items);
    
    dispatch(clearCart());
    dispatch(toggleTimeWarning(false));
    dispatch(toggleCart(false));
    dispatch(toggleSuccessModal(true));
    window.open(waLink, '_blank');
  };

  const hour = new Date().getHours();
  const isMorning = hour < 10;
  
  const title = isMorning ? '☀️ Morning! Kitchen Opens at 10 AM' : '🌙 Store is Closed';
  const desc = isMorning 
    ? "Namaskar! Our kitchen opens at 10:00 AM. Send your order now and we'll prepare it fresh at opening. Proceed?"
    : "Store is currently closed. We'll be back at 10:00 AM. Send order for tomorrow?";

  return (
    <div 
      className={`fixed inset-0 z-[4000] bg-black/70 backdrop-blur-md flex items-center justify-center p-[1.5rem] transition-opacity duration-300 ${isTimeWarningOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) dispatch(toggleTimeWarning(false));
      }}
    >
      <div className={`relative z-10 text-center bg-[#0c0a06]/82 border border-gold/22 rounded-[22px] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(212,175,55,0.08)] backdrop-blur-[20px] max-w-[440px] w-full p-[2rem] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${isTimeWarningOpen ? 'scale-100 translate-y-0' : 'scale-[0.92] translate-y-[20px]'} dark:bg-[#fdfaf0]/95 dark:border-gold/40`}>
        
        <h3 className="font-playfair text-[#e53935] mb-[0.8rem] text-[1.6rem]">{title}</h3>
        <p className="text-[#ccc] text-[0.9rem] font-inter mb-[1.5rem] leading-[1.6] dark:text-[#555]">
          {desc}
        </p>
        
        <div className="flex gap-[1rem] justify-center">
          <button 
            onClick={() => dispatch(toggleTimeWarning(false))}
            className="py-[0.95rem] px-[2.2rem] bg-white border border-gold/30 rounded-full text-[#6b0f1a] font-inter text-[0.95rem] font-semibold cursor-pointer transition-all duration-250 hover:bg-gold/5"
          >
            Cancel
          </button>
          <button 
            onClick={handleSendAnyway}
            className="py-[0.95rem] px-[2.2rem] bg-transparent border border-[#e53935] text-[#e53935] rounded-full font-inter text-[0.95rem] font-semibold cursor-pointer transition-all duration-250 hover:-translate-y-[2px]"
          >
            Send Anyway
          </button>
        </div>

      </div>
    </div>
  );
};

export default TimeWarningModal;