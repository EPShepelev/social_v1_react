import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";


const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
   }
}

const ProfileContainer = ({profile, setUserProfile}) => {

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`
      )
      .then((response) => {
        setUserProfile(response.data);
      });
  }, []);

  return (
    <Profile profile={profile} />
  )
}


export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);