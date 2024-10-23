"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
    className=" flex justify-center w-10 h-10 items-center rounded-full transition ease-in-out delay-75 focus:bg-neutral-200 hover:bg-neutral-100"
      onClick={() => {
        router.back();
      }}
    >
      <IoMdArrowBack className="text-2xl text-cyan-900" />
    </button>
  );
};

export default BackButton;
