import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
export default (
    <Switch>
	   <Route exact path='/' />
       <Route exact path='/contact' />
	   <Route exact path='/skills' />
	   <Route exact path='/notes/new' />
	   <Route exact path='/projects' />
	   <Route exact path='/notes/:id/edit' />
    </Switch>
);
