import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

import myReducer from "./redux/reducer/index"
import { Provider } from 'react-redux';

const store = createStore(myReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode >
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
