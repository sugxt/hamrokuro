"use client";
import { pb } from "@/utils/pocketbase";
import { RecordModel } from "pocketbase";
import React from "react";
import LikeButton from "@/components/buttons/LikeButton";
import { dateFormatter, dateFormatterDetailed } from "@/utils/dateformatting";
import UserDetails from "../blocks/guffadiBlocks/UserDetails";
import Link from "next/link";

const PostCard = ({
  data,
  isSingle,
}: {
  data: RecordModel;
  isSingle: boolean;
}) => {
  const formattedDateSingle = dateFormatterDetailed(data.created);
  const formattedDate = dateFormatter(data.created);
  const currentUser = pb.authStore.model;
  if (isSingle) {
    return (
      <div>
        {data.expand ? (
          <div className="flex flex-col h-auto sm:w-[650px] w-[350px] md:w-[400px] bg-white rounded-xl gap-2 p-4">
            <div className="user-details-block flex flex-row gap-2">
              <div className="image-block w-10 h-10 rounded-full bg-cyan-900 overflow-auto"></div>
              <div className="date-user w-full flex flex-row justify-between">
                <UserDetails UserDetails={data.expand.guffadi} />
                <div className="date-block text-xs text-neutral-500">
                  {formattedDateSingle}
                </div>
              </div>
            </div>
            <hr className="w-full border-neutral-300" />
            <div className="guff-content text-wrap break-all">
              <Link href={`/guff/${data.id}`}>
                <h1>{data.guff}</h1>
              </Link>
            </div>
            <div className="activity flex flex-row gap-1 items-center">
              <div className="like-grp flex flex-col gap-2 items-center justify-center">
                <div className="w-full flex flex-row items-center gap-1 liked-state">
                  <h1 className="text-sm font-semibold text-cyan-800">
                    {data.likes}
                  </h1>
                  <h1 className="text-sm text-cyan-700 font-normal">Likes</h1>
                </div>
                <LikeButton
                  post={data.id}
                  user={currentUser?.id}
                  isLiked={data.isLiked}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    );
  }
  return (
    <div>
      {data.expand ? (
        <div className="flex flex-col h-auto sm:w-[650px] w-[350px] md:w-[400px] bg-white rounded-xl  gap-2 p-4">
          <div className="user-details-block flex flex-row gap-2">
            <div className="image-block w-10 h-10 rounded-full bg-cyan-900 overflow-auto"></div>
            <div className="date-user w-full flex flex-row justify-between">
              <UserDetails UserDetails={data.expand.guffadi} />
              <div className="date-block text-xs text-neutral-500">
                {formattedDate}
              </div>
            </div>
          </div>
          <hr className="w-full border-neutral-300" />
          <div className="flex text-wrap break-all">
            <Link href={`/guff/${data.id}`}>
              <h1>{data.guff}</h1>
            </Link>
          </div>
          <div className="activity flex flex-row gap-1 items-center">
            <div className="like-grp flex flex-col gap-2 items-center justify-center">
              <div className="w-full flex flex-row items-center gap-1 liked-state">
                <h1 className="text-sm font-semibold text-cyan-800">
                  {data.likes}
                </h1>
                <h1 className="text-sm text-cyan-700 font-normal">Likes</h1>
              </div>
              <LikeButton
                post={data.id}
                user={currentUser?.id}
                isLiked={data.isLiked}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default PostCard;
