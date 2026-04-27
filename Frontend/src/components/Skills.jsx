import React from 'react';
import { FaBrain, FaCode, FaDatabase, FaTerminal, FaTools } from 'react-icons/fa';
import "../assets/css/Skills.css";

const skillCategories = [
    {
        icon: <FaCode />,
        skill_type: "FRONTEND_PROTOCOLS",
        skills: [
            { name: "React.js", level: 85 },
            { name: "HTML & CSS", level: 90 },
            { name: "JavaScript", level: 80 },
        ]
    },
    {
        icon: <FaDatabase />,
        skill_type: "BACKEND_LOGIC",
        skills: [
            { name: "Python", level: 75 },
            { name: "REST API", level: 80 },
            { name: "PostgreSQL", level: 70 },
        ]
    },
    {
        icon: <FaTools />,
        skill_type: "TOOLS",
        skills: [
            { name: "Git & GitHub", level: 85 },
            { name: "VS Code", level: 90 },
            { name: "Postman", level: 75 },
        ]
    },
];

const Skills = () => {
    return (
        <section className="s-skills-section" id="SKILLS">
            <div className="s-container">
                <section className="a-dossier-header">
                    <div className="a-header-title">
                        <FaTerminal className="a-icon-neon" />
                        <h2><strong>SKILLS:</strong></h2>
                    </div>
                </section>

                <section className="s-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="s-card">
                            <div className="s-card-header">
                                {category.icon}
                                <h3 className='m-0'>{category.skill_type}</h3>
                            </div>
                            <div className="s-skill-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="s-skill-item">
                                        <div className="s-skill-info">
                                            <span>{skill.name}</span>
                                            <span className="s-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="s-progress-bar">
                                            <div className="s-progress-fill" style={{ width: `${skill.level}%` }}>
                                                <div className="s-glimmer"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
};

export default Skills;