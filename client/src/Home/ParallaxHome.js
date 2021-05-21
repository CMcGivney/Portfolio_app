import React, { useEffect, useRef } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { Image } from "semantic-ui-react";
// import distantStare from "../images/distantStare.jpg";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const bgRefs = useRef([]);

  const addToBgRefs = (el) => {
    if (el && !bgRefs.current.includes(el)) {
      bgRefs.current.push(el);
    }
  };

  useEffect(() => {
    bgRefs.current.forEach((section, i) => {
      // Give the backgrounds some random images
      section.style.backgroundImage = `url(https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random=${i})`;

      // Do the parallax effect on each section
      if (i) {
        section.style.backgroundPosition = `50% ${-window.innerHeight / 2}px`;

        gsap.to(section, {
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
        section.style.backgroundPosition = "50% 0px";

        gsap.to(section, {
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
  });

  return (
    <>
      <section ref={addToBgRefs}>
        <div className="bg"></div>
        <h1>Welcome</h1>
        {/* <Image
          className="imgBox"
          src={distantStare}
          alt="website author distant stare"
          size="tiny"
        /> */}
        <h1>I'm Chris McGivney</h1>
        <p>(Please refresh the page if this image doesn't suit you)</p>
        <img
          src="https://s2.svgbox.net/hero-solid.svg?ic=arrow-down&color=000"
          width="32"
          height="32"
          alt="arrow down"
        ></img>
      </section>
      <section ref={addToBgRefs}>
        <div className="bg"></div>
        <h1>
          I know this is a difficult career choice, a lifelong learning pursuit
          full of challenges and obstacles...
        </h1>
      </section>
      <section ref={addToBgRefs}>
        <div className="bg"></div>
        <h1>
          From frontend UI/UX, backend data structures & architecture to
          analytics and SEO...
        </h1>
      </section>
      <section ref={addToBgRefs}>
        <div className="bg"></div>
        <h1>
          A never-ending always evolving cornucopia of beautiful ideas sprouting
          into new technologies to learn and use
        </h1>
      </section>
      <section ref={addToBgRefs}>
        <div className="bg"></div>
        <h1>and in order to keep up...</h1>
      </section>
      <section ref={addToBgRefs}>
        <div className="bg"></div>
        <h1>
          It will take determination, countless hours of hard work with late
          nights, lots of coffee and perhaps a bit of luck{" "}
          <span aria-label="emoji" role="img" alt="four leaf clover">
            🍀
          </span>{" "}
        </h1>
      </section>
      <section ref={addToBgRefs}>
        <div className="bg"></div>
        <h1>All will be worth it to be part of this community of beautiful ideas</h1>
      </section>
    </>
  );
};
export default Home;
