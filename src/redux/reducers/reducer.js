import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: "",
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setQuote } = sliceState.actions;
export default reducer;
