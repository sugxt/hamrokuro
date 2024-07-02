"use client";
import useAuthStore from "@/store/useAuthStore";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [localAuthData, setLocalAuthData] = useState<RecordModel | null>(null);
  const authData = useAuthStore((state) => state.authData);
  useEffect(() => {
    setLocalAuthData(authData);
    console.log("Fire");
  }, [authData]);
  return (
    <div>
      This is the collection you are in
      <div>
        {localAuthData ? (
          <h1>
            {localAuthData.username}
            {localAuthData.collectionName}
          </h1>
        ) : (
          <p>Loading...</p> // Implement Loader
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
