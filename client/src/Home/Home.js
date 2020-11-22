import React from "react";
import "./Home.css";
import { Header } from "semantic-ui-react";
import Waves from "../images/buckskinGultch.jpg";
import { Parallax } from "react-parallax";

const Home = () => (
  <Parallax
    bgImage={Waves}
    style={{ height: "100vh", width: "100%" }}
    bgImageAlt="Buckskin Gultch slot canyon, with two hikers"
    // strength={-100}
  >
    <div className="homeBox">
      <div className="grid-header">
        <Header.Content as="h1" className="nameHead">
          Chris McGivney
        </Header.Content>
        <Header.Content className="homeHead">
          {" "}
          Full Stack Developer{" "}
        </Header.Content>
        <Header.Content className="homeHead">
          {" "}
          Ruby on Rails || PostgreSql || JavaScript || React{" "}
        </Header.Content>
      </div>
    </div>
  </Parallax>
);

export default Home;
