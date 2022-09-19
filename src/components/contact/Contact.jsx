import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="section__headers">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>
              saurabhmaurya14031997
              <br />
              @gmail.com
            </h5>
            <a
              href="mailto:saurabhmaurya14031997@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Saurabh Maurya</h5>
            <a
              href="http://m.me/100022645096138"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91-9340954961</h5>
            <a
              href="http://api.whatsapp.com/send?phone=9340954961"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
          />
          <input type="text" name="email" required placeholder="Your Email" />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
