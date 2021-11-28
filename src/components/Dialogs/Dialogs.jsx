import React from "react";

import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import InputText from "../InputText/InputText";
import style from "./Dialogs.module.css";

const Dialogs = ({ state, newMessage, addMessage, updateNewMessageText }) => {
  const newMessageEl = React.createRef();

  const onAddMessage = () => {
    addMessage();
  };

  const onTextChange = () => {
    let text = newMessageEl.current.value;
    updateNewMessageText(text);
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
      {/* <InputText /> */}
      <textarea
        ref={newMessageEl}
        onChange={onTextChange}
        value={newMessage}
      ></textarea>
      <button onClick={onAddMessage}>Add post!</button>
    </>
  );
};

export default Dialogs;
