"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className={`${poppins.className} fixed left-20 top-10`}>
      <div className="title-links gap-6 flex flex-col items-center p-8 w-96 h-auto bg-white rounded-2xl">
        <h1 className="text-3xl font-black text-cyan-600">HAMROKURO</h1>
        <div className="links flex flex-col gap-4">
          <Link
            className={`link ${
              pathname == "/home"
                ? "flex flex-row gap-2 items-center text-cyan-700 font-bold text-lg"
                : "flex flex-row gap-2 items-center font-medium text-black text-lg"
            }`}
            href={"/home"}
          >
            <IoHome />
            Home
          </Link>
          <Link
            className={`link ${
              pathname == "/profile"
                ? "flex flex-row gap-2 items-center text-cyan-700 font-bold text-lg"
                : "flex flex-row gap-2 items-center font-medium text-black text-lg"
            }`}
            href={"/profile"}
          >
            <CgProfile />
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
