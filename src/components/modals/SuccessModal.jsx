import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSuccessModal } from '../../store/uiSlice';

const SuccessModal = () => {
  const dispatch = useDispatch();
  const { isSuccessModalOpen } = useSelector(state => state.ui);

  return (
    <div 
      className={`fixed inset-0 z-[4000] bg-black/70 backdrop-blur-md flex items-center justify-center p-[1.5rem] transition-opacity duration-300 ${isSuccessModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) dispatch(toggleSuccessModal(false));
      }}
    >
      <div className={`relative z-10 text-center bg-[#0c0a06]/82 border border-gold/22 rounded-[22px] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(212,175,55,0.08)] backdrop-blur-[20px] max-w-[440px] w-full p-[2rem] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${isSuccessModalOpen ? 'scale-100 translate-y-0' : 'scale-[0.92] translate-y-[20px]'} dark:bg-[#fdfaf0]/95 dark:border-gold/40`}>
        
        <div className="text-[3.5rem] mb-[1rem] drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]">✅</div>
        <h3 className="font-playfair text-gold mb-[0.8rem] text-[1.6rem] dark:text-[#b8860b]">Order Drafted!</h3>
        <p className="text-[#ccc] text-[0.9rem] font-inter mb-[1.5rem] leading-[1.6] dark:text-[#555]">
          Please hit <b>'Send'</b> in WhatsApp to confirm your order with us.
        </p>
        
        <button 
          onClick={() => dispatch(toggleSuccessModal(false))}
          className="w-full py-[0.95rem] px-[2.2rem] bg-gradient-to-r from-[#d88114] to-[#df901a] border border-[#25d366] !text-[#25d366] !bg-none !bg-transparent rounded-full font-inter text-[0.95rem] font-semibold cursor-pointer inline-flex items-center justify-center transition-all duration-250 hover:-translate-y-[2px]"
        >
          Okay, got it!
        </button>

      </div>
    </div>
  );
};

export default SuccessModal;