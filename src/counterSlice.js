import { createSlice } from "@reduxjs/toolkit";

function dataFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("count")) || {
      count2: 0,
    }
  );
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: dataFromLocalStorage,
  reducers: {
    deleteitem: (state, { payload }) => {
      state.count2 = 0;
      localStorage.setItem("count", JSON.stringify(state));
    },
    incrementByAmount: (state, { payload }) => {
      state.count2 += payload;
      localStorage.setItem("count", JSON.stringify(state));
    },
  },
});

export const { incrementByAmount, deleteitem } = counterSlice.actions;

export default counterSlice.reducer;
