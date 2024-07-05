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
    <div className="fixed top-0 left-0 right-0 w-full p-2 bg-white">
      NAVBAR
    </div>
  );
};

export default Navbar;
