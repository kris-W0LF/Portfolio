import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wtsqu9z",
      "template_2x9ecpf",
      e.target,
      "2tm1ubMCud8wB9nxX"
    )


    .then(() => {
      alert("Message sent!");
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message.");
    });
  };

  return (
    <section className="contact" id="contact">

      <motion.h5
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        CONTACT
      </motion.h5>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Let's Work Together
      </motion.h2>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>kkrish5945@email.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhone />
            <div>
              <h3>Phone</h3>
              <p>+91 9973355909</p>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

        </div>

        <form className="contact-form" onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;