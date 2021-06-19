import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const key = "pk_test_51J3sljAi4qKswWZKlN9GExW3prS4suc2fDzL5jkh0pvHh110WNOD1OmhwmHtb486a1fJmpPYoR8UxB49t8KA50nv00W59gCqKj"
    const onToken = token =>{
        console.log(token)
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={key}
        />
    )
}

export  default StripeCheckoutButton