import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import Search from './Search';

const Header = () => (
    <div className="Header">
        <Link to='/'>
        <img 
            src={`${process.env.PUBLIC_URL}/logo.png`} 
            alt="logo" className="Header-logo" 
        />
        
        </Link>
        <Search />
    </div>
);

export default Header;