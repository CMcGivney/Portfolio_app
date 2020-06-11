import React from "react"
import {Icon} from 'semantic-ui-react'

export default function SocialFollow() {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/chris-mcgivney/"
        className="LinkedIn social"
      >
        <Icon name="linkedin" size="big" />
      </a>
     
     <a 
       target="_blank"
       rel="noopener noreferrer"
       href="https://twitter.com/chris_mcgivney" className="twitter social"
       >
       <Icon size="big" name="twitter" />
     </a>
     <a
       target="_blank"
       rel="noopener noreferrer"
       href="https://www.instagram.com/nomadic_boots/"
       className="instagram social"
     >
       <Icon size="big" name="instagram" />
     </a>
     <a
       target="_blank"
       rel="noopener noreferrer"
       href="https://github.com/CMcGivney"
       className="github social"
     >
       <Icon size="big" name="github" />
     </a>
   </div>

  )
}
