import React from "react";
import { Link } from "react-router-dom";
import classes from "../component/styles/Account.module.css";
import { useAuth } from "./../contexts/AuthContext";

const Account = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup"> Signup</Link>
          <Link to="/login"> Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
