"use client";
import getGuffadiServices from "@/services/guffadiServices/getGuffadiServices";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const UserProfileBlock = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<RecordModel | null>(null); // Initialize with null

  const fetchData = async () => {
    const data = await getGuffadiServices(id);
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
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  if (!userData) {
    return <div>No User Data</div>; // Render this if there is no user data
  }

  return (
    <div>
      <h1 className="text-lg font-semibold text-cyan-700">{userData.name}</h1>
      <h1>@{userData.username}</h1>
    </div>
  );
};

export default UserProfileBlock;
