import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../context/store';
import { ADD_VIDEO_DESC } from '../context/action/type';
import { carouselnonactive, carouselimg } from '../components/VideoDescription';

function Carousel() {
  const globalState = useContext(Store);
  const { dispatchVidDescAction } = globalState;
  return (
    <div
      id='carouselExampleControls'
      className='carousel slide'
      data-ride='carousel'
      data-interval='1500'
      // data-onPause='hover'
    >
      <div className='carousel-inner'>
        {carouselnonactive.map((item, index) => (
          <Fragment key={index.toString()}>
            <div
              className={item.active ? 'carousel-item active' : 'carousel-item'}
              onClick={() =>
                dispatchVidDescAction({
                  type: ADD_VIDEO_DESC,
                  payload: {
                    videoTitle: item.title,
                    videoDesc: item.description,
                    videoSource: item.url,
                  },
                })
              }
            >
              <Link to='opensourcework'>
                <ReactPlayer
                  className='react-Player'
                  controls={true}
                  playing={true}
                  url={item.url}
                  width='100%'
                ></ReactPlayer>
              </Link>
            </div>
          </Fragment>
        ))}

        {/* {carouselimg.map((item) => (
          <Fragment key={item.id}>
            <div className='carousel-item'>
              <img src={item.src} className='d-block w-100' alt='...' />
            </div>
          </Fragment>
        ))} */}
      </div>

      <a
        className='carousel-control-prev'
        href='#carouselExampleControls'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleControls'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
}

export default Carousel;
