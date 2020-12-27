import React, {useContext} from 'react'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag2.svg'
//import { CartContext } from '../../providers/cart/cart.provider'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => {

  //pull the toggleHidden value from CartContext and assign to an onClick event
  //const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
  <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);