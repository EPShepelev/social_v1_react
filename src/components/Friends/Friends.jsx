import React from "react";

import Avatar from "../Avatar/Avatar";

import style from "./Friends.module.css";

const Friends = ({ id, name }) => (
  <div className={style.friendsBlock}>
    <Avatar />
    <div>{name}</div>
  </div>
);

export default Friends;
