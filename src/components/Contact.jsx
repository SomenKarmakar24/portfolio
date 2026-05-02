import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLocationDot, FaPhone, FaEnvelope, FaPaperPlane, FaTerminal } from 'react-icons/fa6';
import "../assets/css/Contact.css";
import Typing_Animation from '../utils/Typing_Animation';
import { FaShieldAlt } from 'react-icons/fa';

function Contact() {
    const primaryLocation = "West Bengal, India";
    const currentLocation = "Kolkata, India";

    const [state, handleSubmit] = useForm("xbdwdlva");

    // Derive status label and class from Formspree state
    const statusLabel = state.succeeded
        ? "DATA_PACKET_DELIVERED"
        : state.submitting
        ? "INITIALIZING_TRANSMISSION..."
        : state.errors?.length > 0
        ? "TRANSMISSION_FAILED"
        : "AWAITING_INPUT";

    const statusClass = state.succeeded
        ? "status-success"
        : state.submitting
        ? "status-processing"
        : state.errors?.length > 0
        ? "status-error"
        : "status-idle";

    return (
        <section id='CONTACT' className="c-main-section">
            {/* Ambient Scanline Effect */}
            <div className="c-scanline"></div>

            <div className="c-container">
                <div className="c-terminal-header">
                    <h2 className="c-title">
                        <FaShieldAlt className="c-icon-gap" />
                        ESTABLISH_SECURE_CONNECTION
                        <Typing_Animation
                            words={["...."]}
                            speed={150}
                            eraseSpeed={1}
                            typingDelay={50}
                            backDelay={50}
                        />
                    </h2>
                    <div className="c-status-line">
                        <span className="c-label">SYSTEM_LOG:</span>
                        <span className={`c-result ${statusClass}`}>{statusLabel}</span>
                    </div>
                </div>

                <div className="c-grid">
                    {/* ************* LEFT METADATA INFORMATION *************** */}
                    <div className="c-contact-left">
                        <div className="c-detail-card">
                            <div className="c-icon-frame"><FaLocationDot /></div>
                            <div className="c-detail-text">
                                <h3>LOCATION_ID</h3>
                                <p>Primary Address: <br /><i>{primaryLocation}</i></p>
                                <p>Current Address: <br /><i>{currentLocation}</i></p>
                            </div>
                        </div>

                        <div className="c-detail-card">
                            <div className="c-icon-frame"><FaPhone /></div>
                            <div className="c-detail-text">
                                <h3>VOICE_CHANNEL</h3>
                                <p>+91 9064650410</p>
                            </div>
                        </div>

                        <div className="c-detail-card">
                            <div className="c-icon-frame"><FaEnvelope /></div>
                            <div className="c-detail-text">
                                <h3>PRIMARY_ADDR</h3>
                                <p>somenkarmakar.info2432@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* ************* RIGHT CONTACT FORM *************** */}
                    <div className="c-contact-right">
                        <div className="c-form-window">
                            <div className="c-window-bar">
                                <div className="c-dots">
                                    <span className="c-dot red"></span>
                                    <span className="c-dot yellow"></span>
                                    <span className="c-dot green"></span>
                                </div>
                                <span className="c-filename">uplink_portal.v1.0.4</span>
                            </div>

                            {/* Success state — replaces form after send */}
                            {state.succeeded ? (
                                <div className="c-success-screen">
                                    <div className="c-success-banner">
                                        ✔ UPLINK ESTABLISHED — MESSAGE SENT SUCCESSFULLY
                                    </div>
                                    <p className="c-success-sub">
                                        &gt; TRANSMISSION COMPLETE. STANDING BY FOR RESPONSE_
                                    </p>
                                </div>
                            ) : (
                                /* * CONTACT FORM * */
                                <form className="c-actual-form" onSubmit={handleSubmit}>
                                    <div className="c-input-box">
                                        <label htmlFor="name"><FaTerminal /> SOURCE_IDENTIFIER</label>
                                        <input id="name" type="text" placeholder="Full Name" name="name" required />
                                        <ValidationError field="name" prefix="Name" errors={state.errors} className="c-field-error" />
                                    </div>

                                    <div className="c-input-box">
                                        <label htmlFor="email"><FaTerminal /> SMTP_RETURN_PROTOCOL</label>
                                        <input id="email" type="email" placeholder="your_email@gmail.com" name="email" required />
                                        <ValidationError field="email" prefix="Email" errors={state.errors} className="c-field-error" />
                                    </div>

                                    <div className="c-input-box">
                                        <label htmlFor="subject"><FaTerminal /> PACKET_SUBJECT</label>
                                        <input id="subject" type="text" placeholder="Subject" name="subject" required />
                                        <ValidationError field="subject" prefix="Subject" errors={state.errors} className="c-field-error" />
                                    </div>

                                    <div className="c-input-box">
                                        <label htmlFor="message"><FaTerminal /> DATA_CONTENT</label>
                                        <textarea id="message" placeholder="Enter message payload..." name="message" required rows="4"></textarea>
                                        <ValidationError field="message" prefix="Message" errors={state.errors} className="c-field-error" />
                                    </div>

                                    <button type="submit" className="c-submit-btn" disabled={state.submitting}>
                                        {state.submitting ? <div className="c-loader"></div> : <FaPaperPlane />}
                                        <span>{state.submitting ? "ENCRYPTING..." : "INITIATE_TRANSFER"}</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;