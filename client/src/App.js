import React from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Blog from './components/Blog'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import NotesForm from './components/PostItNoteForm'
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react"

const App = () => (
  <>
  <Navbar/>
  <Container>
    <Switch>
      <Route exact path='/' component={Home} />
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
  </>
)

export default App
