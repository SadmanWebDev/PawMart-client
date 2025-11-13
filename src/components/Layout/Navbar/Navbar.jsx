import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";
import { FaPaw } from "react-icons/fa";
import { AuthContext } from "../../../pages/Auth/AuthContext";

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
        <label className="switch">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
          <span className="slider">
            <span className="circle">
              <span className="shine shine-1"></span>
              <span className="shine shine-2"></span>
              <span className="shine shine-3"></span>
              <span className="shine shine-4"></span>
              <span className="shine shine-5"></span>
              <span className="shine shine-6"></span>
              <span className="shine shine-7"></span>
              <span className="shine shine-8"></span>
              <span className="moon"></span>
            </span>
          </span>
        </label>
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import { FaSearch, FaShoppingCart } from "react-icons/fa";
// import React, { use, useEffect, useState } from "react";
// import { Link, NavLink } from "react-router";
// import { AuthContext } from "../../../pages/Auth/AuthContext";
// import logo from "/logo.png";
// import { FaPaw } from "react-icons/fa";
// import "./Navbar.css";

// const Navbar = () => {
//   const { user, signOutUser } = use(AuthContext);
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/pets-supplies">Pets & Supplies</NavLink>
//       </li>
//       {user && (
//         <>
//           <li>
//             <NavLink to="/add-listing">Add Listing</NavLink>
//           </li>
//           <li>
//             <NavLink to="/my-listings">My Listings</NavLink>
//           </li>
//           <li>
//             <NavLink to="/my-orders">My Orders</NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );

//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };

//   const handleSignOut = () => {
//     signOutUser();
//   };

//   return (
//     <div className="navbar bg-white">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {links}
//           </ul>
//         </div>
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-xl lg:text-2xl font-bold text-pawmart-dark font-heading"
//         >
//           <img src={logo} alt="PetCare" className="w-10" />
//           PawMart
//         </Link>
//       </div>
//       {/* <div className="flex-1">
//         <a className="flex items-center gap-2 text-gray-700 font-semibold text-lg">

//         </a>
//       </div> */}
//       <div className="hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 text-gray-600 font-medium">
//           {links}
//         </ul>
//       </div>
//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-4 bg-gray-800 text-white px-5 py-2 rounded-l-[3rem] rounded-r-[3rem]">
//           {/* {user && (
//             <>
//               <NavLink className="text-xs" to="/my-orders">
//                 <div className="flex items-center gap-2 ">
//                   MY
//                   <FaShoppingCart className="text-orange-500 text-lg" />
//                   ORDER
//                 </div>
//               </NavLink>
//             </>
//           )} */}
//           {/* <div className="w-px h-5 bg-gray-600"></div> */}
//           <label className="switch">
//             <input
//               onChange={(e) => handleTheme(e.target.checked)}
//               type="checkbox"
//               defaultChecked={localStorage.getItem("theme") === "dark"}
//               className="toggle"
//             />
//             <span className="slider">
//               <span className="circle">
//                 <span className="shine shine-1"></span>
//                 <span className="shine shine-2"></span>
//                 <span className="shine shine-3"></span>
//                 <span className="shine shine-4"></span>
//                 <span className="shine shine-5"></span>
//                 <span className="shine shine-6"></span>
//                 <span className="shine shine-7"></span>
//                 <span className="shine shine-8"></span>
//                 <span className="moon"></span>
//               </span>
//             </span>
//           </label>
//           <div className="w-px h-5 bg-gray-600"></div>
//           {user ? (
//             <button
//               onClick={handleSignOut}
//               className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition"
//             >
//               SignOut
//             </button>
//           ) : (
//             <Link to="/login">
//               <button
//                 onClick={handleSignOut}
//                 className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition"
//               >
//                 Login
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
