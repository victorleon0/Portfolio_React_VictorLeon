import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { Provider } from 'react-redux';
import store from './redux/store.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
  </Router>
);
