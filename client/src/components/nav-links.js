import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/84CreationsWhite.png";

export default () => (
  <Fragment>
    <NavLink to="/" name="Home" id="home">
      <img height="75" width="140" src={Logo} alt="1984 Creations" />
    </NavLink>
    <div>
    <NavLink exact to="/" activeClassName="selected" name="Home" id="home">
      Home
    </NavLink>
    <NavLink exact to="/skills" name="skills" id="skills">
      Skills
    </NavLink>
    <NavLink exact to="/projects" name="projects" id="projects">
      Projects
    </NavLink>
    <NavLink exact to="/contact" name="contact" id="contact">
      Contact
    </NavLink>
    </div>
  </Fragment>
);
