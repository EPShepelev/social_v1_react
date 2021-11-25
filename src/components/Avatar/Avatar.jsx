import React from "react";

import style from "./Avatar.module.css";
import avatar from './avatar.jpeg';

const Avatar = () => <div className={style.avatar}><img src={avatar} alt="user avatar"></img></div>

export default Avatar