import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { handleLogout } = props;
  return (
    <div
      className="navbar top-bar is-flex is-justify-content-space-between 
    is-fixed-top has-shadow"
    >
      <div className="navbar-brand ">
        <Link to="/">
          <h1 className="title mt-2 ml-5">TASX</h1>
        </Link>
      </div>
      <div className="content nav-links m-5 is-flex is-justify-content-space-between">
        <Link to="/login">Login</Link>
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}
