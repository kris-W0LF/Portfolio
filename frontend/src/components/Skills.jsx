import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.h5
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        MY TECH STACK
      </motion.h5>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Technologies I Use
      </motion.h2>

      <div className="skills-grid">

        <div className="skill-box">

          <h3>Frontend</h3>

          <div className="items">

            <span><FaHtml5 /> HTML</span>

            <span><FaCss3Alt /> CSS</span>

            <span><FaJs /> JavaScript</span>

            <span><FaReact /> React</span>

          </div>

        </div>

        <div className="skill-box">

          <h3>Backend</h3>

          <div className="items">

            <span><FaNodeJs /> Node.js</span>

            <span><SiExpress /> Express</span>

            <span><SiMongodb /> MongoDB</span>

          </div>

        </div>

        <div className="skill-box">

          <h3>Tools</h3>

          <div className="items">

            <span><FaGitAlt /> Git</span>

            <span><FaGithub /> GitHub</span>

             <span><FaGithub /> VS Code</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;