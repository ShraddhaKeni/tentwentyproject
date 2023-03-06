import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="mainHeaderDiv">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#enquiry">Make Enquiry</a></li>
        </ul>
      </div>

    </>
  );
}

export default Header;
