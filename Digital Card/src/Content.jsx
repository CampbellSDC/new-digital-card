import React from 'react'

function Content(){
    return (
        <div className="content-container">
            <div className="about-me">
                <h3 className="about-me-title">About Me</h3>

                <p className="about-me-text">Why I enjoy frontend development</p>
            </div>

            <div className="interests-container">
                <h3 className="interests-title">Interests</h3>
                <p className="interests-text">Some other personal information about me</p>
            </div>

        </div>
    )
}

export default Content