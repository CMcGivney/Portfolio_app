import React from 'react';
import { Header, Image, } from 'semantic-ui-react';
import dashboard2 from '../images/dashboard2.png'
import RPS from '../images/RPS.png'
import CPA from '../images/cpa-site.png'


import './Project.css'

const Projects = () => (
  <div className="project-container">
    <div className="content1 contentBox">
       <Header as="h3" textAlign="center">Dev Point Labs Dashboard</Header>
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
        <p>Check it out on heroku: <a href="https://dpl-dashboard.herokuapp.com/">Dashboard Site</a></p>
      </div>
       <div className="img1">
         <Image 
           className="imgBoxHome"
           href="https://dpl-dashboard.herokuapp.com/"
           src={dashboard2} 
           alt="Dev Point Labs DashBoard Project"
          />
       </div>
     
      <div className="content2 contentBox">
       <Header as="h3" textAlign="center">A Silly Little JS Rock, Paper Scissor Game</Header>
         <p>This game was created with HTML, CSS and Javascript. It was great practice. 
            I am still learning the in's and out's of JavaScript but by doing this exercise I really start to see the power of this language to traverse and manipulate the DOM. </p>
          <p><a href="https://js-rps-game.herokuapp.com/">Play the Game?!</a> Or check out my code on GitHub: <a href="https://github.com/CMcGivney/RPS">https://github.com/CMcGivney/RPS</a></p>
      </div>
      <div className="img2">
        <Image 
          className="imgBoxHome"
          href="https://js-rps-game.herokuapp.com/"
          src={RPS} 
          alt="A JS made Rock, Paper, Scissor Game"
         />
        </div>
      <div className="content3 contentBox">
       <Header as="h3" textAlign="center">Business Website</Header>
       <p>I was asked to update an Adobe Flash business site. I followed the layout and style of the Flash site using React. Quickly I realized that for this kind of static site I could easily make it with just pure Javascript, CSS and HTML. So that will be my next project. This was a fun exercise in replicating a layout/style page.</p>
       <p>Check it out on heroku: <a href="https://ventura-cpa-site.herokuapp.com/">Business Site</a></p>
      </div>
      <div className="img3">
        <Image 
          className="imgBoxHome"
          href="https://ventura-cpa-site.herokuapp.com/"
          src={CPA} 
          alt="A JS made Rock, Paper, Scissor Game"
         />
        </div>
  </div>
      
  
)


export default Projects;