import React from "react";

import style from "./InputText.module.css";

const InputText = ({ addPost, newPostText, updateNewPostText }) => {
  const newPost = React.createRef();

  const onAddPost = () => {
    addPost();
  };

  const onInputChange = () => {
    let text = newPost.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
        <textarea
          ref={newPost}
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
