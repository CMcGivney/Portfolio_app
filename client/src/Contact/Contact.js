import React from 'react'
import { Header, Grid, Image, Icon} from 'semantic-ui-react'
import SocialFollow from './SocialFollow'
import pcPano from '../images/pcPano.jpg'
import distantStare from '../images/distantStare.jpg'
import Notes from '../Notes/PostItNotes'


const Contact = () => (

  <Grid stackable columns= 'equal' style={{padding: "25px", marginTop: "25px"}}>
    <Grid.Row>
      <Grid.Column>
        <Image   
           className="imgBoxContact"
           src={pcPano} 
           alt="Panoramic View of Park City, Utah"
           width="100%"
           height="100%"
           centered
           />
       </Grid.Column>
     </Grid.Row>
    <Grid.Row className="contact-headerBox">
        <Grid.Column className="aboutMe">
         <div>
          <p>When Im not glued to my keyboard studying. I'm outdoors, running, mtn. biking, snowboarding, or just walking the dog and kiddo. Come join me!</p>
         </div>
       </Grid.Column>
      <Grid.Column className="aboutMe">
          <Header as="h3">
              <SocialFollow/>
          </Header>
      </Grid.Column>
        <Grid.Column className="aboutMe">
            <Header as="h3" textAlign="center">Drop Me A Email</Header>
            <Icon name="mail"/><a href="mailto:cmmcgivney84@gmail.com">CmMcGivney84@gmail.com</a>
         </Grid.Column>
        <Grid.Column>
        <Image 
           className="imgBox"
           src={distantStare} 
           alt="Snowboarder staring into the distance"
           height="150px"
           width="150px"
           centered
           />
       </Grid.Column>
     </Grid.Row>
    <Grid.Row>
      <Grid.Column className="noteBox">
        <Notes/> 
      </Grid.Column>
    </Grid.Row>
  </Grid>
  
)

export default Contact;