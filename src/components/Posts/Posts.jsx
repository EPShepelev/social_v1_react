import React from "react";

import PostItem from "../PostItem/PostItem";
import InputTextContainer from "../InputText/InputTextContainer";
import style from "./Posts.module.css";

const Posts = ({ postsData, newPostText, dispatch }) => (
  <>
    <InputTextContainer
      newPostText={newPostText}
      dispatch={dispatch}
    />
    <div>
      {postsData.map((post) => (
        <PostItem likes={post.likes} text={post.text} />
      ))}
    </div>
  </>
);

export default Posts;
