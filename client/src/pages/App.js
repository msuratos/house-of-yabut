import React from 'react';

import Countdown from '../components/Countdown';
import SnowBackground from '../components/SnowBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <SnowBackground />
      <Countdown />
    </div>
  );
}

export default App;
