import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Products </Link>
                <Link to="/About"> About </Link>
            </div>
        </div>
    )
};

export default Navbar;