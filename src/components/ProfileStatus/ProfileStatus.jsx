import React, { useState, useEffect } from "react";
import style from "./ProfileStatus.module.css";

const ProfileStatus = ({ status, updateStatus, isOwner }) => {
  const [editMode, setEditMod] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  const activateEditMode = () => {
    if (isOwner) {
    setEditMod(true);
    }
  };

  const deActivateEditMode = (e) => {
    setEditMod(false);
    updateStatus(localStatus);
  };

  useEffect(() => {
    setLocalStatus(status)
  }, [status]);

  const onFocusHandle = (e) => e.target.select();

  return (
    <div className={style.container}>
      {editMode ? (
        <div>
          <input
            autoFocus={true}
            className={style.input}
            onChange={(e) => {
              setLocalStatus(e.target.value);
            }}
            onFocus={onFocusHandle}
            onBlur={(e) => deActivateEditMode(e)}
            value={localStatus}
          />
        </div>
      ) : (
        <div>
          <span className={style.text} onClick={activateEditMode}>
            {status || (isOwner && "Click andy type status..." ) }
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
