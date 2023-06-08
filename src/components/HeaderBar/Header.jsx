/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import assets from "../../assets";
import "./header.css";
export default function Header() {
  return (
    <>
      <nav className="navbar-header">
        <img src={assets.Logo} alt="" srcset="" />

        <span className="navbar-text">
          <span className="material-symbols-outlined">notifications</span>
          <span className="notification-text">3</span>
        </span>
      </nav>
    </>
  );
}
