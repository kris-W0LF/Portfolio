import "./About.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaBullseye,
  FaCode,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <motion.p
        className="small-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        ABOUT ME
      </motion.p>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Building web applications
        <br />
        that solve real problems.
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: .2 }}
        viewport={{ once: true }}
      >
        I'm a Computer Science student focused on
        MERN Stack development. I enjoy building
        responsive applications and continuously
        improving my DSA and problem-solving skills.
      </motion.p>

      <div className="about-grid">

        <div className="about-card">
          <FaLaptopCode />
          <h3>Experience</h3>
          <p>Building MERN Projects</p>
        </div>

        <div className="about-card">
          <FaGraduationCap />
          <h3>Education</h3>
          <p>B.Tech Computer Science</p>
        </div>

        <div className="about-card">
          <FaCode />
          <h3>Learning</h3>
          <p>Java DSA & React</p>
        </div>

        <div className="about-card">
          <FaBullseye />
          <h3>Goal</h3>
          <p>Become Full Stack Developer</p>
        </div>

      </div>

    </section>
  );
}

export default About;