import { createSlice } from "@reduxjs/toolkit";

//chat related state
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [], //initialize with an emty array
  },
  reducers: {
    // reducer to add a new messagee to the chat
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    // reset the chat by clearing the message
    resetChat: (state) => {
      state.messages = [];
    },
    // handle seding a message
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage, resetChat, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
