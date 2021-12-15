import React from "react";
import style from "./InputPost.module.css";
import TextInputBase from "../common/TextInput/TextInputBase";

const InputPost = ({ addPost }) => {

  const addNewPost = (values) => {
    addPost(values.newPostBody);
  };

  return (
    <div className={style.postAdd__wrapper}>
       <TextInputBase onSubmitClick={addNewPost} name={"newPostBody"} btntext={"Create Post"} placeholder={"type..."}/>
    </div>
  );
};

export default InputPost;
