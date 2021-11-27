import React from "react";

import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = ({ state, addPost }) => (
  <div>
    <ProfileInfo />
    <Posts postsData={state.postsData} addPost={addPost} />
  </div>
);

export default Profile;
