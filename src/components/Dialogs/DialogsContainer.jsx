import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ state, dispatch }) => {

  const onAddMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const onTextChange = (text) => {
    dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs state={state} addMessage={onAddMessage} textChange={onTextChange} />
  );
};

export default DialogsContainer;
