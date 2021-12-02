import React from "react";
import PostItem from "../PostItem/PostItem";
import InputPostContainer from "../InputPost/InputPostContainer";
import style from "./Posts.module.css";

const Posts = ({ postsData }) => (
  <>
    <InputPostContainer />
    <div>
      {postsData.map((post) => (
        <PostItem likes={post.likes} text={post.text} />
      ))}
    </div>
  </>
);

export default Posts;
