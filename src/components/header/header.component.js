import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.style.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo">
      Job Board
    </Link>
    <div className="header-right">
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/posts" exact activeClassName="active">
        Post a Job
      </NavLink>
    </div>
  </div>
);
export default Header;
