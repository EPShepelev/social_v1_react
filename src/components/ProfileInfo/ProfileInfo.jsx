import React from "react";
import style from "./ProfileInfo.module.css";
import Avatar from "../Avatar/Avatar";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return  <Preloader />
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
    </div>
  </div>)
  };

export default ProfileInfo;
