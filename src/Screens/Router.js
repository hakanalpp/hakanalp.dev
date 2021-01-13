import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio';
import Home from './Home/Home';

export default function AppRouter() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
