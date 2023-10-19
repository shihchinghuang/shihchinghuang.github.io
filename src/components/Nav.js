import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Sidemenu from './Sidemenu';

const Nav = () => {
  const [hambugerOpen, setHambugerOpen] = useState(false);

  const showMenu = () => {
    setHambugerOpen(!hambugerOpen);
  };

  return (
    <>
      <nav className={hambugerOpen && 'active'}>
        <a className="logo" href="#homepage">
          Sunny Huang
        </a>
        {/* <ul class="topmenu"> */}
        <Hamburger
          hambugerOpen={hambugerOpen}
          setHambugerOpen={setHambugerOpen}
          showMenu={showMenu}
        />
        <ul className="topmenu">
          <li>
            <a href="#homepage">ABOUT</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#resume">RESUME</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>

      <div className="sidemenuclass">
        <Sidemenu
          hambugerOpen={hambugerOpen}
          setHambugerOpen={setHambugerOpen}
          showMenu={showMenu}
        />
      </div>

      {/* <li>
          <a href="/">English Version</a>
        </li> */}
    </>
  );
};

export default Nav;
