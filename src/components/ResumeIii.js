import React from 'react';
import ResumeSeeMore from './ResumeSeeMore';

const ResumeIii = ({ content, setContent, showContent }) => {
  return (
    <>
      <h3>｜進修經驗｜</h3>
      <div className="box">
        <div className="title">
          <p>資策會　前端工程師就業養成班</p>
          <p>2021.02 - 2021.07</p>
        </div>
        <ResumeSeeMore showContent={showContent} />
        <div className={'content ' + (content && 'active')}>
          <p>
            與五名組員協作期末專題，主題為女性生理用品電商網站 Lunar
            Phase，主要負責文章區塊之頁面及功能設計，包含留言功能、字體縮放功能等。
          </p>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/torZxEGRUqw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ResumeIii;
