export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existing = cartItems.find(item => item.id === cartItemToAdd.id)

    if (existing) {
        return cartItems.map(item =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const deleteItemFromCart = (cartItem, currentItem) => {
    return cartItem.filter(item => item.id !== currentItem.id)
}

export const deleteItemByQty = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find(item => item.id === cartItemToAdd.id)

    if (existing.quantity>1) {
        return cartItems.map(item =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    }else{
       return cartItems.filter(item => item.id !== cartItemToAdd.id)
    }
}
