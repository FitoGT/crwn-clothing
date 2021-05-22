import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { total } from '../../redux/cart/cart.selectors'
import './checkout.scss'
import CheckoutItems from '../checkout-items/checkout-items'


const Checkout = ({cartItems,total}) =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Qty</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>(
                <CheckoutItems key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className="total">${total}</div>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total:total(state)
})

export default connect(mapStateToProps)(Checkout) 