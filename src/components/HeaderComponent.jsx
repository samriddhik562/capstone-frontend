import React from 'react';
import { Link } from "react-router-dom"
import '../App.jsx';
import './Header.css'; // Importing CSS for styling

const HeaderComponent = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to={'/home'}>Home</Link></li>
                <li className="nav-item"><Link to={'/jobs'}>Jobs</Link></li>
                <li className="nav-item"><Link to={'/aboutus'}>About Us</Link></li>
            </ul>
        </nav>
    );
};

export default HeaderComponent;
