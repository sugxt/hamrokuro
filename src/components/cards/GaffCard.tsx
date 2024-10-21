"use client"
import { RecordModel } from "pocketbase";
import React from "react";
import UserDetails from "../blocks/guffadiBlocks/UserDetails";

const GaffCard = ({ data }: { data: RecordModel }) => {
  return (
    <div className="gaff-main flex flex-col items-center justify-center text-sm">
      <div className="content-block flex flex-col p-4 sm:w-[650px] w-[350px] md:w-[400px] gap-2 bg-white rounded-xl h-auto">
        <UserDetails UserDetails={data.expand?.guffadi}/>
        <hr className="bg-neutral-700 w-full" />
        <h1>{data.gaff}</h1>
      </div>
    </div>
  );
};

export default GaffCard;
