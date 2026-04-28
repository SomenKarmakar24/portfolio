import React from 'react';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import '../assets/css/Certificate.css';
import cert1 from '../assets/img/cert_1.png';
import cert2 from '../assets/img/cert_2.png';
import cert3 from '../assets/img/cert_3.png';
import cert4 from '../assets/img/cert_4.jpg';
import cert5 from '../assets/img/cert_5.jpg';
import cert6 from '../assets/img/cert_6.png';
import cert7 from '../assets/img/cert_7.png';
import cert8 from '../assets/img/cert_8.png';

const certificateData = [
    {
        id: 1,
        title: "Soft Skill Development",
        issuedBy: "NPTEL",
        date: "JAN 2023",
        credentialUrl: null,
        image: cert4,
    },
    {
        id: 2,
        title: "Ethics In Engineering Practice",
        issuedBy: "NPTEL",
        date: "FEB 2023",
        credentialUrl: null,
        image: cert5,
    },
    {
        id: 3,
        title: "Write Professional Emails in English",
        issuedBy: "Coursera",
        date: "APR 2023",
        credentialUrl: "https://coursera.org/verify/AXW7HZ2AQPPF",
        image: cert2,
    },
    {
        id: 4,
        title: "Successful Career Development",
        issuedBy: "Coursera",
        date: "JUN 2023",
        credentialUrl: "https://coursera.org/verify/GL4TGFMWN6YH",
        image: cert1,
    },
    {
        id: 5,
        title: "Java Programming: Solving Problems with Software",
        issuedBy: "Coursera",
        date: "SEP 2023",
        credentialUrl: "https://coursera.org/verify/Y8ZWGDKBY5U6",
        image: cert3,
    },
    {
        id: 6,
        title: "Introduction to Artificial Intelligence",
        issuedBy: "IBM",
        date: "SEP 2024",
        credentialUrl: null,
        image: cert6,
    },
    {
        id: 7,
        title: "Python",
        issuedBy: "HackerRank",
        date: "FEB 2025",
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/87c2280c76d9",
        image: cert7,
    },
    {
        id: 8,
        title: "Introduction to Internet of Things",
        issuedBy: "NPTEL",
        date: "NOV 2025",
        credentialUrl: null,
        image: cert8,
    },
];

const Certificate = () => {
    return (
        <section className="cert-section" id="CERTIFICATES">
            <div className="cert-container">
                <div className="a-dossier-header">
                    <div className="p-title">
                        <FaCertificate className="a-icon-neon" />
                        <h2 className='m-0'><strong>CERTIFICATES</strong></h2>
                    </div>
                    <div className="a-clearance">TOTAL: [{certificateData.length}]</div>
                </div>

                <div className="cert-grid">
                    {certificateData.map((cert) => (
                        <div key={cert.id} className="cert-card">
                            <div className="cert-terminal-header">
                                <div className="p-dots">
                                    <span className="p-dot red"></span>
                                    <span className="p-dot yellow"></span>
                                    <span className="p-dot green"></span>
                                </div>
                                <div className="p-id">CERT_0{cert.id}</div>
                            </div>
                            <div className="cert-image-wrapper">
                                <img src={cert.image} alt={cert.title} loading="lazy" />
                            </div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">&gt; ISSUED_BY: {cert.issuedBy}</p>
                                <div className="cert-meta">
                                    <span><FaCalendarAlt /> {cert.date}</span>
                                </div>
                                <a href={cert.credentialUrl || cert.image} target="_blank" rel="noreferrer" className="cert-verify-btn">
                                    <FaExternalLinkAlt /> VERIFY_CREDENTIAL
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificate;
