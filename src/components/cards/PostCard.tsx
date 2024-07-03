import { postConstants } from "@/utils/db.constants";
import { RecordModel } from "pocketbase";
import React from "react";

const PostCard = ({ data }: { data: RecordModel }) => {
  return (
    <div className="flex flex-col h-auto w-96 bg-neutral-100 rounded-xl gap-2 p-4">
      <div className="user-details-block flex flex-row gap-2">
        <div className="image-block w-10 h-10 rounded-full bg-slate-400"></div>
        <div className="title flex flex-col gap-0">
          <h1 className="font-semibold">{data.expand?.guffadi.name}</h1>
          <p className="font-normal text-sm text-neutral-700">
            @{data.expand?.guffadi.username}
          </p>
        </div>
      </div>
      <hr className="w-full border-neutral-300" />
      <h1 className="text-wrap">{data.guff}</h1>
      <p className="font-bold text-sm text-cyan-800">
        {data.liked_by ? data.liked_by.length : 0} likes
      </p>
    </div>
  );
};

export default PostCard;
