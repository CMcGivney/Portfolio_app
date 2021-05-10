import React from 'react'
import SocialFollow from './SocialFollow'
import distantStare from '../images/distantStare.jpg'
import Notes from '../Notes/PostItNotes'
import {Image, Card, Icon} from 'semantic-ui-react'
import './Contact.css'

const person = {
  name: "Chris McGivney",
  image: distantStare,
  imageAlt: "Snowboarder staring into the distance",
  devMeta: "Full Stack Developer",
  description: "When I'm not glued to my keyboard coding or reading Docs, I'm outdoors either running, mountain biking, snowboarding, or just walking the dog and kiddo.",
  strong:"Come join me!",
  email:"CmMcGivney84@gmail.com",
  emailHref: "mailto:cmmcgivney84@gmail.com?Subject=Hello%20Chris"
}

const Contact = () => (
<div className="contact-container">
  <div className="card">
    <Card raised >
      <Card.Content>
        <Image
           className="imgBox "
           floated='left'
           src={person.image} 
           alt={person.imageAlt}
           size='tiny'
           />
        <Card.Header>{person.name}</Card.Header>
        <Card.Meta>{person.devMeta}</Card.Meta>
        <Card.Description>{person.description}</Card.Description>
        <Card.Description>{person.strong}</Card.Description>
      </Card.Content>
       <Card.Content className="socialFollows">
        <SocialFollow/>
       </Card.Content>
        <Card.Content className="emailBox">
           <Icon name="mail"/>
           <a 
              rel= "noopener noreferrer"
              target= "_blank"
              className="email" 
              href={person.emailHref}>
              {person.email}
           </a>
       </Card.Content>
     </Card>
    </div> 
    <div className="notes">
     <Notes/> 
    </div>
  </div>
)

export default Contact