import React from 'react'
import { Header, Image, Grid } from 'semantic-ui-react'
import Alaska from '../images/Alaska.jpg'

const Home = () => (
  <Grid stackable >
    <Grid.Row>
       <Grid.Column className="headerBox">
        <Header as="h1" textAlign="center">Chris McGivney</Header>
        <p> Full Stack Web Developer | Ruby on Rails & React | Outdoor Adventure Fanatic</p>
       </Grid.Column>
     </Grid.Row>
      <Grid.Row column={2}>
       <Grid.Column width={8}>
         <Image 
          className="imgBoxHome"
          src={Alaska} 
          alt="Alaska"
          centered
          />
       </Grid.Column>
      <Grid.Column width={8}>
        <div className="aboutMe">
         <Header as="h3">About Me:</Header>
          <p>
            I live in Park City, Utah and have called Utah home for the past 15 years. I grew up in
            California, and was recruited from San Francisco to move here to open/run restaurants, a career
            that, at the time, I was very passionate about.
          </p>     
          <p>
            I am a new father, which is kind of how I got into coding and web development. 
            I was the day shift with the kiddo and, with lots of time on my hands, I started down the road of coding: 
            FreeCodeCamp here and StackOverflow there, until I finally decided to deep dive into a Full Stack Program through the University Of Utah at Dev Point Labs.
          </p>
          <p>
            I love my new career path, and have a new found passion for all that goes into software and web development. 
            I know I am very green in this business, but I believe that with hard work, and a strong sense of curiosity I will be successful and be able to thoughtfully
            contribute to this ever-changing tech landscape.
          </p>
        </div>
       <div className="aboutMe">
        <Header as="h3">Goals For A Dream Job:</Header>
         <ul>
          <li>Work at a company that I believe in the product, culture and community impact.</li>
          <li>A position that challenges and teaches me everyday.</li>
          <li>A position I can grow in and with, through hard work and thoughtful collaboration.</li>
          <li>Is it too much to ask for a outdoor company, with a bit of travel?</li>
         </ul>
       </div>
       <div className="aboutMe">
        <Header as="h3">My Strategy For Success:</Header>
          <ul>
           <li>Work on a personal project everyday.</li>
           <li>Choose a new tool to learn each week/month.</li>
            <ul>
             <li>Currently, mine is GraphQL</li> 
            </ul>
          <li>Run through whiteboard problems daily.</li>
          <li>Spend 30 minutes on a coding problem; solve by using each language I know.</li>
          <li>Research and contact companies that spark my interests and skill set.</li>
          <li>Go to meetups and become a part of the Utah community.</li>
          <li>Contact local leaders and recruiters for quick insight to what they look for in new hires.</li>
          <li>Read, study and adapt to changes in the skills and tools I use. </li>
          <li>Stay positive; its a long road, I will get there.</li>
          <li>Stay true and focused on my goals.</li>
        </ul>
      </div>
    </Grid.Column>
   </Grid.Row> 
</Grid>
)

export default Home