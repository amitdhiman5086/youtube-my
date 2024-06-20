import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COUNT_MESSAGE_LENGTH } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
        state.message.splice(LIVE_COUNT_MESSAGE_LENGTH,1)
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
