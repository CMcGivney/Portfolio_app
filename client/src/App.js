import React from 'react'
import Home from './Home/Home'
import Projects from './Project/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/ContactGrid'
import Blog from './components/Blog'
import NoMatch from './Devise/NoMatch'
import Navbar from './components/Navbar'
import NotesForm from './Notes/PostItNoteForm'
import { Switch, Route, } from 'react-router-dom'
import { Container, } from "semantic-ui-react"
import Login from './Devise/Login'
import Register from './Devise/Register'
import FetchUser from './Devise/FetchUser'
// import ProtectedRoute from './Devise/ProtectedRoute'


const App = () => (
  <>
   <Navbar/>
    {/* <FetchUser> */}
     <Container>
      <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/register" component={Register} />
       <Route exact path='/projects' component={Projects} />
       <Route exact path='/skills' component={Skills} />
       <Route exact path='/contact' component={Contact} />
       <Route exact path="/notes/new" component={NotesForm} />
       <Route exact path="/notes/:id/edit" component={NotesForm} />
       <Route exact path="/notes/:id/edit" render={props => <NotesForm edit {...props} />} />
       <Route exact path='/blog' component={Blog} />
       <Route component={NoMatch} />
      </Switch>
     </Container>
    {/* </FetchUser> */}
  </>
)

export default App
