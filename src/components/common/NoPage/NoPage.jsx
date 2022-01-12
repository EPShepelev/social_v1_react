import React from "react";
import style from "./NoPage.module.css";
import nopage from "../../../assets/img/nopage.jpeg"

const NoPage = () => (
  <div className={style.wrapper}>
    <h1>Oops!</h1>
    <p>It looks like this page is still under construction...</p>
    <img src={nopage} className={style.image} alt="page is not exist yet..." />
  </div>
);

export default NoPage;
