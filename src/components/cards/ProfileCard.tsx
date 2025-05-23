"use client";
import useAuthStore from "@/store/useAuthStore";
import { AuthModel, RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [localAuthData, setLocalAuthData] = useState<AuthModel>(null);
  const authData = useAuthStore((state) => state.authData);
  useEffect(() => {
    setLocalAuthData(authData);
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
