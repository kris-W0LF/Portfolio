import "./Navbar.css";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        KRISH<span>.</span>
      </div>

      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">

        <a href="#" className="github">
          <FaGithub />
        </a>

        <button className="resume"
          onClick={() => window.open("/Resume.pdf", "_blank")}
        >
          Resume

        </button>

      </div>

    </header>
  );
}

export default Navbar;