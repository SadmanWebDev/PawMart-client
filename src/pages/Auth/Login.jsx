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
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import loginCat from "/loginCat.png";

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
      .then((result) => {
        console.log(result);
        toast.success("Welcome Back!");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#f9fdf8] flex items-center justify-center px-4">
      <Toaster />
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-6 mr-15">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">
                Mobile Number / Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter email or mobile"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter password"
                required
              />
            {error && <p className="text-error">{error}</p>}
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember password
              </label>
              <a href="#" className="text-gray-500 hover:text-green-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-full font-medium hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>
          <div className="text-center text-sm text-gray-500">
            OR CONTINUE WITH
          </div>
          <div className="flex justify-left">
            {/* Google */}
            <button
              onClick={handleGoogle}
              className="btn w-full rounded-full bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
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

        {/* Right Side */}
        <div className="w-full relative md:w-1/2 mt-10 md:mt-0 flex flex-col items-center text-center">
          <h1 className="text-2xl mb-5">Don’t have an account? </h1>
          <p className="text-gray-600 mb-6 max-w-md text-left">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>

          <Link
            to="/register"
            className="border border-orange-400 text-orange-500 py-2 px-6 rounded-full hover:bg-orange-50 transition"
          >
            Registration
          </Link>

          <img
            src={loginCat}
            alt="Dog"
            className="w-100 mt-8 absolute top-11 left-40 "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
