import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Countdown from '../components/Countdown';
import SnowBackground from '../components/SnowBackground';
import { ProvideAuth, useAuth } from '../hooks/useAuth';

import Details from './Details';
import './App.css';

const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route 
      {...rest} 
      render={({ location }) => auth.canSeeDetailsPage ? ( children ) : 
        ( <Redirect to={{ pathname: "/", state: { from: location } }} /> )
      } 
    />
  );
};

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className="App">
              <SnowBackground />
              <Countdown />
            </div>
          </Route>
          <PrivateRoute exact path='/details'>
            <Details />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
