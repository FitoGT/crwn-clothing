import React from 'react'
import './custom-button.scss'

const CustomButton = ({children, isGoogle, ...otherProps}) =>(
    <button className={`${isGoogle ? 'google-button': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton