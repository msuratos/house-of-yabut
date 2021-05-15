import React from 'react';

import Countdown from '../components/Countdown';
import SnowBackground from '../components/SnowBackground';
import MusicEmbed from '../components/MusicEmbed';
import './App.css';

function App() {
  return (
    <div className="App">
      <SnowBackground />
      <Countdown />
      <MusicEmbed />
    </div>
  );
}

export default App;
