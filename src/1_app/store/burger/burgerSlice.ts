import { createSlice } from '@reduxjs/toolkit';

export interface BurgerState {
  active: boolean;
}

const initialState: BurgerState = {
  active: false,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    toggle: (state) => {
      state.active = !state.active;
    },
  },
});

export const { toggle } = burgerSlice.actions;

export default burgerSlice.reducer;
