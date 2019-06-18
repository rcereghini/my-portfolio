import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/About"
            >
              About Me
            </Link>
          </li>
          <li>
            {/* <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Elements"
            >
              Download Resume
            </Link> */}
            <a href="https://drive.google.com/file/d/1lnRakI1tQRddUvlLqc8A9Jz7DWQQQ35i/view?usp=sharing">View Resume</a>
          </li>
        </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
