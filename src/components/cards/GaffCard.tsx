"use client";
import { RecordModel } from "pocketbase";
import React from "react";
import UserDetails from "../blocks/guffadiBlocks/UserDetails";

const GaffCard = ({ data }: { data: RecordModel }) => {
  return (
    <div className="gaff-main flex flex-col items-start justify-center text-sm w-full">
      <div className="content-block flex flex-col gap-2 h-auto">
        <UserDetails UserDetails={data.expand?.guffadi} />
        <h1 className="text-wrap break-all">{data.gaff}</h1>
        <div className="w-full flex flex-row items-center gap-1 liked-state">
          <h1 className="text-sm font-semibold text-cyan-800">{data.likes}</h1>
          <h1 className="text-sm text-cyan-700 font-normal">Likes</h1>
        </div>
      </div>
    </div>
  );
};

export default GaffCard;
