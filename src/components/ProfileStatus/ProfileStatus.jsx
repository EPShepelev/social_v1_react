import React, { useState } from "react";
import style from "./ProfileStatus.module.css";

const ProfileStatus = () => {

  const [editMode, setEditMod] = useState(false);
  const [status, setStatus] = useState("dClick and type status...");

  const activateEditMode = () => {
    setEditMod(true);
  }

  const deActivateEditMode = (e) => {
    setStatus(e.target.value);
    setEditMod(false);
  }

  const onFocusHandle = (e) => e.target.select()

  return (
    <div className={style.container}>
      {editMode ? (
        <div>
          <input autoFocus={true} className={style.input} onFocus={onFocusHandle} onBlur={(e) => deActivateEditMode(e)} ></input>
        </div>
      ) : (
        <div>
          <span className={style.text} onDoubleClick={activateEditMode}>{status}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
