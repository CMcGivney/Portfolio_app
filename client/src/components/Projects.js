import React from 'react';
import { Header, Grid, Image} from 'semantic-ui-react';
import dashboard from '../images/dashboard.png'

const Projects = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column className="headerBox">
       <Header as="h3" textAlign="center">Projects</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row column={2}>
      <Grid.Column width={8} className="headerBox">
       <Header as="h3" textAlign="center">Dev Point Labs Dash Board</Header>
       <p> 
         This was a group project I worked on at school.  
         I followed a wireframe that was provided, for the CSS layout. 
         My main tasks included Instagram API, Twitter API, Youtube embed, current Time/Date, daily topic and quotes components/database. 
       </p>
       <p>
           Eventhough we didn't finish it to the standards we all had in mind, I feel we all learned a lot.
           Working on a team, was a big one, especially with gitHub merge conflicts, and of course communication. 
           With my restaurant background I jumped at the chance to take lead on this. I made sure we had quick daily meetings/checkins, sit downs with team members to trouble shoot and brainstorm, all while keeping moral up on tough work days.
       </p>
       <p>
         A few bugs to fix, for sure, like getting the Twitter Api to display, which works on my local server but not when deployed.
         I will continue to work on this as a side project and show it to Dev Point Labs when I feel its finished. My hope is that they will use it for future cohorts
       </p>
       <a href="https://dpl-dashboard.herokuapp.com/">https://dpl-dashboard.herokuapp.com/</a>
      </Grid.Column>
      <Grid.Column width={8}>
      <Image 
          src={dashboard} 
          alt="Dev Point Labs DashBoard Project"
          width="600px"
          height="375px"
          centered
          />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)


export default Projects;