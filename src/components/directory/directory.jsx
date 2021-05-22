import React from 'react'
import { connect } from 'react-redux'
import MenuItem from './../menu-item/menu-item'
import './directory.scss'

const Directory = ({ sections }) => (


    <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => (
            <MenuItem key={id} {...sectionProps} />
        ))}
    </div>

)

const mapStateToProps = ({ directory: { sections } })=>({
    sections
})

export default connect(mapStateToProps)(Directory)
