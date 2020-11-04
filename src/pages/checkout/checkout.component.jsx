import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart.provider';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-page'>
       <div className='checkout-header'>
        <div className='header-block'>
          <span>Event</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem 
          key={cartItem.id} 
          cartItem={cartItem}
          imageUrl={cartItem.image.url} 
        />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default CheckoutPage;