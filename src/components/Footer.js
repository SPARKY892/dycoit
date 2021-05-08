import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer-container">
            <img className="footer-logo" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://dycoit.co.uk/wp-content/uploads/2019/02/dyco-logo-x75.png" />
            <p className="footer-text">We will customize and design our busuiness support services for your business needs and structure.</p>
            <div className="footer-icon-container">
                <a className="footer-icon-link" href="#">
                    <i className="footer-icon fab fa-instagram fa-2x"></i>
                </a>
                <a className="footer-icon-link" href="#">
                    <i className="footer-icon fab fa-linkedin-in fa-2x"></i>
                </a>
                <a className="footer-icon-link" href="#">
                    <i className="footer-ico fab fa-facebook fa-2x"></i>
                </a>
            </div>
            <div className="footer-services-container">
                <h4 className="footer-header">Our Services</h4>
                <a className="footer-service-link" href="#"></a>
                <a className="footer-service-link" href="#"></a>
                <a className="footer-service-link" href="#"></a>
                <a className="footer-service-link" href="#"></a>
                <a className="footer-service-link" href="#"></a>
                <a className="footer-service-link" href="#"></a>
                <a className="footer-service-link" href="#"></a>
            </div>
            <div className="footer-contact-container">
                <h4 className="footer-header">Contact Info</h4>

            </div>
        </footer>
    );
};

export default Footer;