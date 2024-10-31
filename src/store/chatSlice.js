import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    resetChat: (state) => {
      state.messages = [];
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload); // Adjust if needed
    },
  },
});

// Export the actions and reducer
export const { addMessage, resetChat, sendMessage } = chatSlice.actions; // Ensure addMessage is included here
export default chatSlice.reducer;
