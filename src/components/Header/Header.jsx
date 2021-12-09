import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from './logo2.jpeg';

const Header = ({isAuth, login, email}) => (
<div className={style.header}>
  <img className={style.logo} src={logo} alt="site logo" />
  <div className={style.loginBlock}>
  {
    isAuth ? <>
      <div>{login}</div>
      <div>{email}</div>
    </> :
    <Link to={"/login"} > Login </Link>
  }
  </div>
</div>)

export default Header;
