import React from "react";
import style from "./InputMessage.module.css";

const InputMessage = ({ addMessage, updateNewMessageText, newMessageText}) => {

  const onAddMessage = () => {
    addMessage();
  };

  const onInputChange = (e) => {
    updateNewMessageText(e.target.value);
  };

  return (
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
        <textarea
          onChange={onInputChange}
          value={newMessageText}
        ></textarea>
      </div>
      <button className={style.postAdd__btn} onClick={onAddMessage}>
        Send message
      </button>
    </div>
  );
};

export default InputMessage;
