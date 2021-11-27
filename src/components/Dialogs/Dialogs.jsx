import React from "react";

import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import InputText from "../InputText/InputText";
import style from "./Dialogs.module.css";

const Dialogs = ({ state }) => (
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
    <InputText />
  </>
);

export default Dialogs;
