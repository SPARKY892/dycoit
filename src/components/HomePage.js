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
                        <p className="usp-sub-text">Lorem ipsum</p>
                    </div>
                    <div className="usp-sub-container">
                        <div className="usp-icon-background fa-stack">
                            <i className="usp-icon fa fa-user-o fa-stack-2x"></i>
                            <i className="usp-icon fa fa-check fa-stack-1x"></i>
                        </div>
                        <h3 className="usp-sub-header">Professional Support</h3>
                        <p className="usp-sub-text">Lorem ipsum</p>
                    </div>
                    <div className="usp-sub-container">
                        <div className="usp-icon-background">
                            <i className="usp-icon fa fa-thumbs-o-up fa-2x "></i>
                        </div>
                        <h3 className="usp-sub-header">Experienced</h3>
                        <p className="usp-sub-text">Lorem ipsum</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomePage;