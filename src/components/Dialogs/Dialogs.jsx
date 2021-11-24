import React from "react";

import DialogItem from "../DialogItem/DialogItem"
import Message from "../Message/Message"
import style from "./Dialogs.module.css";



const Dialogs = ({dialogsData, messagesData}) => (
<div className={style.dialogs}>
  <div className={style.dialosItems}>
    {dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)}
  </div>
  <div className={style.messages}>
    {messagesData.map(message => <Message text={message.text} />)}
  </div>
</div>)

export default Dialogs
