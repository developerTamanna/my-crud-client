import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
     return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-yellow-300 duration-200">
            CRUD App
          </NavLink>
        </div>
        <div className="space-x-4 hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            View Users
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Add User
          </NavLink>
        </div>

        {/* Small device menu icon (optional future update) */}
      </div>
    </nav>
  );
};

export default Header;