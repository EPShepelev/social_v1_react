import React from "react";
import { Link } from "react-router-dom";

import style from "./DialogItem.module.css";

const DialogItem = ({ id, name }) => (<div className={style.item}><Link to={`/dialogs/${id}`}>{name}</Link></div>);

export default  DialogItem