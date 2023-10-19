import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';

const ResumeSeeMore = ({ showContent }) => {
  const [rotate, setRotate] = useState(false);
  const arrowRotate = () => {
    setRotate(!rotate);
  };
  return (
    <div>
      <p
        className="seemore"
        onClick={() => {
          showContent();
        }}
      >
        <FaChevronCircleDown
          onClick={() => {
            arrowRotate();
          }}
          className={'arrowicon ' + (rotate && 'arrow')}
        />
      </p>
    </div>
  );
};

export default ResumeSeeMore;
