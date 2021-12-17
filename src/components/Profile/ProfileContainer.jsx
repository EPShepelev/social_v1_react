import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
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

const ProfileContainer = ({ profile, status, getProfile, getStatus, updateStatus, authorizedUserId }) => {
  let { id } = useParams();
  if (!id) {
    id = authorizedUserId;
  }

  useEffect(() => {
    getProfile(id);
    getStatus(id);
  }, [id]);

  return <Profile profile={profile} status={status} updateStatus={updateStatus} />;
};

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);
