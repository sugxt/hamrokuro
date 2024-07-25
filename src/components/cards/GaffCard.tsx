"use client"
import { RecordModel } from "pocketbase";
import React from "react";
import UserDetails from "../blocks/guffadiBlocks/UserDetails";

const GaffCard = ({ data }: { data: RecordModel }) => {
  return (
    <div className="gaff-main flex flex-col w-full items-center justify-center">
      <div className="content-block flex flex-col p-4 w-96 gap-2 bg-white rounded-xl h-auto">
        <UserDetails UserDetails={data.expand?.guffadi}/>
        <hr className="bg-neutral-700 w-full" />
        <h1>{data.gaff}</h1>
      </div>
    </div>
  );
};

export default GaffCard;
