import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  </QueryClientProvider>
);

export default App;
