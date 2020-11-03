import React, { createContext } from 'react';

export const CartContext = createContext({
  hidden: true,
  //invoke defalut empty function to avoid null pointer error
  toggleHidden: () => {}
});