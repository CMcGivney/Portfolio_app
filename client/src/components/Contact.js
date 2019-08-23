import React from 'react'
import { Header, Grid, Image} from 'semantic-ui-react'
import SocialFollow from './SocialFollow'
import headShot1 from '../images/headShot1.jpg'
import Notes from './PostItNotes'


const Contact = () => (
  <>
  <Grid>
    <Grid.Row columns={1}>
      <Grid.Column className="headerBox">
       <Header as="h2" textAlign="center">Contact Me</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
       <Grid.Column className="emailBox">
        <Header as="h5" textAlign="center">Email:</Header>
        <a href="mailto:cmmcgivney84@gmail.com">CmMcGivney84@gmail.com</a>
       </Grid.Column>
        <Grid.Column>
         <Image 
           className="imgBox"
           src={headShot1} 
           alt="MyHeadShot"
           height="200px"
           width="200px"
           centered
           />
         </Grid.Column>
       <Grid.Column className="socialBox">
        <SocialFollow/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column className="noteBox">
      <Notes/> 
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </>
)

export default Contact;