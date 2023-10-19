import React from 'react';

const Sidemenu = ({ hambugerOpen, setHambugerOpen, showMenu }) => {
  return (
    <div className={'sidemenu ' + (hambugerOpen && 'active')}>
      {console.log('sidemenu ' + (hambugerOpen && 'active'))}
      <li
        onClick={() => {
          setHambugerOpen(false);
        }}
      >
        <a href="#homepage">ABOUT</a>
      </li>
      <li
        onClick={() => {
          setHambugerOpen(false);
        }}
      >
        <a href="#portfolio">PORTFOLIO</a>
      </li>
      <li
        onClick={() => {
          setHambugerOpen(false);
        }}
      >
        <a href="#resume">RESUME</a>
      </li>
      <li
        onClick={() => {
          setHambugerOpen(false);
        }}
      >
        <a href="#contact">CONTACT</a>
      </li>
      {/* <li>
          <a href="/">English Version</a>
        </li> */}
    </div>
  );
};

export default Sidemenu;
