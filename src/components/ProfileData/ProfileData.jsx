import React from "react";
import Contacts from "../Contacts/Contacts";
import style from "./ProfileData.module.css";

const ProfileData = ({profile, isOwner, activateEditMode}) => {
 return (
  <div>
    <h1 className={style.profileName}>{profile.fullName}</h1>
    <div>About me: {profile.aboutMe}</div>
    <div>Looking for a job: {profile.lookingForAJob ? "YES" : "NO"}
      <p>skills: {profile.lookingForAJobDescription}</p>
    </div>
    <div className={style.profileContacts}>
      <h2 className={style.contactsTitle}>My contacts:</h2>
      {Object.keys(profile.contacts).map(key => {
          return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
    </div>
    {isOwner && <button onClick={activateEditMode}>Edit</button>}
</div>
 )
}

export default ProfileData;