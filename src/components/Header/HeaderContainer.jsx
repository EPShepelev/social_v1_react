import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
   }
}

const HeaderContainer = ({ isAuth, login, email, setAuthUserData }) => {

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data;
          setAuthUserData(id, email, login);
        }
      });
  }, []);

  return (
    <Header isAuth={isAuth} login={login} email={email} />
  )
}


export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
