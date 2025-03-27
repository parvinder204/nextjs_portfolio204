import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "@/assets/css/contact.css";

const Contact = () => {
  return (
    <main className="main-container">
    <section className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        Feel free to reach out for collaborations, projects, or just to say hello!
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>Email:</span>
          <a href="mailto:parvinder@example.com">techpinda1214@gmail.com</a>
        </div>

        {/* <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>Phone:</span>
          <a href="tel:+1234567890">+1 234 567 890</a>
        </div> */}

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Location:</span>
          <p>Mohali, Punjab, India</p>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit" className="btn-custom">Send Message</button>
      </form>
    </section>
    </main>
  );
};

export default Contact;
