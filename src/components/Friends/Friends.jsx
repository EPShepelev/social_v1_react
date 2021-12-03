import React from "react";
import Avatar from "../Avatar/Avatar";
import style from "./Friends.module.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    friendsList: state.friends.friendsList
  }
}

const Friends = ({ friendsList }) => (
  <div className={style.items}>
    {friendsList.map(friend => (
    <div className={style.item} key={friend.id}><Avatar />{friend.name}</div>))}
  </div>
);

export default connect (mapStateToProps) (Friends);
