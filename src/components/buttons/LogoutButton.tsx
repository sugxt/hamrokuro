"use client";
import { pb } from "@/utils/pocketbase";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogOut = () => {
    pb.authStore.clear();
    router.push("/auth/login");
  };
  return (
    <button
      onClick={handleLogOut}
      className="flex flex-row items-center gap-1 bg-cyan-700 text-white font-medium p-2 rounded-lg"
    >
      <BiLogOut className="text-lg" />
      Logout
    </button>
  );
};

export default LogoutButton;
