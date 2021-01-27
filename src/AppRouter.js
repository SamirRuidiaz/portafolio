import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home/Home';

export const AppRouter = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/portafolio" component={ Home }/>
          <Redirect to="/portafolio" />
        </Switch>
      </div>
    </Router>
  );
}