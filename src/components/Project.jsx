import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaChevronDown, FaChevronUp, FaReact } from 'react-icons/fa';
import { SiVite, SiJavascript, SiCss3, SiBootstrap, SiReactrouter, SiOpenai, SiTailwindcss, SiFirebase, SiAxios, SiTypescript, SiNextdotjs } from 'react-icons/si';
import "../assets/css/Project.css";
import portfolioThumbnail from '../assets/img/portfolio_thumbnail.png';
import adMorphThumbnail from '../assets/img/AdMorph.jpg';

const projectData = [
    {
        id: 1,
        title: "Developer Portfolio",
        description: "A hacker-themed full-stack developer portfolio with Matrix rain background, terminal UI, dynamic sections and Web3Forms contact integration.",
        github_url: "https://github.com/SomenKarmakar24/portfolio",
        live_url: "https://somenkarmaka.me",
        image: portfolioThumbnail,
        tech: [
            { name: "React.js", icon: <FaReact style={{color: '#61DAFB'}} /> },
            { name: "Vite", icon: <SiVite style={{color: '#646CFF'}} /> },
            { name: "JavaScript", icon: <SiJavascript style={{color: '#F7DF1E'}} /> },
            { name: "CSS3", icon: <SiCss3 style={{color: '#1572B6'}} /> },
            { name: "Bootstrap", icon: <SiBootstrap style={{color: '#7952B3'}} /> },
            { name: "React Router", icon: <SiReactrouter style={{color: '#CA4245'}} /> },
        ]
    },
    {
        id: 2,
        title: "AdMorph - AI Ad Generator",
        description: "AI-driven system that auto-generates creative product advertisements from user inputs like product details and target audience, using ML and NLP to deliver engaging, customizable ad content.",
        github_url: "https://github.com/SomenKarmakar24/AdMorph",
        live_url: null,
        image: adMorphThumbnail,
        tech: [
            { name: "Next.js 13+", icon: <SiNextdotjs style={{color: '#ffffff'}} /> },
            { name: "React + TypeScript", icon: <SiTypescript style={{color: '#3178C6'}} /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss style={{color: '#06B6D4'}} /> },
            { name: "Firebase", icon: <SiFirebase style={{color: '#FFCA28'}} /> },
            { name: "OpenAI API", icon: <SiOpenai style={{color: '#00A67E'}} /> },
            { name: "Axios", icon: <SiAxios style={{color: '#5A29E4'}} /> },
        ]
    },
];

const Project = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const defaultLimit = isMobile ? 3 : 6;
    const visibleProjects = showAll ? projectData : projectData.slice(0, defaultLimit);

    return (
        <section className="p-project-section" id="PROJECTS">
            <div className="p-container">
                <div className="a-dossier-header">
                    <div className="p-title">
                        <FaFolderOpen className="a-icon-neon" />
                        <h2 className='m-0'>
                            <strong>PROJECTS:</strong>
                            <span className="p-count-badge">[{projectData.length}]</span>
                        </h2>
                    </div>
                </div>

                <div className="p-grid">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`p-terminal-card ${activeCard === project.id ? 'is-active' : ''}`}
                            onClick={() => setActiveCard(prev => prev === project.id ? null : project.id)}
                        >
                            <div className="p-terminal-header">
                                <div className="p-dots">
                                    <span className="p-dot red"></span>
                                    <span className="p-dot yellow"></span>
                                    <span className="p-dot green"></span>
                                </div>
                                <div className="p-id">NODE_0{index + 1}</div>
                            </div>
                            <div className="p-card-body p-card-horizontal">
                                <div className="p-image-wrapper">
                                    {project.image 
                                        ? <img src={project.image} alt={project.title} loading="lazy" />
                                        : <div className="p-no-image">NO_PREVIEW_AVAILABLE</div>
                                    }
                                    <div className="p-overlay">
                                        <div className="p-links" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.github_url} target="_blank" rel="noreferrer" className="p-icon-btn"><FaGithub /></a>
                                            <a href={project.live_url || '#'} target={project.live_url ? "_blank" : "_self"} rel="noreferrer" className={`p-icon-btn ${!project.live_url ? 'p-icon-btn-disabled' : ''}`} onClick={(e) => !project.live_url && e.preventDefault()}><FaExternalLinkAlt /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-info">
                                    <h3 className="p-project-name">{project.title}</h3>
                                    <p className="p-project-desc">{project.description}</p>
                                    <div className="p-tech-stack">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="p-tag">{t.icon} {t.name}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projectData.length === 0 && (
                    <p style={{ color: '#00ff41', textAlign: 'center', padding: '40px', fontFamily: 'monospace' }}>
                        &gt; PROJECTS LOADING... STAND BY_
                    </p>
                )}

                {projectData.length > defaultLimit && (
                    <div className="p-view-more-container">
                        <button className="p-view-more-btn" onClick={() => setShowAll(!showAll)}>
                            {showAll ? <>CLOSE CATALOG <FaChevronUp /></> : <>VIEW ALL PROJECTS ({projectData.length}) <FaChevronDown /></>}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Project;