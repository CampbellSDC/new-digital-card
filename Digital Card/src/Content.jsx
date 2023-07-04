import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"
import {fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function Content(){
    return (
        <div className="content-container">
            <h2 className="name">Stephen Campbell</h2>
                <p>Frontend Developer</p>
               <a className="website-link" href="https://scampbelldev.com" target="_blank">scampbelldev.com</a>
                <div className="btn-container">
               <a href="mailto: scampbellatc@gmail.com"><button className="btn-primary email"><FontAwesomeIcon className="btn-icon" icon={faEnvelope} />  Email</button></a> 
                <a href="https://www.linkedin.com/in/stephen-campbell-a7894114/" target="_blank"><button className="btn-secondary linkedin"><FontAwesomeIcon className="btn-icon" icon="fa-brands fa-linkedin" />  LinkedIn</button></a>
                </div>

            <div className="about-me">
                <h3 className="about-me-title">About Me</h3>

                <p className="about-me-text">I am a frontend developer who also has experience working with backend (Node, Express and MongoDB). 
                I enjoy the creative process, as well as providing unique solutions using best practices within the tech industry. I am always 
                looking for new and interesting things to learn to further my skillset.</p>
            </div>

            <div className="interests-container">
                <h3 className="interests-title">Interests</h3>
                <p className="interests-text">As former healthcare worker, I am interested in all things science. I am also a self-taught woodworker, creating custom 
                furniture and other fine woodoworking pieces. Music, guitar, piano...and finding the best patio spots around town.</p>
            </div>

        </div>
    )
}

export default Content