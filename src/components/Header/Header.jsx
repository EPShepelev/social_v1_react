import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "./logo2.jpeg";
import logoutPic from "../../assets/img/logout.svg";

const Header = ({ isAuth, login, email, logout }) => (
  <div className={style.header}>
    <img className={style.logo} src={logo} alt="site logo" />
    <div className={style.loginBlock}>
      {isAuth ? (
        <div className={style.rightInfo}>
          <div className={style.userLogin}>
            <div>{login}</div>
            <div className={style.userEmail}>{email}</div>
          </div>
          <button onClick={logout}>
            <img src={logoutPic} alt="logout button" />
          </button>
        </div>
      ) : (
        <Link to={"/login"}> Login </Link>
      )}
    </div>
  </div>
);

export default Header;
