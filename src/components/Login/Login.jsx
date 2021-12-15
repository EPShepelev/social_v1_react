import React from "react";
import FormBase from "../common/Form/Form";

const Login = () => {
  const btntext = "Log In";

  return (
    <div>
      <h1>Log In</h1>
      <FormBase btntext={btntext}/>
    </div>
  );
};

export default Login;
