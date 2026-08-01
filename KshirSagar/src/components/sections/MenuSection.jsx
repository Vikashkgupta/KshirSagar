import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCustomRequest } from '../../store/uiSlice';
import MenuCategoryNav from '../menu/MenuCategoryNav';
import MenuGrid from '../menu/MenuGrid';

const MenuSection = () => {
  const dispatch = useDispatch();
  
  // State to manage which category is currently selected
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="menu" className="pt-[5rem] px-0 pb-[3rem] bg-white !important">
      
      {/* Header */}
      <div className="px-[1rem] md:px-[2.5rem] pb-[2rem] md:pb-[3rem]">
        <div className="text-saffron text-[0.7rem] tracking-[0.25em] font-inter mb-[0.65rem] uppercase">— THE TASTE MATRIX —</div>
        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] text-[#111] !important">
          A Universe of <span className="bg-clip-text text-transparent bg-gradient-to-br from-gold to-saffron">Flavors</span>
        </h2>
      </div>

      {/* Categories Horizontal Scroll */}
      <MenuCategoryNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      {/* Product Grid based on selection */}
      <MenuGrid activeCategory={activeCategory} />

      {/* Custom Request CTA */}
      <div className="text-center px-[1rem] md:px-[2.5rem] py-[1rem] pb-[2rem]">
        <button 
          onClick={() => dispatch(toggleCustomRequest(true))}
          className="py-[0.88rem] px-[2.2rem] bg-gold/10 border border-gold/50 rounded-full text-gold font-inter text-[0.9rem] font-bold tracking-[0.05em] backdrop-blur-md cursor-pointer transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:bg-gold/20 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:-translate-y-[2px]"
        >
          ✨ Request a Custom Dish
        </button>
      </div>
    </section>
  );
};

export default MenuSection;