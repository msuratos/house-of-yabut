import React, { useState } from 'react';

import logo from '../logo.svg';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    let difference = +new Date(`6/05/2021`) - +new Date();
    let timeLeft = {days: 0, hours: 0, minutes: 0, seconds: 0};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };

    setTimeLeft(timeLeft);
  }

  return timeLeft;

};

  setTimeout(() => {
    calculateTimeLeft();
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <label style={{fontFamily: 'Tagesschrift'}}>Winter is coming...</label> <br />
        <div className="countdown">
          <span className="countdown-number">{timeLeft.days}</span> Days &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.hours}</span> Hrs &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.minutes}</span> Mins &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.seconds}</span> Secs &nbsp;&nbsp;
        </div>
        <br />
        <label style={{fontFamily: 'Tagesschrift'}}>Until the location is revealed...</label>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
