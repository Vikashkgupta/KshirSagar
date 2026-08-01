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
    <div className={`fixed inset-0 z-[2000] bg-black/45 backdrop-blur-md flex items-center justify-center p-[clamp(1rem,3vw,2rem)] transition-opacity duration-350 cubic-bezier(0.16,1,0.3,1) ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Overlay Background */}
      <div className="absolute inset-0 z-0" onClick={() => dispatch(closeDishPopup())}></div>
      
      <div className="relative w-full max-w-[480px] mx-auto z-10 max-md:w-[92vw]">
        <div className={`bg-white rounded-[32px] shadow-[0_30px_90px_rgba(0,0,0,0.25),0_0_0_1px_rgba(212,175,55,0.15)] w-full max-h-[90vh] overflow-y-auto overflow-x-hidden no-scrollbar relative transition-transform duration-400 cubic-bezier(0.16,1,0.3,1) ${isOpen ? 'scale-100 translate-y-0' : 'scale-[0.92] translate-y-[20px]'}`}>
          
          <button onClick={() => dispatch(closeDishPopup())} className="absolute top-[1rem] right-[1rem] w-[38px] h-[38px] rounded-full border-none bg-black/55 text-white text-[1.1rem] flex items-center justify-center cursor-pointer transition-all duration-200 z-10 backdrop-blur-sm hover:bg-black/80 hover:scale-105">✕</button>
          
          {/* Image Area */}
          <div className="relative w-full h-[270px] max-md:h-[220px] bg-[#F3F3F3] overflow-hidden">
            {!imgLoaded && !imgError && (
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#f0f0f0_25%,#f8f8f8_50%,#f0f0f0_75%)] bg-[length:200%_100%] animate-shimmer z-[1]"></div>
            )}
            
            {item.imageUrl && !imgError ? (
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className={`w-full h-full object-cover block rounded-t-[32px] transition-opacity duration-400 relative z-[2] ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            ) : null}

            {(!item.imageUrl || imgError) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F3F3F3] z-[2]">
                <div className="text-[3.5rem] mb-[0.4rem]">{category.emoji}</div>
                <div className="font-inter text-[0.9rem] font-bold text-[#888] tracking-[0.05em] uppercase">Kshirsagar</div>
              </div>
            )}
          </div>
          
          {/* Curved Cut */}
          <div className="relative h-[30px] bg-white -mt-[30px] rounded-t-[32px] z-[3]"></div>
          
          <div className="px-[1.8rem] max-md:px-[1.2rem] pb-[2rem] max-md:pb-[1.6rem] bg-white relative z-[4]">
            
            <div className="mb-[1.2rem]">
              <h3 className="font-playfair text-[1.8rem] max-md:text-[1.5rem] font-black text-[#1A1A1A] leading-[1.2] mb-[0.8rem]">{item.name}</h3>
              <div className="h-[1px] bg-gradient-to-r from-gold/40 to-gold/5 mb-[1rem] border-none"></div>
              <p className="font-inter text-[0.92rem] text-[#555] leading-[1.6] mb-[1.4rem]">{item.desc}</p>
            </div>

            {/* Ingredients */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div className="mb-[1.6rem]">
                <div className="font-inter text-[0.72rem] font-extrabold tracking-[0.12em] text-[#B8860B] uppercase mb-[0.75rem]">Ingredients</div>
                <div className="flex flex-wrap gap-[0.5rem]">
                  {item.ingredients.map(ing => (
                    <div key={ing} className="inline-flex items-center gap-[0.4rem] bg-[#FAFAFA] border border-gold/25 rounded-full p-[0.4rem_0.85rem] font-inter text-[0.8rem] font-semibold text-[#333] shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
                      <span>{getIngredientIcon(ing)}</span>
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing Section */}
            <div className="bg-[#FDFBF6] border border-gold/20 rounded-[20px] p-[1.2rem] flex flex-col gap-[0.8rem]">
              {hasVariant ? (
                variants.map((v, i) => (
                  <div key={i} className="flex items-center justify-between gap-[0.8rem] pb-[0.75rem] border-b border-dashed border-gold/20 last:pb-0 last:border-none">
                    <span className="font-inter text-[0.85rem] font-bold text-[#222] uppercase tracking-[0.05em]">{v.label}</span>
                    <span className="font-inter text-[1.15rem] font-extrabold text-[#111] ml-auto pr-[0.5rem]">{v.price}</span>
                    <button onClick={() => handleAdd(v.price, v.label)} className="p-[0.6rem_1.4rem] bg-gradient-to-br from-[#D4AF37] to-[#C59B27] border-none rounded-full text-white font-inter text-[0.82rem] font-extrabold tracking-[0.08em] cursor-pointer shadow-[0_4px_14px_rgba(212,175,55,0.35)] transition-all uppercase inline-flex items-center justify-center hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(212,175,55,0.45)] active:scale-95">ADD</button>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-between gap-[0.8rem]">
                  <span className="font-inter text-[0.85rem] font-bold text-[#222] uppercase tracking-[0.05em]">Price</span>
                  <span className="font-inter text-[1.15rem] font-extrabold text-[#111] ml-auto pr-[0.5rem]">{item.price}</span>
                  <button onClick={() => handleAdd(item.price, '')} className="p-[0.6rem_1.4rem] bg-gradient-to-br from-[#D4AF37] to-[#C59B27] border-none rounded-full text-white font-inter text-[0.82rem] font-extrabold tracking-[0.08em] cursor-pointer shadow-[0_4px_14px_rgba(212,175,55,0.35)] transition-all uppercase inline-flex items-center justify-center hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(212,175,55,0.45)] active:scale-95">ADD TO CART</button>
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