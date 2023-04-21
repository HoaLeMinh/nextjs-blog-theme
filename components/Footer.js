import Link from 'next/link';
import Image from 'next/image';
import siteMetadata from '../data/siteMetadata';
/* import Mail from '../data/mail.svg'
import Facebook from '../data/facebook.svg' */
/* import Linkedin from '../data/linkedin.svg'
import Instagram from '../data/instagram.svg' */

import MailIcon from './MailIcon'
import FacebookIcon from './FacebookIcon'
import LinkedinIcon from './LinkedinIcon'
import InstagramIcon from './InstagramIcon'

import * as React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Footer(props) {
  return (
    <footer>
      <hr className="mt-8 divide-y divide-gray-200 dark:divide-gray-700"></hr>
      <div className="mt-4 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
{/*           <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" /> */}
          <Link href={`mailto:${siteMetadata.email}`}>
            <a>
              <MailIcon width={24} height={24}/>
            </a>
          </Link>
          <Link href={siteMetadata.facebook} >
            <a target="_blank" rel="noopener noreferrer" >
              <FacebookIcon width={24} height={24} />
            </a>
          </Link>
          <Link href={siteMetadata.instagram}>
            <a target="_blank" rel="noopener noreferrer" >
              <InstagramIcon width={24} height={24} />
            </a>
          </Link>
          <Link href={siteMetadata.linkedin}>
            <a target="_blank" rel="noopener noreferrer" >
              <LinkedinIcon width={24} height={24} />
            </a>
          </Link>
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-stale-500 dark:text-stale-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </footer>
  )
}

export default Footer;

/* const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="fill-current text-white"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-gray-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex mt-6 bg-white justify-center dark:bg-gray-900 rounded-3xl p-1">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  return (
    <footer className="py-16 flex flex-col items-center">
      <p className="dark:text-white uppercase mb-3 font-bold opacity-60">
        {copyrightText}
      </p>
      <ThemeSwitcher />
    </footer>
  );
} */
