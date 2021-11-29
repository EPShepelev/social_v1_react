import React from "react";

import style from "./InputText.module.css";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state.js"

const InputText = ({ newPostText, dispatch }) => {
  const newPost = React.createRef();

  const onAddPost = () => {
    dispatch(addPostActionCreator());
  };

  const onInputChange = () => {
    let text = newPost.current.value;
    dispatch(updateNewPostTextActionCreator(text));
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
