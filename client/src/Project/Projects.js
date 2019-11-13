import React from 'react';
import { Header, Image, } from 'semantic-ui-react';
// import dashboard from '../images/dashboard.png'
import dashboard2 from '../images/dashboard2.png'
import RPS from '../images/RPS.png'
import './Project.css'

const Projects = () => (
  <div className="project-container">
    <div className="content1 contentBox">
       <Header as="h3" textAlign="center">Dev Point Labs Dash Board</Header>
        <p> 
         This was a group project I worked on at school.  
         I followed a wire frame that was provided for the layout. 
         My main tasks included Instagram API, Twitter API, YouTube embed, current Time/Date, daily topic and quotes components/database. 
        </p>
        <p>
         Even though we didn't finish it to the standards we had envisioned, I feel we all learned a lot. 
         Working together, as a team, presented it’s own challenges: GitHub merge conflicts, coders being in different locations, differing levels of expertise and communication skills, etc.  With my restaurant management background, I found myself well-suited to take the lead within our team. 
         I made sure we had quick daily meetings or check-ins with team members to troubleshoot and brainstorm, all while keeping morale up, especially on workdays that were tough on us all.
        </p>
        <p>
         There remains a few bugs to fix, like getting the Twitter Api to display.  Although I am finished with the class, I continue to work on these problems as a side project and will show my results to Dev Point Labs when I feel satisfied that it is finished.  My hope is that they will use this experience will benefit future coders in their classes.
        </p>
       <a href="https://dpl-dashboard.herokuapp.com/">https://dpl-dashboard.herokuapp.com/</a>
      </div>
    <div className="img1">
        {/* <img 
          className="imgBoxHome"
          src={dashboard} 
          alt="Dev Point Labs DashBoard Project"
         /> */}
         <img 
           className="imgBoxHome"
           src={dashboard2} 
           alt="Dev Point Labs DashBoard Project"
          />
    </div>
     
      <div className="content2 contentBox">
       <Header as="h3" textAlign="center">A Silly Little JS Rock, Paper Scissor Game</Header>
         <p>This game was created with HTML, CSS and Javascript. It was great practice. 
         I am still learning the in's and out's of JavaScript but by doing this exercise I really start to see the power of this language to traverse and manipulate the DOM. </p>
         <a href="https://github.com/CMcGivney/RPS">https://github.com/CMcGivney/RPS</a>
      </div>
      <div className="img2">
        <Image 
          className="imgBoxHome"
          src={RPS} 
          alt="A JS made Rock, Paper, Scissor Game"
         />
        </div>
       </div>
      
  
)


export default Projects;