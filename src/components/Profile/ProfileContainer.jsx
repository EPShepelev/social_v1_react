import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  };
};

const ProfileContainer = ({ profile, getProfile }) => {
  let { id } = useParams();

  useEffect(() => {
    getProfile(id);
  }, [id]);

  return <Profile profile={profile} />;
};

export default compose(
  connect(mapStateToProps, { getProfile }),
  withAuthRedirect
)(ProfileContainer);
