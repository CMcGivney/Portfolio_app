import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLinkedin, faTwitter, faInstagram, faGoogle, } from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>Let's Connect</h3>
     
      <a
        href="https://www.linkedin.com/in/chris-mcgivney/"
        className="LinkedIn social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/chris_mcgivney" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/nomadic_boots/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  )
}
