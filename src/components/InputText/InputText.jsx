import React from "react";

import style from "./InputText.module.css";

const newPost = React.createRef();

const InputText = ({ addPost }) => {
  const onAddPost = () => {
    let text = newPost.current.value;
    addPost(text);
    newPost.current.value = "";
  };
  return (
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
        <textarea ref={newPost}></textarea>
      </div>
      <button className={style.postAdd__btn} onClick={onAddPost}>
        Add post!
      </button>
    </div>
  );
};

export default InputText;
