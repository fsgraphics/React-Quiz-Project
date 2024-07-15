// eslint-disable-next-line no-unused-vars
import React from "react";
import classes from "../component/styles/TextInput.module.css";

// eslint-disable-next-line react/prop-types
const TextInput = ({ icon, ...rest }) => {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
};

export default TextInput;
