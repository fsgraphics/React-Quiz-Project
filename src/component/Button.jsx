import React from "react";
import classes from "../component/styles/Button.module.css";

const Button = ({ children }) => {
  return <div className={classes.button}>{children}</div>;
};

export default Button;
