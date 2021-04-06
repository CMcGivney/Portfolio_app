import React from "react";
import "./Home.css";
import { Header } from "semantic-ui-react";
import Navbar from "../components/Navbar";

const Home = () => (
  <>

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
          GraphQL || Ruby || JavaScript || React{" "}
        </Header.Content>
      </div>
    </div>
</>
);

export default Home;
