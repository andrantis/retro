import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import { loadState, saveState } from "./utils/localStorage";

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
