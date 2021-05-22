import React from 'react'
import './custom-button.scss'

const CustomButton = ({ 
        children, 
        isGoogle, 
        inverted, 
        ...otherProps 
    }) => (
    <button className={
        `${isGoogle ? 'google-button' : ''} ${inverted ? 'inverted' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton