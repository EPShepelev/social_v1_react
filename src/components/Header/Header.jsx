import React from "react";

import style from "./Header.module.css";
import logo from './logo2.jpeg';

const Header = () => (
<div className={style.header}>
  <img className={style.logo} src={logo} alt="site logo" />
</div>)

export default Header;
