import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SAMRAT
      </a>

      <ul className="permalinks">
        <li>
          <a href="'#">Home</a>
        </li>
        <li>
          <a href="'#about">About</a>
        </li>
        <li>
          <a href="'#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="'#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100022645096138">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/samraat.143/">
          <FaInstagramSquare />
        </a>
        <a href="http://twitter.com">
          <FaTwitterSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; samrat14 All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
