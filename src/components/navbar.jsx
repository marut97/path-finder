import React, { Component } from "react";
import "../styles/navbar.css";
import mainIcon from "../icons/mainIcon.png";

class NavBar extends Component {
  render() {
    return (
      <div className="background">
        <img src={mainIcon} className="icon"></img>
        <h2 className="header">Path Finder</h2>
      </div>
    );
  }
}

export default NavBar;
