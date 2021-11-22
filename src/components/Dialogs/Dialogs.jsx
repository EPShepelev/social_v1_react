import React from "react";
import { Link } from "react-router-dom";

import style from "./Dialogs.module.css";

const DialogItem = ({ id, name }) => (
  <div className={style.item}>
    <Link to={`/dialogs/${id}`}>{name}</Link>
  </div>
);

const Message = ({ text }) => {
  return <div className={style.message}>{text}</div>;
};

export default function Dialogs() {
  return (
    <div className={style.dialogs}>
      <div className={style.dialosItems}>
        <DialogItem name="Vasya" id="1" />
        <DialogItem name="Olya" id="2" />
        <DialogItem name="Dasha" id="3" />
        <DialogItem name="Kathreen" id="4" />
      </div>
      <div className={style.messages}>
        <Message text="Hi!" />
        <Message text="Whats up" />
        <Message text="Hello" />
      </div>
    </div>
  );
}
