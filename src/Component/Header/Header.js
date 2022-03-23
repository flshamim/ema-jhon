import React from 'react';
import Logo from'../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='bg-head'>
            <img src={Logo} alt="Logo" />
            <div className='a-div'>
                <a href="#/">Order</a>
                <a href="#/">Order Review</a>
                <a href="#/">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;