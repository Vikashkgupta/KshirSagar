import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { openDishPopup } from '../../store/uiSlice';

const MenuItemCard = ({ item, category }) => {
  const dispatch = useDispatch();
  const [imgError, setImgError] = useState(false);

  const hasVariant = item.price.includes('/');
  
  // Custom Add To Cart Feedback Pop (Local UI State)
  const showPop = (msg) => {
    const pop = document.createElement('div');
    pop.className = 'fixed bottom-[5.5rem] right-[1.8rem] bg-[#140e04]/95 border border-gold/35 text-gold font-inter text-[0.8rem] font-semibold px-[1rem] py-[0.45rem] rounded-full z-[1100] pointer-events-none animate-[popIn_0.25s_ease_both] shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-md:right-[1.2rem] max-md:bottom-[5rem]';
    pop.textContent = ' ' + msg;
    document.body.appendChild(pop);
    setTimeout(() => { if (pop.parentNode) pop.remove(); }, 1800);
  };

  const handleAdd = (priceStr, variantLabel) => {
    const priceVal = parseInt(priceStr.replace(/[^\d]/g, ''), 10);
    dispatch(addToCart({
      name: item.name,
      price: priceVal,
      variant: variantLabel,
      emoji: category.emoji,
      category: category.title
    }));
    showPop(`${item.name} ${variantLabel ? `(${variantLabel})` : ''} added!`);
  };

  const handleOpenPopup = () => {
    dispatch(openDishPopup({ item, category }));
  };

  // Badge Logic
  let badgeHTML = null;
  if (item.tags && item.tags.length > 0) {
    const isChef = item.tags.includes('chefSpecial');
    badgeHTML = (
      <div className={`absolute -top-[5px] -right-[5px] text-white text-[0.55rem] font-extrabold px-[6px] py-[2px] rounded-lg border border-white/30 z-10 uppercase tracking-[0.04em] rotate-[10deg] pointer-events-none ${isChef ? 'bg-gradient-to-br from-gold to-saffron shadow-[0_0_10px_rgba(212,175,55,0.6)]' : 'bg-gradient-to-br from-[#ff416c] to-[#ff4b2b] shadow-[0_0_10px_rgba(255,65,108,0.6)]'}`}>
        {isChef ? "👨‍🍳 Chef's Special" : "🔥 Famous"}
      </div>
    );
  }

  // Variant Parsing
  let addButtonsHTML;
  if (hasVariant) {
    const parts = item.price.split('/').map(p => p.trim());
    let labelA = 'Half', labelB = 'Full';
    if (category.sub && category.sub.includes('/')) {
      const subParts = category.sub.split('/').map(s => s.trim());
      labelA = subParts[0] || 'Half';
      labelB = subParts[1] || 'Full';
    }
    
    addButtonsHTML = (
      <div className="flex flex-col gap-[0.35rem] ml-auto items-end flex-none">
        <div className="flex flex-row items-center justify-end gap-[0.4rem] flex-none">
          <span className="text-[clamp(0.55rem,1.8vw,0.6rem)] text-[#888] font-bold tracking-[0.05em] font-inter min-w-[25px] text-right uppercase">{labelA}</span>
          <span className="text-[clamp(0.8rem,2.5vw,0.95rem)] text-[#111] font-extrabold font-inter min-w-[25px] text-right">{parts[0]}</span>
          <button onClick={() => handleAdd(parts[0], labelA)} className="inline-flex items-center justify-center py-[clamp(0.25rem,1vw,0.4rem)] px-[clamp(0.7rem,2vw,1.1rem)] rounded-md border border-gold bg-white text-gold font-inter text-[clamp(0.65rem,1.8vw,0.75rem)] font-bold tracking-[0.05em] cursor-pointer whitespace-nowrap uppercase transition-all duration-300 hover:bg-gold/5 hover:shadow-[0_4px_12px_rgba(212,175,55,0.15)] hover:-translate-y-[2px] active:scale-[0.97]">ADD</button>
        </div>
        <div className="flex flex-row items-center justify-end gap-[0.4rem] flex-none">
          <span className="text-[clamp(0.55rem,1.8vw,0.6rem)] text-[#888] font-bold tracking-[0.05em] font-inter min-w-[25px] text-right uppercase">{labelB}</span>
          <span className="text-[clamp(0.8rem,2.5vw,0.95rem)] text-[#111] font-extrabold font-inter min-w-[25px] text-right">{parts[1]}</span>
          <button onClick={() => handleAdd(parts[1], labelB)} className="inline-flex items-center justify-center py-[clamp(0.25rem,1vw,0.4rem)] px-[clamp(0.7rem,2vw,1.1rem)] rounded-md border border-gold bg-white text-gold font-inter text-[clamp(0.65rem,1.8vw,0.75rem)] font-bold tracking-[0.05em] cursor-pointer whitespace-nowrap uppercase transition-all duration-300 hover:bg-gold/5 hover:shadow-[0_4px_12px_rgba(212,175,55,0.15)] hover:-translate-y-[2px] active:scale-[0.97]">ADD</button>
        </div>
      </div>
    );
  } else {
    addButtonsHTML = (
      <div className="flex flex-row items-center gap-[0.8rem] ml-auto flex-none">
        <span className="text-[clamp(0.8rem,2.5vw,0.95rem)] text-[#111] font-extrabold font-inter min-w-[25px] text-right">{item.price}</span>
        <button onClick={() => handleAdd(item.price, '')} className="inline-flex items-center justify-center py-[clamp(0.25rem,1vw,0.4rem)] px-[clamp(0.7rem,2vw,1.1rem)] rounded-md border border-gold bg-white text-gold font-inter text-[clamp(0.65rem,1.8vw,0.75rem)] font-bold tracking-[0.05em] cursor-pointer whitespace-nowrap uppercase transition-all duration-300 hover:bg-gold/5 hover:shadow-[0_4px_12px_rgba(212,175,55,0.15)] hover:-translate-y-[2px] active:scale-[0.97]">ADD</button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-[clamp(0.75rem,2vw,1.2rem)] p-[clamp(0.8rem,2.5vw,1.2rem)] bg-white border border-black/5 rounded-[18px] shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition-all duration-300 relative hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-gold/20 !important">
      
      {/* Image Container */}
      <div 
        onClick={handleOpenPopup} 
        className="w-[clamp(65px,18vw,90px)] h-[clamp(65px,18vw,90px)] min-w-[clamp(65px,18vw,90px)] flex-none rounded-[12px] bg-[#fdfdfd] flex items-center justify-center text-[2rem] overflow-hidden cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 relative hover:scale-[1.03] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] group"
      >
        {badgeHTML}
        {item.imageUrl && !imgError ? (
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            loading="lazy" 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover rounded-[12px] transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="w-full h-full flex items-center justify-center text-[1.7rem] bg-black/5">{category.emoji}</span>
        )}
      </div>

      {/* Info Container */}
      <div className="flex-1 min-w-[140px] shrink overflow-hidden">
        <div 
          onClick={handleOpenPopup}
          className="text-[clamp(0.95rem,4vw,1.15rem)] font-bold text-[#111] font-playfair whitespace-normal overflow-hidden line-clamp-2 leading-[1.25] mb-[0.1rem] cursor-pointer"
        >
          {item.name}
        </div>
        <div className="text-[clamp(0.75rem,3vw,0.85rem)] text-[#666] font-inter mt-[0.2rem] leading-[1.4] overflow-hidden line-clamp-2 text-ellipsis">
          {item.desc}
        </div>
        <span className="inline-block mt-[0.4rem] text-[clamp(0.6rem,2vw,0.7rem)] tracking-[0.05em] text-[#b8860b] font-inter bg-gold/5 border border-gold/20 rounded-full px-[0.8rem] py-[0.2rem] font-semibold">
          {category.title}
        </span>
      </div>

      {/* Actions */}
      {addButtonsHTML}
    </div>
  );
};

export default MenuItemCard;