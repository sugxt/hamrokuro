import { RecordModel } from "pocketbase";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const PostCard = ({ data }: { data: RecordModel }) => {
  return (
    <div className="flex flex-col h-auto w-3/4 bg-neutral-100 rounded-xl gap-2 p-4">
      <div className="user-details-block flex flex-row gap-2">
        <div className="image-block w-10 h-10 rounded-full bg-cyan-900"></div>
        <div className="title flex flex-col gap-0">
          <div className="flex flex-row gap-0.5 items-center">
            <h1 className="font-semibold">{data.expand?.guffadi.name}</h1>
            {data.expand?.guffadi.verified && (
              <MdVerified className="text-cyan-800 text-base" />
            )}
          </div>
          <p className="font-normal text-sm text-neutral-700">
            @{data.expand?.guffadi.username}
          </p>
        </div>
      </div>
      <hr className="w-full border-neutral-300" />
      <h1 className="text-wrap">{data.guff}</h1>
      <div className="activity flex flex-row gap-1 items-center">
        <div className="like-grp flex flex-row gap-1 items-center justify-center">
          <div className="liked-state">
            <FaHeart className="text-cyan-800" />
          </div>
          <h1 className="font-base text-cyan-800">
            {data.liked_by ? data.liked_by.length : 0}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
