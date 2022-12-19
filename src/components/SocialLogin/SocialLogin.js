import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signWithGoogle, signInWithFacebook, signInWithGithub } =
    useContext(AuthContext);

  // redirect to path want to user
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

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
    <div>
      <p className="text-center text-xl my-3">Continue with </p>
      <div className="social-login flex justify-evenly">
        <div
          onClick={signGoogle}
          className="border border-[#4285F4] p-5 text-2xl rounded-full"
        >
          <Link className="block">
            <FaGoogle className="text-[#4285F4]"></FaGoogle>
          </Link>
        </div>
        <div
          onClick={signInFacebook}
          className="border border-[#3b5998] p-5 text-2xl rounded-full"
        >
          <Link className="block">
            <FaFacebook className="text-[#3b5998]"></FaFacebook>
          </Link>
        </div>
        <div
          onClick={signInGithub}
          className="border border-[#171515] p-5 text-2xl rounded-full"
        >
          <Link className="block">
            <FaGithub className="text-[#171515]"></FaGithub>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
