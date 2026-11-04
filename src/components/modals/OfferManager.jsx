import React, { useState, useEffect } from 'react';
import OfferPopup from './OfferPopup';
import { useModalBack } from '../../hooks/useModalBack';

const OfferManager = () => {
  const [offers, setOffers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('/.netlify/functions/offers');
        if (response.ok) {
          const data = await response.json();
          setOffers(Array.isArray(data) ? data : data.offers || []);
        }
      } catch (error) {
        console.error('Failed to fetch offer popups:', error);
      }
    };

    fetchOffers();
  }, []);

  const isOfferOpen = offers.length > 0 && currentIndex < offers.length;

  // Closes the current popup and moves to the next one in the queue
  const handleNextOffer = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Register each offer in the centralized modal stack using its currentIndex
  useModalBack(
    isOfferOpen,
    handleNextOffer,
    isOfferOpen ? `offer-popup-${currentIndex}` : 'offer-popup-closed'
  );

  // If no offers exist, or the user has closed all of them, render nothing
  if (!isOfferOpen) {
    return null;
  }

  return (
    <OfferPopup
      offer={offers[currentIndex]}
      onClose={handleNextOffer}
    />
  );
};

export default OfferManager;