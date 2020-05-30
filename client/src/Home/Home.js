import React from 'react'
// import Alaska from '../images/Alaska.jpg'
import './Home.css'
import {Header, } from 'semantic-ui-react'


const Home = () => (
<>
  <div className="homeBox">
    <div className="grid-header">
      <Header.Content className="nameHead">Chris McGivney</Header.Content>
      <Header.Content className="homeHead"> Aspiring Full Stack Developer </Header.Content>
      <Header.Content className="homeHead"> Ruby on Rails || PostgreSql || JavaScript || React  </Header.Content>
     </div>
  </div>
   
   <div className="grid-about">  
    <Header.Content className="contentHeaders">Welcome</Header.Content>
        <Header.Content>
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
            I love my new career path, and have a new found passion for all that goes into software development. 
            I know I am very green in this business, but I believe with strong sense of curiosity and equally strong work ethic, I will be successful and able to thoughtfully
            contribute to this ever-changing tech landscape.
          </p>
        </Header.Content>
   </div>
  {/* I cant seem to move the content Image to the center of the cell!?!?! */}
  {/* <div className="grid-img1">
   <div className="polaroid">
      <img
       src={Alaska}
       alt="Chris in Alaska"
       className="alaskaImg"
       />
      <div className="polaroidText">
        <p>Lisa, my wife & I biking across Alaska</p>
      </div>
    </div>
  </div> */}
  <div className="grid-main">
    <h3 className="contentHeaders">"The Dream Job"</h3>
          <p className="mainTxt">Work at a company where I believe in the product, culture and community impact.</p>
          <p className="mainTxt">A position that challenges and teaches me every day, where I am a part of a team and am making a positive contribution to the mission of the company.</p>
          <p className="mainTxt">A position I can grow in and with, through hard work and thoughtful collaboration.</p>
       
    </div>

    <div className="successBlock">
     <h3 className="contentHeaders">My Strategy For Success</h3>
      <div className="grid-success">
       <ul className="col-1">
           <p><li>Work on a personal project everyday</li></p>
           <p><li>Choose a new tool to learn each week/month</li></p>
           <p><li>Run through whiteboard problems daily</li></p>
           <p><li>Stay true and focused on my goals</li></p>
           <p><li>Daily Coding Challenges</li></p>
         </ul>
       <ul className="col-2">
            <p><li>Reach-out to companies that share my values and spark interest</li></p>
            <p><li>Meetups, become part of the Utah Tech community</li></p>
            <p><li>Contact local leaders and recruiters for quick insight to what they look for in new hires</li></p>
            <p><li>Stay current with skills and tools, practice daily</li></p>
            <p><li>Stay positive; it's a journey, enjoy it, I will succeed.</li></p> 
        </ul>
     </div>
   </div>
   </>
)

export default Home