import React from 'react'
import SocialFollow from './SocialFollow'
import distantStare from '../images/distantStare.jpg'
import Notes from '../Notes/PostItNotes'
import './Contact.css'

const Contact = () => (
<div className="contact-container">
  <div className="contact_text">
    <div className="contactHead">Hey...</div>
    <p>When I'm not glued to my keyboard studying and coding, I'm outdoors, either running, mountain biking, snowboarding, or just walking the dog and kiddo.</p>
    <div className="contactHead" style={{textAlign: "center"}}>Join me!</div>
  </div>
  <div className="socialFollows">
   <SocialFollow/>
  </div>
  <div className="emailBox">
    <div className="contactHead">Drop Me A Email</div>
     <a className="email" href="mailto:cmmcgivney84@gmail.com?Subject=Hello%20Chris">CmMcGivney84@gmail.com</a>
  </div>
  <div className="headShot_img">
      <img
           className="imgBox"
           src={distantStare} 
           alt="Snowboarder staring into the distance"
           height="150px"
           width="150px"
           
           />
  </div>
  <div className="notes">
    <Notes/> 
  </div>
</div>
)

export default Contact