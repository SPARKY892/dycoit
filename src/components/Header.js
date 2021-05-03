import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
    const [menuActive, setMenuActive]=  useState(false);

    return (
        <div className="header-container">
            <img className="header-logo" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://dycoit.co.uk/wp-content/uploads/2019/02/dyco-logo-x75.png" />
            <div className={menuActive ? 'nav-container active' : 'nav-container'}>
                <div className="nav-item-container">
                    <a className="nav-item">About</a>
                    <a className="nav-item">Our Services</a>
                    <a className="nav-item">Contact</a>
                </div>
            </div>
            <div className="nav-menu-icon" onClick={() => {setMenuActive(!menuActive)}}>
                <i className={menuActive ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
            </div>
        </div>
    );
};

export default Header;