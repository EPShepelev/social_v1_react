import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import style from "./Dialogs.module.css";
import InputMessageContainer from "../InputMessage/InputMessageContainer";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData
  }
}

const Dialogs = ({ dialogsData, messagesData }) => {

  return (
    <div className={style.wrapper}>
      <div className={style.dialogs}>
        <div className={style.dialosItems}>
          {dialogsData.map((dialog) => (
            <DialogItem key={dialog.id} name={dialog.name} />
          ))}
        </div>
        <div className={style.messages}>
          {messagesData.map((message) => (
            <Message key={message.id} isYours={message.isYours} text={message.text} />
          ))}
        </div>
      </div>
      <InputMessageContainer />
    </div>
  );
};

export default connect (mapStateToProps) (Dialogs);
