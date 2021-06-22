import React from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";

function header() {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
    </>
  );
}

export default header;
