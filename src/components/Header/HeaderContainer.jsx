import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAuthUser, logout } from "../../redux/auth-reducer";
import Header from "./Header";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
  };
};

const HeaderContainer = ({ isAuth, login, email, getAuthUser, logout }) => {
  useEffect(() => {
    getAuthUser();
  }, []);

  return <Header isAuth={isAuth} login={login} email={email} logout={logout} />;
};

export default connect(mapStateToProps, { getAuthUser, logout })(HeaderContainer);
