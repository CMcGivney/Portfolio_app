import React, { useRef, useContext} from "react";
import { NavLink, withRouter, useHistory } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";
import { useDetectOutsideClick } from "../Hooks/useDetectOutsideClick.js";

import Logo from "../images/84CreationsWhite.png";

const DropDownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const { user, handleLogout } = useContext(AuthContext);
  let history = useHistory()
 
  return (
    <>
      <NavLink to="/" alt="Link to Home Page">
        <img
          height="60"
          width="90"
          src={Logo}
          style={{ padding: "0", margin: ".5em" }}
          alt="1984 Creations"
        />
      </NavLink>
      <div className="menu-container">
        <button onClick={onClick} className="dropdown_menu-trigger">
          <img
            src="//s.svgbox.net/hero-solid.svg?fill=805ad5&ic=menu"
            alt="menu bars"
            height="25"
            width="25"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`dropdown_menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
            {user ? (
              <a href="/" onClick={() => handleLogout(history)}>Logout</a>
            ) : null}
            </li>
  

          </ul>
        </nav>
      </div>
    </>
  );
};



export default withRouter(DropDownMenu);
