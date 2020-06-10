import React, { Component } from "react";
import "../styles/navbar.css";
import mainIcon from "../icons/mainIcon.png";

class NavBar extends Component {
  render() {
    return (
      <div className="background">
        <img src={mainIcon} className="icon"></img>
        <h2 className="header">Path Finder</h2>
        <button className="button">Explore!</button>
        <button className="button">Examples</button>
        <button className="button">The Algorithms</button>
        <button className="button">About Us</button>
      </div>
    );
  }
}

export default NavBar;
