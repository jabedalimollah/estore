import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  subtotalValue: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {
      //   state.value += 1;
      state.value = state.value.concat([action.payload]);
      //   console.log(action.payload);
    },
    productIncrement: (state, action) => {
      state.value[action.payload];
    },
    clearItem: (state) => {
      state.value = [];
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((item, index) => {
        return index !== action.payload;
      });
    },
    handleSubtotalMethod: (state) => {
      state.subtotalValue = state.value.reduce((result, item) => {
        return result + item.subtotal;
      }, 0);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  add,
  productIncrement,
  clearItem,
  deleteItem,
  incrementByAmount,
  handleSubtotalMethod,
} = productSlice.actions;

export default productSlice.reducer;
