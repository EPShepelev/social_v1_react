import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus, savePhoto, saveProfileData } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

const ProfileContainer = ({ profile, status, getProfile, getStatus, updateStatus, authorizedUserId, savePhoto, saveProfileData }) => {

  let { id } = useParams();
  let isOwner = false;

  if (!id) {
    id = authorizedUserId;
    isOwner = true;
  }

  useEffect(() => {
    getProfile(id);
    getStatus(id);
  }, [id]);

  return <Profile profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto} saveProfileData={saveProfileData}/>;
};

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfileData }),
  withAuthRedirect
)(ProfileContainer);
