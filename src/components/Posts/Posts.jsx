import React from "react";
import PostItem from "../PostItem/PostItem";
import InputPostContainer from "../InputPost/InputPostContainer";
import style from "./Posts.module.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData
  }
}

const Posts = ({ postsData }) => (
  <>
    <InputPostContainer />
    <div className={style.inner}>
      {postsData.map((post) => (
        <PostItem key={post.id} likes={post.likes} text={post.text} />
      ))}
    </div>
  </>
);

export default connect (mapStateToProps) (Posts);
