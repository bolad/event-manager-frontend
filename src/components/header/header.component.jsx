import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import axios from 'axios'

import './header.styles.scss';

const Header = ({currentUser, handleLogout}) => {
  
  const handleLogoutClick = () => {
    axios.delete("http://localhost:3001/api/logout", { withCredentials: true })
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
  </div>
  )
};

export default Header;
