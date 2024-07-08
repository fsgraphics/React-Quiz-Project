import React from "react";
import classes from "../component/styles/Form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
