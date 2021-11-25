import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../Avatar/Avatar";

import style from "./DialogItem.module.css";

const DialogItem = ({ id, name }) => (<div className={style.item}><Avatar/> <Link className={style.itemLink} to={`/dialogs/${id}`}>{name}</Link></div>);

export default  DialogItem