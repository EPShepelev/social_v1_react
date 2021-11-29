import React from "react";

import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
// import InputText from "../InputText/InputText";
import style from "./Dialogs.module.css";

const Dialogs = ({ state, dispatch }) => {
  const newMessageEl = React.createRef();

  const onAddMessage = () => {
    dispatch({type: "ADD-MESSAGE"});
  };

  const onTextChange = () => {
    let text = newMessageEl.current.value;
    dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text});
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
      {/* <InputText dispatch={dispatch} newMessage={??? how ???} /> */}
      <textarea
        ref={newMessageEl}
        onChange={onTextChange}
        value={state.newMessageText}
      ></textarea>
      <button onClick={onAddMessage}>Send message!</button>
    </>
  );
};

export default Dialogs;
