import { motion } from "framer-motion";

function LeftBar() {
  return (
    <section className="left">
      <div className="info-bar">
        <div className="info-header">
          <div className="avatar"></div>
          <h3 className="name">Adeleye Adeyemi</h3>
          <p className="title">Frontend Developer</p>
        </div>
        <div className="info-scroll"></div>
      </div>
    </section>
  );
}

export default LeftBar;
