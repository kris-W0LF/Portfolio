import "./Hero.css";
import { motion } from "framer-motion";
import Profile from "../assets/Profile.png";
// import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>



      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >

        <p className="tag">
          AVAILABLE FOR INTERNSHIP
        </p>

        <h1>
          Hi,
          <br />
          I'm <span>Krish</span>
        </h1>

        <h2>
          MERN Stack Developer
        </h2>

        <p className="desc">
          I build clean, responsive and modern web
          applications with React, Node.js,
          Express and MongoDB.
        </p>

        <div className="hero-buttons">

          <button>
            Explore Work
          </button>

          <div className="socials">

            <FaGithub />

            <FaLinkedin />

          </div>

        </div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >

        <div className="profile-card">

          <div className="profile-placeholder">
            <img src={Profile} alt="Profile" />
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;