import React from 'react'
import { connect } from 'react-redux'
import './checkout-items.scss'
import { deleteItem } from '../../redux/cart/cart.actions'
const CheckoutItems = ({ cartItem: { id, name, imageUrl, quantity, price }, deleteItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>

        <span className="price">{price}</span>

        <div onClick={() => deleteItem(id)} className="remove-button">&#10005;</div>
    </div>
)
const mapDispatchToProps = dispatch => ({

    deleteItem: id => dispatch(deleteItem(id))

})
export default connect(null, mapDispatchToProps)(CheckoutItems)