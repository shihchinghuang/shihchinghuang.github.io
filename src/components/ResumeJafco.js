import React from 'react';
import ResumeSeeMore from './ResumeSeeMore';

const ResumeJafco = ({ content, setContent, showContent }) => {
  return (
    <>
      <div className="box">
        <div className="title">
          <p>集富亞洲投資有限公司　行政人員</p>
          <p>2017.09 - 2018.03</p>
        </div>
        <ResumeSeeMore
          content={content}
          setContent={setContent}
          showContent={showContent}
        />
        <div className={'content ' + (content && 'active')}>
          <p>
            •
            英文能力：以英文商業書信來往，協助管理主管行程、接待訪客，細心、有效率。
            <br />
            <br />•
            耐心細心：能夠耐心整理投資及憑證等大批資料；管理零用金及出納，對數字敏銳度高。
          </p>
        </div>
      </div>
    </>
  );
};

export default ResumeJafco;
