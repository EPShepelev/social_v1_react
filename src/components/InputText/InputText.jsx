import React from "react";
import style from "./InputText.module.css";

const InputText = ({ addPost, updateNewPostText, newPostText }) => {

  const onAddPost = () => {
    addPost();
  };

  const onInputChange = (e) => {
    updateNewPostText(e.target.value);
  };

  return (
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
        <textarea
          onChange={onInputChange}
          value={newPostText}
        ></textarea>
      </div>
      <button className={style.postAdd__btn} onClick={onAddPost}>
        Add post!
      </button>
    </div>
  );
};

export default InputText;
