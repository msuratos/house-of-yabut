import React, { useState } from 'react';

import Video from '../components/Video';
import './Details.css'

const Details = () => {
  const [showcontent, setshowcontent] = useState(false);

  const onLocationClick = () => {
    if (
      (navigator.platform.indexOf("iPhone") !== -1) ||
      (navigator.platform.indexOf("iPad") !== -1) ||
      (navigator.platform.indexOf("iPod") !== -1)
    )
      window.open("https://maps.apple.com/maps?daddr=9721+Pan+Falls+Dr,+Las+Vegas,+NV+89149");
    else /* else use Google */
      window.open("https://goo.gl/maps/YToZSDL56WfefREy9");
  };

  return (
    <>
      <div className="details-container">
        <Video id="lJJCzK0eFII" setshowcontent={setshowcontent} />
        {showcontent && (
          <div className="details-content">
            <p>You have been cordially invited to attend the GoT gender reveal party</p>
            <ul>
              <li>
                <label className="details-content-label">Location:</label>
                <a href="/details" onClick={onLocationClick}>9721 Pine Falls Street Las Vegas, NV 89178</a>
              </li>
              <li>
                <label className="details-content-label">Facebook Live:</label>
                <a href="/details" onClick={(e) => window.open("https://www.facebook.com/events/129180445848737")}>
                  Facebook Live Link (For those unable to grace us with their presence
                </a>
              </li>
            </ul>
            <p className="details-content-riddle">Answer to riddle: Put invitation in fridge for 15-30min</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;