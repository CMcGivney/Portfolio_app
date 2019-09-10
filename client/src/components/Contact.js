import React from 'react'
import { Header, Grid, Image} from 'semantic-ui-react'
import SocialFollow from './SocialFollow'
import headShot2 from '../images/headShot2.jpeg'
import pcPano from '../images/pcPano.jpg'
import distantStare from '../images/distantStare.jpg'
import Notes from './PostItNotes'


const Contact = () => (

  <Grid stackable columns= 'equal'>
    <Grid.Row>
      <Grid.Column>
        <Image 
           src={pcPano} 
           alt="Panoramic View of Park City, Utah"
           centered
           />
       </Grid.Column>
     </Grid.Row>
    <Grid.Row className="contact-headerBox">
      <Grid.Column className="aboutMe">
          <Header as="h3">
              <SocialFollow/>
          </Header>
      </Grid.Column>
        <Grid.Column className="aboutMe">
            <Header as="h3" textAlign="center">Drop Me A Email</Header>
            <a href="mailto:cmmcgivney84@gmail.com">CmMcGivney84@gmail.com</a>
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