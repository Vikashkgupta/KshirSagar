// File: src/components/layout/ModalBackManager.jsx
// Centralized Redux Modal Observer that syncs all Redux UI modals with the LIFO History Stack

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleCart,
  toggleContactSheet,
  closeDishPopup,
  toggleTimeWarning,
  toggleSuccessModal,
  toggleCustomRequest
} from '../../store/uiSlice';
import { initModalBackListeners, syncModalInStack } from '../../hooks/useModalBack';

const ModalBackManager = () => {
  const dispatch = useDispatch();
  const {
    isCartOpen,
    isContactSheetOpen,
    dishPopup,
    isTimeWarningOpen,
    isSuccessModalOpen,
    isCustomRequestOpen
  } = useSelector((state) => state.ui);

  const isDishOpen = Boolean(dishPopup && dishPopup.isOpen);

  useEffect(() => {
    initModalBackListeners();
  }, []);

  // 1. Cart Modal
  useEffect(() => {
    syncModalInStack('cart-modal', Boolean(isCartOpen), () => {
      dispatch(toggleCart(false));
    });
  }, [isCartOpen, dispatch]);

  // 2. Dish Popup
  useEffect(() => {
    syncModalInStack('dish-popup', isDishOpen, () => {
      dispatch(closeDishPopup());
    });
  }, [isDishOpen, dispatch]);

  // 3. Contact Sheet
  useEffect(() => {
    syncModalInStack('contact-sheet', Boolean(isContactSheetOpen), () => {
      dispatch(toggleContactSheet(false));
    });
  }, [isContactSheetOpen, dispatch]);

  // 4. Time Warning Modal
  useEffect(() => {
    syncModalInStack('time-warning-modal', Boolean(isTimeWarningOpen), () => {
      dispatch(toggleTimeWarning(false));
    });
  }, [isTimeWarningOpen, dispatch]);

  // 5. Success Modal
  useEffect(() => {
    syncModalInStack('success-modal', Boolean(isSuccessModalOpen), () => {
      dispatch(toggleSuccessModal(false));
    });
  }, [isSuccessModalOpen, dispatch]);

  // 6. Custom Request Modal
  useEffect(() => {
    syncModalInStack('custom-request-modal', Boolean(isCustomRequestOpen), () => {
      dispatch(toggleCustomRequest(false));
    });
  }, [isCustomRequestOpen, dispatch]);

  return null;
};

export default ModalBackManager;