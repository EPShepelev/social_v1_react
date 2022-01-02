import React from "react";
import LoginFormBase from "../common/Form/LoginFormBase";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./Login.module.css";

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

const Login = ({ login, isAuth, captchaUrl }) => {
  const btntext = "Log In";
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <h1 className={style.title}>Please login</h1>
        <LoginFormBase
          btntext={btntext}
          login={login}
          captchaUrl={captchaUrl}
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { login })(Login);
