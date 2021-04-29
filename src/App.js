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
            <h1><a name="to_about">Hello!</a></h1>
            <p>
            TEST My name is Connor Whitbey, and I'm a Computer Science student from Portland, Oregon. I created this website to learn ReactJS. You can find links to my GitHub, LinkedIn, and Email accounts at the bottom of the page.
            </p>
            <p>
            As a student at Oregon State University, I've thoroughly enjoyed the process of learning software development. From operating systems to analysis of algorithms, each subject has captured my interest in a different way. I'm excited to join the software industry after my graduation in June 2021.
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
