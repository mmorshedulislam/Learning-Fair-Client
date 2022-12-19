import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    createUser,
    profileUpdate,
    signWithGoogle,
    signInWithFacebook,
    signInWithGithub,
  } = useContext(AuthContext);

  // redirect to path want to user
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const [passError, setPassError] = useState("");
  const [passWrong, setPassWrong] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    // const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(name, photoURL, phone, email, password, confirm);

    /*     if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      return setPassWrong(
        "Please, Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } */

    if (password !== confirm) {
      return setPassError("Password doesn't Match!");
    }

    // create user with email and password
    createUser(email, password)
      .then((userCredential) => {
        updateProfile(name, photoURL);
        form.reset();
        setPassWrong("");
        navigate(from, { replace: true });
        toast.success("Successfully Sign Up!");
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        toast.error(errorCode || errorMessage);
      });
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

  // sign in with google
  const signInGoogle = () => {
    signWithGoogle()
      .then((result) => {
        // const user = result.user;
        toast.success("Successfully logged in with Google.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // sign in with Facebook
  const signInFacebook = () => {
    signInWithFacebook()
      .then((userCredential) => {
        // const user = userCredential.user;
        toast.success("Successfully logged in with Facebook.");
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e));
  };

  // sign in with Github
  const signInGithub = () => {
    signInWithGithub()
      .then((userCredential) => {
        // const user = userCredential.user;
        toast.success("Successfully Logged In with Github.");
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <h2 className="text-5xl mt-5 text-center font-bold">Sign Up</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full order-last">
          <img
            className="w-full p-10"
            src="https://cdni.iconscout.com/illustration/premium/thumb/e-wallet-sign-up-2523245-2117421.png"
            alt=""
          />
        </div>
        <div className="w-full mx-auto p-5 lg:px-20 rounded">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered w-full bg-slate-200 text-black"
                required
              />
            </div>
            {/* Photo URL */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered w-full bg-slate-200 text-black"
              />
            </div>
            {/* Phone Number */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black">Phone Number</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full bg-slate-200 text-black"
              />
            </div>
            {/* Email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full bg-slate-200 text-black"
                required
              />
            </div>
            {/* Password */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered w-full bg-slate-200 text-black"
                required
              />
            </div>
            {passWrong}
            {/* Confirm Password */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="Retype Your Password"
                className="input input-bordered w-full bg-slate-200 text-black"
                required
              />
            </div>
            <p className="text-red-400 mt-2">{passError}</p>
            <input
              type="submit"
              value="SIGN UP"
              className="btn btn-block mt-4"
            />
          </form>
          <p className="my-3">
            Already, have an Account?{" "}
            <Link to={`/login`} className="text-yellow-500">
              Log In
            </Link>
          </p>
          <div className="divider">OR</div>
          <p className="text-center text-xl my-3">Continue with </p>
          <div className="social-login flex justify-evenly">
            <div
              onClick={signInGoogle}
              className="border border-yellow-500 p-5 text-2xl rounded-full"
            >
              <Link className="block">
                <FaGoogle></FaGoogle>
              </Link>
            </div>
            <div
              onClick={signInFacebook}
              className="border border-yellow-500 p-5 text-2xl rounded-full"
            >
              <Link className="block">
                <FaFacebook></FaFacebook>
              </Link>
            </div>
            <div
              onClick={signInGithub}
              className="border border-yellow-500 p-5 text-2xl rounded-full"
            >
              <Link className="block">
                <FaGithub></FaGithub>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
