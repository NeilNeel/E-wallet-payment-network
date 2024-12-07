import React from "react";
import { Link } from "react-router-dom";
import profileGif from "../icons/profile.gif";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/profile" className="sidebar-profile-details">
            <img
              className="sidebar-profile-img"
              src={profileGif}
              alt="default-profile"
            />
            <div className="profile-details">
              <div className="profile-name">John Doe</div>
              <div className="profile-balance">$5,420.75</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/transaction form">Make a Transaction</Link>
        </li>
        <li>
          <Link to="/statements">Statements</Link>
        </li>
        <li>
          <Link to="/transactions">Transaction History</Link>
        </li>
      </ul>
    </nav>
  );
}
