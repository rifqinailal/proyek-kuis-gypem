// src/components/common/Navbar.jsx

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-50 mt-3 px-5 flex items-center lg:hidden">
            <li><a>Item 1</a></li>
            <li><a>Parent</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
         <div>
    <img src="data:image/png;base64,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" alt="Logo"></img>
  </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>

          <li><a>Item 2</a></li>

          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Log in</a>
      </div>
    </div>
  );
}

export default Navbar;