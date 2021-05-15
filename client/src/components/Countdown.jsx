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
    <div className="countdown-container">
      <div className="countdown-background"></div>
      <label className="countdown-header">Winter is coming...</label>
      <div className="countdown-body">
        <span className="countdown-number">{timeLeft.days}</span> <span className="countdown-label">Days</span> &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.hours}</span> <span className="countdown-label">Hrs</span> &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.minutes}</span> <span className="countdown-label">Mins</span> &nbsp;&nbsp;
          <span className="countdown-number">{timeLeft.seconds}</span> <span className="countdown-label">Secs</span> &nbsp;&nbsp;
        </div>
      <label className="countdown-footer">Until the location is revealed...</label>
    </div>
  );
};

export default Countdown;