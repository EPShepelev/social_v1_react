import React, { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
   }
}

const ProfileContainer = ({profile, setUserProfile, router}) => {

  useEffect(() => {
    let userId = router.params.userId;
    if(!userId) {
      userId = 2;
    }
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
      )
      .then((response) => {
        setUserProfile(response.data);
      });
  }, []);

  return (
    <Profile profile={profile} />
  )
}


const ProfileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainerWithUrlData);