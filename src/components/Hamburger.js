import React from 'react';

const Hamburger = ({ hambugerOpen, setHambugerOpen, showMenu }) => {
  return (
    <div
      className="hamburger"
      onClick={() => {
        showMenu();
      }}
    >
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </div>
  );
};

export default Hamburger;
