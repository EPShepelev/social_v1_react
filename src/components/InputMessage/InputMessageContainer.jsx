import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import InputMessage from "./InputMessage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogs.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

const InputMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputMessage);

export default InputMessageContainer;
