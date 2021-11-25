import React from "react";

import Avatar from "../Avatar/Avatar";

import style from "./PostItem.module.css";


const PostItem = ({text, likes}) => (
  <div className={style.postItem__container}>
  <Avatar />
  <div likes={likes}>{text}</div>
  </div>
)

export default PostItem
