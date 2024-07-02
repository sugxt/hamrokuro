"use client";
import useAuthStore from "@/store/useAuthStore";
import { pb } from "@/utils/pocketbase";
import { AuthModel } from "pocketbase";
import React, { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

const Navbar = () => {
  const [localAuthData, setLocalAuthData] = useState<AuthModel>(null);
  const authData = useAuthStore((state) => state.authData);
  useEffect(() => {
    setLocalAuthData(authData);
    console.log("Fire");
  }, [authData]);
  return (
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
  );
};

export default Navbar;
