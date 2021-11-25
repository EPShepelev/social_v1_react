import React from "react";

import style from "./Message.module.css";

const Message = ({ text, isYours }) => (<div className={isYours ? style.message : style.messageRight}><span>{text}</span></div>);

export default Message