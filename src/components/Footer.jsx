import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <a
        className='footer-link'
        href='https://www.linkedin.com/in/varun-kumar-44717a155/'
      >
        LinkedIn
      </a>
      <a className='footer-link' href='https://github.com/vs1997'>
        GitHub
      </a>
      <a className='footer-link' href='https://vs1997.github.io/My-Site/'>
        My Site
      </a>
      <p className='copyright'>copyright satuday developer © {year}</p>
    </div>
  );
}
export default Footer;
