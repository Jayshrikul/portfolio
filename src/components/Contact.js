import React from "react";
import "../styles/Contact.css";


const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p>Or connect with me on</p>
      <div className="social-icons">
        <a
          href="https://linkedin.com/in/jayshri-kulkarni-0602b0217"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a href="jayshrirkulkarni11@email.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
