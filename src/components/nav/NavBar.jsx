import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiBookmarks } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <a href="'#">
          <AiOutlineHome />
        </a>
        <a href="#about">
          <AiOutlineUser />
        </a>
        <a href="#portfolio">
          <BiBookmarks />
        </a>
        <a href="#contact">
          <BiMessageSquareDetail />
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
