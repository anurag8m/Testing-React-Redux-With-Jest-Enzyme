import React from "react";
import infogainlogo from "./images/infogain-logo.png";
import "./style.css";

const Header = props => {
  return (
    <header data-test="headerComponent">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="wrapDiv">
          <img
            data-test="imgLogo"
            src={infogainlogo}
            alt="Logo"
            style={{ height: "80px", width: "auto" }}
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;
