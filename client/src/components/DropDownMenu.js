import React, {useContext} from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Dropdown, Image, Container } from "semantic-ui-react";
import Logo from "../images/1984Logo.png";

import { AuthContext } from "../providers/AuthProvider";

const DropDownMenu = ({ location, history }) => {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <>
      <Menu
        style={{ backgroundColor: "#46d6ff" }}
        borderless
        fixed="top"
      >
        <Container className="dropDown">
          <Link to="/">
            <Menu.Item style={{ padding: ".5rem" }}>
              <Image
                src={Logo}
                style={{
                  padding: "0",
                  margin: ".5em",
                  width: "4rem",
                  height: "4rem",
                }}
              />
            </Menu.Item>
          </Link>
          <Dropdown
            pointing="right"
            icon="bars"
            item
            style={{ margin: "0", padding: "1rem" }}
            scrolling
            button
            className="menuBars"
          >
            <Dropdown.Menu>
              <Link to="/">
                <Dropdown.Item
                  name="Home"
                  as="h4"
                  id="home"
                  active={location.pathname === "/"}
                >
                  Home
                </Dropdown.Item>
              </Link>
              <Link to="/Projects">
                <Dropdown.Item
                  name="Projects"
                  id="Projects"
                  as="h4"
                  active={location.pathname === "/Projects"}
                >
                  Projects
                </Dropdown.Item>
              </Link>
              <Link to="/Contact">
                <Dropdown.Item
                  name="Contact"
                  id="Contact"
                  active={location.pathname === "/Contact"}
                >
                  Contact
                </Dropdown.Item>
              </Link>
              <Link to="/Skills">
                <Dropdown.Item
                  name="Skills"
                  id="Skills"
                  active={location.pathname === "/Skills"}
                >
                  Skills
                </Dropdown.Item>
              </Link>
              {user ? (
                <Dropdown.Item
                  name="logout"
                  onClick={() => handleLogout(history)}
                >Logout</Dropdown.Item>
              ) : null}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </>
  );
};

export default withRouter(DropDownMenu);
