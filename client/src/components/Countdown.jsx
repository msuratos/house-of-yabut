import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [showHint, setShowHint] = useState(false);
  const history = useHistory();

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
    else {
      //TODO: route to play video, then show details
      // Store a cookie to say if they played the video already or not
      // Play the video
      // Show details
      history.push('/details');
    }

    const midweekdate = new Date('6/2/2021');
    const currentdate = new Date();
    if ( !showHint && currentdate >= midweekdate ) 
      setShowHint(true);

    return timeLeft;
  };

  setTimeout(() => calculateTimeLeft(), 1000);

  return (
    <div className="countdown-container">
      <div className="countdown-background"></div>
      <label className="countdown-header">Winter is coming...</label>
      <div className="countdown-body">
        <span className="countdown-number">{timeLeft.days}</span> <span className="countdown-label">Days</span> &nbsp;&nbsp;
        <span className="countdown-number">{timeLeft.hours}</span> <span className="countdown-label">Hrs</span> &nbsp;&nbsp;
        <span className="countdown-number">{timeLeft.minutes}</span> <span className="countdown-label">Mins</span> &nbsp;&nbsp;
        <span className="countdown-number">{timeLeft.seconds}</span> <span className="countdown-label">Secs</span> &nbsp;&nbsp;
        <label className="countdown-footer">Until the location is revealed...</label>
      </div>
      {showHint && 
        (<label className="countdown-riddle">Have you solved the riddle yet?</label>)
      }
    </div>
  );
};

export default Countdown;