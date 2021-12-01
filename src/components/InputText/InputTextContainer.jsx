import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import InputText from "./InputText";

const InputTextContainer = ({ dispatch, newPostText }) => {

  const onAddPost = () => {
    dispatch(addPostActionCreator());
  };

  const onInputChange = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <InputText newPostText={newPostText} addPost={onAddPost} updateNewPostText={onInputChange}/>
  );
};

export default InputTextContainer;
