import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import Avatar from "../Avatar/Avatar";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileData from "../ProfileData/ProfileData";
import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfileData,
}) => {
  const [editMode, setEditMod] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const activateEditMode = () => {
    if (isOwner) {
      setEditMod(true);
    }
  };

  const onEditProfileSubmit = (formData, userId) => {
    saveProfileData(formData, userId);
    setEditMod(false);
  };

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={style.profileInfo}>
      <div className={style.profileInfo__avatar}>
        <Avatar avatar={profile.photos.large} />
        {isOwner && <input type="file" onChange={onPhotoSelected} />}
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
      {editMode ? (
        <ProfileEditForm
          profile={profile}
          onEditProfileSubmit={onEditProfileSubmit}
        />
      ) : (
        <ProfileData profile={profile} isOwner={isOwner} activateEditMode={activateEditMode} />
      )}
    </div>
  );
};

export default ProfileInfo;
