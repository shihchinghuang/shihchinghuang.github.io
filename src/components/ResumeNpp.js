import React from 'react';
import ResumeSeeMore from './ResumeSeeMore';

const ResumeNpp = ({ content, setContent, showContent }) => {
  return (
    <>
      <div className="box">
        <div className="title">
          <p>立法院時代力量黨團　教育及文化法案助理</p>
          <p>2018.08 - 2021.02</p>
        </div>
        <ResumeSeeMore
          content={content}
          setContent={setContent}
          showContent={showContent}
        />
        <div className={'content ' + (content && 'active')}>
          <p>
            •
            細心精準：完整理解相關背景知識，針對法案及政策立場及方向提出建議，並在沒有法律背景下撰寫法案、預算決議等政府登載歷史之正式文書。包含
            <a
              target="_blank"
              href="https://lci.ly.gov.tw/LyLCEW/agenda1/02/pdf/10/02/06/LCEWA01_100206_00358.pdf"
              rel="noreferrer"
            >
              私立高級中等以上學校退場條例草案
            </a>
            及
            <a
              target="_blank"
              href="https://lci.ly.gov.tw/LyLCEW/agenda1/02/pdf/10/03/09/LCEWA01_100309_00409.pdf"
              rel="noreferrer"
            >
              文化藝術獎助條例修正草案
            </a>
            等。 <br />
            <br />•
            學習快速：國會議事規則繁瑣，透過觀察、收集過往慣例，快速掌握法案進程及可施力之處。
            <br />
            <br />•
            溝通能力：協調各委員、各部會及民間團體意見，尋求共識，準備政策攻防建議、設定爭取底線等以達目標。
          </p>
        </div>
      </div>
    </>
  );
};

export default ResumeNpp;
