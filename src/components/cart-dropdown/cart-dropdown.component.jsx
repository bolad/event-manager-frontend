import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart.provider';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown'>
       <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem 
              event={cartItem}
              key={cartItem.id} 
              imageUrl={cartItem.image.url}
            />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;