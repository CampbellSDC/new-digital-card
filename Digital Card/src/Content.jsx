import React from 'react'

function Content(){
    return (
        <div className="content-container">
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