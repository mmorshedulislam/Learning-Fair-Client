import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const SignUp = () => {
  return (
    <div>
      <div className="w-1/3 mx-auto border border-yellow-600 border-md p-16 rounded">
        <form>
          <h2 className="text-4xl italic my-5">Sign Up</h2>
          {/* Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Photo URL */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Phone Number */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Enter Your Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          {/* Confirm Password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <input type="submit" value="SIGN UP" className="btn btn-block mt-4" />
        </form>
        <p className="my-3">
          Already, have an Account?{" "}
          <Link to={`/login`} className="text-yellow-200">
            Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <p className="text-center text-xl my-3">Continue with </p>
        <div className="social-login flex justify-evenly">
          <div className="border border-yellow-500 p-5 text-2xl rounded-full">
            <Link className="block">
              <FaGoogle></FaGoogle>
            </Link>
          </div>
          <div className="border border-yellow-500 p-5 text-2xl rounded-full">
            <Link className="block">
              <FaFacebook></FaFacebook>
            </Link>
          </div>
          <div className="border border-yellow-500 p-5 text-2xl rounded-full">
            <Link className="block">
              <FaGithub></FaGithub>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
