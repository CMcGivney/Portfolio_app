import React, { Fragment, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Logo from "../images/84CreationsWhite.png";

export default () => {
  const { user, handleLogout } = useContext(AuthContext);
  let history = useHistory();
  return (
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
        {user ? (
          <a href="/contact" onClick={() => handleLogout(history)}>
            Logout
          </a>
        ) : null}
      </div>
    </Fragment>
  );
};
