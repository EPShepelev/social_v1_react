import React from "react";

import style from "./PostItem.module.css";
import avatar from './avatar.jpeg';

const PostItem = ({text, likes}) => (
  <div className={style.postItem__container}>
  <div className={style.postItem__avatar}>
    <img src={avatar} alt="user avatar"></img>
  </div>
  <div likes={likes}>{text}</div>
  </div>
)

export default PostItem
