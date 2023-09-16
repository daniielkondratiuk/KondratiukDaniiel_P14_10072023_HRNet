import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ type, label, placeholder, value, setValue, theme }) => {
    const handleChange = event => {
        setValue(event.target.value)
    }

    return (
        <div className={`input-container ${theme}`}>
            {label && <label className='input-label'>{label}</label>}
            <input
                type={type}
                className={`input-field ${theme}`}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    theme: PropTypes.string
}

Input.defaultProps = {
    theme: 'primary'
}

export default Input
