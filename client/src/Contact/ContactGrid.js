import React from 'react'
import SocialFollow from './SocialFollow'
import distantStare from '../images/distantStare.jpg'
import Notes from '../Notes/PostItNotes'
import {Image, Card, } from 'semantic-ui-react'
import './Contact.css'

const Contact = () => (
  <>
<div className="contact-container">
  <div className="contact_text">
    <Card raised>
      <Card.Content>
        <Image
           className="imgBox "
           floated='left'
           src={distantStare} 
           alt="Snowboarder staring into the distance"
           size='tiny'
           />
        <Card.Header>Chris McGivney</Card.Header>
        <Card.Meta>Developer</Card.Meta>
        <Card.Description>
         When I'm not glued to my keyboard studying and coding, I'm outdoors, either running, mountain biking, snowboarding, or just walking the dog and kiddo.
         <strong>Come join me!</strong>
        </Card.Description>
      </Card.Content>
       <Card.Content className="socialFollows">
        <SocialFollow/>
       </Card.Content>
        <Card.Content className="emailBox">
           <a className="email" href="mailto:cmmcgivney84@gmail.com?Subject=Hello%20Chris">CmMcGivney84@gmail.com</a>
       </Card.Content>
    </Card>
  </div>
  <div className="notes">
    <Notes/> 
  </div>
</div>
</>
)

export default Contact