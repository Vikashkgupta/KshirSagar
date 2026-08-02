import React from 'react';

const OfferPopup = ({ offer, onClose }) => {
  if (!offer) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-[6px]"
      onClick={onClose} // Closes when clicking outside
    >
      <div
        className="relative flex items-center justify-center bg-transparent w-[92%] md:w-[70%] lg:w-[50%] h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
      >
        {/* Round White Close Button with Black X */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg cursor-pointer hover:scale-110 transition-transform z-10 border-none outline-none"
          aria-label="Close Offer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Poster Image - Never Cropped */}
        <img
          src={offer.image}
          alt={offer.title || 'Special Offer'}
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default OfferPopup;