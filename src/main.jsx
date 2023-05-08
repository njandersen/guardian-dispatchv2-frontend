import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer, { setUserFromLocalStorage } from "./store/authSlice";
import App from "./App.jsx";
import "./index.css";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

store.dispatch(setUserFromLocalStorage());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
