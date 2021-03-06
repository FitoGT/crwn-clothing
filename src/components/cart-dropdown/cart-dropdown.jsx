import React from 'react'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'

const CartDropdown = ({ cartItems, history,toggleCartHidden }) => {

    const checkout = () =>{
        toggleCartHidden()
        history.push('/checkout')
    }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length
                        ?
                        cartItems.map(item => <CartItem key={item.id} item={item} />)
                        :
                        <span className="empty-message">Your cart is empty</span>
                }

            </div>
            <CustomButton onClick={() => checkout() }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown))