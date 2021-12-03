import React from "react";
import { Link } from "react-router-dom";
import Friends from "../Friends/Friends";

import style from "./Navbar.module.css";

const Navbar = () => (
  <nav className={style.nav}>
    <div className={style.item}>
      <Link to="/profile" className={style.activeLink}>
        Profile
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/dialogs" className={style.activeLink}>
        Dialogs
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/news" className={style.activeLink}>
        News
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/music" className={style.activeLink}>
        Music
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/users" className={style.activeLink}>
        Users
      </Link>
    </div>
    <div className={style.item}>
      <Link to="/settings" className={style.activeLink}>
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
