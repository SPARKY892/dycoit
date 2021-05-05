import React from 'react';
import './HomePage.scss';

const HomePage = () => {
    return(
        <div className="home-container">
            <h1 className="home-header">Managed IT Service Provider</h1>
            <p className="home-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt soluta nobis assumenda labore quod maxime dolore magna aliqua.</p>
            <button className="home-btn"><strong>Free Network Assessment</strong></button>
            <img className="home-img" src="https://d-dyco.websitedesigntest.com/wp-content/uploads/2021/02/it-security-phone.jpeg"></img>
        </div>
    );
};

export default HomePage;