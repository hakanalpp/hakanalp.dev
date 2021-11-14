import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BayramCounter from './pages/BayramCounter';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/bayraaaaammm">
          <BayramCounter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
