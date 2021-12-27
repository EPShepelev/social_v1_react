import React from "react";
import style from "./ProfileInfo.module.css";
import Avatar from "../Avatar/Avatar";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return  <Preloader />
  }

  const onPhotoSelected = (e) => {
      if( e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
  }

  return ( <div className={style.profileInfo}>
    <div className={style.profileInfo__avatar}>
      <Avatar avatar={profile.photos.large}/>
      <ProfileStatus status={status} updateStatus={updateStatus}/>
    </div>
    <div>
      <div>{profile.fullName}</div>
      <div>{profile.aboutMe}</div>
      <div>{profile.contacts.facebook}</div>
      {isOwner && <input type="file" onChange={onPhotoSelected}/>}
    </div>
  </div>)
  };

export default ProfileInfo;
