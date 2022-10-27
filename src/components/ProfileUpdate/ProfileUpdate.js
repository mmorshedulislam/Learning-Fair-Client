import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UserProfileUpdate from "./UserProfileUpdate";

const ProfileUpdate = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl my-5 text-center font-bold">Update Profile</h2>
      <div>
        <img
          src={user?.photoURL ? user?.photoURL : "https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"}
          className={"w-32 rounded-full mx-auto my-4"}
          alt={user?.displayName}
        />
      </div>
      <div className="w-full lg:w-1/3 mx-auto px-3">
        <h2 className="text-3xl my-5 text-center font-bold">
          {user?.displayName ? user?.displayName : "User"}
        </h2>
        <p className="text-center text-xl my-0">{user?.email}</p>
        <UserProfileUpdate/>
      </div>
    </div>
  );
};

export default ProfileUpdate;
