import React from "react";
import TextInputBase from "../common/TextInput/TextInputBase";
import style from "./InputMessage.module.css";

const InputMessage = ({ addMessage }) => {

  const addNewMessage = (values) => {
    addMessage(values.message);
  };

  return (
    <div className={style.postAdd__wrapper}>
      <TextInputBase onSubmitClick={addNewMessage} btntext={"Add message"} placeholder={"type..."}/>
    </div>
  );
};

export default InputMessage;
