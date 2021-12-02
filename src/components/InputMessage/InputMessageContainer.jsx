import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import InputMessage from "./InputMessage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: ()=> {
      dispatch(addMessageActionCreator());
    }
  }
}

const InputMessageContainer = connect (mapStateToProps, mapDispatchToProps) (InputMessage);

export default InputMessageContainer;
