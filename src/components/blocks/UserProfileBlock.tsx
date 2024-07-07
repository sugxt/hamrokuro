"use client";
import GuffadiServices from "@/services/guffadiServices/GuffadiServices";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

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
      <h1 className="text-lg font-semibold text-cyan-700">{userData.name}</h1>
      <h1>@{userData.username}</h1>
    </div>
  );
};

export default UserProfileBlock;
