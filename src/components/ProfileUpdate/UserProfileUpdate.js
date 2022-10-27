import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const UserProfileUpdate = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const first = form.first.value;
    const last = form.last.value;
    const photoURL = form.photoURL.value;
    // const phone = form.phone.value;

    updateProfile(first, last, photoURL);
    form.reset()
  };

  const updateProfile = (first, last, photoURL) => {
    const profile = {
      displayName: `${first} ${last}`,
      photoURL: photoURL,
    };

    profileUpdate(profile)
      .then(() => {
        toast.success("Your profile Info Update Successfully");
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        toast.error(errorCode || errorMessage);
      });
  };
  return (
    <div className="my-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="first" className="text-xl my-5 block">
          <input
            className="input w-full bg-slate-200 text-black"
            placeholder="First Name"
            type="text"
            name="first"
            id="first"
          />
        </label>
        <label htmlFor="first" className="text-xl my-5 block">
          <input
            className="input w-full bg-slate-200 text-black"
            placeholder="Last Name"
            type="text"
            name="last"
            id="last"
          />
        </label>
        <label htmlFor="photoURL" className="text-xl my-5 block">
          <input
            className="input w-full bg-slate-200 text-black"
            placeholder="PhotoURL"
            type="text"
            name="photoURL"
            id="photoURL"
            defaultValue={user?.photoURL}
          />
        </label>
        <label htmlFor="phone" className="text-xl my-5 block">
          <input
            className="input w-full bg-slate-200 text-black"
            placeholder="Phone Number"
            type="text"
            name="phone"
            id="phone"
          />
        </label>
        <input
          type="submit"
          value="Update"
          className="bg-red-500 block mb-5 font-bold py-2 px-4 rounded-md text-white mr-auto"
        />
      </form>
    </div>
  );
};

export default UserProfileUpdate;
