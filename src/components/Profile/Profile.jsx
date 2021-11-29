import React from "react";

import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = ({ state, dispatch }) => (
  <div>
    <ProfileInfo />
    <Posts
      postsData={state.postsData}
      newPostText={state.newPostText}
      dispatch={dispatch}
    />
  </div>
);

export default Profile;
