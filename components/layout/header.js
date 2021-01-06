import React from "react";
import HeaderWrapper from "./styles.header";
import ReactTooltip from 'react-tooltip';
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
              <Link href="/"><div>

                <i data-tip="Home" class="fas  fa-home"></i>
                <ReactTooltip data-text-color="white" backgroundColor="#ffffff00" borderColor="#ffffff00" place="bottom" />

                {/* <br/>
                <h4>Home</h4> */}
              </div></Link>
            </li>
            <li>
              <Link href="/news-feed"><div>
                <i data-tip="News-Feed" class="fas fa-newspaper"></i>
                <ReactTooltip data-text-color="white" backgroundColor="#ffffff00" borderColor="#ffffff00" place="bottom" />
                {/* <br />
                <h4>News-Feed</h4> */}
              </div></Link>
            </li>
            <li>
              <Link href="profile"><div>
                <i data-tip="Profile" class="fas fa-user"></i>
                <ReactTooltip data-text-color="white" backgroundColor="#ffffff00" borderColor="#ffffff00" place="bottom" />

                {/* <br />
                <h4>Profile</h4> */}
              </div></Link>
            </li>
            <li>
              <Link href="profile"><div>
                <i data-tip="What's New ?" class="fas fa-bell"></i>
                <ReactTooltip data-text-color="white" backgroundColor="#ffffff00" borderColor="#ffffff00" place="bottom" />
                {/* <br />
                <h4>What's New</h4> */}
              </div></Link>
            </li>
            <li>
              <Link href="settings">
                <div>
                  <i data-tip="Settings" class="fas  fa-cog"></i>
                  <ReactTooltip data-text-color="white" backgroundColor="#ffffff00" borderColor="#ffffff00" place="bottom" />
                  {/* <br />
                  <h4>Settings</h4> */}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
