import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import './cart-item.styles.scss';

const CartItem = ({ event, imageUrl, clearItem }) => {
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
        className='remove-item'
        onClick={() => clearItem(event)}
      >
        &#10005;
      </div>
  </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CartItem);