import { postConstants } from "@/utils/db.constants";
import { RecordModel } from "pocketbase";
import React from "react";

const PostCard = ({ data }: { data: RecordModel }) => {
  return (
    <div className="flex flex-col h-auto w-auto min-w-96 bg-neutral-100 rounded-xl gap-2 p-4">
      <div className="title flex flex-col gap-0">
        <h1 className="font-semibold">{data.expand?.guffadi.name}</h1>
        <p className="font-light text-sm">@{data.expand?.guffadi.username}</p>
      </div>
      <h1>{data.guff}</h1>
      <p className="font-bold text-sm">
        {data.liked_by ? data.liked_by.length : 0} Ohooos
      </p>
    </div>
  );
};

export default PostCard;
