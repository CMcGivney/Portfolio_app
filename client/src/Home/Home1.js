import React, { useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Image } from "semantic-ui-react";
import distantStare from "../images/distantStare.jpg";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
   
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      // Give the backgrounds some random images
       section.bg.style.backgroundImage = `url(https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random=${i})`;

      // Do the parallax effect on each section
      if (i) {
        section.bg.style.backgroundPosition = `50% ${
          -window.innerHeight / 2
        }px`;

        gsap.to(section.bg, {
          backgroundPosition: `50% ${window.innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            scrub: true,
          },
        });
      }

      // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
      else {
        section.bg.style.backgroundPosition = "50% 0px";

        gsap.to(section.bg, {
          backgroundPosition: `50% ${window.innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <>
      <section>
        <div className="bg"></div>
        <Image
          className="imgBox"
          floated="left"
          src={distantStare}
          alt="website author distant stare"
          size="tiny"
        />
        <h1>Welcome, I'm Chris McGivney</h1>
        <img
          src="https://s2.svgbox.net/hero-solid.svg?ic=arrow-down&color=000"
          width="32"
          height="32"
          alt="arrow down"
        ></img>
      </section>
      <section>
        <div className="bg"></div>
        <h1>I have been working hard to hone my skills</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>From the Frontend UI to Backend databases</h1>
        <h1>and everything in-between</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>
          This is a life long pursuit that I only wish I had started earlier...
        </h1>
        <h1> I will succeed.</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>“The more I learn, the more I realize how much I don't know.”</h1>
        <h1>Albert Einstein</h1>
      </section>
    </>
  );
};

export default Home;
