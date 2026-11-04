// File: src/hooks/useModalBack.js
// Centralized LIFO Modal Stack + Browser/Android History API & Escape Key Coordinator

import { useEffect, useRef } from 'react';

const modalStack = []; // Array of { id: string, closeFn: () => void }
let historyDepth = 0;
let pendingProgrammaticBacks = 0;
let isHandlingPopState = false;
let syncTimer = null;
let listenersAttached = false;

function scheduleHistorySync() {
  if (typeof window === 'undefined') return;
  if (syncTimer !== null) return;

  syncTimer = setTimeout(() => {
    syncTimer = null;
    if (isHandlingPopState) return;

    const targetDepth = modalStack.length;

    if (targetDepth > historyDepth) {
      const toPush = targetDepth - historyDepth;
      for (let i = 0; i < toPush; i++) {
        historyDepth++;
        try {
          window.history.pushState({ kshirsagarModalDepth: historyDepth }, '');
        } catch (err) {
          // Ignore SecurityError in restricted environments
        }
      }
    } else if (targetDepth < historyDepth) {
      const toPop = historyDepth - targetDepth;
      for (let i = 0; i < toPop; i++) {
        historyDepth--;
        pendingProgrammaticBacks++;
        try {
          window.history.back();
        } catch (err) {
          pendingProgrammaticBacks = Math.max(0, pendingProgrammaticBacks - 1);
        }
      }
    }
  }, 0);
}

function handleGlobalPopState() {
  if (pendingProgrammaticBacks > 0) {
    pendingProgrammaticBacks--;
    return;
  }

  if (modalStack.length > 0) {
    const topModal = modalStack.pop();
    if (historyDepth > 0) {
      historyDepth--;
    }

    isHandlingPopState = true;
    try {
      if (topModal && typeof topModal.closeFn === 'function') {
        topModal.closeFn();
      }
    } finally {
      isHandlingPopState = false;
      scheduleHistorySync();
    }
  }
}

function handleGlobalKeyDown(e) {
  if (e.key !== 'Escape') return;
  if (modalStack.length === 0) return;

  e.preventDefault();
  e.stopPropagation();

  const topModal = modalStack[modalStack.length - 1];
  if (topModal && typeof topModal.closeFn === 'function') {
    topModal.closeFn();
  }
}

export function initModalBackListeners() {
  if (typeof window === 'undefined' || listenersAttached) return;
  window.addEventListener('popstate', handleGlobalPopState);
  window.addEventListener('keydown', handleGlobalKeyDown, true);
  listenersAttached = true;
}

export function cleanupModalBackListeners() {
  if (typeof window === 'undefined' || !listenersAttached) return;
  window.removeEventListener('popstate', handleGlobalPopState);
  window.removeEventListener('keydown', handleGlobalKeyDown, true);
  listenersAttached = false;
}

export function syncModalInStack(id, isOpen, closeFn) {
  if (!id) return;
  initModalBackListeners();

  const existingIndex = modalStack.findIndex((item) => item.id === id);

  if (isOpen) {
    if (existingIndex === -1) {
      modalStack.push({ id, closeFn });
      scheduleHistorySync();
    } else {
      modalStack[existingIndex].closeFn = closeFn;
    }
  } else {
    if (existingIndex !== -1) {
      modalStack.splice(existingIndex, 1);
      scheduleHistorySync();
    }
  }
}

export function useModalBack(isOpen, onClose, modalId = 'modal') {
  const closeFnRef = useRef(onClose);
  closeFnRef.current = onClose;

  useEffect(() => {
    if (!modalId) return;
    syncModalInStack(modalId, Boolean(isOpen), () => {
      if (typeof closeFnRef.current === 'function') {
        closeFnRef.current();
      }
    });
  }, [isOpen, modalId]);

  useEffect(() => {
    return () => {
      if (modalId) {
        syncModalInStack(modalId, false, null);
      }
    };
  }, [modalId]);
}

export default useModalBack;