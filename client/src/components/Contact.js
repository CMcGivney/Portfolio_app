import React from 'react'
import { Header, Grid, Image} from 'semantic-ui-react'
import SocialFollow from './SocialFollow'
import headShot2 from '../images/headShot2.jpeg'
import Notes from './PostItNotes'


const Contact = () => (

  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column className="contact-headerBox">
        <Header as="h3" textAlign="center">Drop Me A Email</Header>
        <a href="mailto:cmmcgivney84@gmail.com">CmMcGivney84@gmail.com</a>
        <Header as="h3">
        <SocialFollow/>
        </Header>
      </Grid.Column>
      <Grid.Column>
      <Image 
           className="imgBox"
           src={headShot2} 
           alt="MyHeadShot"
           height="300px"
           width="300px"
           centered
           />
      </Grid.Column>
     </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column className="noteBox">
      <Notes/> 
      </Grid.Column>
    </Grid.Row>
  </Grid>
  
)

export default Contact;