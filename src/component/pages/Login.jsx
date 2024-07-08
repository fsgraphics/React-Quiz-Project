import React from "react";
import loginupImage from "../assets/images/login.svg";
import Button from "../Button";
import classes from "../component/styles/Login.module.css";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration>
          <img src={loginupImage} alt="Login" />
        </Illustration>
        <Form className={`${classes.login} ${classes.form}`}>
          <TextInput
            type="password"
            placeholder="Enter User ID"
            icon="person"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <Button>
            <span>Login</span>
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
