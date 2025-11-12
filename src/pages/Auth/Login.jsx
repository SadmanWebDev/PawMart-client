// import React, { use, useState } from "react";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "./AuthContext";
// import toast, { Toaster } from "react-hot-toast";

// const Login = () => {
//   const { signInUser, signInWithGoogle } = use(AuthContext);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     signInUser(email, password)
//       .then(() => {
//         toast.success("Welcome Back!");
//         navigate("/");
//         form.reset();
//       })
//       .catch((error) => {
//         setError(error.code);
//       });
//   };

//   const handleGoogle = () => {
//     signInWithGoogle()
//       .then((result) => {
//         console.log(result);
//         toast.success("Welcome Back!");
//         navigate("/");
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   return (
//     <div>
//       <Toaster />
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Login now!</h1>
//           </div>
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             <form onSubmit={handleSubmit} className="card-body">
//               <fieldset className="fieldset">
//                 <label className="label">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="input"
//                   placeholder="Email"
//                 />
//                 <label className="label">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="input"
//                   placeholder="Password"
//                 />
//                 {error && <p className="text-error">{error}</p>}
//                 <div>
//                   <a className="link link-hover">Forgot password?</a>
//                 </div>
//                 <button className="btn btn-neutral mt-4">Login</button>
//                 <p className="text-sm text-center">or</p>
//                 {/* Google */}
//                 <button
//                   type="button"
//                   onClick={handleGoogle}
//                   className="btn bg-white text-black border-[#e5e5e5]"
//                 >
//                   <svg
//                     aria-label="Google logo"
//                     width="16"
//                     height="16"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                   >
//                     <g>
//                       <path d="m0 0H512V512H0" fill="#fff"></path>
//                       <path
//                         fill="#34a853"
//                         d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                       ></path>
//                       <path
//                         fill="#4285f4"
//                         d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                       ></path>
//                       <path
//                         fill="#fbbc02"
//                         d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                       ></path>
//                       <path
//                         fill="#ea4335"
//                         d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                       ></path>
//                     </g>
//                   </svg>
//                   Login with Google
//                 </button>
//                 <p>
//                   Don't have an account?{" "}
//                   <Link to="/register" className="link">
//                     Register!
//                   </Link>
//                 </p>
//               </fieldset>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import loginCat from "/loginCat.png";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Welcome Back!");
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Welcome Back!");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#fef3f0] flex items-center justify-center px-4">
      <Toaster />
      <div className="bg-white w-full max-w-[900px] rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#D75239] mb-6 text-center md:text-left">
            Welcome Back!
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D75239]"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D75239]"
                required
              />
              {error && <p className="text-error text-sm">{error}</p>}
            </div>
            <div className="flex items-center justify-between text-sm">
              <a className="text-gray-500 hover:text-[#D75239]">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="btn w-full bg-[#D75239] text-white py-2 rounded-full font-semibold hover:bg-[#c14532] transition"
            >
              Login
            </button>
          </form>
          <div className="text-center text-sm text-gray-500 mt-6">
            OR CONTINUE WITH
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={handleGoogle}
              className="btn bg-white text-black border border-[#e5e5e5] w-full rounded-full flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Google
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white p-8 md:p-10 flex flex-col justify-between items-center text-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-700 mb-3">
              Don’t have an account?
            </h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base max-w-md mx-auto">
              Join PawMart today and connect with our pet-loving community.
              Discover, adopt, or shop with care.
            </p>
            <Link to="/register">
              <button className="btn border border-[#D75239] text-[#D75239] w-full md:w-1/2 rounded-full mt-2 hover:bg-[#D75239] hover:text-white transition">
                Register
              </button>
            </Link>
          </div>
          <div className="mt-10 md:mt-8">
            <img
              src={loginCat}
              alt="Pet illustration"
              className="w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
