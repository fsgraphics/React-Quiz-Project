import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-fs.jpg";
import classes from "../component/styles/Nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    // Nav Bar section start here
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Fs_Digital" />
            <h3>Fs Digital</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
    // Nav Bar section End here
  );
};

export default Nav;
