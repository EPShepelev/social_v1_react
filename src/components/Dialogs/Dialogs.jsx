import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import style from "./Dialogs.module.css";

const Dialogs = ({ state, addMessage, textChange }) => {

  const onAddMessage = () => {
    addMessage();
  };

  const onTextChange = (e) => {
    textChange(e.target.value);
  };

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
      <textarea
        onChange={onTextChange}
        value={state.newMessageText}
      ></textarea>
      <button onClick={onAddMessage}>Send message!</button>
    </>
  );
};

export default Dialogs;
