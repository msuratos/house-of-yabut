import React, { useEffect } from 'react';
import { checkCookie, setCookie } from '../helpers/cookieHelper';

// Copied from https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution
const Video = (props) => {
  const { id, setshowcontent } = props;

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setshowcontent(true);

      if (!checkCookie('hasseenvideo'))
        setCookie('hasseenvideo', true, 5);
    }
  };

  const loadVideo = () => {
    // the Player object is created uniquely based on the id in props
    new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      height: '30%',
      width: '100%',
      playerVars: {
        'autoplay': 1,
        'fs': 1,
        'playsinline': 0
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      },
    });
  };

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    else
      loadVideo();
  });

  return (
    <>
      <div id={`youtube-player-${id}`} />
    </>
  )
};

export default Video;