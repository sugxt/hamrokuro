import React from "react";
import BackButton from "../buttons/BackButton";

const Titlebar = ({ title, isBack }: { title: string; isBack: boolean }) => {
  return (
    <div
      className={
        isBack
          ? "title-block h-16 flex flex-row sm:w-[650px] w-[350px] md:w-[400px] bg-white rounded-xl p-4 justify-start gap-32 items-center"
          : "title-block h-16 flex flex-row sm:w-[650px] w-[350px] md:w-[400px] bg-white rounded-xl p-4 justify-center gap-32 items-center"
      }
    >
      {isBack ? <BackButton /> : ""}
      <h1 className="text-xl text-cyan-700 font-base">{title}</h1>
    </div>
  );
};

export default Titlebar;
