import React from 'react';
import './HomePage.scss';

const HomePage = () => {
    return(
        <React.Fragment>
            <div className="home-container">
                <h1 className="home-header">Managed IT Service Provider</h1>
                <p className="home-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt soluta nobis assumenda labore quod maxime dolore magna aliqua.</p>
                <button className="home-btn"><strong>Free Network Assessment</strong></button>
                <img className="home-img" src="https://d-dyco.websitedesigntest.com/wp-content/uploads/2021/02/it-security-phone.jpeg"></img>
            </div>
            <div className="usp-container">
                <h1 className="usp-header">Save your valuable time</h1>
                <p className="usp-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt soluta nobis assumenda labore quod maxime dolore magna aliqua.</p>
                <div className="usp-grid">
                    <div className="usp-sub-container">
                        <div className="usp-icon-background">
                            <i className="usp-icon fa fa-clock-o fa-2x"></i>
                        </div>
                        <h3 className="usp-sub-header">Always Available</h3>
                        <p className="usp-sub-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt soluta nobis assumenda labore quod maxime dolore magna aliqua.</p>
                    </div>
                    <div className="usp-sub-container">
                        <div className="usp-icon-background">
                            <i className="usp-icon fa fa-user-o fa-2x"></i>                            
                        </div>
                        <h3 className="usp-sub-header">Professional Support</h3>
                        <p className="usp-sub-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt soluta nobis assumenda labore quod maxime dolore magna aliqua.</p>
                    </div>
                    <div className="usp-sub-container">
                        <div className="usp-icon-background">
                            <i className="usp-icon fa fa-thumbs-o-up fa-2x "></i>
                        </div>
                        <h3 className="usp-sub-header">Experienced</h3>
                        <p className="usp-sub-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt soluta nobis assumenda labore quod maxime dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="services-container">
                <h1 className="services-header">Our Services</h1>
                <p className="services-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt soluta nobis assumenda labore quod maxime dolore magna aliqua.</p>
                <div className="services-grid">
                    <a className="services-link" href="#">
                        <div className="services-sub-container">
                            <i className="services-icon fas fa-network-wired fa-3x"></i>
                            <h2 className="services-sub-header">Data Cabling</h2>
                        </div>
                    </a>
                    <a className="services-link" href="#">
                        <div className="services-sub-container">
                            <i className="services-icon fas fa-shield-alt fa-3x"></i>
                            <h2 className="services-sub-header">Cyber Security</h2>
                        </div>
                    </a>
                    <a className="services-link" href="#">
                        <div className="services-sub-container">
                            <i className="services-icon fab fa-windows fa-3x"></i>
                            <h2 className="services-sub-header">Office 365</h2>
                        </div>
                    </a>
                    <a className="services-link" href="#">
                        <div className="services-sub-container">
                            <i className="services-icon fas fa-laptop-code fa-3x"></i>
                            <h2 className="services-sub-header">Website Development</h2>
                        </div>
                    </a>
                    <a className="services-link" href="#">
                        <div className="services-sub-container">
                            <i className="services-icon fas fa-server fa-3x"></i>
                            <h2 className="services-sub-header">IT Infrastructure</h2>
                        </div>
                    </a>
                    <a className="services-link" href="#">
                        <div className="services-sub-container">
                            <i className="services-icon fas fa-handshake fa-3x"></i>
                            <h2 className="services-sub-header">IT Consultancy</h2>
                        </div>
                    </a>
                    <a className="services-link" href="#">
                        <div className="services-sub-container">
                            <i className="services-icon fas fa-headset fa-3x"></i>
                            <h2 className="services-sub-header">Managed IT Support</h2>
                        </div>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomePage;