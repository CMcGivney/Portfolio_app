import React, {useContext} from "react";
import { NavLink, withRouter} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Logo from "../images/84CreationsWhite.png";

const NavBarContent = ({history}) => {
  const { user, handleLogout } = useContext(AuthContext);

  const navStyles = {
    backgroundColor: "black",
    margin: "0 0 0 0",
    padding: '.5rem',
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute";
  };
 
  const navItems = {
    color: "white",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "1rem 1rem",
  };
  return (
    <>
      <header style={navStyles}>
        <NavLink to="/" name="Home" id="home">
          <img
            height="75"
            width="140"
            src={Logo}
            alt="1984 Creations"
          />
        </NavLink>

        <div style={navItems}>
          <NavLink style={navItems} exact to="/" activeClassName="selected" name="Home" id="home">
            Home
          </NavLink>
          <NavLink style={navItems} exact to="/skills" name="Quote" id="skills">
            Skills
          </NavLink>
          <NavLink style={navItems} exact to="/projects" name="projects" id="projects">
            Projects
          </NavLink>
          <NavLink style={navItems} exact to="/contact" name="contact" id="contact">
            Contact
          </NavLink>
          {user ? (
              <NavLink name="logout" onClick={() => handleLogout(history)}></NavLink>
            ) : null}
         
        </div>
      </header>
    </>
  );
};
export default withRouter(NavBarContent);
