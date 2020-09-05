import React from 'react';

function OurServices() {
  return (
    <section className='services'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='services_title'>
              <div>
                <span className='services-title'>Our Services</span>
                <h1>What we do?</h1>
              </div>
              <p className='service_bio'>
                If you hire a videographer of our team you will get a video
                professional to make a custom video for your business and, once
                the project is over.
              </p>
              <a href='/about' className='primary-btn'>
                View all services
              </a>
            </div>
          </div>
          <div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='services_item'>
                  <div className='services_item_icon'>
                    <img src='#' alt=''></img>
                    <h2>Front-End Development</h2>
                    <p>
                      Whether you’re halfway through the editing process, or you
                      haven’t even started, our post production services can put
                      the finishing touches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
