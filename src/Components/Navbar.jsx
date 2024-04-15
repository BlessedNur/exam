import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { formContext } from "../AuthProvider/AuthProvider";

export default function Navbar() {
  const [product, currentUser, setCurrentUser] = useContext(formContext);

  return (
    <nav className="nav">
      <Link className="logo" to="/">
        <img src="/images/logo-removebg-preview.png" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="#home">Products</Link>
        </li>
        <li>
          <Link to="#0">New</Link>
        </li>
        <li>
          <Link to="#0">Uploads</Link>
        </li>
        <li>
          <Link to="#">Trending</Link> {/* Add a valid to prop */}
        </li>
      </ul>
      <form className="search">
        <i className="fa fa-search" aria-hidden="true"></i>{" "}
        {/* Use className */}
        <input type="text" placeholder="Search for Products or Brands" />
      </form>
      <div className="sign-in">
        {currentUser ? (
          <>
            <h1>Welcome {currentUser}</h1>
            <Link to="/login" className="sign-out">
              Sign out
            </Link>
          </>
        ) : (
          <>
            <button>
              <Link to="#">Sign up</Link>
            </button>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
