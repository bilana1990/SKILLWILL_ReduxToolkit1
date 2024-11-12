// src/yourSlice.js
import { createSlice } from '@reduxjs/toolkit';

const yourSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// აქ ვექსპორტებთ action-ებს
export const { increment, decrement, reset } = yourSlice.actions;

// ვექსპორტებთ reducer-ს store-ში გამოყენებისთვის
export default yourSlice.reducer;
