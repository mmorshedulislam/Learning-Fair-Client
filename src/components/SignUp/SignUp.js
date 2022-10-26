import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [passError, setPassError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, photoURL, phone, email, password, confirm);

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      return toast.error("Please, Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"); 
    }

    if (password !== confirm) {
      return setPassError("Password doesn't Match!");
    }

    // create user with email and password
    createUser(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        updateProfile(name, photoURL);
        form.reset();
        // console.log(user);
      })
      .catch((e) => console.error(e));
  };

  const updateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    profileUpdate(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <div className="max-w-md lg:max-w-96 mx-auto border border-yellow-600 border-md p-16 rounded">
        <form onSubmit={handleSubmit}>
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
              required
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
              required
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
              required
            />
          </div>
          {/* Confirm Password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirm"
              placeholder="Enter Your Password"
              className="input input-bordered w-full max-w-lg"
              required
            />
          </div>
          <p className="text-red-400 mt-2">{passError}</p>
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
