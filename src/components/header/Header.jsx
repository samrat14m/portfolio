import React from "react";
import "./header.css";
import Action from "./Action";
import SocialLink from "./SocialLink";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1> Saurabh Maurya</h1>
        <h3>Fullstack Developer</h3>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <Action />
        <SocialLink />
      </div>
    </header>
  );
};

export default Header;
