import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
   }
}

const ProfileContainer = ({ profile, setUserProfile }) => {

  let { id } = useParams()

  useEffect(() => {
    if(!id) { id = 2 }
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${id}`
      )
      .then((response) => {
        setUserProfile(response.data);
      });
  }, [id]);

  return (
    <Profile profile={profile} />
  )
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);