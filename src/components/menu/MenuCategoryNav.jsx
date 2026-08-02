import React from 'react';

// KEPT AS BACKUP DICTIONARY ONLY - DO NOT DELETE
// Used purely to attach the correct Image & Emoji to dynamic Airtable categories
const FALLBACK_CATEGORY_ASSETS = [
  { name: 'All', filter: 'all', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80', emoji: '🍽️' },
  { name: 'Pizza', filter: 'Pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', emoji: '🍕' },
  { name: 'Chinese', filter: 'Chowmein', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80', emoji: '🍜' },
  { name: 'South Indian', filter: 'Dosa', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80', emoji: '🥞' },
  { name: 'Chilli Manchurian', filter: 'Chilli Manchurian', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80', emoji: '🌶️' },
  { name: 'Rice', filter: 'Rice', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80', emoji: '🍚' },
  { name: 'Rolls', filter: 'Rolls', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80', emoji: '🌯' },
  { name: 'Sandwich', filter: 'Sandwich', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', emoji: '🥪' },
  { name: 'Burger', filter: 'Burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', emoji: '🍔' },
  { name: 'Snacks', filter: 'Snacks', img: '/img/snak.jpg', emoji: '🍟' },
  { name: 'Sweets', filter: 'Sweets', img: '/img/sweet.jpg', emoji: '🍬' },
  { name: 'Cakes', filter: 'Cakes', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80', emoji: '🎂' },
  { name: 'Bakery', filter: 'Bakery', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80', emoji: '🥐' },
  { name: 'Cold Drinks', filter: 'Cold Drinks', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80', emoji: '🥤' },
  { name: 'Namkeen', filter: 'Namkeen', img: '/img/namkeen.jpg', emoji: '🥨' }
];

const MenuCategoryNav = ({ activeCategory, setActiveCategory, dynamicCategories }) => {
  
  // Construct dynamic navigation list merging Airtable categories with our image dictionary
  const navigationList = ['all', ...dynamicCategories].map(catName => {
    const foundAsset = FALLBACK_CATEGORY_ASSETS.find(asset => 
      asset.filter.toLowerCase() === catName.toLowerCase() || 
      asset.name.toLowerCase() === catName.toLowerCase()
    );

    return {
      filter: catName,
      name: catName === 'all' ? 'All' : catName,
      img: foundAsset ? foundAsset.img : 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80', // Default image if new category added
      emoji: foundAsset ? foundAsset.emoji : '✨'
    };
  });

  return (
    <>
      <div className="flex gap-[clamp(1rem,3vw,1.5rem)] px-[clamp(1rem,4vw,2.5rem)] py-[clamp(0.5rem,2vw,1rem)] pb-[clamp(2rem,5vw,3rem)] overflow-x-auto no-scrollbar items-start flex-nowrap bg-white !important">
        {navigationList.map((cat) => {
          const isActive = activeCategory === cat.filter;
          return (
            <button
              key={cat.filter}
              onClick={() => setActiveCategory(cat.filter)}
              className={`flex flex-col w-[clamp(110px,30vw,140px)] h-[clamp(140px,38vw,175px)] p-0 rounded-[16px] bg-white border ${
                isActive ? 'border-gold shadow-[0_8px_25px_rgba(212,175,55,0.25)]' : 'border-gold/30 shadow-[0_4px_15px_rgba(0,0,0,0.03)]'
              } cursor-pointer transition-all duration-300 shrink-0 overflow-hidden no-underline outline-none hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]`}
            >
              <div className="w-full h-[65%] border-none bg-transparent overflow-hidden">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`h-[35%] inline-flex items-center justify-center text-center px-[0.4rem] font-inter text-[clamp(0.8rem,2.5vw,0.95rem)] font-bold text-[#222] bg-white relative mx-auto ${
                isActive ? "after:content-[''] after:absolute after:bottom-[8px] after:left-0 after:right-0 after:h-[2px] after:bg-gold after:rounded-sm" : ""
              }`}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Heading for Active Category */}
      <div className="px-[clamp(1rem,4vw,2.5rem)] pb-[clamp(1rem,3vw,1.5rem)] flex flex-col items-start bg-white !important">
        <div className="inline-flex flex-col items-start gap-[0.4rem]">
          <div className="font-playfair text-[clamp(1.4rem,5vw,2rem)] font-bold text-[#111] flex items-center gap-[0.6rem]">
            {navigationList.find(c => c.filter === activeCategory)?.emoji}{' '}
            {navigationList.find(c => c.filter === activeCategory)?.name}
          </div>
          <div className="h-[2px] bg-gold rounded-sm w-full"></div>
        </div>
      </div>
    </>
  );
};

export default MenuCategoryNav;