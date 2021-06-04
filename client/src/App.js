import React, { useLayoutEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";

import NavbarSwitch from "./components/NavbarSwitch";
import Home from "./Home/ParallaxHome.js";
import Projects from "./Project/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/ContactGrid";
import Blog from "./components/Blog";
import NoMatch from "./Devise/NoMatch";
import NotesForm from "./Notes/NoteForm";
import Login from "./Devise/Login";
import Register from "./Devise/Register";
import FetchUser from "./Devise/FetchUser";
// import ProtectedRoute from "./Devise/ProtectedRoute";

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

const App = () => {
  ReactGA.initialize("G-S524CLSM64");

  const tagManagerArgs = {
    gtmId: "GTM-57K34K9",
  };

  TagManager.initialize(tagManagerArgs);

  window.dataLayer.push({
    event: "event",
    eventProps: {
      category: "pageview",
      action: "getQuote",
      label: "button push",
      value: 1,
    },
  });
  const history = useHistory();

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
  return (
    <>
      <FetchUser>
        <NavbarSwitch />
        <ScrollToTop>
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
        </ScrollToTop>
      </FetchUser>
    </>
  );
};

export default App;
