import React from "react";

import PostItem from "../PostItem/PostItem";
import style from "./Posts.module.css";



const Posts = ({postsData}) => (
  <>
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
      <textarea></textarea>
      </div>
      <button className={style.postAdd__btn}>Add post!</button>
    </div>
    <div>
      {postsData.map(post => <PostItem likes={post.likes} text={post.text} />)}
    </div>
  </>
);

export default Posts;
