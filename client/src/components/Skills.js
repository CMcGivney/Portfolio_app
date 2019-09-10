import React from 'react'
import { Header, Grid, Image, Icon,  } from 'semantic-ui-react'
import styled from 'styled-components'
import CSS3 from '../images/CSS3.png'
import ES6 from '../images/ES6.png'
import GitHub from '../images/GitHub.png'
import HTML5 from '../images/HTML5.png'
import jquery from '../images/jquery.png'
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




const Skills = () => (

<Grid stackable columns='equal' style={{padding: "25px", marginTop: "25px"}}>
   <Grid.Row>
     <Grid.Column className="headerBox">
      <Header as="h1" textAlign="center">My Tools & Skills</Header>
      <p>"That Will Pay My Bills"</p>
     </Grid.Column>
   </Grid.Row>
   <Grid.Row style={{padding: "20px"}}>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
          <Image src={HTML5} alt="HTML5" width="150px" height="150px"/>
          </div>
         </div>
         <div className="back"> 
          <div  className="pad">Feel Confident</div> 
          <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" />
          </Star>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={CSS3} alt="CSS3" width="150px" height="150px" /> 
          </div>
         </div>
         <div className="back"> 
          <div  className="pad">Need a Designers Eye</div> 
          <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={JS} alt="JavaScript" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
          <div  className="pad">Some Good Days Some Bad</div> 
          <Star>
          <Icon name="star" /> 
          <Icon name="star" />  
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={ReactIcon} alt="ReactIcon" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
          <div  className="pad">Work On It Daily</div> 
          <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{padding: "20px"}}>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
          <Image src={Ruby} alt="Ruby" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
          <div  className="pad">Basic Knowledge</div> 
          <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={Rails} alt="Rails" width="150px" height="150px" /> 
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">Pretty, Pretty Good</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={jquery} alt="jquery" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">I Know It Exists</div> 
         <div  className="pad">Don't Use It Much</div> 
         <Star>
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={Postgresql} alt="Postgresql" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">Basic Database Knowledge</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{padding: "20px"}}>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
          <Image src={SQL} alt="SQL" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">I Love SQL</div> 
         <div  className="pad">Practice Daily</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={SemanticR} alt="SemanticR" width="150px" height="150px" /> 
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">When Styling A Quick App...</div> 
         <div  className="pad">like this One</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span> 
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={Semantic} alt="Semantic" width="150px" height="150px"/>
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">Framework Tool Library</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>  
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={BootsReact} alt="BootstrapReact" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">Framework Tool Library</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>  
         </div>
        </div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{padding: "20px"}}>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
          <Image src={ES6} alt="ES6" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">ECMAScript 6</div> 
         <div  className="pad">To Arrow Function or Not...</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span> 
          <span><Icon name="star" /></span> 
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={Sqlectron} alt="Sqlectron" width="150px" height="150px" /> 
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">When You Need To See Those Databases You Made In Action</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span> 
          <span><Icon name="star" /></span>  
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={BootStrap} alt="BootStrap" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
         <div  className="pad">Framework Tool Library</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>
         </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <div className="panel">
         <div className="front">
          <div>
           <Image src={GitHub} alt="GitHub" width="150px" height="150px" />
          </div>
         </div>
         <div className="back"> 
         <div className="pad">Feel Confident</div> 
         <div className="pad">Learn A New Trick Daily</div> 
         <Star>
          <Icon name="star" /> 
          <Icon name="star" /> 
          <Icon name="star" /> 
          </Star>
          <span><Icon name="star" /></span>
          <span><Icon name="star" /></span>   
         </div>
        </div>
      </Grid.Column>
    </Grid.Row>   
</Grid>
  )

  const Star = styled.div`
  display: inline-block;
  color: yellow;
  text-shadow: 1px 1px 1px black;
`;


export default Skills;