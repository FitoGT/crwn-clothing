import React from 'react'
import './form-input.scss'

const FormInput = ({handleChange, label, ...otherProps}) =>(
    <div className="group">
        <input 
            name={otherProps.name}
            type={otherProps.type}
            className="form-input" 
            onChange={handleChange}
            value={otherProps.value}
        />
        {
            label ?
            (
                <label 
                     
                    className={`${otherProps.value.length ? 'shrink':''} form-input-label`}
                >
                    {label}

                </label>
            )
            : null
        }
    </div>
)
export default FormInput