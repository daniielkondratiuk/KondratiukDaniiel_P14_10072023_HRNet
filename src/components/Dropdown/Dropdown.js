import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";

const Dropdown = ({ placeholder, options, selected, setSelected, width, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelected(item);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const dropdownContainerStyle = {
        width: `${width}px`,
    };

    return (
        <div
            ref={dropdownRef}
            className={`dropdown-container ${isOpen ? 'open' : ''} ${theme}`}
            style={dropdownContainerStyle}
        >
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selected.label ? selected.label : placeholder}
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} style={{ marginLeft: '5px' }} />
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    {options.map((item) => (
                        <div
                            key={item.value}
                            onClick={() => handleItemClick(item)}
                            className={`dropdown-item ${selected === item ? 'selected' : ''}`}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
        })
    ).isRequired,
    selected: PropTypes.shape({
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
    }).isRequired,
    setSelected: PropTypes.func.isRequired,
    width: PropTypes.number,
    theme: PropTypes.string,
};

Dropdown.defaultProps = {
    theme: 'primary',
};

export default Dropdown;
