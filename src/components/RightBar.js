import html from "../images/technologies/html.svg";
import css from "../images/technologies/css.svg";
import javascript from "../images/technologies/js.svg";
import typescript from "../images/technologies/ts.svg";
import react from "../images/technologies/react.svg";
import redux from "../images/technologies/redux.svg";
import mui from "../images/technologies/mui.svg";
import tailwind from "../images/technologies/tailwind.svg";
import node from "../images/technologies/node.svg";
import express from "../images/technologies/express.svg";
import mongoDB from "../images/technologies/mongo.svg";
import postgreSQL from "../images/technologies/firebase.svg";
import aws from "../images/technologies/aws.svg";
import firebase from "../images/technologies/firebase.svg";
import git from "../images/technologies/git.svg";
import npm from "../images/technologies/npm.svg";
import jest from "../images/technologies/jest.svg";
import webstore from "../images/projects/webstore.png";
import weatherApp from "../images/projects/weather-app.png";
import adminDashboard from "../images/projects/admin-dashboard.png";
import resumeMaker from "../images/projects/resume-maker.png";
import assessmentSite from "../images/projects/assessment.png";
import leatraSite from "../images/projects/leatra.png";
import christmasStore from "../images/projects/christmas-store.png";
import tenzies from "../images/projects/tenzies.png";
import memoryGame from "../images/projects/memory-game.png";
import todoApp from "../images/projects/todo-app.png";
import React from 'react';

function RightBar() {

React.useEffect(() => {
    function reveal() {
        const texts = document.querySelectorAll(".text");
        const images = document.querySelectorAll(".image");
        for (let i = 0; i < texts.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = texts[i].getBoundingClientRect().top;
          const elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            texts[i].classList.add("reveal");
            images[i].classList.add("reveal");
          } else {
            texts[i].classList.remove("reveal");
            images[i].classList.remove("reveal");
          }
        }
      }
      
      window.addEventListener("scroll", reveal, true);
      
      reveal();
})

  return (
    <section className="right">
      <header>
        <div className="sidebar-toggle-btn2">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <h2>Hello there 👋</h2>
        <h3>
          I am a creative Frontend Developer based in Dubai who loves to work
          with JavaScript technologies
        </h3>
        <p>I build beautiful and well-engineered websites and web apps</p>
      </header>
      <article className="technologies">
        <h4>Technologies & Tools I use</h4>
        <div className="technologies-container">
          <div className="technology">
            <img src={html} alt="html5" />
            <p>HTML</p>
          </div>
          <div className="technology">
            <img src={css} alt="css" />
            <p>CSS</p>
          </div>
          <div className="technology">
            <img src={javascript} alt="JavaScript" />
            <p>JavaCcript</p>
          </div>
          <div className="technology">
            <img src={typescript} alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div className="technology">
            <img src={react} alt="React" />
            <p>React</p>
          </div>
          <div className="technology">
            <img src={redux} alt="Redux" />
            <p>Redux</p>
          </div>
          <div className="technology">
            <img src={mui} alt="Material UI" />
            <p>Material UI</p>
          </div>
          <div className="technology">
            <img src={tailwind} alt="Tailwind CSS" />
            <p>Tailwind CSS</p>
          </div>
          <div className="technology">
            <img src={node} alt="Node" />
            <p>Node</p>
          </div>
          <div className="technology">
            <img src={express} alt="Express JS" />
            <p>Express</p>
          </div>
          <div className="technology">
            <img src={mongoDB} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className="technology">
            <img src={postgreSQL} alt="PostgreSQL" />
            <p>PostgreSQL</p>
          </div>
          <div className="technology">
            <img src={aws} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="technology">
            <img src={firebase} alt="Firebase" />
            <p>Firebase</p>
          </div>
          <div className="technology">
            <img src={git} alt="Git" />
            <p>Git</p>
          </div>
          <div className="technology">
            <img src={npm} alt="NPM" />
            <p>NPM</p>
          </div>
          <div className="technology">
            <img src={jest} alt="Jest" />
            <p>Jest</p>
          </div>
        </div>
      </article>

      <div className="works">
        <h4>Works</h4>
        <article className="light">
          <div className="text">
            <h3>Single Page Website</h3>
            <p>
              A single page website for Leatra LTD created with <em>HTML</em>,{" "}
              <em>CSS</em> and <em>Vanilla JS</em>.
            </p>
            <a href="https://leatra.com/" target="_blank" rel="noreferrer">
              View live site
            </a>
          </div>
          <div className="image">
            <img src={leatraSite} alt="" />
          </div>
        </article>
        <article className="dark">
          <div className="text">
            <h3>Resume Maker App</h3>
            <p>
              A resume template maker app boostrapped with <em>React</em>.
            </p>
            <a
              href="https://a-adeleye.github.io/cv-maker/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
          </div>
          <div className="image">
            <img src={resumeMaker} alt="" />
          </div>
        </article>

        <article className="light">
          <div className="text">
            <h3>Webstore Project</h3>
            <p>
              A simple e-commerce app boostrapped with <em>React</em>
            </p>
            <a
              href="https://a-adeleye.github.io/e-commerce/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
          </div>
          <div className="image">
            <img src={webstore} alt="" />
          </div>
        </article>
        <article className="dark">
          <div className="text">
            <h3>Skill Assessment App</h3>
            <p>
              Online assessment app created with <em>moodle</em>,{" "}
              <em>Vanilla JS</em>, <em>HMTL</em> and <em>CSS</em>.
            </p>
            <a
              href="https://leatra.com/assessment/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
          </div>
          <div className="image">
            <img src={assessmentSite} alt="" />
          </div>
        </article>
        <article className="light">
          <div className="text">
            <h3>Weather App</h3>
            <p>
              Weather app created with <em>Vanilla JS</em> and{" "}
              <em>Openweather API</em>
            </p>
            <a
              href="https://a-adeleye.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
          </div>
          <div className="image">
            <img src={weatherApp} alt="" />
          </div>
        </article>
        <article className="dark">
          <div className="text">
            <h3>Analytics Dashboard UI Concept</h3>
            <p>
              A music dashboard ui concept created with <em>HTML</em> and{" "}
              <em>CSS</em>
            </p>
            <a
              href="https://a-adeleye.github.io/admin-dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              View mock app
            </a>
          </div>
          <div className="image">
            <img src={adminDashboard} alt="" />
          </div>
        </article>
        <article className="light">
          <div className="text">
            <h3>Online Store</h3>
            <p>
              A christmas online shop made with <em>HTML</em>, <em>CSS</em> and{" "}
              <em>Vanilla JS</em>.
            </p>
            <a
              href="https://a-adeleye.github.io/christmas-store/"
              target="_blank"
              rel="noreferrer"
            >
              View mock site
            </a>
          </div>
          <div className="image">
            <img src={christmasStore} alt="" />
          </div>
        </article>
        <article className="dark">
          <div className="text">
            <h3>Todo App</h3>
            <p>
              A multi-functional todo app with CRUD operations bootstrapped with{" "}
              <em>React</em>.
            </p>
            <a
              href="https://a-adeleye.github.io/todo/"
              target="_blank"
              rel="noreferrer"
            >
              View site
            </a>
          </div>
          <div className="image">
            <img src={todoApp} alt="" />
          </div>
        </article>
        <article className="light">
          <div className="text">
            <h3>Memory Game</h3>
            <p>
              Addictive memory tester game bootstrapped with <em>React</em>
            </p>
            <a
              href="https://a-adeleye.github.io/memory-game/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
          </div>
          <div className="image">
            <img src={memoryGame} alt="" />
          </div>
        </article>
        <article className="dark">
          <div className="text">
            <h3>Tenzies Game</h3>
            <p>
              An addictive dice game bootstrapped with <em>React</em>.
            </p>
            <a
              href="https://a-adeleye.github.io/tenzies-game/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
          </div>
          <div className="image">
            <img src={tenzies} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default RightBar;
