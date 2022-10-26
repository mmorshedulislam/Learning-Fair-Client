import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {
    signInEmaiLPassword,
    resetPassword,
    signWithGoogle,
    signInWithFacebook,
    signInWithGithub,
  } = useContext(AuthContext);

  // redirect to path want to user
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  // get value using useRef
  const emailRef = useRef();
  const passwordRef = useRef();

  // sign with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInEmaiLPassword(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        navigate(from, { replace: true });
        toast.success("Successfully Log In!");
        // console.log(user);
      })
      .catch((e) => console.error(e));
  };

  // reset password
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      resetPassword(email)
        .then(() => {
          toast.success("Reset email has been sent.");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    } else {
      toast.error('Please input your Email.')
    }
  };

  // sign in with google
  const signGoogle = () => {
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
      })
      .catch((e) => console.error(e));
  };

  // sign in with Github
  const signInGithub = () => {
    signInWithGithub()
      .then((userCredential) => {
        // const user = userCredential.user;
        toast.success("Successfully Logged In with Github.");
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-md lg:max-w-96 mx-auto border border-yellow-600 border-md p-16 rounded">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl italic my-5">Login</h2>
          {/* Email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
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
              ref={passwordRef}
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
            <div onClick={handleResetPassword}>
              <Link to={""} className="text-yellow-200">
                Forgotten Password?
              </Link>
            </div>
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
          <div
            onClick={signGoogle}
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
  );
};

export default Login;
