import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import DropDownMenu from './DropDownMenu.js'
import Logo from '../images/1984Logo.png'

const navStyles = {
  padding: '1rem',
  
}


class Navbar extends React.Component {
  state = {
    width: window.screen.width
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.screen.width });
  };
  
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
  
    if (isMobile)
    return (
      <DropDownMenu/>
    )
    else
    return (
      <div>
        <Menu style={{backgroundColor: "lightskyblue",}} pointing secondary fixed="top">
        <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
             >
              <Image
              style={{width: "3rem", height: "3rem"}}
              src={Logo} 
              alt="1984 Creations Logo"
             />
            </Menu.Item>
          </Link>
          <Menu.Menu position="right" style={navStyles}>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
            </Link>
          <Link to='/skills'>
            <Menu.Item
              name='Skills'
              id='skills'
              active={this.props.location.pathname === '/skills'}
            />
            </Link>
          <Link to='/projects'>
            <Menu.Item
              name='Projects'
              id='projects'
              active={this.props.location.pathname === '/projects'}
            />
            </Link>
          <Link to='/contact'>
            <Menu.Item
              name='Contact'
              id='contact'
              active={this.props.location.pathname === '/contact'}
            />
          </Link>
          </Menu.Menu>
        </Menu>
      </div>
      )
    }
  }
  
  /* { this.rightNavItems() } */
export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);

// rightNavItems = () => {
  //   const { auth: { user, handleLogout, }, location, } = this.props;
    
  //   if (user) {
  //     return (
  //       <Menu.Menu style={{backgroundColor: "lightskyblue"}} position='right'>
  //         <Menu.Item
  //           name='logout'
  //           onClick={ () => handleLogout(this.props.history) }
  //         />
  //       </Menu.Menu>
  //     )
  //   } else {
  //     return (
  //       <Menu.Menu style={{backgroundColor: "lightskyblue"}} position='right'>
  //         <Link to='/login'>
  //           <Menu.Item
  //             id='login'
  //             name='login'
  //             active={location.pathname === '/login'}
  //           />
  //         </Link>
  //         <Link to='/register'>
  //           <Menu.Item
  //             id='register'
  //             name='register'
  //             active={location.pathname === '/register'}
  //           />
  //         </Link>
  //       </Menu.Menu>
  //     )
  //   }
  // }