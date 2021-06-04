import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showHint, setShowHint] = useState(false);
  const history = useHistory();
  const auth = useAuth();

  const midweekdate = new Date('06/02/2021 07:00:00 GMT-07:00');
  const releasedate = new Date('06/04/2021 13:00:00 GMT-07:00');

  const calculateTimeLeft = () => {
    const currentdate = new Date();
    const difference = +releasedate - +currentdate;

    if (difference > 0)
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    else {
      auth.setCanSeeDetailsPage(true);
      history.push('/details');
    }

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
        <span className="countdown-number">{timeLeft.seconds}</span> <span className="countdown-label">Secs</span><br />
        <label className="countdown-footer">Until the location is revealed...</label>
      </div>
      {showHint && 
        (<label className="countdown-riddle">Have you solved the riddle yet?</label>)
      }
      <div className="contact-info-countdown">Questions? Text or call us:<a href="tel:702.460.3375">702.460.3375</a></div>
    </div>
  );
};

export default Countdown;