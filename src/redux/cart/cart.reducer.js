import CartActionTypes from "./cart.types"
import { addItemToCart, deleteItemFromCart,deleteItemByQty } from "./cart.utils"
const INITAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DELETE_ITEM:
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: deleteItemByQty(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer