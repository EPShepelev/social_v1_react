import React from "react";

import PostItem from "../PostItem/PostItem";
import InputText from "../InputText/InputText";
import style from "./Posts.module.css";

const Posts = ({ postsData, addPost }) => (
  <>
    <InputText addPost={addPost} />
    <div>
      {postsData.map((post) => (
        <PostItem likes={post.likes} text={post.text} />
      ))}
    </div>
  </>
);

export default Posts;
