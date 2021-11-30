import React from "react";

import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
// import InputText from "../InputText/InputText";

import style from "./Dialogs.module.css";

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = ({ state, dispatch }) => {

  const onAddMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const onTextChange = (e) => {
    dispatch(updateNewMessageTextActionCreator(e.target.value));
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
        onChange={onTextChange}
        value={state.newMessageText}
      ></textarea>
      <button onClick={onAddMessage}>Send message!</button>
    </>
  );
};

export default Dialogs;
