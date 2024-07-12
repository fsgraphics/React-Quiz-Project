import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";

const PrivateRoue = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <Route {...rest}> {(props) => <Component {...props} />} </Route>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoue;
