import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Todo Application",
    image: null,
    description:
      "A full-stack task management application with CRUD functionality.",
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Money Manager",
    image: null,
    description:
      "Track income, expenses and savings with an interactive dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Tic Tac Toe",
    image: null,
    description:
      "A responsive multiplayer Tic Tac Toe game built with React.",
    tech: ["React", "CSS"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.h5
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        FEATURED WORK
      </motion.h5>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Selected Projects
      </motion.h2>

      <div className="project-list">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >

            <div className="project-image">

              {project.image ? (

                <img src={project.image} alt={project.title} />

              ) : (

                <div className="image-placeholder">

                  <h3>Project Preview</h3>

                  <p>Screenshot Coming Soon</p>

                </div>

              )}

              <div className="overlay">

                <a href={project.github}>
                  <FaGithub />
                </a>

                <a href={project.live}>
                  <FiExternalLink />
                </a>

              </div>

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">

                {project.tech.map((tech, i) => (

                  <span key={i}>{tech}</span>

                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;