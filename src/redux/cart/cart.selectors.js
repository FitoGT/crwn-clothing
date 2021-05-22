import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const itemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accQty,cartItem)=>accQty + cartItem.quantity,0)
)

export const total = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accQty,cartItem)=>accQty + cartItem.quantity*cartItem.price,0)
)