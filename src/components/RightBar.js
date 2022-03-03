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

function RightBar() {
  return (
    <section className="right">
      <header>
        <h2>Hello there</h2>
        <p>
          My name is Adeleye and I am a Frontend Developer who loves to work
          with JavaScript technologies. Right now my mind is focused on learning
          everything that is related to Web Development. I'm also passionate
          about exploring new technologies which I can leverage to solve
          real-life problems.
        </p>
      </header>
      <div className="technologies">
          <h4>Technologies & Tools</h4>
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
      </div>
      
      <div className="works">
          <h4>Works</h4>
          <article className="light"></article>
          <article className="dark"></article>
      </div>
    </section>
  );
}

export default RightBar;
