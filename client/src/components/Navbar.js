import React from "react";
import useWindowSize from "../util/useWindowSize.js"
import DropDownMenu from "./DropdownNavbar.js";
import NavbarComponent from './OldNavbar'



const Navbar = ({ location, history }) => {
  const size = useWindowSize();
  const isMobile = size.width <= 500;
 
  
  return (
    <>
      {isMobile ? (
        <DropDownMenu />
      ) : (
       <NavbarComponent />
      )}
    </>
  );
};

export default Navbar;
