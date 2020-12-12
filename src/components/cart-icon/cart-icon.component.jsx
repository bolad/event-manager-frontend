import React, {useContext} from 'react'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag2.svg'
//import { CartContext } from '../../providers/cart/cart.provider'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) => {

  //pull the toggleHidden value from CartContext and assign to an onClick event
  //const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'></span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);