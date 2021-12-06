import React from "react";
import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = () => (
  <div className={style.inner}>
    <ProfileInfo />
    <Posts />
  </div>
);

export default Profile;
