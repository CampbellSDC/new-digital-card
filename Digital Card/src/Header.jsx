import React from "react"
import imgStephen from './assets/Stephen.jpg'

const imageURL = [imgStephen]


function Header() {
    return(
        <>
            <header>
                <div className="img-container">
                {
                    imageURL.map(image => 
                        <div className="image">
                            <img src={image} alt="photo of Stephen against brick wall" />
                        </div>
                        )
                }
                </div>
                
                <h2 className="name">Stephen Campbell</h2>
                <p>Frontend Developer</p>
                <p><a href="#">scampbelldev.com</a></p>
                <div className="btn-container">
                <button className="btn-primary email">Email</button>
                <button className="btn-secondary linkedin">LinkedIn</button>
                </div>
            </header>

        </>
    )
}

export default Header