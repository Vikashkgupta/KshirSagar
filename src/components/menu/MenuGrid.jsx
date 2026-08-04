import React, { useMemo } from 'react';
import MenuItemCard from './MenuItemCard';

const MenuGrid = ({ activeCategory, menuItems }) => {
  
  // Filter the dynamic menuItems
  const displayItems = useMemo(() => {
    if (activeCategory === 'all') {
      return menuItems;
    }
    // Filter based on the reconstructed object structure
    return menuItems.filter(menuObj => menuObj.cat.title === activeCategory);
  }, [activeCategory, menuItems]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(1rem,3vw,1.5rem)] px-[clamp(1rem,4vw,2.5rem)] pb-[clamp(2rem,6vw,4rem)] bg-white !important">
      {displayItems.map((menuObj, idx) => {
        // We ensure the category object has an emoji attached for the Card to use
        // Fallback to 🍴 if it's a brand new category created in Airtable
        if (!menuObj.cat.emoji) {
          menuObj.cat.emoji = '🍴'; 
        }

        return (
          <MenuItemCard 
            key={`${menuObj.item.name}-${idx}`} 
            item={menuObj.item} 
            category={menuObj.cat} 
          />
        );
      })}
    </div>
  );
};

export default MenuGrid;