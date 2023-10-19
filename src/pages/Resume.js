import React, { useState } from 'react';
import ResumeSeeMore from '../components/ResumeSeeMore';

const Resume = () => {
  const [content, setContent] = useState(false);
  const showContent = () => {
    setContent(!content);
  };
  return (
    <div className="resume" id="resume">
      <h1>Resume</h1>
      <div className="section" data-aos="fade-up">
        <div className="about">
          <p>
            • I am a recent graduate with Master's in Computer Science. As a
            Software Engineer specializing in Front End, my tech stack includes
            HTML, CSS, JavaScript, React, Node.js and more.
          </p>
          <br />
          <p>
            • On a mission to empower every person to understand the world
            better and more easily, and be able to make informed choice.
          </p>
          <br />
          <p>
            • In my past work life, I was a legislative assistant at the
            Congress of Taiwan, where I worked in a fast-paced team environment.
            I learned how to prioritize my tasks and work on tight deadlines.
          </p>
        </div>
        <h3>| Experience |</h3>
        <div className="experience">
          <div className="box">
            <div className="title">
              <p>Software Engineering Fellow @ Formation</p>
              <p>Oct 2022 - Present</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                - Selected for a highly competitive Fellowship, working with
                top-tier software engineers to enhance technical and
                communication skills
              </p>
              <p>
                {' '}
                - Nominated by peers for the weekly Rising Tide award for
                facilitating collaborations through proactive initiatives,
                fostering an inclusive environment, and ensuring collective
                success
              </p>
              <p>
                - Elevated mastery over advanced computer science principles via
                self-driven research, collaborative pair programming, and
                engaged participation in mentor-led group sessions
              </p>
              <p>
                - Skills: JavaScript, React.js, HTML, Cascading Style Sheets
                (CSS), Front-End Development, Algorithms, Data Structures,
                Software Engineering
              </p>
            </div>
          </div>
          <div className="box">
            <div className="title">
              <p>Software Engineer @ Chow Sang Sang Jewelry</p>
              <p>May 2021 - Dec 2021</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                - Proactively proposed and implemented a solution to enable
                mobile access, addressing a critical gap in product
                functionality using HTML, CSS, JavaScript, React
              </p>
              <p>
                - Led the refactoring of the codebase to create responsive user
                interfaces, resulting in a mobile-friendly version and driving a
                50% increase in user engagement
              </p>
              <p>
                - Teamed up with cross-functional groups, including backend
                engineers, project managers, and graphic designers, using Git
                for version control to ensure cohesive website development
              </p>
              <p>
                Skills: JavaScript, React.js, HTML, Cascading Style Sheets
                (CSS), Git, Search Engine Optimization (SEO)
              </p>
            </div>
          </div>

          <div className="box">
            <div className="title">
              <p>
                Software Engineering Intern @ Institute for Information Industry
              </p>
              <p>Feb 2021 - Apr 2021</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                - Designed and built a full-stack comprehensive web application
                “Lunar Phase”, a brand aimed at a revolution of feminine
                hygiene, streamlining the brand prototyping process
              </p>

              <p>
                - Architected the comment feature including creating, reading,
                updating, deleting, and liking comments using a React UI, MySQL
                database, and Node.js server
              </p>

              <p>
                - Led a team of 5, using Trello for project management and Git
                for version control, devising collaborative workflows, and
                upholding project scope and stringent quality standards
              </p>
              <p>
                Skills: JavaScript, React.js, Node.js, HTML, Cascading Style
                Sheets (CSS), MySQL, Adobe XD, Figma (Software), GitHub,
                Bootstrap
              </p>
            </div>
          </div>
          <div className="box">
            <div className="title">
              <p>Legislative Assistant @ Congress of Taiwan</p>
              <p>Aug 2018 - Feb 2021</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                - Led the development of more than 5 legislative bills and 50
                national budget proposals from the ground up that aligned with
                the Party's vision and addressed the country's needs
              </p>
              <p>
                - Thrived in a high-pressure, fast-paced team setting, enhancing
                multitasking abilities to efficiently prepare for intense
                political engagements involving lawmakers, social organizations,
                and various parties
              </p>

              <p>
                - Adeptly distilled intricate information, delivering nuanced
                summaries and actionable insights to legislators, showcasing
                strong analytical skills and communication finesse
              </p>
              <p>
                - Took part of The Committee on Education and Technology,
                providing oversight over crucial entities such as the Ministry
                of Education (Taiwan) and the National Science and Technology
                Council (Taiwan)
              </p>
              <p>
                Skills: Analytical Skills, Communication, Research, Team
                Management, Public Policy, Politics
              </p>
            </div>
          </div>
          <h3>| Education |</h3>
          <div className="box">
            <div className="title">
              <p>
                Master of Science, Computer Science @ San Francisco Bay
                University
              </p>
              <p>Jan 2022 - Aug 2023</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                Coursework: Algorithms, Data Structures, Object-Oriented Design
                in Python, Database, Java and Internet Application, Network
                Security, Software Quality Assurance and Test Automation, Big
                Data Processing & Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
/*

          <br />
          <br />
          
          <br />
          <br />
           <br />
          <br />
          Aside from work, I love walking (an underrated activity!), watching
          reality TV shows (Love is Blind recently!), and having good food!
*/
