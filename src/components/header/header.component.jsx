import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../providers/cart/cart.provider';

import axios from 'axios'

import './header.styles.scss';
import { useContext } from 'react';

const Header = ({currentUser, handleLogout}) => {
  
  const { hidden } = useContext(CartContext);
  
  const handleLogoutClick = () => {
    axios.delete("https://bld-events-api.herokuapp.com/api/logout", { withCredentials: true })
      .then(response => {
        handleLogout();
      })
      .catch(error => {
        console.log("logout error", error)
      })
  }

  return(
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/events'>
          EVENTS
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => handleLogoutClick()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
        )}
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
  </div>
  )
};

export default Header;
