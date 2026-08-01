import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'hero',
  isCartOpen: false,
  isContactSheetOpen: false,
  dishPopup: {
    isOpen: false,
    activeDish: null, // Holds dish data when open
  },
  isTimeWarningOpen: false,
  isSuccessModalOpen: false,
  isCustomRequestOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    toggleCart: (state, action) => {
      state.isCartOpen = action.payload !== undefined ? action.payload : !state.isCartOpen;
    },
    toggleContactSheet: (state, action) => {
      state.isContactSheetOpen = action.payload !== undefined ? action.payload : !state.isContactSheetOpen;
    },
    openDishPopup: (state, action) => {
      state.dishPopup.isOpen = true;
      state.dishPopup.activeDish = action.payload;
    },
    closeDishPopup: (state) => {
      state.dishPopup.isOpen = false;
      state.dishPopup.activeDish = null;
    },
    toggleTimeWarning: (state, action) => {
      state.isTimeWarningOpen = action.payload !== undefined ? action.payload : !state.isTimeWarningOpen;
    },
    toggleSuccessModal: (state, action) => {
      state.isSuccessModalOpen = action.payload !== undefined ? action.payload : !state.isSuccessModalOpen;
    },
    toggleCustomRequest: (state, action) => {
      state.isCustomRequestOpen = action.payload !== undefined ? action.payload : !state.isCustomRequestOpen;
    }
  },
});

export const { 
  setActiveTab, 
  toggleCart, 
  toggleContactSheet, 
  openDishPopup, 
  closeDishPopup, 
  toggleTimeWarning, 
  toggleSuccessModal, 
  toggleCustomRequest 
} = uiSlice.actions;
export default uiSlice.reducer;