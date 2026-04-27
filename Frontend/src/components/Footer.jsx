import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCircle } from 'react-icons/fa';
import "../assets/css/Footer.css";
import { FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="f-footer">
            <div className="f-footer-divider"></div>
            
            <div className="f-footer-container">
                {/* System Status Section */}
                <div className="f-footer-section">
                    <h4 className="f-footer-title">SYSTEM_STATUS</h4>
                    <div className="f-status-grid">
                        <div className="f-status-item">
                            <FaCircle className="f-status-icon f-online" />
                            <span>SERVER: ONLINE</span>
                        </div>
                        <div className="f-status-item">
                            <FaCircle className="f-status-icon f-online" />
                            <span>DATABASE: CONNECTED</span>
                        </div>
                        <div className="f-status-item">
                            <FaCircle className="f-status-icon f-online" />
                            <span>WORK: CODEVORA</span>
                        </div>
                        <div className="f-status-item">
                            <span className="f-blink-text">{">"} SYSTEM READY_</span>
                        </div>
                    </div>
                </div>

                {/* Navigation / Directory Section */}
                <div className="f-footer-section">
                    <h4 className="f-footer-title">DIRECTORY</h4>
                    <ul className="f-footer-links">
                        <li><a href="#root">/root</a></li>
                        <li><a href="#PROJECTS">/home/projects</a></li>
                        <li><a href="#ABOUT">/user/about_me</a></li>
                        <li><a href="#CONTACT">/bin/contact</a></li>
                    </ul>
                </div>

                {/* Social / Encrypted Links Section */}
                <div className="f-footer-section">
                    <h4 className="f-footer-title">SOCIAL_ENCRYPTION</h4>
                    <div className="f-social-icons">
                        <a href="https://github.com/SomenKarmakar24" target="_blank" rel="noreferrer" className="f-social-link">
                            <FaGithub /> <span className="f-tooltip">GITHUB</span>
                        </a>
                        <a href="https://www.linkedin.com/in/somen-karmakar-74453724a/" target="_blank" rel="noreferrer" className="f-social-link">
                            <FaLinkedin /> <span className="f-tooltip">LINKEDIN</span>
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="f-social-link">
                            <FaYoutube /> <span className="f-tooltip">YouTube</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright / Terminal Footer */}
            <div className="f-footer-bottom">
                <p>
                    COPYRIGHT (C) {currentYear} SOMEN_PORTFOLIO. 
                    ALL_RIGHTS_RESERVED. [V1.0.4-STABLE]
                </p>
            </div>
        </footer>
    );
};

export default Footer;