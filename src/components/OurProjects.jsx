import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { Store } from '../context/store';

function OurProjects() {
  const globalState = useContext(Store);
  console.log(globalState);

  const { mapVidDescState } = globalState;
  const { videoTitle, videoDesc, videoSource } = mapVidDescState;
  return (
    <>
      <div>
        <h1 className='Our-Projects'>{videoTitle}</h1>
      </div>
      <div className='Video-Detail'>
        <ReactPlayer
          className='video'
          controls
          width='100%'
          height='460px'
          url={videoSource}
        />
        <p className='Video-Descri'>{videoDesc}</p>
      </div>
    </>
  );
}

export default OurProjects;
