import React, {useContext} from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag2.svg'
import { CartContext } from '../../contexts/cart/cart.context'

import './cart-icon.styles.scss';

const CartIcon = () => {
  
  //pull the toggleHidden value from CartContext and assign to an onClick event
  const { toggleHidden } = useContext(CartContext);

  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon;