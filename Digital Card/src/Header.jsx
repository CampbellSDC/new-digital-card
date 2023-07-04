import React from "react"
import imgStephen from './assets/Stephen_Headshot_small.png'



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
                
                
            </header>

        </>
    )
}

export default Header