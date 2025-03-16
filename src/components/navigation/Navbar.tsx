"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "../buttons/LogoutButton";
import { useNavigation } from "@/utils/navigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { userName, isLoading } = useNavigation();

  return (
    <div
      className={`${poppins.className} top-0 fixed md:hidden bg-white w-full p-6 flex flex-row justify-between`}
    >
      <h1 className="text-2xl font-black text-cyan-600">HK</h1>
      <div className="flex flex-row gap-4">
        <Link
          className={`link ${
            pathname == "/home"
              ? "flex flex-row gap-2 items-center text-cyan-700 font-bold text-xl"
              : "flex flex-row gap-2 items-center font-medium text-black text-xl hover:text-cyan-900"
          }`}
          href={"/home"}
        >
          <IoHome />
        </Link>

        {/* Show placeholder during loading or the actual link when data is available */}
        {isLoading ? (
          <div className="w-6 h-6 animate-pulse bg-gray-200 rounded-full"></div>
        ) : (
          userName && <Link
            className={`link ${
              pathname == `/guffadi/${userName}`
                ? "flex flex-row gap-2 items-center justify-center text-cyan-700 font-bold text-xl"
                : "flex flex-row gap-2 items-center justify-center font-medium text-black text-xl hover:text-cyan-900"
            }`}
            href={`/guffadi/${userName}`}
          >
            <CgProfile />
          </Link>
        )}
        <LogoutButton />
      </div>
    </div>
  );
};

export default Navbar;
