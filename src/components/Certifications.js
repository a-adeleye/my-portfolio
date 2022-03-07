import { motion, AnimatePresence } from "framer-motion";
import AWSSAA from "../images/saa.png";
import googleCert from "../images/google-data-analytics.png";
import AWSCP from "../images/cp.png";
import avatar from "../images/avatar.jpg";

function Certifications({ isVisible }) {
  return (
    <AnimatePresence initial={false}>
       <motion.section
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="certifications"
      >
        <h2>Certifications</h2>
        <div className="main-certificates">
          <div className="main-certificate">
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
          <div className="main-certificate">
            <a
              href="https://www.credly.com/badges/e608f93b-654a-4afa-bfe8-45772d52c5c4/public_url"
              target="_blank"
              rel="noreferrer"
            >
              <img src={googleCert} alt="Google Data Analytics Certificate" />
            </a>
          </div>
          <div className="main-certificate">
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
      </motion.section>
    </AnimatePresence>
  );
}

export default Certifications;
