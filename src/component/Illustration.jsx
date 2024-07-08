import React from "react";
import classes from "../component/styles/Illustration.module.css";
const Illustration = ({ children, className, ...rest }) => {
  return (
    <div className={classes.illustration} {...rest}>
      {children}
    </div>
  );
};

export default Illustration;
