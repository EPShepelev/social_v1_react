import React from "react";

import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = ({state}) => (
  <div>
    <ProfileInfo />
    <Posts postsData={state.postsData}/>
  </div>
)

export default Profile;
