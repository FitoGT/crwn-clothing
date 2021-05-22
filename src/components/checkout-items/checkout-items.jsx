import React from 'react'
import { connect } from 'react-redux'
import './checkout-items.scss'
import { deleteItem, addItem, removeItem } from '../../redux/cart/cart.actions'
const CheckoutItems = ({ cartItem, deleteItem, addItem, removeItem }) => {
    const { name, imageUrl, quantity, price } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>

            </div>

            <span className="price">{price}</span>

            <div onClick={() => deleteItem(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({

    deleteItem: item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))

})
export default connect(null, mapDispatchToProps)(CheckoutItems)