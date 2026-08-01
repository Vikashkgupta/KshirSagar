import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, toggleContactSheet, setActiveTab } from '../../store/uiSlice';

const MobileBottomNav = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const activeTab = useSelector(state => state.ui.activeTab);
  
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // Intersection Observer for scroll-based active tab updating
  useEffect(() => {
    const handleScroll = () => {
      // Don't update if a modal is open
      if (document.body.style.overflow === 'hidden') return;
      
      const menuEl = document.getElementById('menu');
      if (menuEl && window.scrollY >= (menuEl.offsetTop - 300)) {
        dispatch(setActiveTab('menu'));
      } else {
        dispatch(setActiveTab('hero'));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const handleNavClick = (targetId) => {
    dispatch(toggleCart(false));
    dispatch(toggleContactSheet(false));
    
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      dispatch(setActiveTab(targetId));
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full h-[calc(65px+env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-gold/15 rounded-t-[20px] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-[9999] pb-[env(safe-area-inset-bottom)] flex justify-around items-center">
      
      <button onClick={() => handleNavClick('hero')} className={`flex flex-col items-center justify-center gap-1 flex-1 h-full cursor-pointer transition-colors duration-300 bg-transparent border-none ${activeTab === 'hero' ? 'text-gold' : 'text-[#888]'}`}>
        <div className="relative flex">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current transition-all duration-300 ${activeTab === 'hero' ? '-translate-y-0.5 drop-shadow-[0_4px_6px_rgba(212,175,55,0.3)]' : ''}`}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <span className="font-inter text-[0.65rem] font-semibold">Home</span>
      </button>

      <button onClick={() => handleNavClick('menu')} className={`flex flex-col items-center justify-center gap-1 flex-1 h-full cursor-pointer transition-colors duration-300 bg-transparent border-none ${activeTab === 'menu' ? 'text-gold' : 'text-[#888]'}`}>
        <div className="relative flex">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current transition-all duration-300 ${activeTab === 'menu' ? '-translate-y-0.5 drop-shadow-[0_4px_6px_rgba(212,175,55,0.3)]' : ''}`}>
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </div>
        <span className="font-inter text-[0.65rem] font-semibold">Menu</span>
      </button>

      <button onClick={() => { dispatch(toggleCart(false)); dispatch(toggleContactSheet(true)); dispatch(setActiveTab('contact')); }} className={`flex flex-col items-center justify-center gap-1 flex-1 h-full cursor-pointer transition-colors duration-300 bg-transparent border-none ${activeTab === 'contact' ? 'text-gold' : 'text-[#888]'}`}>
        <div className="relative flex">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current transition-all duration-300 ${activeTab === 'contact' ? '-translate-y-0.5 drop-shadow-[0_4px_6px_rgba(212,175,55,0.3)]' : ''}`}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <span className="font-inter text-[0.65rem] font-semibold">Contact</span>
      </button>

      <button onClick={() => { dispatch(toggleContactSheet(false)); dispatch(toggleCart(true)); dispatch(setActiveTab('cart')); }} className={`flex flex-col items-center justify-center gap-1 flex-1 h-full cursor-pointer transition-colors duration-300 bg-transparent border-none ${activeTab === 'cart' ? 'text-gold' : 'text-[#888]'}`}>
        <div className="relative flex">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 stroke-current transition-all duration-300 ${activeTab === 'cart' ? '-translate-y-0.5 drop-shadow-[0_4px_6px_rgba(212,175,55,0.3)]' : ''}`}>
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalQty > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#e53935] text-white text-[0.6rem] font-extrabold px-[5px] py-[1px] rounded-full border-[1.5px] border-white transition-transform duration-200">
              {totalQty > 99 ? '99+' : totalQty}
            </span>
          )}
        </div>
        <span className="font-inter text-[0.65rem] font-semibold">My Cart</span>
      </button>

    </nav>
  );
};

export default MobileBottomNav;