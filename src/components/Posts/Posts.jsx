import React from "react";

import PostItem from "../PostItem/PostItem";
import style from "./Posts.module.css";

const postsData = [
  {id: 1, likes: 3, text: "post one"},
  {id: 2, likes: 7, text: "post two"},
  {id: 3, likes: 42, text: "post three"},
  {id: 4, likes: 11, text: "post four"},
]

const Posts = (props) => (
  <>
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
      <textarea></textarea>
      </div>
      <button className={style.postAdd__btn}>Add post!</button>
    </div>
    <div>
      <PostItem likes={7} text={"post one"} />
      <PostItem likes={3} text={"post two"} />
      <PostItem likes={20} text={"post three"} />
      <PostItem likes={4} text={"post four"} />
    </div>
  </>
);

export default Posts;
