import React from "react";
import "./header.css";
import Action from "./Action";
import ME from "../../assets/me.png";
import SocialLink from "./SocialLink";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1> Saurabh Maurya</h1>
        <h3>Fullstack Developer</h3>
        <Action />
        <SocialLink />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
