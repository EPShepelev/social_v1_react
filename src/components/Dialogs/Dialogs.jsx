import React from "react";
import { Link } from "react-router-dom";

import style from "./Dialogs.module.css";

const DialogItem = ({ id, name }) => (<div className={style.item}><Link to={`/dialogs/${id}`}>{name}</Link></div>);

const Message = ({ text }) => (<div className={style.message}>{text}</div>);

const dialogsData = [
  {id:1, name:"Vasya"},
  {id:2, name:"Olya"},
  {id:3, name:"Dasha"},
  {id:4, name:"Kathreen"},
  {id:5, name:"Michael"},
  {id:6, name:"Alex"},
]

const messagesData = [
  {id:1, text: "Hi!"},
  {id:2, text: "Whats up"},
  {id:3, text: "Hello"},
]

const Dialogs = () => (
<div className={style.dialogs}>
  <div className={style.dialosItems}>
    <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
    <DialogItem id="2" name="Olya" />
    <DialogItem id="3" name="Dasha" />
    <DialogItem id="4" name="Kathreen" />
  </div>
  <div className={style.messages}>
    <Message text="Hi!" />
    <Message text="Whats up" />
    <Message text="Hello" />
  </div>
</div>)

export default Dialogs
