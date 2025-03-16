"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useNavigation } from "@/utils/navigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { userName, isLoading } = useNavigation();

  return (
    <div
      className={`${poppins.className} left-0 top-0 border border-neutral-300 sticky h-screen max-sm:hidden max-md:hidden`}
    >
      <div className="title-links gap-6 flex flex-col items-center p-8 w-80 h-full bg-white">
        <h1 className="text-3xl font-black text-cyan-600">HAMROKURO</h1>
        <div className="links flex flex-col gap-4">
          <Link
            className={`link ${
              pathname === "/home"
                ? "flex flex-row gap-2 items-center text-cyan-700 font-bold text-lg"
                : "flex flex-row gap-2 items-center font-medium text-black text-lg hover:text-cyan-900"
            }`}
            href={"/home"}
          >
            <IoHome />
            Home
          </Link>

          {/* Show a placeholder during loading or the actual link when data is available */}
          {isLoading ? (
            <div className="flex flex-row gap-2 items-center text-gray-400">
              <CgProfile />
              <div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
          ) : (
            userName && (
              <Link
                className={`link ${
                  pathname === `/guffadi/${userName}`
                    ? "flex flex-row gap-2 items-center text-cyan-700 font-bold text-lg"
                    : "flex flex-row gap-2 items-center font-medium text-black text-lg hover:text-cyan-900"
                }`}
                href={`/guffadi/${userName}`}
              >
                <CgProfile />
                Profile
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
