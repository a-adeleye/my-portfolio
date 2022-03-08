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

function Works() {
  return (
    <div className="works">
      <h2>Works</h2>
      <article className="light">
        <div className="text">
          <h3>Single Page Website</h3>
          <p>
            A single page website for Leatra LTD created with <em>HTML</em>,{" "}
            <em>CSS</em> and <em>Vanilla JS</em>.
          </p>
          <div className="work-buttons">
            <a href="https://leatra.com/" target="_blank" rel="noreferrer">
              View live site
            </a>
          </div>
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
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/cv-maker/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/a-adeleye/cv-maker"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
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
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/e-commerce/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/a-adeleye/e-commerce"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
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
          <div className="work-buttons">
            <a
              href="https://leatra.com/assessment/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
          </div>
        </div>
        <div className="image">
          <img src={assessmentSite} alt="" />
        </div>
      </article>
      <article className="light">
        <div className="text">
          <h3>Todo App</h3>
          <p>
            A multi-functional todo app with CRUD operations bootstrapped with{" "}
            <em>React</em> + Redux + Firebase authentication.
          </p>
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/todo-app/"
              target="_blank"
              rel="noreferrer"
            >
              View site
            </a>
            <a
              href="https://github.com/a-adeleye/todo-app"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>
        <div className="image">
          <img src={todoApp} alt="" />
        </div>
      </article>
      <article className="dark">
        <div className="text">
          <h3>Weather App</h3>
          <p>
            Weather app created with <em>Vanilla JS</em> and{" "}
            <em>Openweather API</em>
          </p>
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/weather-app/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/a-adeleye/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>
        <div className="image">
          <img src={weatherApp} alt="" />
        </div>
      </article>
      <article className="light">
        <div className="text">
          <h3>Analytics Dashboard UI Concept</h3>
          <p>
            A music dashboard ui concept bootstrapped with <em>React</em>
          </p>
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/admin-dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              View mock app
            </a>
            <a
              href="https://github.com/a-adeleye/admin-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>
        <div className="image">
          <img src={adminDashboard} alt="" />
        </div>
      </article>
      <article className="dark">
        <div className="text">
          <h3>Online Store</h3>
          <p>
            A christmas online shop made with <em>HTML</em>, <em>CSS</em> and{" "}
            <em>Vanilla JS</em>.
          </p>
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/christmas-store/"
              target="_blank"
              rel="noreferrer"
            >
              View mock site
            </a>
            <a
              href="https://github.com/a-adeleye/christmas-store"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>
        <div className="image">
          <img src={christmasStore} alt="" />
        </div>
      </article>

      <article className="light">
        <div className="text">
          <h3>Memory Game</h3>
          <p>
            Addictive memory tester game bootstrapped with <em>React</em>
          </p>
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/memory-game/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/a-adeleye/memory-game"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
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
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/tenzies-game/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/a-adeleye/tenzies-game"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>
        <div className="image">
          <img src={tenzies} alt="" />
        </div>
      </article>
    </div>
  );
}

export default Works;
