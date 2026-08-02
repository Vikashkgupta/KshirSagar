import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCustomRequest } from '../../store/uiSlice';
import MenuCategoryNav from '../menu/MenuCategoryNav';
import MenuGrid from '../menu/MenuGrid';

const MenuSection = () => {
  const dispatch = useDispatch();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuItems, setMenuItems] = useState([]);
  const [dynamicCategories, setDynamicCategories] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('/.netlify/functions/menu');
        if (!response.ok) throw new Error('Failed to fetch menu data');
        
        const flatData = await response.json();
        const categoriesSet = new Set();

        const formattedItems = flatData.map(row => {
          categoriesSet.add(row.category);

          // Automatically adds ₹ symbol correctly even for ranges like "80 / 130"
          let formattedPrice = String(row.price);
          if (!formattedPrice.includes('₹')) {
              formattedPrice = formattedPrice.replace(/\b(\d+)\b/g, '₹$1');
          }

          return {
            cat: {
              title: row.category,
              sub: '', 
            },
            item: {
              name: row.name,
              price: formattedPrice,
              desc: row.description || '',
              imageUrl: row.image || '',
              tags: [], 
              ingredients: [] 
            }
          };
        });

        setMenuItems(formattedItems);
        setDynamicCategories(Array.from(categoriesSet));
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load live menu. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <section id="menu" className="pt-[5rem] px-0 pb-[3rem] bg-white !important">
      
      <div className="px-[1rem] md:px-[2.5rem] pb-[2rem] md:pb-[3rem]">
        <div className="text-saffron text-[0.7rem] tracking-[0.25em] font-inter mb-[0.65rem] uppercase">— THE TASTE MATRIX —</div>
        <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] text-[#111] !important">
          A Universe of <span className="bg-clip-text text-transparent bg-gradient-to-br from-gold to-saffron">Flavors</span>
        </h2>
      </div>

      {isLoading && (
        <div className="text-center py-10 font-inter text-gold font-bold animate-pulse">
          Fetching Live Menu from Kitchen...
        </div>
      )}

      {error && (
        <div className="text-center py-10 font-inter text-[#e53935] font-bold">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <>
          <MenuCategoryNav 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            dynamicCategories={dynamicCategories} 
          />
          <MenuGrid 
            activeCategory={activeCategory} 
            menuItems={menuItems} 
          />
        </>
      )}

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