import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import toast, { Toaster } from "react-hot-toast";
import registerCat from "/RegisterCat.png";

const Register = () => {
  const { createUser, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    // const photo = form.photo.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Your account has been created. Start exploring now!");
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        setError(error.message);
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
    // <div>
    //   <Toaster />
    //   <div className="hero bg-base-200 min-h-screen">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //       <div className="text-center lg:text-left">
    //         <h1 className="text-5xl font-bold">Register now!</h1>
    //       </div>
    //       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    //         <form onSubmit={handleSubmit} className="card-body">
    //           <fieldset className="fieldset">
    //             <label className="label">Name</label>
    //             <input
    //               type="text"
    //               name="name"
    //               className="input"
    //               placeholder="Name"
    //             />
    //             <label className="label">Email</label>
    //             <input
    //               type="email"
    //               name="email"
    //               className="input"
    //               placeholder="Email"
    //             />
    //             <label className="label">PhotoURL</label>
    //             <input
    //               type="URL"
    //               name="photo"
    //               className="input"
    //               placeholder="PhotoURL"
    //             />
    //             <label className="label">Password</label>
    //             <input
    //               type="password"
    //               name="password"
    //               className="input"
    //               placeholder="Password"
    //             />
    //             {error && <p className="text-error">{error}</p>}
    //             <button className="btn btn-neutral mt-4">Register</button>
    //             <p className="text-center">or</p>
    //             {/* Google */}
    //             <button
    //             type="button"
    //               onClick={handleGoogle}
    //               className="btn bg-white text-black border-[#e5e5e5]"
    //             >
    //               <svg
    //                 aria-label="Google logo"
    //                 width="16"
    //                 height="16"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 512 512"
    //               >
    //                 <g>
    //                   <path d="m0 0H512V512H0" fill="#fff"></path>
    //                   <path
    //                     fill="#34a853"
    //                     d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
    //                   ></path>
    //                   <path
    //                     fill="#4285f4"
    //                     d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
    //                   ></path>
    //                   <path
    //                     fill="#fbbc02"
    //                     d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
    //                   ></path>
    //                   <path
    //                     fill="#ea4335"
    //                     d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
    //                   ></path>
    //                 </g>
    //               </svg>
    //               Login with Google
    //             </button>
    //             <p>
    //               Already have an account?{" "}
    //               <Link to="/login" className="link">
    //                 Login!
    //               </Link>
    //             </p>
    //           </fieldset>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex items-center justify-center min-h-screen bg-[#fef3f0] px-4">
      <Toaster />
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[900px]">
        <div className="flex flex-col justify-between p-8 md:p-10 md:w-1/2 bg-white text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-light text-green-600">
              Welcome to
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-[#D75239] mt-1">
              PawMart
            </h1>
            <p className="text-sm mt-4 text-gray-600">
              Already have an account?
            </p>
            <Link to="/login">
              <button className="btn border border-[#D75239] text-[#D75239] w-1/2 rounded-full mt-3 hover:bg-[#D75239] hover:text-white transition">
                Login
              </button>
            </Link>
          </div>
          <div className="mt-8 md:mt-10">
            <img
              src={registerCat}
              alt="puppies"
              className="w-2/3 md:w-3/4 mx-auto md:mx-0"
            />
          </div>
        </div>
        <div className="p-8 md:p-10 md:w-1/2 bg-white flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D75239]"
                required
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D75239]"
                required
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Photo URL</label>
              <input
                type="url"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D75239]"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D75239]"
                required
              />
              {error && <p className="text-error text-sm mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              className="btn w-full bg-[#D75239] text-white hover:bg-[#c14532] py-2 rounded-full transition font-semibold"
            >
              Register
            </button>
          </form>
          <div className="mt-6 text-center text-gray-500 text-sm">
            OR CONTINUE WITH
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={handleGoogle}
              className="btn bg-white text-black border border-[#e5e5e5] w-full rounded-full flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <svg
                aria-label="Google logo"
                width="22"
                height="22"
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
      </div>
    </div>
  );
};

export default Register;
