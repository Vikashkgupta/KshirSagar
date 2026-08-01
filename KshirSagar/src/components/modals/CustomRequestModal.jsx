import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCustomRequest } from '../../store/uiSlice';

const CustomRequestModal = () => {
  const dispatch = useDispatch();
  const { isCustomRequestOpen } = useSelector(state => state.ui);
  
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [desc, setDesc] = useState('');

  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const descRef = useRef(null);

  const shakeField = (ref) => {
    if (ref.current) {
      ref.current.classList.remove('animate-[shake_0.4s_ease]');
      void ref.current.offsetWidth;
      ref.current.classList.add('animate-[shake_0.4s_ease]', '!border-[#e57373]', '!shadow-[0_0_0_3px_rgba(229,57,53,0.1)]');
      ref.current.focus();
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.remove('animate-[shake_0.4s_ease]', '!border-[#e57373]', '!shadow-[0_0_0_3px_rgba(229,57,53,0.1)]');
        }
      }, 500);
    }
  };

  const handleSubmit = () => {
    if (!name.trim()) { shakeField(nameRef); return; }
    if (mobile.replace(/\D/g, '').length !== 10) { shakeField(mobileRef); return; }
    if (!desc.trim()) { shakeField(descRef); return; }

    const msg = ` *CUSTOM REQUEST* \n\n👤 Name: ${name.trim()}\n📱 Mobile: ${mobile.trim()}\n📝 Details: ${desc.trim()}`;
    
    dispatch(toggleCustomRequest(false));
    window.open('https://wa.me/919931890824?text=' + encodeURIComponent(msg), '_blank');
    
    setName(''); setMobile(''); setDesc('');
  };

  return (
    <div 
      className={`fixed inset-0 z-[4000] bg-black/70 backdrop-blur-md flex items-center justify-center p-[1.5rem] transition-opacity duration-300 ${isCustomRequestOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) dispatch(toggleCustomRequest(false));
      }}
    >
      <div className={`relative z-10 bg-[#0c0a06]/82 border border-gold/22 rounded-[22px] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(212,175,55,0.08)] backdrop-blur-[20px] max-w-[440px] w-full p-[2rem] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${isCustomRequestOpen ? 'scale-100 translate-y-0' : 'scale-[0.92] translate-y-[20px]'} dark:bg-[#fdfaf0]/95 dark:border-gold/40`}>
        
        <h3 className="font-playfair text-gold mb-[0.8rem] text-[1.4rem] dark:text-[#b8860b]">✨ Custom Dish Request</h3>
        <p className="text-[#ccc] text-[0.9rem] font-inter mb-[1.5rem] leading-[1.6] dark:text-[#555]">
          Craving something not on the menu? Let our master chefs craft it for you.
        </p>

        <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-gold mb-[0.4rem] block">👤 NAME</label>
        <input ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full bg-white/5 border border-gold/20 rounded-[10px] text-[#ccc] font-inter text-[0.82rem] p-[0.65rem_0.9rem] outline-none transition-all placeholder:text-[#3a3a3a] focus:border-gold/55 mb-[0.8rem] dark:bg-black/5 dark:text-[#1a1a1a]" placeholder="Your name" />

        <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-gold mb-[0.4rem] block">📱 MOBILE</label>
        <input ref={mobileRef} value={mobile} onChange={(e) => setMobile(e.target.value)} type="tel" className="w-full bg-white/5 border border-gold/20 rounded-[10px] text-[#ccc] font-inter text-[0.82rem] p-[0.65rem_0.9rem] outline-none transition-all placeholder:text-[#3a3a3a] focus:border-gold/55 mb-[0.8rem] dark:bg-black/5 dark:text-[#1a1a1a]" placeholder="10-digit number" />

        <label className="font-inter text-[0.68rem] font-bold tracking-[0.08em] text-gold mb-[0.4rem] block">📝 DISH DETAILS</label>
        <textarea ref={descRef} value={desc} onChange={(e) => setDesc(e.target.value)} rows="3" className="w-full resize-none bg-white/5 border border-gold/20 rounded-[10px] text-[#ccc] font-inter text-[0.82rem] p-[0.65rem_0.9rem] outline-none transition-all placeholder:text-[#3a3a3a] focus:border-gold/55 mb-[0.8rem] dark:bg-black/5 dark:text-[#1a1a1a]" placeholder="Describe the dish..." />

        <div className="flex gap-[1rem] mt-[1rem]">
          <button 
            onClick={() => dispatch(toggleCustomRequest(false))}
            className="flex-1 py-[0.85rem] px-[1rem] bg-white border border-gold/30 rounded-full text-[#6b0f1a] font-inter text-[0.95rem] font-semibold cursor-pointer transition-all duration-250 hover:bg-gold/5"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="flex-1 py-[0.85rem] px-[1rem] bg-gradient-to-r from-[#d88114] to-[#df901a] border-none rounded-full text-white font-inter text-[0.95rem] font-semibold cursor-pointer transition-all duration-250 shadow-[0_6px_18px_rgba(216,129,20,0.25)] hover:-translate-y-[2px]"
          >
            Submit Request
          </button>
        </div>

      </div>
    </div>
  );
};

export default CustomRequestModal;