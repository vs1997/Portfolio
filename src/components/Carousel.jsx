import React from 'react';
//import Carousel from 'react-bootstrap/Carousel';
//var GifPlayer = require('react-gif-player');

function Carousel() {
  return (
    <section>
      <div
        id='carouselExampleControls'
        class='carousel slide'
        data-ride='carousel'
        data-interval='1000'
        data-onPause='hover'
      >
        <div class='carousel-inner'>
          <div class='carousel-item active' style={{ backgroundColor: 'red' }}>
            <img
              src='https://img-a.udemycdn.com/course/750x422/2143416_520c_2.jpg'
              class='d-block w-100'
              alt='...'
            />
            ,
          </div>
          <div class='carousel-item' style={{ backgroundColor: 'yellow' }}>
            <img
              src='https://shopnilmahmud.com/content/images/2018/05/servicii-implementare-frontend.png'
              class='d-block w-100'
              alt='...'
            />
          </div>
          <div class='carousel-item' style={{ backgroundColor: 'green' }}>
            <img
              src='https://image.shutterstock.com/image-vector/back-end-development-banner-concept-260nw-422011339.jpg'
              class='d-block w-100'
              alt='...'
            />
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>
    </section>
  );
}

export default Carousel;
