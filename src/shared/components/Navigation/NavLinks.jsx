import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import './NavLinks.css'
const NavLinks = (props) => {
    const auth = useContext(AuthContext); //listen to auth change and return new objecy with new value 
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            {auth.isLoggedIn && <li>
                <NavLink to="/1/places">My Places</NavLink>
            </li>}
            {auth.isLoggedIn && <li>
                <NavLink to="/place/new">ADD Places</NavLink>
            </li>}
            <li>
                <NavLink to="/auth">{auth.isLoggedIn ? "Log Out" : "Log In"}</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;