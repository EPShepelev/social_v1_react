import { addPostActionCreator } from "../../redux/profile-reducer";
import InputPost from "./InputPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    },
  };
};

const InputPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPost);

export default InputPostContainer;
