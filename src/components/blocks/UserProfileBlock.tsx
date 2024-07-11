"use client";
import GuffadiServices from "@/services/guffadiServices/GuffadiServices";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";
import { GiButterflyFlower } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const UserProfileBlock = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<RecordModel | null>(null); // Initialize with null

  const fetchData = async () => {
    const data = await GuffadiServices(id);
    if (data.isSuccess) {
      setUserData(data.data);
      console.log(data.message); // Success Message Handling Here
    } else {
      console.log(data.message); // Error Message Handling Here
    }
    setIsLoading(false); // Set loading to false after state update
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>; // Loading State handling here
  }

  if (!userData) {
    return <div>No User Data</div>; // Data not found state handling here
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {!userData ? (
            <div>No User Data</div>
          ) : (
            <div className="profile-box flex flex-col items-start justify-start p-10 bg-white rounded-xl w-96">
              <div className="name-status flex flex-row gap-1 items-center">
                <h1 className="text-lg font-semibold text-cyan-700">
                  {userData.name}
                </h1>
                {userData.verified && (
                  <MdVerified className="text-cyan-800 text-base" />
                )}
                {userData.isBloom && (
                  <GiButterflyFlower className="text-pink-600 text-base" />
                )}
              </div>
              <p className="text-neutral-600 text-sm">@{userData.username}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfileBlock;
