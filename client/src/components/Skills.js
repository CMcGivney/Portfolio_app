import React from 'react'
import {Grid, Image, Icon, Header} from 'semantic-ui-react'
import styled from 'styled-components'
import CSS3 from '../images/CSS3.png'
import ES6 from '../images/ES6.png'
import GitHub from '../images/GitHub.png'
import HTML5 from '../images/HTML5.png'
import styledComp from '../images/styledComp.png'
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
import '../App.css'


const skillsArray = [
  {image: HTML5, 
    image_alt: "HTML5 Logo",
    comment: "Feel Confident.",
    star_count: 3,
    darkstar_count: 2,
  },
  {image: CSS3,
    image_alt: "CSS3 Logo",
    comment: "Need to develop a designers eye.",
    star_count: 2,
    darkstar_count: 3,
  },
  {image: JS,
    image_alt: "JavaScript Logo",
    comment: "Some good days, some bad.",
    star_count: 2,
    darkstar_count: 3,
  },
  {image: ReactIcon,
    image_alt: "React Logo",
    comment: "Work with React daily.",
    star_count: 3,
    darkstar_count: 2,
  },
  {image: Ruby,
    image_alt: "Ruby Logo",
    comment: "Sound foundation.",
    star_count: 2,
    darkstar_count: 3,
  },
  {image: Rails,
    image_alt: "Rails Logo",
    comment: "Pretty, pretty good.",
    star_count: 2,
    darkstar_count: 3,
  },
  {image: styledComp,
    image_alt: "Styled Component Logo",
    comment: "A styling tool",
    star_count: 2,
    darkstar_count: 3,
  },
  {image: Postgresql,
    image_alt: "Postgresql logo",
    comment: "Basic Database Foundation",
    star_count: 3,
    darkstar_count: 2,
  },
  {image: SQL,
    image_alt: "SQL logo",
    comment: "I ❤️ SQL",
    star_count: 2,
    darkstar_count: 3,
  },
  {image: SemanticR,
    image_alt: "React Semantic Logo",
    comment: "When you need to style an app quickly...",
    star_count: 3,
    darkstar_count: 2,
  },
  {image: Semantic,
    image_alt: "Semantic logo",
    comment: "Framework tool library",
    star_count: 3,
    darkstar_count: 2,
  },
  {image: BootsReact,
    image_alt: "bootstrap React logo",
    comment: "Framework tool library",
    star_count: 3,
    darkstar_count: 2,
  },
  {image: ES6,
    image_alt: "ecmaScript6 logo",
    comment: "Learning every day, Arrow(), Spread, etc.",
    star_count: 1,
    darkstar_count: 4,
  },
  {image: Sqlectron,
    image_alt: "Sqlectron logo",
    comment: "When you need to see those databases you made in action",
    star_count: 2,
    darkstar_count: 3,
  },
  {image: BootStrap,
    image_alt: "bootstrap logo",
    comment: "Framework tool library",
    star_count: 3,
    darkstar_count: 2,
  },
  {image: GitHub,
    image_alt: "github logo",
    comment: "Confident, Learning tricks daily",
    star_count: 3,
    darkstar_count: 2,
  },
  ]
  

const Skills = () => (
 <Grid stackable style={{marginTop: "25px"}}>
  <Grid.Row>
     <Grid.Column className="headerBox">
      <Header as="h1" textAlign="center">Tools & Skills</Header>
     </Grid.Column>
   </Grid.Row>
   { skillsArray.map( skill => 
      <Grid.Column key={skill.id} width={4}>
         <div className="panel">
           <div className="front">
            <Image src={skill.image} alt={skill.image_alt} width="150px" height="150px"/>
           </div>
            <div className="back"> 
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
        </Grid.Column>
       )
      }
 </Grid>
)
const Star = styled.div`
display: inline-block;
color: yellow;
text-shadow: 1px 1px 1px black;
`;

export default Skills
