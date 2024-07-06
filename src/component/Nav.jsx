import React from "react";
import Account from "./Account";
import classes from "../component/styles/Nav.module.css";
import logo from "../assets/images/logo-fs.jpg";

const Nav = () => {
  return (
    // Nav Bar section start here
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="./index.html" className={classes.brand}>
            <img src={logo} alt="Fs_Digital" />
            <h3>Fs Digital</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
    // Nav Bar section End here
  );
};

export default Nav;
