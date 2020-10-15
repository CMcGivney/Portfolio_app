import React, {useContext} from 'react';
import {DataContext, DataProvider} from '../Context/DataContext'
import {Image, Container, Item,} from 'semantic-ui-react'
import './Project.css'


const ProjectsComponent = () => {

  const projectData = useContext(DataContext);

  return(
  
  <Container className="projectWrapper">
    <Item.Group divided>
     {projectData.map( (project, index) => 
      <Item className="projectCards"  key={index}>
       <Image
         href={project.link}
         src={project.image}
         alt={project.image_alt}
         rel= "noopener noreferrer"
         target= "_blank"
         className="imageProduct"
         size="medium"
        />
       <Item.Content >
        <Item.Header as='a' href={project.link} className="cardHead">{project.header}</Item.Header>
        <Item.Description className="cardMeta">{project.description}</Item.Description>
       </Item.Content>    
      </Item>
      )
     }
  
    </Item.Group>
    </Container>
 
  )
 
}
const Projects = () => {

  return (
    <DataProvider>
      <ProjectsComponent></ProjectsComponent>
    </DataProvider>
  )
}

export default Projects;