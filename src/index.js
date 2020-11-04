import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import CartProvider from './providers/cart/cart.provider';

import './index.css';

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
