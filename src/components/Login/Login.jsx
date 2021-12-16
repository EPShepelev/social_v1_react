import React from "react";
import LoginFormBase from "../common/Form/LoginFormBase";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const Login = ({login, isAuth}) => {
  const btntext = "Log In";
if ( isAuth ) {
  return <Navigate to={"/profile"} />
}
  return (
    <div>
      <h1>Log In</h1>
      <LoginFormBase btntext={btntext} login={login} />
    </div>
  );
};

export default connect(mapStateToProps, {login}) (Login);
