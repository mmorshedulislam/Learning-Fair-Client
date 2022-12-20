import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signInEmaiLPassword, resetPassword } = useContext(AuthContext);

  const [processing, setProcessing] = useState(false);

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

    setProcessing(true);
    signInEmaiLPassword(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        navigate(from, { replace: true });
        toast.success("Successfully Log In!");
        setProcessing(false);
      })
      .catch((e) => {
        setProcessing(false);
        console.error(e);
        const errorCode = e.code;
        // const errorMessage = e.message;
        toast.error(errorCode);
      });
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
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    } else {
      toast.error("Please input your Email.");
    }
  };

  return (
    <>
      <h2 className="text-5xl mt-5 text-center font-bold">Log In</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-full m-10 border rounded-lg"
            src="https://cdni.iconscout.com/illustration/premium/thumb/e-wallet-sign-up-2523245-2117421.png"
            alt=""
          />
        </div>
        <div className="w-full mx-auto p-5 lg:px-20 rounded">
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered text-black w-full"
              />
            </div>
            {/* Password */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered text-black w-full"
              />
            </div>
            {/* Checkbox */}
            <div className="flex items-center justify-between my-3">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <div className="flex items-center">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text ml-1 text-black">
                      Remember me
                    </span>
                  </div>
                </label>
              </div>
              <div onClick={handleResetPassword}>
                <Link to={""} className="text-green-500">
                  Forgotten Password?
                </Link>
              </div>
            </div>
            <input
              type="submit"
              value="LOG IN"
              className={`bg-green-400 w-full py-2 text-white rounded-md cursor-pointer ${processing && 'bg-green-300'}`}
              disabled={processing}
            />
          </form>
          <p className="my-3">
            Don't have an Account?{" "}
            <Link to={`/signup`} className="text-green-500">
              Create an Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Login;
