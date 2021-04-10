import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import ReactLogo from '../logo.svg';
import GraphQLogo from '../images/graphql.svg';
import RubyLogo from '../images/ruby-lang-vertical.svg';
import JSLogo from '../images/javascript-logo.svg';
import CSS3 from '../images/css-3.svg';
import HTML from '../images/html5.svg';
import { gsap } from "gsap";
// I want to build a scroll animation with three items
// Logo, Motto, Name
//I need the user to scroll down to activate the animation,
// the animation should restart after 5 secs once the scroll down is complete
//Logo should fade out,
//Motto slide in from the left, and fade?
//Name can drop down from the top.
//will the background stay the same? or leave with the item?

const Home = () => {
  const greetingBox = useRef(null),
      nameBox = useRef(null),
      descBox = useRef(null),
      skill1 = useRef(null),
      skill2 = useRef(null),
      skill3 = useRef(null),
      skill4 = useRef(null),
      skill5 = useRef(null),
      skill6 = useRef(null);

  useEffect(() => {
    gsap.to([greetingBox.current], {
      y: "85px",
      x: "-100px",
      delay: 2,
      duration: 2,
    });
    gsap.to([nameBox.current], {
      y: "85px",
      x: "-60px",
      delay: 2,
      duration: 2,
    });
    gsap.to([descBox.current], {
      y: "80px",
      x: "40px",
      delay: 2,
      duration: 2,
    });
    gsap.to([skill1.current], {
      y: "90px",
      x: "-90px",
      delay: 2,
      duration: 2,
    });
    gsap.to([skill2.current], {
      y: "25px",
      // x: "95px",
      delay: 2,
      duration: 2,
    });
    gsap.to([skill3.current], {
      y: "-40px",
      x: "90px",
      delay: 2,
      duration: 2,
    });
    gsap.to([skill4.current], {
      y: "-37px",
      x: "89px",
      delay: 2,
      duration: 2,
    });
    gsap.to([skill5.current], {
      y: "-102px",
      x: "-90px",
      delay: 2,
      duration: 2,
    });
    gsap.to([skill6.current], {
      y: "-167px",
      // x: "95px",
      delay: 2,
      duration: 2,
    });
  });

  return (
    <div className="homeBox">
    <div
      ref={greetingBox}
     style={{
       background: '#46D6FF',
       display: 'flex',
       flexFlow: 'row nowrap',
      //  width: '15vh',
      //  height: '15vh',
       padding: "1em",
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       

     }}
    >
      Hi
    </div>
    <div
      ref={nameBox}
     style={{
       background: '#46D6FF',
       display: 'flex',
       flexFlow: 'row nowrap',
       width: '15vh',
       height: '15vh',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       

     }}
    >
      I'm Chris McGivney
    </div>
    <div
      ref={descBox}
     style={{
       background: '#46D6FF',
       display: 'flex',
       flexFlow: 'row nowrap',
       width: '35vh',
       height: '15vh',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       
     }}
    >
     and these are my new building blocks...
    </div>

    <div
      ref={skill1}
     style={{
       background: 'salmon',
       display: 'flex',
       flexFlow: 'row nowrap',
       width: '15vh',
       height: '15vh',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       borderRadius: '25%',

     }}
    >
      <img src={ReactLogo} className="App-logo" alt="React logo" />
    </div>
    <div
      ref={skill2}
     style={{
       background: 'salmon',
       display: 'flex',
       flexFlow: 'row nowrap',
       width: '15vh',
       height: '15vh',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       borderRadius: '25%',

     }}
    >
      <img src={GraphQLogo} className="App-logo" alt="React logo" />
    </div>
    <div
      ref={skill3}
     style={{
       background: 'salmon',
       display: 'flex',
       flexFlow: 'row nowrap',
       width: '15vh',
       height: '15vh',
       padding: '1rm',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       borderRadius: '25%',

     }}
    >
      <img src={JSLogo} className="App-logo" alt="Ruby logo" />
    </div>
    <div
      ref={skill4}
     style={{
       background: 'salmon',
       display: 'flex',
       flexFlow: 'row nowrap',
       width: '15vh',
       height: '15vh',
       padding: '1rm',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       borderRadius: '25%',

     }}
    >
      <img src={CSS3} className="App-logo" alt="CSS 3 logo" />
    </div>
    <div
      ref={skill5}
     style={{
       background: 'salmon',
       display: 'flex',
       flexFlow: 'row nowrap',
       width: '15vh',
       height: '15vh',
       padding: '1rm',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       borderRadius: '25%',

     }}
    >
      <img src={RubyLogo} className="App-logo" alt="Ruby logo" />
    </div>
    <div
      ref={skill6}
     style={{
       background: 'salmon',
       display: 'flex',
       flexFlow: 'row nowrap',
       width: '15vh',
       height: '15vh',
       padding: '1rm',
       alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',
       borderRadius: '25%',

     }}
    >
      <img src={HTML} className="App-logo" alt="Ruby logo" />
    </div>

    </div>
  );
};

export default Home;
