import React, { useState } from "react";
import style from "./InputPost.module.css";

const InputPost = ({ addPost }) => {
  const [post, setPost] = useState("");

  const onAddPost = (post) => {
    addPost(post);
    setPost("");
  };

  return (
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
        <textarea
          onChange={(e) => {
            setPost(e.target.value);
          }}
          value={post}
        ></textarea>
      </div>
      <button className={style.postAdd__btn} onClick={() => onAddPost(post)}>
        Add post!
      </button>
    </div>
  );
};

export default InputPost;
