"use client";
import useAuthStore from "@/store/useAuthStore";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const Navbar = () => {
  const pathname = usePathname();
  const [localAuthData, setLocalAuthData] = useState<AuthModel>(null);
  const authData = useAuthStore((state) => state.authData);
  useEffect(() => {
    setLocalAuthData(authData);
  }, [authData]);
  return (
    <div
      className={`${poppins.className} flex justify-between fixed top-0 left-0 right-0 w-full p-4 bg-white`}
    >
      <div>LEFT ITEMS</div>
      <div className="links flex flex-row gap-2">
        <Link
          className={`link ${
            pathname == "/home"
              ? "text-cyan-700 font-semibold"
              : "font-semibold text-neutral-500"
          }`}
          href={"/home"}
        >
          Home
        </Link>
        {localAuthData ? (
          <Link
            className={`link ${
              pathname == `/guffadi/${localAuthData.username}`
                ? "text-cyan-700 font-semibold"
                : "font-semibold text-neutral-500"
            }`}
            href={`/guffadi/${localAuthData.username}`}
          >
            Profile
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div>{localAuthData?.name}</div>
    </div>
  );
};

export default Navbar;
