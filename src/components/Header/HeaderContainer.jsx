import React, { useEffect } from "react";
import { connect } from "react-redux";
import { UsersAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
  };
};

const HeaderContainer = ({ isAuth, login, email, setAuthUserData }) => {
  useEffect(() => {
    UsersAPI.getAuthUserData()
    .then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        setAuthUserData(id, email, login);
      }
    });
  }, []);

  return <Header isAuth={isAuth} login={login} email={email} />;
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
