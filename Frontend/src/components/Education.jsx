import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../assets/css/Education.css';

const educationData = [
    {
        degree: "Bachelor of Technology (B.Tech)",
        field: "Computer Science & Engineering",
        institution: "Your University Name",
        location: "Kolkata, West Bengal",
        year: "2020 - 2024",
        grade: "CGPA: 8.5 / 10",
    },
    {
        degree: "Higher Secondary (12th)",
        field: "Science (PCM)",
        institution: "Your College Name",
        location: "West Bengal",
        year: "2018 - 2020",
        grade: "Percentage: 85%",
    },
    {
        degree: "Secondary (10th)",
        field: "General",
        institution: "Your School Name",
        location: "West Bengal",
        year: "2018",
        grade: "Percentage: 90%",
    },
];

const Education = () => {
    return (
        <section className="e-section" id="EDUCATION">
            <div className="e-container">
                <div className="a-dossier-header">
                    <div className="p-title">
                        <FaGraduationCap className="a-icon-neon" />
                        <h2 className='m-0'><strong>EDUCATION:</strong> Somen Karmakar</h2>
                    </div>
                    <div className="a-clearance">CLEARANCE: LEVEL_3</div>
                </div>

                <div className="e-timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className="e-card">
                            <div className="e-card-index">NODE_0{index + 1}</div>
                            <div className="e-card-body">
                                <h3 className="e-degree">{edu.degree}</h3>
                                <p className="e-field">&gt; {edu.field}</p>
                                <p className="e-institution">{edu.institution}</p>
                                <div className="e-meta">
                                    <span><FaCalendarAlt /> {edu.year}</span>
                                    <span><FaMapMarkerAlt /> {edu.location}</span>
                                    <span className="e-grade">{edu.grade}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
