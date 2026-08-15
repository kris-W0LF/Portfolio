import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        KRISH<span>.</span>
      </div>

      <div className="footer-icons">

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <p>
        © 2026 Krish. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;