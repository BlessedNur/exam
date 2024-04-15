import React from "react";
import { Link } from "react-router-dom";

export default function NavTwo() {
  return (
    <nav className="nav nav-two">
      <Link className="logo" to="/">
        <img src="/images/logo-removebg-preview.png" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="#home">About</Link>
        </li>
        <li>
          <Link to="#0">Contact</Link>
        </li>
        <li>
          <Link to="#">Dicover</Link> {/* Add a valid to prop */}
        </li>
      </ul>
      <div className="sign-in">
        <button>
          <Link className="sign-up" to="#">Sign up</Link>
        </button>
      </div>
    </nav>
  );
}
