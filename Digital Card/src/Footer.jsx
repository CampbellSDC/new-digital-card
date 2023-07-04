import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import {fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function Footer(){
    return(
        <div className="footer-container">
           <a href="https://twitter.com/scampbellatc" target="_blank"><FontAwesomeIcon className="footer-icon twitter" icon="fa-brands fa-square-twitter fa-beat" /></a> 


           <a href="https://www.facebook.com/profile.php?id=2347945" target="_blank"><FontAwesomeIcon className="footer-icon facebook" icon="fa-brands fa-square-facebook" /></a>

           

                
           <a href="https://www.instagram.com/wildwoodside/" target="_blank">
               <div className="bg">
                    <div className="inner">
                        <FontAwesomeIcon className="footer-icon instagram" icon="fa-brands fa-square-instagram" />
                     </div>
               </div> 
            </a> 
           <a href="https://github.com/CampbellSDC" target="_blank"><FontAwesomeIcon className="footer-icon github" icon="fa-brands fa-square-github" /></a> 

        </div>

    )
}

export default Footer