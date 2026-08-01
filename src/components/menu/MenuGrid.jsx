import React, { useMemo } from 'react';
import { MENU } from '../../data/menuData';
import MenuItemCard from './MenuItemCard';

const MenuGrid = ({ activeCategory }) => {
  // Flatten and filter the menu
  const displayItems = useMemo(() => {
    let allItems = [];
    MENU.forEach(cat => cat.items.forEach(item => allItems.push({ cat, item })));

    if (activeCategory === 'all') {
      return allItems;
    }
    if (activeCategory === 'Famous') {
      return allItems.filter(e => e.item.tags && e.item.tags.length > 0);
    }
    return allItems.filter(e => e.cat.title === activeCategory);
  }, [activeCategory]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(1rem,3vw,1.5rem)] px-[clamp(1rem,4vw,2.5rem)] pb-[clamp(2rem,6vw,4rem)] bg-white !important">
      {displayItems.map((menuObj, idx) => (
        <MenuItemCard 
          key={`${menuObj.item.name}-${idx}`} 
          item={menuObj.item} 
          category={menuObj.cat} 
        />
      ))}
    </div>
  );
};

export default MenuGrid;