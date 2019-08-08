import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import CSS3 from '../images/CSS3.png'
import ES6 from '../images/ES6.png'
import GitHub from '../images/GitHub.png'
import HTML5 from '../images/HTML5.png'
import jquery from '../images/jquery.png'
import JS from '../images/JS.png'
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


const Skills = () => (
  <>
  <Header as="h1" textAlign="center">Skills</Header>
  <Header as="p" textAlign="center">"That One Day Will Pay The Bills"</Header>
  <hr/>
  <Grid padding="5px" margintop="25px">
    <Grid.Row columns={4}>
      <Grid.Column>
        
        <Image src={HTML5} alt="HTML5" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={CSS3} alt="CSS3" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={JS} alt="JavaScript" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={jquery} alt="JQuery" size="small" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src={Ruby} alt="Ruby" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={Rails} alt="Rails" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={Postgresql} alt="Postgresql" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={ES6} alt="ES6" size="small" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src={ReactIcon} alt="React Icon" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={SemanticR} alt="Semantic-ui-react" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={Sqlectron} alt="Sqlectron" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={SQL} alt="SQL" size="small" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src={BootStrap} alt="Bootstrap" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={BootsReact} alt="" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={Semantic} alt="" size="small" />
      </Grid.Column>
      <Grid.Column>
        <Image src={GitHub} alt="GitHub" size="small" />
      </Grid.Column>
    </Grid.Row>
    </Grid>
</>
)

export default Skills;