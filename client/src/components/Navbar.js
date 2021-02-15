import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Menu, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import DropDownMenu from "./DropDownMenu.js";
import useWindowSize from "../util/useWindowSize.js";
import Logo from "../images/1984Logo.png";

const navStyles = {
  padding: "1rem",
};

const Navbar = ({ location, history }) => {
  const size = useWindowSize();
  const isMobile = size.width <= 500;
  const { user, handleLogout } = useContext(AuthContext);
  
  return (
    <>
      {isMobile ? (
        <DropDownMenu />
      ) : (
        <Menu
          style={{ backgroundColor: "lightskyblue" }}
          pointing
          secondary
          fixed="top"
        >
          <Link to="/">
            <Menu.Item name="Home" id="home">
              <Image
                style={{ width: "3rem", height: "3rem" }}
                src={Logo}
                alt="1984 Creations Logo"
              />
            </Menu.Item>
          </Link>
          <Menu.Menu position="right" style={navStyles}>
            <Link to="/">
              <Menu.Item
                name="home"
                id="home"
                active={location.pathname === "/"}
              />
            </Link>
            <Link to="/skills">
              <Menu.Item
                name="Skills"
                id="skills"
                active={location.pathname === "/skills"}
              />
            </Link>
            <Link to="/projects">
              <Menu.Item
                name="Projects"
                id="projects"
                active={location.pathname === "/projects"}
              />
            </Link>
            <Link to="/contact">
              <Menu.Item
                name="Contact"
                id="contact"
                active={location.pathname === "/contact"}
              />
            </Link>
            {user ? (
              <Menu.Item name="logout" onClick={() => handleLogout(history)}></Menu.Item>
            ) : null}
          </Menu.Menu>
        </Menu>
      )}
    </>
  );
};

export default withRouter(Navbar);
