import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Countdown from '../components/Countdown';
import SnowBackground from '../components/SnowBackground';
import Details from './Details';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <SnowBackground />
            <Countdown />
          </div>
        </Route>
        <Route exact path='/details'>
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
