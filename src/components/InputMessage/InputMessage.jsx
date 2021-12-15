import React from "react";
import TextInputBase from "../common/TextInput/TextInputBase";
import style from "./InputMessage.module.css";

const InputMessage = ({ addMessage }) => {

  const addNewMessage = (values) => {
    addMessage(values.newMessageBody);
  };

  return (
    <div className={style.postAdd__wrapper}>
      <TextInputBase onSubmitClick={addNewMessage} name={"newMessageBody"} btntext={"Add message"} placeholder={"type..."}/>
    </div>
  );
};

export default InputMessage;
