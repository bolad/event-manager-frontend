import React from 'react';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import './cart-item.styles.scss';

const CartItem = ({ event, imageUrl }) => {
  const {price, name, quantity} = event;

  return (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='event-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
    <div
        className='remove-button'
        onClick={() => clearItemFromCart(event)}
      >
        &#10005;
      </div>
  </div>
  )
};

export default CartItem;