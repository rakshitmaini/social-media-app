import React from "react";
import HeaderWrapper from "./styles.header";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderWrapper>
      <div id="header">
        <div id="logo">
          <img src="/logo.png" />
        </div>
        <div id="menu_list">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/news-feed">Newsfeed</Link>
            </li>
            <li>
              <Link href="profile">Profile</Link>
            </li>
            <li>
              <Link href="settings">settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
