import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from 'react-icons/ai';

const ContactIcons = () => {
  const [copy, setCopy] = useState(false);
  const [instruction, setInstruction] = useState('');
  const [iconSize, setIconSize] = useState('1');

  const showInstruction = () => {
    setInstruction('Click to copy!');
  };

  const hideInstruction = () => {
    setInstruction('');
  };

  const style = { transform: `scale(${iconSize})` };
  return (
    <>
      <div className="contactinfo">
        <div className="email" data-aos="fade-up" data-aos-delay="100">
          <CopyToClipboard
            text="sunnyhuang.sc@gmail.com"
            style={style}
            onCopy={() => {
              setCopy(true);
            }}
            onMouseOver={() => {
              showInstruction();
              setIconSize('1.5');
            }}
            onMouseOut={() => {
              hideInstruction();
              setIconSize('1');
            }}
          >
            <AiOutlineMail className="infoicon" />
          </CopyToClipboard>
          <span>{instruction}</span>
          <h1>sunnyhuang.sc@gmail.com</h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="150">
          <a
            target="_blank"
            href="https://github.com/shihchinghuang?tab=repositories"
            rel="noreferrer"
          >
            <AiFillGithub className="infoicon" />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shihching-huang/"
            rel="noreferrer"
          >
            <AiFillLinkedin className="infoicon" />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="250">
          <a
            target="_blank"
            href="https://medium.com/@sunnyhuang.sc"
            rel="noreferrer"
          >
            <AiFillMediumSquare className="infoicon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactIcons;
