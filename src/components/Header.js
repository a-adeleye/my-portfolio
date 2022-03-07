import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const variants = {
    hidden: {
      opacity: 0,
      y: "-5vh"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        damping: 32
      }
    },
  };

  return (
    <motion.header initial="hidden" animate="visible" variants={variants}>
      <div className="sidebar-toggle-btn2">
        <i className="fa-solid fa-bars"></i>
      </div>
      <h2>Hello there 👋</h2>
      <h3>
        I am a creative Frontend Developer based in Dubai who loves to work with
        JavaScript technologies
      </h3>
      <p>I build beautiful and well-engineered websites and web apps</p>
    </motion.header>
  );
}

export default Header;
