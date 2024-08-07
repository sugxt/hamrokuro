"use client"
import React from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={`${poppins.className} top-0 fixed md:hidden bg-white w-full p-6`}>
        Navbar
    </div>
  );
};

export default Navbar;
