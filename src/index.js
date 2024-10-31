import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./styles.css"; // Import the CSS file here

const container = document.getElementById("root"); // Select the root element
const root = createRoot(container); // Create a root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
