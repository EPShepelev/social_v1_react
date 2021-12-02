import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import InputPost from "./InputPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: ()=> {
      dispatch(addPostActionCreator());
    }
  }
}

const InputPostContainer = connect (mapStateToProps, mapDispatchToProps) (InputPost);

export default InputPostContainer;
