import React from "react";

import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = ({postsData}) => (
  <div>
    <ProfileInfo />
    <Posts postsData={postsData}/>
  </div>
)

export default Profile;
