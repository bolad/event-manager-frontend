import { createSelector } from 'reselect';

//input selector
const selectCartItem = state => state.cart;

//output selector which takes an input selector and returns the value we want out of that selector
export const selectCartItems = createSelector(
  [selectCartItem],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);




