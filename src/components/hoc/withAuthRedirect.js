import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  const redirectComponent = ({ ...props }) => {
    if (!props.isAuth) {
      return <Navigate to={"/login"} />;
    } else {
      return <Component {...props} />;
    }
  };

  const connectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    redirectComponent
  );
  return connectedRedirectComponent;
};
