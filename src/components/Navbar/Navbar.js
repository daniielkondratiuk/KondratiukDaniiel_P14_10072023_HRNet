import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/Logo.jpeg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <NavLink to='/'>
                    <img src={Logo} alt='Logo' />
                </NavLink>
            </div>
            <ul className='navbar-links'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/table'>Table</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
