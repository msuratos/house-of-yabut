import React, { useState } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    let difference = +new Date(`6/05/2021`) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

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
    <header className="App-header">
      <label className="countdown-header">Winter is coming...</label> <br /><br />
      <div className="countdown">
        <span className="countdown-number">{timeLeft.days}</span> <span className="countdown-label">Days</span> &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.hours}</span> <span className="countdown-label">Hrs</span> &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.minutes}</span> <span className="countdown-label">Mins</span> &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.seconds}</span> <span className="countdown-label">Secs</span> &nbsp;&nbsp;
        </div>
      <br />
      <label style={{ fontFamily: 'Tagesschrift' }}>Until the location is revealed...</label>
    </header>
  );
};

export default Countdown;