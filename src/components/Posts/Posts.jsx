import React from "react";

import PostItem from "../PostItem/PostItem";
import InputText from "../InputText/InputText";
import style from "./Posts.module.css";

const Posts = ({ postsData, addPost, newPostText, updateNewPostText }) => (
  <>
    <InputText
      addPost={addPost}
      newPostText={newPostText}
      updateNewPostText={updateNewPostText}
    />
    <div>
      {postsData.map((post) => (
        <PostItem likes={post.likes} text={post.text} />
      ))}
    </div>
  </>
);

export default Posts;
