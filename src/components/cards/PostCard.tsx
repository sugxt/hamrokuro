import { RecordModel } from "pocketbase";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const PostCard = ({ data }: { data: RecordModel }) => {
  return (
    <div className="flex flex-col h-auto w-3/4 bg-neutral-100 rounded-xl gap-2 p-4">
      <div className="user-details-block flex flex-row gap-2">
        <div className="image-block w-10 h-10 rounded-full bg-slate-400"></div>
        <div className="title flex flex-col gap-0">
          <div className="flex flex-row gap-1">
            <h1 className="font-semibold">{data.expand?.guffadi.name}</h1>
            {data.expand?.guffadi.verified && (
              <p className="verified status text-cyan-800 text-sm font-black">
                ✓
              </p>
            )}
          </div>
          <p className="font-normal text-sm text-neutral-700">
            @{data.expand?.guffadi.username}
          </p>
        </div>
      </div>
      <hr className="w-full border-neutral-300" />
      <h1 className="text-wrap">{data.guff}</h1>
      <p className="font-bold text-sm text-cyan-800">
        {data.liked_by ? data.liked_by.length : 0} Ohoo's
      </p>
      <div className="like-grp flex flex-row gap-1">
        <div className="liked-state">
          <FaHeart color="#155E75" />
        </div>
        <FaBookmark color="#155E75" />
      </div>
    </div>
  );
};

export default PostCard;
