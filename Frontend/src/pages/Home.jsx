import React from 'react'
import { About, Contact, Skills, Hero, Project, Service, GitContribution, Education } from '../components/Components_Import'

const Home = () => {
    return (
        <div className='Home-container'>
                
            {/* Hero Section */}
            <Hero />

            <GitContribution />

            {/* About Section */}
            <About />

            {/* Education Section */}
            <Education />

            {/* Skills Section */}
            <Skills />

            {/* Project Section */}
            <Project />

            {/* Contact Section */}
            <Contact />

        </div>
    )
}

export default Home