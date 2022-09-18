import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const SocialLink = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="http://insta.com" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialLink;
