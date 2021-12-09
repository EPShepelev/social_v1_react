import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import UsersContainer from "./components/Users/UsersContainer";

const App = ({state}) => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":id" element={<ProfileContainer />} />
          </Route>
          <Route path="/dialogs" element={ <Dialogs/>}>
            <Route path=":id" element={<Dialogs />} />
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
