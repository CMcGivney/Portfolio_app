import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, withRouter, } from 'react-router-dom'

const Navbar = ({location, }) => (
  
  
    <Segment inverted>
      <Menu>
        <NavLink to='/'>
        <Menu.Item 
        name="Home"
        id="home"
        active={location.pathname === '/'}
        />
        </NavLink>
      <NavLink to='/projects'>
      <Menu.Item
      name="Projects"
      id="projects"
      active={location.pathname === '/projects'}
      />
      </NavLink>
      <NavLink to='/skills'>
      <Menu.Item
      name="Skills"
      id="skills"
      active={location.pathname === '/skills'}
      />
      </NavLink>
      <NavLink to='/contact'>
      <Menu.Item
      name="contact"
      id="contact"
      active={location.pathname === '/contact'}
      />
      </NavLink>
      <NavLink to='/blog'>
      <Menu.Item
      name="blog"
      id="blog"
      active={location.pathname === '/blog'}
      />
      </NavLink>
      </Menu>
    </Segment>
  
)


export default withRouter(Navbar)