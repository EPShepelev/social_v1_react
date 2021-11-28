import React from "react";

import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";

const Profile = ({ state, addPost, updateNewPostText }) => (
  <div>
    <ProfileInfo />
    <Posts
      postsData={state.postsData}
      addPost={addPost}
      newPostText={state.newPostText}
      updateNewPostText={updateNewPostText}
    />
  </div>
);

export default Profile;
