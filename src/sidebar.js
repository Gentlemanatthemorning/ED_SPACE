import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    // Pass on our props
    <Menu right {...props}>
      <Link to="/" className="menu-item">
        <span>#</span>HOME
      </Link>
      <Link className="menu-item" to="/games">
        <span>#</span>GAMES
      </Link>
      <Link className="menu-item" to="/lessons">
        <span>#</span>LESSONS
      </Link>
      <Link className="menu-item" to="/about_space">
        <span>#</span>ABOUT SPACE
      </Link>
      <Link className="menu-item" to="/contact">
        <span>#</span>CONTACT
      </Link>
    </Menu>
  );
};
