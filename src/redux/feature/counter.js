// Redux Toolkit se createSlice import kar rahe hain
import { createSlice } from "@reduxjs/toolkit";

// Counter slice create kar rahe hain
const counterSlice = createSlice({

  // Slice ka unique naam
  name: "counter",

  // Initial state (starting value)
  initialState: {
    value: 0,
  },

  // State ko update karne wale functions
  reducers: {

    // Increment action
    increment: (state) => {

      // value me 1 add karo
      state.value += 1;
    },

    // Decrement action
    decrement: (state) => {

      // value me 1 subtract karo
      state.value -= 1;
    },
  },
});

// Actions export kar rahe hain
export const { increment, decrement } = counterSlice.actions;

// Reducer export kar rahe hain
export default counterSlice.reducer;