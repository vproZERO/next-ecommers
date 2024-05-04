import { getServerSession } from "next-auth";
import { authOptions } from "@/config/next-auth-config";
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="h-[80%] py-[10%]">
      <h1 className="text-3xl text-blue-500">Profile</h1>
      <h1 className="text-3xl text-blue-500">{session?.user.name}</h1>
    </div>
  );
};

export default Profile;
