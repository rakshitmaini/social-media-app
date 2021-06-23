import React from "react";
import HeaderWrapper from "./styles.header";
import Link from "next/link";
import { AppBar, Toolbar } from "@material-ui/core";

const Icons = [
  {
    title: "Home",
    class: "fa-home",
    link: "/",
  },
  {
    title: "News Feed",
    class: "fa-newspaper",
    link: "/news-feed",
  },
  {
    title: "Profile",
    class: "fa-user",
    link: "/profile",
  },
  {
    title: "Notifications",
    class: "fa-bell",
    link: "/notifications",
  },
  {
    title: "Settings",
    class: "fa-cog",
    link: "/settings",
  },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <div id="header">
        <div id="logo">
          <img src="/logo.png" />
        </div>
        <div id="menu_list">
          {/* <AppBar position="fixed"> */}
          <Toolbar>
            <div>
              <Link href="/profile">
                <i className={`fa fa-home`}></i>
              </Link>
            </div>
          </Toolbar>
          {/* </AppBar> */}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
