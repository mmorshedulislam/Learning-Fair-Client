import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className="w-1/3 mx-auto border border-yellow-600 border-md p-20 rounded">
        <form>
          <h2 className="text-4xl italic my-5">Login</h2>
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
          {/* Checkbox */}
          <div className="flex items-center justify-between my-3">
            <div className="form-control">
              <label className="label cursor-pointer">
                <div className="flex items-center">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text ml-1">Remember me</span>
                </div>
              </label>
            </div>
            <Link to={"/forgot-password"} className="text-yellow-200">
              Forgotten Password?
            </Link>
          </div>
          <input type="submit" value="LOG IN" className="btn btn-block" />
        </form>
        <p className="my-3">
          Don't have an Account?{" "}
          <Link to={`/signup`} className="text-yellow-200">
            Create an Account
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

export default Login;
