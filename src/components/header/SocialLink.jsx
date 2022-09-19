import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const SocialLink = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/saurabh-maurya-074aa0195/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/samrat14m" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/samraat.143/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialLink;
