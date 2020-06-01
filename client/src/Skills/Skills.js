import React from 'react'
import {Grid, Image, Icon,} from 'semantic-ui-react'
import styled from 'styled-components'
import CSS3 from '../images/CSS3.png'
import ES6 from '../images/ES6.png'
import GitHub from '../images/GitHub.png'
import HTML5 from '../images/HTML5.png'
import StyledComp from '../images/styledComp.png'
import JS from '../images/Javascript.png'
import Postgresql from '../images/Postgresql.jpeg'
import Rails from '../images/Rails.png'
import ReactIcon from '../images/React.png'
import Ruby from '../images/Ruby.jpeg'
import SemanticR from '../images/semanticR.png'
import SQL from '../images/Sql.png'
import Sqlectron from '../images/sqlectron.png'
import BootStrap from '../images/BootStrap.png'
import BootsReact from '../images/BootstrapReact.png'
import Semantic from '../images/Semantic.png'
import './Skills.css'
import '../App.css'

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
let html, css, js, react, 
    ruby, rails, styledComp, 
    postgresql, sql, semanticR, 
    semantic, bootsReact, esc6, 
    sqlectron, bootstrap, github;

//create instance of skill (image, image_alt, comment, star_count, darkstar_count) and push to array
html = new Skill(HTML5, "HTML5 Logo", "Feel Confident", 3, 2)
skillsArr.push(html)

css = new Skill(CSS3, "CSS3 Logo", "Need to develop a designers eye.", 2, 3)
skillsArr.push(css)

js = new Skill(JS, "JavaScript Logo", "Some good days, some bad.", 3, 2)
skillsArr.push(js)

react = new Skill(ReactIcon, "React Logo", "Work with React daily.", 3, 2)
skillsArr.push(react)

ruby = new Skill(Ruby, "Ruby Logo", "Sound foundation.", 2, 3)
skillsArr.push(ruby)

rails = new Skill(Rails, "", "Pretty, pretty good.", 2, 3)
skillsArr.push(rails)

styledComp = new Skill(StyledComp, "Styled Component Logo", "A styling tool", 1, 4)
skillsArr.push(styledComp)

postgresql = new Skill(Postgresql, "Postgreql Logo", "Basic Database Foundation", 2, 3)
skillsArr.push(postgresql)

sql = new Skill(SQL, "SQL Logo", "I ❤️ SQL", 2, 3)
skillsArr.push(sql)

semanticR = new Skill(SemanticR, "React Semantic Logo", "When you need to style an app quickly...", 3, 2)
skillsArr.push(semanticR)

semantic = new Skill(Semantic, "Semantic Logo", "Framework tool library", 3, 2)
skillsArr.push(semantic)

bootsReact= new Skill(BootsReact, "BootsReact Logo", "Framework tool library", 3, 2)
skillsArr.push(bootsReact)

esc6= new Skill(ES6, "ecmaScript6 Logo", "Learning every day, Arrow(), Spread, etc.", 2, 3)
skillsArr.push(esc6)

sqlectron = new Skill(Sqlectron, "Sqlectron Logo", "When you need to see those databases you made in action", 2, 3)
skillsArr.push(sqlectron)

bootstrap = new Skill(BootStrap, " BootStrap Logo", "Framework tool library", 2, 3)
skillsArr.push(bootstrap)

github = new Skill(GitHub, " BootStrap Logo", "Confident, Learning tricks daily", 3, 2)
skillsArr.push(github)

  
const Skills = () => (
  <div className="skillsContainer">
   <Grid className="" stackable>
    { skillsArr.map( (skill, index) => 
      <Grid.Column key={index} width={4}>
         <div key={index} className="panel">
           <div key={index} className="front">
            <Image src={skill.image} alt={skill.image_alt} width="150px" height="150px"/>
           </div>
            <div className="back"> 
             <div>
               <p className="pad">{skill.comment}</p> 
          
              <div>
                { function() {
                  let stars = [];
                  for (let i=0; i < skill.star_count; i++) {
                    stars.push(<span><Star><Icon name="star" key={i}/></Star></span>);
                  }
                  return stars;
                }()}
                { function() {
                  let darkStars = [];
                  for (let i=0; i < skill.darkstar_count; i++) {
                    darkStars.push(<span><Icon name="star" key={i}/></span>);
                  }
                  return darkStars;
                }()}
               </div>
               </div>
             </div>
          </div>
        </Grid.Column>
       )
      }
   </Grid>
</div>
)

const Star = styled.div`
display: inline-block;
color: yellow;
text-shadow: 1px 1px 1px black;
`;

export default Skills;