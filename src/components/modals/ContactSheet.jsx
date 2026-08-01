import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleContactSheet } from '../../store/uiSlice';

const ContactSheet = () => {
  const dispatch = useDispatch();
  const { isContactSheetOpen } = useSelector(state => state.ui);

  useEffect(() => {
    if (isContactSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isContactSheetOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[10000] bg-black/50 backdrop-blur-[5px] transition-opacity duration-300 ${isContactSheetOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) dispatch(toggleContactSheet(false));
      }}
    >
      <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] p-[2rem_1.5rem_calc(2rem+env(safe-area-inset-bottom))] border-t border-gold/20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${isContactSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        
        <div className="flex justify-between items-center mb-[1.5rem]">
          <h3 className="font-playfair text-[1.5rem] text-[#111] m-0">Contact Us</h3>
          <button 
            onClick={() => dispatch(toggleContactSheet(false))}
            className="w-[32px] h-[32px] rounded-full border border-[#eee] bg-[#f9f9f9] text-[#555] flex items-center justify-center text-[1.2rem] cursor-pointer"
          >
            ✕
          </button>
        </div>

        <a href="tel:+919931890824" className="flex items-center justify-center w-full p-[1rem] mb-[0.8rem] rounded-[12px] font-inter font-bold text-[0.95rem] no-underline transition-transform active:scale-[0.98] bg-[#fdfaf3] border border-gold/40 text-gold">
          📞 Call Now
        </a>
        <a href="https://wa.me/919931890824" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full p-[1rem] mb-[0.8rem] rounded-[12px] font-inter font-bold text-[0.95rem] no-underline transition-transform active:scale-[0.98] bg-[#eefaf2] border border-[#25d366]/40 text-[#128c7e]">
          💬 WhatsApp
        </a>
        <a href="https://maps.app.goo.gl/yFmYmRWbCnh69ivz7" onClick={() => dispatch(toggleContactSheet(false))} className="flex items-center justify-center w-full p-[1rem] mb-[0.8rem] rounded-[12px] font-inter font-bold text-[0.95rem] no-underline transition-transform active:scale-[0.98] bg-[#f4f6fb] border border-[#4285f4]/40 text-[#4285f4]">
          📍 Google Maps
        </a>
        
        <div className="text-center font-inter text-[0.8rem] text-[#777] mt-[1rem]">
          🕐 Mon-Sun: 6:00 AM - 10:00 PM
        </div>

      </div>
    </div>
  );
};

export default ContactSheet;