import React from 'react';
import { Header, Grid, Image, } from 'semantic-ui-react';
import dashboard from '../images/dashboard.png'
import dashboard2 from '../images/dashboard2.png'

const Projects = () => (
  <Grid stackable>
    <Grid.Row column={2}>
      <Grid.Column width={8} className="headerBox">
       <Header as="h3" textAlign="center">Dev Point Labs Dash Board</Header>
       <p> 
         This was a group project I worked on at school.  
         I followed a wire frame that was provided, for the layout. 
         My main tasks included Instagram API, Twitter API, YouTube embed, current Time/Date, daily topic and quotes components/database. 
       </p>
       <p>
       Even though we didn't finish it to the standards we all had in mind, I feel we all learned a lot. 
       Working together as a team, was a big one, especially with GitHub merge conflicts, and of course communication. 
       With my restaurant management background, I jumped at the chance to take lead on this. 
       I made sure we had quick daily meetings/check-ins, sit-downs with team members to troubleshoot and brainstorm, usually when I was stuck and needed a break, all while keeping morale up on tough workdays.
       </p>
       <p>
         A few bugs to fix, for sure, like getting the Twitter Api to display, which works on my local server but not when deployed.
         I will continue to work on this as a side project and show it to Dev Point Labs when I feel its finished. My hope is that they will use it for future cohorts
       </p>
       <a href="https://dpl-dashboard.herokuapp.com/">https://dpl-dashboard.herokuapp.com/</a>
      </Grid.Column>
    <Grid.Column width={8}>
      <div className="imageFlex">
       <div>
        <Image 
          className="imgBoxHome"
          src={dashboard} 
          alt="Dev Point Labs DashBoard Project"
          size="big"
         />
        </div>
        <div>
         <Image 
           className="imgBoxHome"
           src={dashboard2} 
           alt="Dev Point Labs DashBoard Project"
           size="big"
          />
        </div>
     
       </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)


export default Projects;