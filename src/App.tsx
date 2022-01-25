import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';

const App = () => (
  <Router>
    <Switch>
      <Route>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
