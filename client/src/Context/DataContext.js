import React, { createContext } from "react";
import dashboard2 from "../images/dashboard2.png";
import RPS from "../images/RPS.png";
import CPA from "../images/CPA.jpg";
import Elysian from "../images/elysianCatering.jpg";
import ABSSite from "../images/ABS_Products.png";
import SipNStir from "../images/sipNstir.png";
import GraphqlApollo from "../images/graphql.png";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  class ProjectsData {
    constructor(image, image_alt, header, description, link) {
      this.image = image;
      this.image_alt = image_alt;
      this.header = header;
      this.description = description;
      this.link = link;
    }
  }
  // Created project array & named objects to push to array
  let projectData = [];
  let dash, rpsGame, cpaSite, cateringSite, absSite, sipNStir, graphQL;

  // example = new ProjectsData({this.image}, "{this.image_alt", "{this.type}", "{this.description","{this.link}")
  //projectData.push(example)

  graphQL = new ProjectsData(
    GraphqlApollo,
    "A flashcard app to help with studying",
    "A flashcard app to help me study",
    "I have been wanting to dive into the world of graphQL and with this side project I finally did. Backend is build with Javascript, Node, GraphQL, MongoDB and, Apollo server with Mongoose. Frontend is build with React, Semantic.Ui and Apollo Provider with GraphQl. I deployed the server with Heroku and the frontend with Netlify to mix it up",
    "https://festive-panini-e3fba3.netlify.app/"
  );
  projectData.push(graphQL);

  sipNStir = new ProjectsData(
    SipNStir,
    "Sip And Stir Park City, Utah Homepage",
    "Sip And Stir Park City Business",
    "I built this site for a friend who is starting a new business. I built this using react-sematic-ui, React, and a static Express server, hosted with Heroku. I am currently working as the site manager and google business site manager. Exploring optimization strategies with Google Console, and other tools, while refactoring the sites code when needed.",
    "https://www.sipandstirpc.com"
  );
  projectData.push(sipNStir);

  absSite = new ProjectsData(
    ABSSite,
    "ABS Seafood Slc, Utah Homepage",
    "ABS Seafood SLC Business Website",
    "I built this using react-sematic-ui, React, and a static Express server, hosted with Heroku. I enjoyed styling this after the parent companies website that had recently been remodeled. I am currently working as the site manager and google business site manager. Exploring optimization strategies with Google Console, and other tools, while refactoring the sites code when needed.",
    "https://www.absseafoodutah.com"
  );
  projectData.push(absSite);

  cateringSite = new ProjectsData(
    Elysian,
    "Catering business website homepage",
    "Elysian Catering Business Website",
    "I built this simple business site for a co-worker at the restaurant. I think it turned out pretty good considering it only took a few hours to design the layout. Twitter widget and Instagram API work was fun. However, the IG API depreciated and doesn't load when deployed to a production build. I will learn the new graph api used by facebook to add this feature back.",
    "I am currently the site manager, working on SEO. Very fun learning all the aspects of online visibilty and optimization",
    "http://www.theelysiancatering.com"
  );
  projectData.push(cateringSite);

  cpaSite = new ProjectsData(
    CPA,
    "C.P.A. business website",
    "C.P.A. Business Website Update",
    "I was asked to update an Adobe Flash business site. I followed the layout and style of the Flash site using React. Quickly I realized that for this kind of static site I could easily make it with just pure Javascript, CSS and HTML. So that will be my next project. This was a fun exercise in replicating a layout/style page. This site is currently in use.",
    "http://sandpcpa.com/"
  );
  projectData.push(cpaSite);

  rpsGame = new ProjectsData(
    RPS,
    "Paper, Rock, Scissors JavaScript Game",
    "Paper, Rock, Scissors Game: JS practice",
    "This game was created with HTML, CSS and Javascript. It was great practice. I am still learning the in's and out's of JavaScript but by doing this exercise I really start to see the power of this language to traverse and manipulate the DOM.",
    "https://js-rps-game.herokuapp.com/"
  );
  projectData.push(rpsGame);

  dash = new ProjectsData(
    dashboard2,
    "Group Project: DevPointLabs Dashboard",
    "Group Project: DevPointLabs Dashboard",
    "This was a group project I worked on at school.  I followed a wire frame that was provided for the layout. My main tasks included Instagram API, Twitter API, YouTube embed, current Time/Date, daily topic and quotes components/database. Even though we didn't finish it to the standards we had envisioned, I feel we all learned a lot. Working together, as a team, presented it’s own challenges: GitHub merge conflicts, being in different locations, differing levels of expertise and communication skills, etc.  With my restaurant management background, I found myself well-suited to take the lead within our team. I made sure we had quick daily meetings or check-ins with team members to troubleshoot and brainstorm, all while keeping morale up, especially on workdays that were tough on us all.",
    "https://dpl-dashboard.herokuapp.com/"
  );
  projectData.push(dash);

  return (
    <DataContext.Provider value={projectData}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
