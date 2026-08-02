import React from 'react';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import MobileBottomNav from './components/layout/MobileBottomNav';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import MenuSection from './components/sections/MenuSection';
import Legacy from './components/sections/Legacy';
import Location from './components/sections/Location';

import CartModal from './components/modals/CartModal';
import DishPopup from './components/modals/DishPopup';
import ContactSheet from './components/modals/ContactSheet';
import SuccessModal from './components/modals/SuccessModal';
import TimeWarningModal from './components/modals/TimeWarningModal';
import CustomRequestModal from './components/modals/CustomRequestModal';

// 1. Naya OfferManager import kar liya
import OfferManager from './components/modals/OfferManager';

function App() {
  return (
    <div id="landing" className="relative text-white font-playfair bg-bgDark dark:bg-bg-primary overflow-x-hidden min-h-screen">
      
      {/* Utilities */}
      <CustomCursor />
      
      {/* Layout */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        <MenuSection />
        <Legacy />
        <Location />
      </main>

      {/* Footer & Mobile Nav */}
      <Footer />
      <MobileBottomNav />

      {/* Portals/Modals */}
      <CartModal />
      <DishPopup />
      <ContactSheet />
      <SuccessModal />
      <TimeWarningModal />
      <CustomRequestModal />
      
      {/* 2. Offer Popup ko Modals ke sath add kar diya */}
      <OfferManager />
      
    </div>
  );
}

export default App;