import React from 'react'
import SocialFollow from './SocialFollow'
// import pcPano from '../images/pcPano.jpg'
import distantStare from '../images/distantStare.jpg'
import Notes from '../Notes/PostItNotes'
import './Contact.css'

const Contact = () => (
<div className="contact-container">

  {/* <div className="header_img">
   <img   
           className="imgBoxContact"
           src={pcPano} 
           alt="Panoramic View of Park City, Utah source: phone"
           width="100%"
           height="100%"
           />
  </div> */}
  <div className="contact_text">
    <p>Hey...</p>
    <p>When I'm not glued to my keyboard studying and coding, I'm outdoors, either running, mountain biking, snowboarding, or just walking the dog and kiddo.</p>
    <p>Join me!</p>
  </div>
  <div className="socialFollows">
   <SocialFollow/>
  </div>
  <div className="emailBox">
    <h3>Drop Me A Email</h3>
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