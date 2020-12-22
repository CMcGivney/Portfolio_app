import React, {useContext} from "react";
import { SimpleImg } from "react-simple-img";
import { Icon, } from "semantic-ui-react";
import styled from "styled-components";
import { SkillsContext, SkillsProvider } from "../Context/SkillsContext";
import "./Skills.css";
import "../App.css";
//can you build this so the squares can  move around?

const SkillsComponent = () => {
const skillsArr = useContext(SkillsContext)

return (
  
  <div className="skillsContainer">
    
      {skillsArr.map((skill, index) => (
        <div className="skillsColumn" key={index} >
          <div key={index} className="panel">
            <div className="front">
              <SimpleImg
                src={skill.image}
                alt={skill.image_alt}
                width="150px"
                height="150px"
              />
            </div>
            <div className="back">
              <div>
                <p className="pad">{skill.comment}</p>

                <div>
                  {(function () {
                    let stars = [];
                    for (let i = 0; i < skill.star_count; i++) {
                      stars.push(
                        <span>
                          <Star>
                            <Icon name="star" key={i} />
                          </Star>
                        </span>
                      );
                    }
                    return stars;
                  })()}
                  {(function () {
                    let darkStars = [];
                    for (let i = 0; i < skill.darkstar_count; i++) {
                      darkStars.push(
                        <span>
                          <Icon name="star" key={i} />
                        </span>
                      );
                    }
                    return darkStars;
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    
  </div>
  
 );
}
const Skills = () => {
  return (
    <SkillsProvider>
      <SkillsComponent></SkillsComponent>
    </SkillsProvider>
  );
};

const Star = styled.div`
  display: inline-block;
  color: yellow;
  text-shadow: 1px 1px 1px black;
`;

export default Skills;
