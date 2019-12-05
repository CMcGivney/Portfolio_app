import React from 'react'
// import Alaska from '../images/Alaska.jpg'
import './Home.css'


const Home = () => (
  <div className="home">
    <div className="grid-header">
      <div className="txtHead">
       <div className="nameHead">Chris McGivney</div>
       <div className="homeHead"> Full Stack Developer | Ruby on Rails & React | Outdoor Fanatic</div>
      </div>
    </div>
   <div className="grid-about">  
    <h3 className="contentHeaders">Welcome</h3>
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
            I know I am very green in this business, but I believe with strong sense of curiosity and equally strong work ethic, I will be successful and able to thoughtfully
            contribute to this ever-changing tech landscape.
          </p>
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
          <p className="mainTxt">Work at a company that I believe in the product, culture and community impact.</p>
          <p className="mainTxt">A position that challenges and teaches me every day, where I am a part of a team and am making a positive contribution to the mission of the company.</p>
          <p className="mainTxt">A position I can grow in and with, through hard work and thoughtful collaboration.</p>
       
    </div>
    <div className="grid-success">
       <div className="col-1">
      <h3 className="successHead">My Strategy For Success</h3>
         <ul>
           <p><li>Work on a personal project everyday.</li></p>
           <p><li>Choose a new tool to learn each week/month.</li></p>
             <ul>
             <p><li>Currently, mine is GraphQL</li></p>
             </ul>
            <p><li>Run through whiteboard problems daily.</li></p>
            <p><li>Stay true and focused on my goals.</li></p>
            <p><li>Spend 30 minutes on a coding problem; solve by using each language I know.</li></p>
         </ul>
       </div>
       <div className="col-2">
          <ul>
            <p><li>Research and contact companies that spark my interests and skill sets and where I believe I can make a contribution.</li></p>
            <p><li>Go to meetups and become a part of the Utah community.</li></p>
            <p><li>Contact local leaders and recruiters for quick insight to what they look for in new hires.</li></p>
            <p><li>Read, study and adapt to changes in the skills and tools I use. </li></p>
            <p><li>Stay positive; its a long road, I will get there.</li></p> 
          </ul>
        </div>
   </div>
</div>
)

export default Home