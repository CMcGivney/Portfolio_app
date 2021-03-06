import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import Projects from "./Project/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/ContactGrid";
import Blog from "./components/Blog";
import NoMatch from "./Devise/NoMatch";
import NotesForm from "./Notes/NoteForm";
import ScrollToTop from "./components/scrollToTop";
import Login from "./Devise/Login";
import Register from "./Devise/Register";
import FetchUser from "./Devise/FetchUser";
// import ProtectedRoute from "./Devise/ProtectedRoute";

const App = () => (
  <>
    <ScrollToTop />
    <FetchUser>
      <Router>
        <Navbar />
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/notes/new" component={NotesForm} />
            <Route
              exact
              path="/user/:user_id/notes/:id"
              component={NotesForm}
            />
            <Route
              exact
              path="/user/:user_id/notes/:id/edit"
              render={(props) => <NotesForm edit {...props} />}
            />
            <Route exact path="/blog" component={Blog} />
            <Route component={NoMatch} />
          </Switch>
       
      </Router>
    </FetchUser>
  </>
);

export default App;
