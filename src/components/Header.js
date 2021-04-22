import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header-container">
            <img className="header-logo" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://dycoit.co.uk/wp-content/uploads/2019/02/dyco-logo-x75.png" />
            <div className="nav-container">
                <button className="nav-item">About</button>
                <button className="nav-item">Our Services</button>
                <button className="nav-item">Contact</button>
            </div>
        </div>
    );
};

export default Header;