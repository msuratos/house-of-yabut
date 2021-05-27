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
        <Video id="Muako8SBJ7c" setshowcontent={setshowcontent} />
        <div style={{height: '100%', width: '100%', position: 'fixed'}}>
          <div className="details-content-background"></div>
          {showcontent && (
            <>
              <div className="details-content">
                <p style={{textAlign: 'center'}}>You have been cordially invited to attend the Game of Thrones gender reveal party</p>
                <ul>
                  <li>
                    <label className="details-content-label">When:</label>
                    <span style={{fontSize: 'x-small'}}>June <span className="got-number">5</span>th &nbsp;
                    <span className="got-number">2021</span> at <span className="got-number">4</span>pm</span>
                  </li>
                  <li>
                    <label className="details-content-label">Where:</label>
                    <a href="/details" onClick={onLocationClick}>
                      <span className="got-number">9721</span> Pan Falls &nbsp;St. &nbsp;Las Vegas, NV <span className="got-number">89178</span>
                    </a>
                  </li>
                  <li>&nbsp;</li>
                  <li>
                    <div style={{paddingBottom: '5px'}}><span style={{fontSize: 'xx-small'}}>For those unable to grace us with their presence,</span></div>
                    <label className="details-content-label">Facebook Live:</label>
                    <a href="/details" onClick={(e) => window.open("https://fb.me/e/2iHXYMCHd")}>
                      Click Here
                    </a>
                  </li>
                </ul>
              </div>
              <p className="details-content-riddle">To reveal the truth, one must place the paper invitation in frozen storage for <span className="got-number">15-30</span>min</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;