import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <a
        className='footer-link'
        href='https:https://www.linkedin.com/in/sagar-tyagi-309583154/'
      >
        LinkedIn
      </a>
      <a className='footer-link' href='https://github.com/Saturday-Developer'>
        GitHub
      </a>
      <a className='footer-link' href='https://www.youtube.com/channel/UCuBIeb1gr815Yap1O1sNUyw'>
        YouTube
      </a>
      <p className='copyright'>copyright satuday developer © {year}</p>
    </div>
  );
}
export default Footer;
