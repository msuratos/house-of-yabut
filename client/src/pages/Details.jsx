import React from 'react';
import './Details.css'

const Details = () => {
    const onLocationClick = () => {
        if (
            (navigator.platform.indexOf("iPhone") !== -1) || 
            (navigator.platform.indexOf("iPad") !== -1) || 
            (navigator.platform.indexOf("iPod") !== -1)
        )
            window.open("maps://maps.apple.com/maps?daddr=36.2662590,-115.2643726");
        else /* else use Google */
            window.open("https://goo.gl/maps/HtZrjdGnV1RJzgmY7");
    };

    return (
        <>
            <div className="details-container">
                <iframe height="30%" width="100%" src="https://www.youtube-nocookie.com/embed/lJJCzK0eFII?autoplay=1&fs=1&playsinline=0" 
                    title="YouTube video player" frameBorder="0" allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
                    <p>Answer to riddle: Put invitation in fridge for 15-30min</p>
                </div>
            </div>
        </>
    );
};

export default Details;