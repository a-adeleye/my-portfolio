import { motion } from "framer-motion";
import AWSSAA from "../images/saa.png";
import googleCert from "../images/google-data-analytics.png";
import AWSCP from "../images/cp.png";
import avatar from "../images/avatar.jpg";

function LeftBar() {
  return (
    <section className="left">
      <div className="info-bar">
        <div className="info-header">
          <div className="info-avatar">
            <img src={avatar} alt="" />
          </div>
          <h2 className="info-name">Adeleye Adeyemi</h2>
          <p className="info-title">Frontend Developer</p>
          <p className="info-email">
            <i className="fa-solid fa-envelope"></i> adeleyeadeyemib@gmail.com
          </p>
        </div>
        <div className="info-body">
          <div className="body-details">
            <h4>Residence:</h4> <span>UAE</span>
            <h4>City:</h4> <span>Dubai</span>
            <h4>Language:</h4> <span>English</span>
          </div>
          <div className="body-certifications">
            <h5>Certifications</h5>
            <div className="certificates">
              <div className="certificate">
                <a
                  href="https://www.credly.com/badges/b76dabfc-8fa8-4ccc-8372-4f7a70566b06/public_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={AWSSAA}
                    alt="AWS Certified Solutions Architect - Associate"
                  />
                </a>
              </div>
              <div className="certificate">
                <a
                  href="https://www.credly.com/badges/e608f93b-654a-4afa-bfe8-45772d52c5c4/public_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleCert}
                    alt="Google Data Analytics Certificate"
                  />
                </a>
              </div>
              <div className="certificate">
                <a
                  href="https://www.credly.com/badges/b56509f8-9d11-4d2f-8a04-ecb16b620ca3/public_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={AWSCP}
                    alt="AWS Certified Solutions Architect - Associate"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="info-socials">
          <a
            href="https://www.linkedin.com/in/aadeleye/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/a-adeleye"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:adeleyeadeyemib@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LeftBar;
