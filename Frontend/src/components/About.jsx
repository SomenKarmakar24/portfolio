import React from 'react';
import { FaDownload, FaBriefcase, FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';
import {Scroll_To_Section} from "../utils/Scroll_To_Section"
import '../assets/css/About.css';

const About = () => {
    return (
        <section className="a-about-container" id="ABOUT">
            <div className="a-dossier-header">
                <div className="p-title">
                    <FaUser className="a-icon-neon" />
                    <h2 className='m-0'><strong>ABOUT:</strong> Somen Karmakar</h2>
                </div>
                <div className="a-clearance">CLEARANCE: LEVEL_4</div>
            </div>

            <div className="a-content-grid">
                <div className="a-metadata">
                    <div className="a-meta-item">
                        <span className="a-meta-label">STATUS</span>
                        <span className="a-meta-value a-blink">ACTIVE_DEV</span>
                    </div>
                    <div className="a-meta-item">
                        <span className="a-meta-label">SPECIALTY</span>
                        <span className="a-meta-value">FULLSTACK_DEV</span>
                    </div>
                    <div className="a-meta-item">
                        <span className="a-meta-label">CURRENT_LOCATION</span>
                        <span className="a-meta-value"><small>Kolkata, India</small></span>
                    </div>
                    <br />
                    <div className="a-meta-item">
                        <span className="a-meta-label">PERMANENT_LOCATION</span>
                        <span className="a-meta-value">West Bengal, India</span>
                    </div>
                </div>

                <div className="a-bio-description">
                    <p className="a-typing-text">
                        <span className="a-prompt">{">"}</span> I love creating new things using imagination and bringing them to life.
                    </p>
                    <p className="a-typing-text">
                        <span className="a-prompt">{">"}</span> Currently working on personal projects and learning new things.
                    </p>
                    <div className="a-social-cluster">
                        <a href="https://github.com/SomenKarmakar24" target="_blank" aria-label="Github" className='f-social-link'>
                            <FaGithub /> <span className="f-tooltip">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/somen-karmakar-74453724a/" target="_blank" aria-label="LinkedIn" className='f-social-link'>
                            <FaLinkedin /><span className="f-tooltip">LinkedIn</span>
                        </a>
                    </div>
                </div>

                <div className="a-action-block">
                    <a className="a-btn a-btn-main" href="#" target="_blank" rel="noopener noreferrer">
                        <FaDownload /> DOWNLOAD_CV
                    </a>
                    <button className="a-btn a-btn-outline" onClick={(e) => Scroll_To_Section(e, 'CONTACT')}>
                        <FaBriefcase /> HIRE_ME
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;