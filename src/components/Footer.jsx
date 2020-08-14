import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div class='footer'>
      <a
        class='footer-link'
        href='https://www.linkedin.com/in/varun-kumar-44717a155/'
      >
        LinkedIn
      </a>
      <a
        class='footer-link'
        href='https://www.linkedin.com/in/varun-kumar-44717a155/'
      >
        Twitter
      </a>
      <a
        class='footer-link'
        href='https://www.linkedin.com/in/varun-kumar-44717a155/'
      >
        Web Site
      </a>
      <p class='copyright'>copyright satuday developer © {year}</p>
    </div>
  );
}
export default Footer;
