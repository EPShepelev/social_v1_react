import React from "react";
import LoginFormBase from "../common/Form/LoginFormBase";

const Login = () => {
  const btntext = "Log In";

  return (
    <div>
      <h1>Log In</h1>
      <LoginFormBase btntext={btntext}/>
    </div>
  );
};

export default Login;
