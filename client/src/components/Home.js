import React from 'react';
import { Header, Image, } from 'semantic-ui-react';
import Alaska from '../images/Alaska.jpg'
const Home = () => (
  <>
  <Header as="h1" textAlign="center">Welcome</Header>
  <Header as="h4" textAlign="center">You have reached my portfolio page, I am Chris McGivney. I am starting a new career in full stack development, that blossomed from a curiosity with web design and web technologies. </Header>
  <Image 
  src={Alaska} 
  alt="Alaska"
  height="500"
  width="1000"
  />
  <Header as="h3">A little about me:</Header>
  <p>I live in Park City, Utah. I have called Utah home for the past 15 years. I grew up in California, and was recruited from San Francisco to move here to open/run restaurants, a career that at the time I was very passionate about. </p>
  <p>I am a new father, which is kind of how I got into coding and web development. I was the day shift with the kiddo and with lots of time on my hands I started down the road of coding. FreeCodeCamp here and StackOverflow there until I finally commited to a Full Stack Program through the University Of Utah at Dev Point Labs.</p>
  <p>I love my new career path, and have a new passion for all that goes into software and web development. I know I am very green in this business, but I believe that with hard work and a strong curiosity I can have a successful life in this ever changing Tech landscape. </p>
  <footer>this will be the footer</footer>
  </>
)

export default Home