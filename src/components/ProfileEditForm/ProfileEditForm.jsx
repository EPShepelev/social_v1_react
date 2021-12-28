import React from "react";
import style from "./ProfileEditForm.module.css";
import ProfileEditFormBase from "../common/Form/ProfileEditFormBase";

const ProfileEditForm = ({profile, isOwner, saveProfileData}) => {
  return (
    <>
      {/* <h1 className={style.profileName}>{profile.fullName}</h1>
      <div>{profile.aboutMe}</div>
      <div>Looking for a job: {profile.lookingForAJob ? "YES" : "NO"}</div>
      <div className={style.profileContacts}>
        <h2 className={style.contactsTitle}>My contacts:</h2>
        {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
      </div>
      {isOwner && <button onClick={saveProfileData}>Save</button>}*/}
      {isOwner && <ProfileEditFormBase btntext="Save changes" saveProfileData={saveProfileData} />}
  </>
   )
}

export default ProfileEditForm;