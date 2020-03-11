import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(){

function Logout () {
  let newUser = {
    username: "", 
    isLoggedIn: 0 
  }

  localStorage.setItem("newUser", JSON.stringify(newUser))

}

  return (
    <header id="header">
    <nav className="navbar navbar-default navbar-fixed-top menu">
    <div className="container">
        <div className="navbar-header"> 
                        <a className="navbar-brand"><img src="images/logo.png" alt="logo" /></a>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right main-menu">
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className={
                window.location.pathname === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Register
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link
              to="/profile"
              className={
                window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link> */}
          </li>
          <li className="nav-item">
            <Link
              to="/newsfeed"
              className={
                window.location.pathname === "/newsfeed"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              NewsFeed
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hotbars"
              className={
                window.location.pathname === "/hotbars"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Bar Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              onClick={Logout}
              className={
                window.location.pathname === "/hotbars"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Log out
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link> */}
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
