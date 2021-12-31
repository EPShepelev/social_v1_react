import React from "react";
import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfileData,
}) => (
  <div className={style.inner}>
    <ProfileInfo
      profile={profile}
      status={status}
      updateStatus={updateStatus}
      isOwner={isOwner}
      savePhoto={savePhoto}
      saveProfileData={saveProfileData}
    />
    <Posts />
  </div>
);

export default Profile;
