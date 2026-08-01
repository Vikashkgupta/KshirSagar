import { createSlice } from '@reduxjs/toolkit';

const getInitialCart = () => {
  try {
    const item = localStorage.getItem('kshirsagar_cart');
    return item ? JSON.parse(item) : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  items: getInitialCart(),
  orderType: 'Delivery',
  tip: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { name, price, variant, emoji, category } = action.payload;
      const key = `${name}||${variant || ''}`;
      const existing = state.items.find(i => i.key === key);

      if (existing) {
        existing.qty++;
      } else {
        state.items.push({ key, name, price, variant, emoji, category, qty: 1 });
      }
      localStorage.setItem('kshirsagar_cart', JSON.stringify(state.items));
    },
    changeQuantity: (state, action) => {
      const { key, delta } = action.payload;
      const index = state.items.findIndex(i => i.key === key);
      
      if (index !== -1) {
        state.items[index].qty += delta;
        if (state.items[index].qty <= 0) {
          state.items.splice(index, 1);
        }
      }
      localStorage.setItem('kshirsagar_cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      // Save to last order before clearing
      localStorage.setItem('kshirsagar_last_order', JSON.stringify(state.items));
      state.items = [];
      state.tip = 0;
      localStorage.setItem('kshirsagar_cart', JSON.stringify(state.items));
    },
    restoreLastOrder: (state) => {
      const lastOrder = JSON.parse(localStorage.getItem('kshirsagar_last_order'));
      if (lastOrder && lastOrder.length > 0) {
        state.items = [...lastOrder];
        localStorage.setItem('kshirsagar_cart', JSON.stringify(state.items));
      }
    },
    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },
    setTip: (state, action) => {
      state.tip = action.payload;
    }
  },
});

export const { addToCart, changeQuantity, clearCart, restoreLastOrder, setOrderType, setTip } = cartSlice.actions;
export default cartSlice.reducer;