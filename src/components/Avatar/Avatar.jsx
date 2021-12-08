import React from "react";
import style from "./Avatar.module.css";
import defaultAvatar from "../../assets/img/avatar.jpeg";

const Avatar = ({avatar}) => <div className={style.avatar}><img src={avatar || defaultAvatar} alt="user avatar"></img></div>

export default Avatar