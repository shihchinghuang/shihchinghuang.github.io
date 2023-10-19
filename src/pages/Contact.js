import React from 'react';
import footer from '../img/footer.svg';
import ContactIcons from '../components/ContactIcons';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <p>Sunny Huang</p>
      <ContactIcons />
      <img src={footer} alt="" />
    </div>
  );
};

export default Contact;
