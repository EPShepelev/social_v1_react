import React, { useState, useEffect } from "react";
import style from "./InputMessage.module.css";

const InputMessage = ({ addMessage }) => {
  const [message, setMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const [inputClassList, setInputClassList] = useState([]);

  const onAddMessage = (text) => {
    if (messageLength === 7) {
     text+= "!!!";
    }
    addMessage(text);
    setMessage("");
  };

  useEffect(() => {
      setMessageLength(message.length);
      if (messageLength < 5) {
        setInputClassList(style.font)
      }
      else if (messageLength > 10) {
        setInputClassList(style.color)
      }
      else {
        setInputClassList([])
      }
  }, [message]);

  return (
    <div className={style.postAdd__wrapper}>
      <div className={style.postAdd__text}>
        <textarea
        className={inputClassList}
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