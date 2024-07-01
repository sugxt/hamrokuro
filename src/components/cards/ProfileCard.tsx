"use client";
import useAuthStore from "@/store/useAuthStore";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [localAuthData, setLocalAuthData] = useState<RecordModel | null>();
  const authData = useAuthStore((state) => state.authData);
  useEffect(() => {
    setLocalAuthData(authData);
  },[authData]);
  return (
    <div>
      This is the collection you are in
      <div>
        {localAuthData && (
          <h1>
            {localAuthData.username}
            {localAuthData.collectionName}
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
