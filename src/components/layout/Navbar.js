import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ icon, title }) {
  return (
    <nav className='navbar bg-primary'>
      <h2>
        <i className={icon} />
        <span className='ml-3'> {title}</span>
      </h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
