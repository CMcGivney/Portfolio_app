import React from 'react'
import { Header, Image, Grid } from 'semantic-ui-react'
import Alaska from '../images/Alaska.jpg'

const Home = () => (
  <Grid>
    <Grid.Row column={1}>
       <Grid.Column className="headerBox">
        <Header as="h1" textAlign="center">Welcome</Header>
        <p>I'm Chris McGivney, you have reached my portfolio page</p>
       </Grid.Column>
     </Grid.Row>
     <Grid.Row column={2}>
       <Grid.Column width={8}>
         <Image 
          src={Alaska} 
          alt="Alaska"
          size="large"
          centered
          />
       </Grid.Column>
      <Grid.Column width={8}>
       <Header as="h3">A little about me:</Header>
       <p>I live in Park City, Utah. I have called Utah home for the past 15 years. I grew up in California, and was recruited from San Francisco to move here to open/run restaurants, a career that at the time I was very passionate about. </p>
       <p>I am a new father, which is kind of how I got into coding and web development. I was the day shift with the kiddo and with lots of time on my hands I started down the road of coding. FreeCodeCamp here and StackOverflow there until I finally decided to deep dive into a Full Stack Program through the University Of Utah at Dev Point Labs.</p>
       <p>I love my new career path, and have a new passion for all that goes into software and web development. I know I am very green in this business, but I believe that with hard work and a strong curiosity I can have a successful life in this ever changing tech landscape. </p>
       <Header as="h3">My Strategy For Success:</Header>
       <ul>
       <li>Work on a personal project everyday.</li>
       <li>Choose a new tool to learn each week/month.</li>
         <ul>
          <li>Currently mine is GraphQL</li> 
         </ul>
       <li>Run through whiteboard problems daily.</li>
       <li>Spend 30 minutes on a coding problem, solve by using each languages I know.</li>
       <li>Research and contact companies I'm interested in.</li>
       <li>Go to meetups and become a part of the Utah community.</li>
       <li>Contact local leaders and recruiters for a quick chat on what they look for in new hires.</li>
       <li>Read, study and adapt to changes in the skills and tools I use. </li>
       <li>Stay positive, its a long road, stay focused on my goals.</li>
       </ul>
       </Grid.Column>
    </Grid.Row> 
</Grid>
)

export default Home