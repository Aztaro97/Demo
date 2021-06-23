import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../../img/logo.png";
import Profile from "../../img/profile.png";
import User from "../../img/user.png";
import Alarm from "../../img/alarm.png";
// import pic from ""
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav__left">
          <a className="logo" href="#/">
            <img src={Logo} alt="logo" />
          </a>
          <button className="btn mx-5">Make an appointment</button>
        </div>
        <div className="navbar_right">
          <a href="#/">
            <img className="navbar_icon" src={Profile} alt="logo" />
          </a>
          <a href="#/">
            <img className="navbar_icon" src={Alarm} alt="logo" />
          </a>
          <a href="#/">
            <img className="navbar_user" src={User} width="35" alt="logo" />
          </a>
          <h4>Katty Mark</h4>
        </div>
      </div>
    </>
  );
}

export default Navbar;
