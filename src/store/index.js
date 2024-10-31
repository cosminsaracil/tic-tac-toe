import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    chat: chatReducer, // Ensure this is included
  },
});

export default store;
