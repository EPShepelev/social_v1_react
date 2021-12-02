import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import style from "./Dialogs.module.css";
import InputMessageContainer from "../InputMessage/InputMessageContainer";

const Dialogs = ({ state }) => {

  return (
    <>
      <div className={style.dialogs}>
        <div className={style.dialosItems}>
          {state.dialogsData.map((dialog) => (
            <DialogItem id={dialog.id} name={dialog.name} />
          ))}
        </div>
        <div className={style.messages}>
          {state.messagesData.map((message) => (
            <Message isYours={message.isYours} text={message.text} />
          ))}
        </div>
      </div>
      <InputMessageContainer />
    </>
  );
};

export default Dialogs;
