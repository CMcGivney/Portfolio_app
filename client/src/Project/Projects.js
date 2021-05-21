import React, { useContext } from "react";
import { SimpleImg } from "react-simple-img";
import { DataContext, DataProvider } from "../Context/DataContext";
import { Container, Item } from "semantic-ui-react";
import "./Project.css";

const ProjectsComponent = () => {
  const projectData = useContext(DataContext);

  return (
    <Container className="projectWrapper">
      <Item.Group divided>
        {projectData.map((project, index) => (
          <Item className="projectCards" key={index}>
            <Item.Image size="medium">
              <a rel="noopener noreferrer" target="_blank" href={project.link}>
                <SimpleImg
                  src={project.image}
                  alt={project.image_alt}
                  className="imageProduct"
                />
              </a>
            </Item.Image>
            <Item.Content>
              <Item.Header as="a" href={project.link} className="cardHead">
                {project.header}
              </Item.Header>
              <Item.Description className="cardMeta">
                {project.description}
              </Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Container>
  );
};
const Projects = () => {
  return (
    <DataProvider>
      <ProjectsComponent></ProjectsComponent>
    </DataProvider>
  );
};

export default Projects;
