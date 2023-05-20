import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {Provider} from 'react-redux';
import store from "./store/index";

const rootElement = document.getElementById('root')
//id is given as app

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);