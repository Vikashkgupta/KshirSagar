import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/uiSlice';
import { restoreLastOrder } from '../../store/cartSlice';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReorder, setShowReorder] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check for previous order in localStorage
    const lastOrder = JSON.parse(localStorage.getItem('kshirsagar_last_order'));
    if (lastOrder && lastOrder.length > 0) {
      setShowReorder(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReorder = () => {
    dispatch(restoreLastOrder());
    dispatch(toggleCart(true));
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[200] px-4 md:px-10 py-3 md:py-[0.9rem] flex justify-between items-center transition-all duration-350 ${isScrolled ? 'bg-bgDark/93 backdrop-blur-xl border-b border-gold/10' : ''
      }`}>
      <a href="/" className="flex items-center no-underline text-gold font-playfair font-black text-xl md:text-2xl tracking-wide">
        <img src="/logo.png" alt="Kshirsagar Logo" className="h-[45px] md:h-[55px] object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
        <span className="hidden">Kshirsagar</span>
      </a>

      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        <li><a href="#menu" className="text-[#777] no-underline font-inter text-[0.82rem] tracking-wider transition-colors duration-300 hover:text-gold">Menu</a></li>
        <li><a href="#legacy" className="text-[#777] no-underline font-inter text-[0.82rem] tracking-wider transition-colors duration-300 hover:text-gold">Legacy</a></li>
        <li><a href="#location" className="text-[#777] no-underline font-inter text-[0.82rem] tracking-wider transition-colors duration-300 hover:text-gold">Location</a></li>
        <li><a href="#footer" className="text-[#777] no-underline font-inter text-[0.82rem] tracking-wider transition-colors duration-300 hover:text-gold">Contact</a></li>
      </ul>

      <div className="flex items-center gap-2 md:gap-3">
        <a href="/KshirSagar.apk" download className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-[1.2rem] md:py-[0.52rem] bg-gold/5 border border-saffron rounded-full text-saffron font-bold text-[0.68rem] md:text-[0.8rem] font-inter cursor-pointer no-underline transition-all duration-200 hover:scale-105 hover:bg-gold/15">
          <span>📱</span> Get App
        </a>

        {showReorder && (
          <button onClick={handleReorder} className="hidden md:inline-flex items-center gap-1.5 px-[1.2rem] py-[0.52rem] bg-gold/5 border border-peacock rounded-full text-peacock font-bold text-[0.8rem] font-inter cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-gold/15">
            <span>🔄</span> Reorder
          </button>
        )}

        <button
          onClick={() => dispatch(toggleCart())}
          className="hidden md:flex items-center gap-2 px-[18px] py-[10px] border border-[#E79227] rounded-full text-[#E79227] font-semibold transition-all duration-300 hover:bg-[#E79227] hover:text-white hover:shadow-[0_0_20px_rgba(231,146,39,0.35)] bg-transparent cursor-pointer"
        >
          🛒 My Cart
          {totalQty > 0 && (
            <span className="min-w-[20px] h-[20px] rounded-full bg-[#E79227] text-white text-[12px] font-bold flex items-center justify-center">
              {totalQty > 99 ? '99+' : totalQty}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;