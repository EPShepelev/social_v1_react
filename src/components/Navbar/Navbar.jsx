import React from "react";
import { Link } from "react-router-dom";
import Friends from "../Friends/Friends";
import profilePic from "../../assets/img/profile.svg";
import dialogsPic from "../../assets/img/messages.svg";
import newsPic from "../../assets/img/news.svg";
import musicPic from "../../assets/img/music.svg";
import usersPic from "../../assets/img/users.svg";
import settingsPic from "../../assets/img/settings.svg";
import style from "./Navbar.module.css";

const Navbar = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <Link to="/profile" className={style.activeLink}>
        <img src={profilePic} alt="profile page" />
        Profile
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/dialogs" className={style.activeLink}>
        <img src={dialogsPic} alt="dialogs page" />
        Dialogs
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/news" className={style.activeLink}>
        <img src={newsPic} alt="news page" />
        News
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/music" className={style.activeLink}>
        <img src={musicPic} alt="music page" />
        Music
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/users" className={style.activeLink}>
        <img src={usersPic} alt="users page" />
        Users
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/settings" className={style.activeLink}>
        <img src={settingsPic} alt="settings page" />
        Settings
      </Link>
    </div>
    <div className={style.friendsTitle}>Friends</div>
    <div>
      <Friends />
    </div>
  </nav>
);

export default Navbar;
