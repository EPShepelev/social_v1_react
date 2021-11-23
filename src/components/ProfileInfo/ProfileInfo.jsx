import React from "react";

import style from "./ProfileInfo.module.css";
import avatar from './avatar.jpeg';

const ProfileInfo = () => (
  <div className={style.profileInfo}>
    <div className={style.profileInfo__avatar}>
      <img src={avatar} alt="user avatar"></img>
    </div>
    <div>description</div>
  </div>
);

export default ProfileInfo;
