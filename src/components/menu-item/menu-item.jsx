import React from 'react'
import './menu-item.scss'
const MenuItem = (props) => (
    <div className={`menu-item ${props.section.size ? props.section.size : ''}`}>
        <div className="background-image"
         style={{
            backgroundImage:`url(${props.section.imageUrl})`
    
        }} />

        <div className="content">
            <h1 className="title">{props.section.title.toUpperCase()}</h1>
            <span className="subtitle">shop now</span>
        </div>
    </div>
)
export default MenuItem