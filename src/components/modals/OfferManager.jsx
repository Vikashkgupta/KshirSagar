import React, { useState, useEffect } from 'react';
import OfferPopup from './OfferPopup';

const OfferManager = () => {
  const [offers, setOffers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('/.netlify/functions/offers');
        if (response.ok) {
          const data = await response.json();
          setOffers(data);
        }
      } catch (error) {
        console.error('Failed to fetch offer popups:', error);
      }
    };

    fetchOffers();
  }, []);

  // If no offers exist, or the user has closed all of them, render nothing
  if (offers.length === 0 || currentIndex >= offers.length) {
    return null;
  }

  // Closes the current popup and moves to the next one in the queue
  const handleNextOffer = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <OfferPopup 
      offer={offers[currentIndex]} 
      onClose={handleNextOffer} 
    />
  );
};

export default OfferManager;