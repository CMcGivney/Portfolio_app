import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Dropdown, Image, Container} from 'semantic-ui-react'
import Logo from '../images/1984Logo.png'


class DropDownMenu extends React.Component {

  
  render() {
  
    return (
      <>
      <Menu 
        style= {{backgroundColor:'lightskyblue'}}
        borderless 
        fixed="top"
        >
        <Container className="dropDown" >
           <Link to="/">
           <Menu.Item 
            style={{padding: ".5rem" }} 
            >
            <Image 
              src={Logo} 
              style={{ padding: '0', margin: ".5em", width: "4rem", height: "4rem"}} />
             </Menu.Item>
             </Link>
              <Dropdown 
                
                pointing="right"
                icon="bars" 
                item
                style={{ margin: '0', padding: "1rem", }} 
                scrolling
                button
                className="menuBars"
                >
                <Dropdown.Menu>
                  <Link to='/'>
                   <Dropdown.Item 
                      name='Home'
                      as='h4'
                      id='home'
                      active={this.props.location.pathname === '/'}>Home
                 </Dropdown.Item>
                 </Link>
               <Link to='/Projects'>
                <Dropdown.Item 
                name='Projects'
                id='Projects'
                as='h4'
                active={this.props.location.pathname === '/Projects'}>Projects
              </Dropdown.Item>
              </Link>
              <Link to='/Contact'>
              <Dropdown.Item 
                 name='Contact'
                id='Contact'
                active={this.props.location.pathname === '/Contact'}>Contact
              </Dropdown.Item>
              </Link>
              <Link to='/Skills'>
              <Dropdown.Item 
                   name='Skills'
                   id='Skills'
                   active={this.props.location.pathname === '/Skills'}
                  >Skills
            </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
         </Dropdown>
       </Container>
      </Menu>
    </>
    )
  }
}


export default withRouter(DropDownMenu);