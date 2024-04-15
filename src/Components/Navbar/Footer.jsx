import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Link className="logo" to="/">
          logo
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
    </footer>
  )
}
