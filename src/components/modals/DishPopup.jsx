import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeDishPopup } from '../../store/uiSlice';
import { addToCart } from '../../store/cartSlice';
import { getIngredientIcon } from '../../data/menuData';

const DishPopup = () => {
  const dispatch = useDispatch();
  const { isOpen, activeDish } = useSelector(state => state.ui.dishPopup);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setImgLoaded(false);
      setImgError(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, activeDish]);

  if (!activeDish) return null;

  const { item, category } = activeDish;
  const hasVariant = item.price.includes('/');
  
  const showPop = (msg) => {
    const pop = document.createElement('div');
    pop.className = 'fixed bottom-[5.5rem] right-[1.8rem] bg-[#140e04]/95 border border-gold/35 text-gold font-inter text-[0.8rem] font-semibold px-[1rem] py-[0.45rem] rounded-full z-[1100] pointer-events-none animate-[popIn_0.25s_ease_both] shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-md:right-[1.2rem] max-md:bottom-[5rem]';
    pop.textContent = ' ' + msg;
    document.body.appendChild(pop);
    setTimeout(() => { if (pop.parentNode) pop.remove(); }, 1800);
  };

  const handleAdd = (price, variantLabel) => {
    dispatch(addToCart({
      name: item.name,
      price: parseInt(price.replace(/[^\d]/g, ''), 10),
      variant: variantLabel,
      emoji: category.emoji,
      category: category.title
    }));
    showPop(`${item.name} ${variantLabel ? `(${variantLabel})` : ''} added!`);
  };

  let variants = [];
  if (hasVariant) {
    const parts = item.price.split('/').map(p => p.trim());
    let labelA = 'Small', labelB = 'Large';
    if (category.sub && category.sub.includes('/')) {
      const subParts = category.sub.split('/').map(s => s.trim());
      labelA = subParts[0] || 'Small';
      labelB = subParts[1] || 'Large';
    }
    variants = [
      { label: labelA, price: parts[0] },
      { label: labelB, price: parts[1] }
    ];
  }

  return (
    <div className={`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-md flex items-center justify-center p-[clamp(1rem,3vw,2rem)] transition-opacity duration-350 cubic-bezier(0.16,1,0.3,1) ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Overlay Background */}
      <div className="absolute inset-0 z-0" onClick={() => dispatch(closeDishPopup())}></div>
      
<div className="relative w-full max-w-[480px] mx-auto z-10 max-md:w-[92vw] h-[78vh] md:h-[92vh] max-md:mb-[4.5rem] max-h-[850px] flex flex-col group">
          
        {/* Main Modal Container */}
        <div className={`bg-white rounded-[32px] shadow-[0_30px_90px_rgba(0,0,0,0.4),0_0_0_1px_rgba(212,175,55,0.15)] w-full h-full flex flex-col overflow-hidden relative transition-transform duration-400 cubic-bezier(0.16,1,0.3,1) ${isOpen ? 'scale-100 translate-y-0' : 'scale-[0.92] translate-y-[20px]'}`}>
          
          {/* Close Button */}
          <button onClick={() => dispatch(closeDishPopup())} className="absolute top-[1.2rem] right-[1.2rem] w-[42px] h-[42px] rounded-full border-none bg-black/40 text-white text-[1.2rem] flex items-center justify-center cursor-pointer transition-all duration-300 z-[20] backdrop-blur-md hover:bg-black/70 hover:scale-110 shadow-lg">✕</button>
          
          {/* HERO IMAGE SECTION (55% Height) */}
          <div className="relative w-full h-[52%] md:h-[55%] bg-[#F3F3F3] shrink-0 overflow-hidden">
            {!imgLoaded && !imgError && (
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#f0f0f0_25%,#f8f8f8_50%,#f0f0f0_75%)] bg-[length:200%_100%] animate-shimmer z-[1]"></div>
            )}
            
            {item.imageUrl && !imgError ? (
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className={`w-full h-full object-cover object-center block transition-all duration-700 ease-out relative z-[2] group-hover:scale-[1.04] ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            ) : null}

            {(!item.imageUrl || imgError) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F3F3F3] z-[2]">
                <div className="text-[4.5rem] mb-[0.4rem]">{category.emoji}</div>
                <div className="font-inter text-[1rem] font-bold text-[#888] tracking-[0.08em] uppercase">Kshirsagar</div>
              </div>
            )}

            {/* Bottom Gradient Over Image (for premium feel & text readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent z-[3] pointer-events-none"></div>

            {/* Smooth Curved Divider (SVG Overlay matching MenuItemCard) */}
            <div className="absolute bottom-[-1px] left-0 w-full z-[4] leading-none pointer-events-none">
              <svg viewBox="0 0 1440 280" className="w-full h-[40px] md:h-[60px]" preserveAspectRatio="none">
                <path fill="#ffffff" d="M0,64 C480,64 720,280 1440,280 L1440,320 L0,320 Z"></path>
              </svg>
            </div>
          </div>
          
          {/* CONTENT SECTION (Scrollable Bottom Half) */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar bg-white relative z-[5] px-[1.8rem] max-md:px-[1.4rem] pt-[0.5rem] pb-[2.5rem] flex flex-col">
            
            {/* Header: Title & Description */}
            <div className="mb-[1.5rem]">
              <h3 className="font-playfair text-[2.1rem] max-md:text-[1.85rem] font-black text-[#1A1A1A] leading-[1.15] mb-[0.8rem] tracking-tight">{item.name}</h3>
              <div className="w-[50px] h-[3px] bg-gradient-to-r from-gold to-gold/40 rounded-full mb-[1.2rem]"></div>
              <p className="font-inter text-[0.95rem] text-[#666] leading-[1.7]">{item.desc}</p>
            </div>

            {/* Ingredients Section */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div className="mb-[1.8rem]">
                <div className="font-inter text-[0.72rem] font-extrabold tracking-[0.15em] text-[#B8860B] uppercase mb-[0.85rem]">Ingredients</div>
                <div className="flex flex-wrap gap-[0.5rem]">
                  {item.ingredients.map(ing => (
                    <div key={ing} className="inline-flex items-center gap-[0.4rem] bg-[#FDFBF6] border border-gold/20 rounded-full p-[0.45rem_0.95rem] font-inter text-[0.8rem] font-semibold text-[#444] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-gold/40 transition-colors">
                      <span>{getIngredientIcon(ing)}</span>
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Spacer to push pricing to bottom if description is short */}
            <div className="mt-auto"></div>

            {/* Pricing & Add To Cart Box */}
            <div className="bg-[#FDFBF6] border border-gold/25 rounded-[24px] p-[1.4rem] flex flex-col gap-[1rem] shadow-[0_8px_24px_rgba(212,175,55,0.06)] mt-[1rem]">
              {hasVariant ? (
                variants.map((v, i) => (
                  <div key={i} className="flex items-center justify-between gap-[0.8rem] pb-[0.85rem] border-b border-dashed border-gold/30 last:pb-0 last:border-none">
                    <span className="font-inter text-[0.9rem] font-bold text-[#222] uppercase tracking-[0.06em]">{v.label}</span>
                    <span className="font-inter text-[1.2rem] font-black text-[#111] ml-auto pr-[0.8rem]">{v.price}</span>
                    <button onClick={() => handleAdd(v.price, v.label)} className="h-[50px] min-w-[120px] px-[1.7rem]  hover:from-[#A67C1F] hover:via-[#E2C15A] hover:to-[#A67C1F] border border-[#E7C86A] rounded-md text-white font-inter text-[0.82rem] font-extrabold tracking-[0.08em] cursor-pointer shadow-[0_8px_22px_rgba(212,175,55,0.32)] transition-all duration-300 flex items-center justify-center gap-[0.45rem] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(212,175,55,0.42)] active:scale-[0.96]">
                      ADD
                    </button>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-between gap-[0.8rem]">
                  <div className="flex flex-col">
                    <span className="font-inter text-[0.75rem] font-bold text-[#888] uppercase tracking-[0.08em] mb-[0.2rem]">Total Price</span>
                    <span className="font-inter text-[1.4rem] font-black text-[#111] leading-none">{item.price}</span>
                  </div>
                  <button onClick={() => handleAdd(item.price, '')} className="h-[50px] px-[1.9rem] hover:from-[#A67C1F] hover:via-[#E2C15A] hover:to-[#A67C1F] border border-[#E7C86A] rounded-md text-white font-inter text-[0.85rem] font-extrabold tracking-[0.08em] cursor-pointer shadow-[0_8px_22px_rgba(212,175,55,0.32)] transition-all duration-300 uppercase flex items-center justify-center gap-[10px] hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(212,175,55,0.45)] active:scale-[0.96]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    ADD TO CART
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DishPopup;