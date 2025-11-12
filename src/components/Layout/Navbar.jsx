import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../pages/Auth/AuthContext";
import logo from "/logo.png";
import { FaPaw } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pets-supplies">Pets & Supplies</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-listing">Add Listing</NavLink>
          </li>
          <li>
            <NavLink to="/my-listings">My Listings</NavLink>
          </li>
          <li>
            <NavLink to="/my-orders">My Order</NavLink>
          </li>
        </>
      )}
    </>
  );

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <nav className="navbar bg-white shadow-md sticky top-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-xl lg:text-2xl font-bold text-pawmart-dark font-heading"
        >
          <FaPaw className="text-pawmart-orange text-2xl lg:text-3xl" />
          <span>PawMart</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-body">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-pawmart-orange ring-offset-2">
                  <img
                    src={user.photoURL || "https://i.ibb.co/7X8Zjfv/user.png"}
                    alt="Profile"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="px-4 py-2 font-semibold border-b">
                  {user.displayName || "User"}
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="btn btn-sm lg:btn-md bg-pawmart-orange hover:bg-orange-600 text-white border-none"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-sm lg:btn-md btn-outline border-pawmart-orange text-pawmart-orange hover:bg-pawmart-orange hover:text-white"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


/* import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm px-8">
      <div className="flex-1">
        <a className="flex items-center gap-2 text-gray-700 font-semibold text-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="PetCare"
            className="w-7 h-7"
          />
          PetCare
        </a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600 font-medium">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Grooming</a></li>
          <li><a>Services</a></li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <FaSearch className="text-gray-600" />
        </button>
        <div className="flex items-center gap-4 bg-gray-800 text-white px-5 py-2 rounded-l-[3rem] rounded-r-[3rem]">
          <div className="flex items-center gap-2">
            <FaShoppingCart className="text-orange-500 text-lg" />
            <span className="uppercase text-xs tracking-widest">CART</span>
          </div>

          <div className="w-px h-5 bg-gray-600"></div>

          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
 */