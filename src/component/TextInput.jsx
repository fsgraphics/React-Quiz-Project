import React from "react";
import classes from "../component/styles/TextInput.module.css";

const TextInput = ({ icon, ...rest }) => {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
};

export default TextInput;
