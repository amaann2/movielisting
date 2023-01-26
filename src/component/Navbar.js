import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-dark bg-dark fixed-top" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="../../img/logo.svg_.png" className="logo ms-4" alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
