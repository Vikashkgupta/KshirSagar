// ... existing code ...
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

  const scrollToSection = (id, tabName) => {
    dispatch(setActiveTab(tabName));
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-100 rounded-t-3xl px-2 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] flex justify-around items-center">
      {/* 1. Home */}
      <button 
        onClick={() => scrollToSection('landing', 'hero')}
        className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'hero' ? 'text-amber-600' : 'text-gray-500 hover:text-amber-600'}`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
        <span className="text-[11px] font-sans font-medium tracking-wide">Home</span>
      </button>

      {/* 2. Menu */}
      <button 
        onClick={() => scrollToSection('menu', 'menu')}
        className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'menu' ? 'text-amber-600' : 'text-gray-500 hover:text-amber-600'}`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
        <span className="text-[11px] font-sans font-medium tracking-wide">Menu</span>
      </button>

      {/* 3. Contact */}
      <button 
        onClick={() => dispatch(toggleContactSheet())}
        className="flex flex-col items-center gap-1 text-gray-500 hover:text-amber-600 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="text-[11px] font-sans font-medium tracking-wide">Contact</span>
      </button>

      {/* 4. My Cart */}
      <button 
        onClick={() => dispatch(toggleCart())}
        className="flex flex-col items-center gap-1 text-gray-500 hover:text-amber-600 transition-colors relative"
      >
        <div className="relative">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans animate-pulse">
              {totalQty}
            </span>
          )}
        </div>
        <span className="text-[11px] font-sans font-medium tracking-wide">My Cart</span>
      </button>

      {/* 5. NEW: AI Mitr (5th Button) */}
      <button 
        onClick={() => window.toggleKshirSagarAI && window.toggleKshirSagarAI()}
        className="flex flex-col items-center gap-1 text-amber-600 hover:text-amber-700 transition-colors relative"
      >
        <div className="relative">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
          {/* <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span> */}
        </div>
        <span className="text-[11px] font-sans font-bold tracking-wide">Laddu AI</span>
      </button>
    </div>
  );
};

export default MobileBottomNav;