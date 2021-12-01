import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";

const App = ({
  state,
  dispatch,
}) => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Navbar state={state.friends}/>
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={state.profile}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <DialogsContainer
                state={state.dialogs}
                dispatch={dispatch}
              />
            }
          >
            <Route path=":id" element={<DialogsContainer />} />
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
