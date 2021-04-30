import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GitHub_logo from './GitHub-Mark-120px-plus.png';
import LinkedIn_logo from './LI-In-Bug.png';
import email_icon from './email_icon.png';
import resume from './Connor_Whitbey_Resume.pdf';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div id="container">

        <div id="top">

            <div id="title">
                <p>Connor Whitbey</p>
            </div>

            <div id="navbar">
                <ul class="nav-links">
                    <li class="link"><a href="#to_about">About</a></li>
                    <li class="link"><a href="#to_resume">Resume</a></li>
                    <li class="link"><a href="#to_contact">Contact</a></li>
                </ul>
            </div>

        </div>

        {/*eslint-disable-next-line */}
        <a href="#to_about"></a>
        <div id="bio">
            {/*eslint-disable-next-line */}
            <h1><a name="to_about">Pathways to OSU Blockchain Senior Project</a></h1>
            <p>
            Hi, my name is Connor and I worked on a project called Pathways to OSU Blockchain. Our project partner wanted to investigate the merits of blockchain as a possible solution to the problem faced by many first-generation and underprivileged students who may lack the resources and knowledge needed to succeed. The goal of this project is to leverage blockchain technology to create a new system for helping students on their education journey. We utilized Hyperleder Fabric and IBM’s Blockchain platform to create a prototype which demonstrates how this kind of system could work. Our prototype provides a web application front-end for students and institutions to use, which communicates through a server to the blockchain backend. Blockchain is used because it has the power to connect students across many different institutions. The system uses smart contracts to facilitate a notification system that alerts students with events and clubs they may be interested in, as well as provide them with updates and check-ins to ensure they are on track to reach their education goals.
            </p>
            <p>
            More information can be found in my Github (link at the bottom of this page).
            </p>
        </div>

        {/*eslint-disable-next-line */}
        <a href="#to_resume"></a>
        <div id="resume">
            {/*eslint-disable-next-line */}
            <h1><a name="to_resume">My Resume</a></h1>
            <p>
            Click <a class="resume_link" href= {resume}>here</a> for my current resume.
            </p>

        </div>

        {/*eslint-disable-next-line*/}
        <a href="#to_contact"></a>
        <div id="contact">
            {/*eslint-disable-next-line */}
            <h1><a name="to_contact">Contact Me</a></h1>
            <p>
            Please visit my GitHub and LinkedIn profiles. You can send me an email at whitbey35@gmail.com by clicking the email icon.
            </p>
            <div class="icons">

                <a href="https://github.com/Connor35"><img src={GitHub_logo} alt="Github" /></a>

                <a href="https://www.linkedin.com/in/connor-whitbey/"><img src={LinkedIn_logo} alt="LinkedIn" /></a>

                <a href="mailto: whitbey35@gmail.com"><img src={email_icon} alt="Email" /></a>

            </div>
        </div>

        <div id="footer">
            <p>
            Connor Whitbey © 2020
            </p>
        </div>

    </div>
  );
}

export default App;
