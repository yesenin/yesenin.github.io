import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

import { createProvider } from "redux";
import { Provider } from 'react-redux';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
