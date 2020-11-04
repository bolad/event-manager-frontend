import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart.provider';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-page'>
      Checkout Page
    </div>
  );
};

export default CheckoutPage;