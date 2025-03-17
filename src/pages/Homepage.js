import React from 'react';
import ProfilePic from '../img/profile-pic.jpeg';
import waves from '../img/waves.svg';
import waves2 from '../img/waves2.svg';
import ContactIcons from '../components/ContactIcons';

const Homepage = () => {
  return (
    <div className="homePage" id="homepage">
      <div className="leftBox">
        <div className="introCard" data-aos="fade-right">
          <img src={ProfilePic} alt="" />
          <div className="info">
            <h1>Sunny Huang</h1>
            <p></p>
            <h3>Front End Engineer</h3>
            <ContactIcons />
          </div>
        </div>
      </div>
      <div className="rightBox">
        <div data-aos="fade-left">
          <h2>Hi there!</h2>
          <h3>
            Here's who I am & what I do. <br />
            Let's talk!
          </h3>
        </div>
      </div>
      <img className="waves" src={waves} alt="" />
      <img className="waves2" src={waves2} alt="" />
    </div>
  );
};

export default Homepage;
