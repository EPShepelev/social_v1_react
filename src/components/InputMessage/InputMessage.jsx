import React, { useState, useEffect } from "react";
import style from "./InputMessage.module.css";

const InputMessage = ({ addMessage }) => {
  const [message, setMessage] = useState("");
  const [maxMessageLength, setMaxMessageLength] = useState(false);

  const onAddMessage = (text) => {
    addMessage(text);
    setMessage("");
  };

  useEffect(() => {
    message.length > 10 //<5 символов - шрифт 20пх; если ровно 7 то добавить к отправленному "!!!!"
      ? setMaxMessageLength(true)
      : setMaxMessageLength(false);
  }, [message]);

  return (
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
        <textarea
          className={maxMessageLength ? style.color : ""}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        ></textarea>
      </div>
      <button
        className={style.postAdd__btn}
        onClick={() => onAddMessage(message)}
      >
        Send message
      </button>
    </div>
  );
};

export default InputMessage;
