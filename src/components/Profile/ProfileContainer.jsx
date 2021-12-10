import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { UsersAPI } from "../../api/api";
import { setUserProfile } from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  };
};

const ProfileContainer = ({ profile, setUserProfile }) => {
  let { id } = useParams();

  useEffect(() => {
    if (!id) {
      id = 21277;
    } //id моего профиля
    UsersAPI.getUserProfile(id).then((data) => {
      setUserProfile(data);
    });
  }, [id]);

  return <Profile profile={profile} />;
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
