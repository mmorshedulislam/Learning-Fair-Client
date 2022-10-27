import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const ProfileUpdate = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Profile Update {user.displayName}</h2>
    </div>
  );
};

export default ProfileUpdate;
