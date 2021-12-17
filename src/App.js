import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const App = ({ initialized , initializeApp}) => {

  useEffect(() => {
    initializeApp()
  });

  if (!initialized) {
    return <Preloader/ >
  }

  return (
    <div className="container">
      <HeaderContainer />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":id" element={<ProfileContainer />} />
          </Route>
          <Route path="/dialogs" element={<Dialogs />}>
            <Route path=":id" element={<Dialogs />} />
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )};

  const mapStateToProps =(state) =>({
    initialized: state.app.initialized,
  })

export default connect(mapStateToProps, {initializeApp})(App);