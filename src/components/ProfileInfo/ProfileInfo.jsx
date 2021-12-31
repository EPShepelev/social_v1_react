import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import Avatar from "../Avatar/Avatar";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileData from "../ProfileData/ProfileData";
import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";
import Contacts from "../Contacts/Contacts";

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
        <div>
          <h1 className={style.profileName}>{profile.fullName}</h1>
          <div>About me: {profile.aboutMe}</div>
          <div>
            Looking for a job: {profile.lookingForAJob ? "YES" : "NO"}
            <p>skills: {profile.lookingForAJobDescription}</p>
          </div>
          <div className={style.profileContacts}>
            <h2 className={style.contactsTitle}>My contacts:</h2>
            {Object.keys(profile.contacts).map((key) => {
              return (
                <Contacts
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}
                />
              );
            })}
          </div>
          {isOwner && <button onClick={activateEditMode}>Edit</button>}
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
