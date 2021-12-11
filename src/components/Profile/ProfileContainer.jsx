import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profile-reducer";

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

export default connect(mapStateToProps, { getProfile })(ProfileContainer);
