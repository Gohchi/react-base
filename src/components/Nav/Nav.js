import React from "react";

import { Link } from "react-router-dom";


const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Log in</Link>
      </li>
      <li>
        <Link to="/logout">Log out</Link>
      </li>
      <li>
        <Link to="/404">404 Link</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;