import React, { createContext } from "react";
import CSS3 from "../images/CSS3.png";
import ES6 from "../images/ES6.png";
import GitHub from "../images/GitHub.png";
import HTML5 from "../images/HTML5.png";
import StyledComp from "../images/styledComp.png";
import JS from "../images/Javascript.png";
import Postgresql from "../images/Postgresql.jpeg";
import Rails from "../images/Rails.png";
import ReactIcon from "../images/React.png";
import Ruby from "../images/Ruby.jpeg";
import SemanticR from "../images/semanticR.png";
import SQL from "../images/Sql.png";
import Sqlectron from "../images/sqlectron.png";
import BootStrap from "../images/BootStrap.png";
import BootsReact from "../images/BootstrapReact.png";
import Semantic from "../images/Semantic.png";
import MongoDB from "../images/mongodb.svg";
import GraphQL from "../images/graphql.svg";
import Tailwind from "../images/tailwind.png";
import Apollo from "../images/apollo-icon.png";


const SkillsContext = createContext();

const SkillsProvider = ({children}) => {
  class Skill {
    constructor(image, image_alt, comment, star_count, darkstar_count) {
      this.image = image;
      this.image_alt = image_alt;
      this.comment = comment;
      this.star_count = star_count;
      this.darkstar_count = darkstar_count;
    }
  }
  
  let skillsArr = [];
  let html,
    css,
    js,
    react,
    ruby,
    rails,
    styledComp,
    postgresql,
    sql,
    semanticR,
    semantic,
    bootsReact,
    esc6,
    sqlectron,
    bootstrap,
    github,
    mongoDb,
    graphQL,
    tailwind,
    apollo;
  
  //create instance of skill (image, image_alt, comment, star_count, darkstar_count) and push to array
  html = new Skill(HTML5, "HTML5 Logo", "Feel Confident", 3, 2);
  skillsArr.push(html);
  
  css = new Skill(CSS3, "CSS3 Logo", "Need to develop a designers eye.", 2, 3);
  skillsArr.push(css);
  
  js = new Skill(JS, "JavaScript Logo", "Some good days, some bad.", 3, 2);
  skillsArr.push(js);
  
  react = new Skill(ReactIcon, "React Logo", "Work with React daily.", 3, 2);
  skillsArr.push(react);
  
  ruby = new Skill(Ruby, "Ruby Logo", "Sound foundation.", 2, 3);
  skillsArr.push(ruby);
  
  rails = new Skill(Rails, "", "Pretty, pretty good.", 2, 3);
  skillsArr.push(rails);
  
  styledComp = new Skill(
    StyledComp,
    "Styled Component Logo",
    "A styling tool",
    1,
    4
  );
  skillsArr.push(styledComp);
  
  postgresql = new Skill(
    Postgresql,
    "Postgreql Logo",
    "Basic Database Foundation",
    2,
    3
  );
  skillsArr.push(postgresql);
  
  sql = new Skill(SQL, "SQL Logo", "I ❤️ SQL", 2, 3);
  skillsArr.push(sql);
  
  semanticR = new Skill(
    SemanticR,
    "React Semantic Logo",
    "When you need to style an app quickly...",
    3,
    2
  );
  skillsArr.push(semanticR);
  
  semantic = new Skill(Semantic, "Semantic Logo", "Framework tool library", 3, 2);
  skillsArr.push(semantic);
  
  bootsReact = new Skill(
    BootsReact,
    "BootsReact Logo",
    "Framework tool library",
    3,
    2
  );
  skillsArr.push(bootsReact);
  
  esc6 = new Skill(
    ES6,
    "ecmaScript6 Logo",
    "Learning every day, Arrow(), Spread, etc.",
    2,
    3
  );
  skillsArr.push(esc6);
  
  sqlectron = new Skill(
    Sqlectron,
    "Sqlectron Logo",
    "When you need to see those databases you made in action",
    2,
    3
  );
  skillsArr.push(sqlectron);
  
  bootstrap = new Skill(
    BootStrap,
    " BootStrap Logo",
    "Framework tool library",
    2,
    3
  );
  skillsArr.push(bootstrap);
  
  github = new Skill(
    GitHub,
    " BootStrap Logo",
    "Confident, Learning tricks daily",
    3,
    2
  );
  skillsArr.push(github);

  mongoDb = new Skill(
    MongoDB,
    "MongoDB logo",
    "Exploring Different Databases",
    2,
    3
  );
  skillsArr.push(mongoDb);

  graphQL = new Skill(
    GraphQL,
    " GraphQL Logo",
    "Language Agnostic Database Querying",
    2,
    3
  );
  skillsArr.push(graphQL);

  tailwind = new Skill(
    Tailwind,
    " Tailwind Logo",
    "Love learning this new CCS library",
    3,
    2
  );
  skillsArr.push(tailwind);

  apollo = new Skill(
    Apollo,
    "Apollo Logo",
    "Learning, excited to use in my projects",
    2,
    3
  );
  skillsArr.push(apollo);


  return (
    <SkillsContext.Provider value={skillsArr}>{children}</SkillsContext.Provider>
  )
}
export {SkillsContext, SkillsProvider}