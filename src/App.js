import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


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
      <Suspense fallback={<Preloader />}>
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
      </Suspense>
      <Footer />
    </div>
  )};

  const mapStateToProps =(state) =>({
    initialized: state.app.initialized,
  })

export default connect(mapStateToProps, {initializeApp})(App);