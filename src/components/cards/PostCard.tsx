"use client";
import { pb } from "@/utils/pocketbase";
import { RecordModel } from "pocketbase";
import React from "react";
import { MdVerified } from "react-icons/md";
import { GiButterflyFlower } from "react-icons/gi";
import LikeButton from "@/components/buttons/LikeButton";
import Link from "next/link";
import { dateFormatter } from "@/utils/dateformatting";

const PostCard = ({
  data,
  isSingle,
}: {
  data: RecordModel;
  isSingle: boolean;
}) => {
  const formattedDate = dateFormatter(data.created);
  const currentUser = pb.authStore.model;
  if (isSingle) {
    return (
      <div>
        {data.expand ? (
          <div className="flex flex-col h-auto w-[600px] bg-white rounded-xl gap-2 p-4">
            <div className="user-details-block flex flex-row gap-2">
              <div className="image-block w-10 h-10 rounded-full bg-cyan-900 overflow-auto"></div>
              <div className="date-user w-full flex flex-row justify-between">
                <div className="title flex flex-col justify-between gap-0">
                  <Link
                    href={`/guffadi/${data.expand.guffadi.username}`}
                    className="flex flex-row gap-0.5 items-center"
                  >
                    <h1 className="font-semibold">
                      {data.expand.guffadi.name}
                    </h1>
                    {data.expand.guffadi.verified && (
                      <MdVerified className="text-cyan-800 text-base" />
                    )}
                    {data.expand.guffadi.isBloom && (
                      <GiButterflyFlower className="text-pink-600 text-base" />
                    )}
                  </Link>
                  <p className="font-normal text-sm text-neutral-700">
                    @{data.expand.guffadi.username}
                  </p>
                </div>
                <div className="date-block text-xs text-neutral-500">
                  {formattedDate}
                </div>
              </div>
            </div>
            <hr className="w-full border-neutral-300" />
            <div className="guff-content text-wrap">
              <h1>{data.guff}</h1>
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
        <div className="flex flex-col h-auto w-96 bg-white rounded-xl gap-2 p-4">
          <div className="user-details-block flex flex-row gap-2">
            <div className="image-block w-10 h-10 rounded-full bg-cyan-900 overflow-auto"></div>
            <div className="date-user w-full flex flex-row justify-between">
              <div className="title flex flex-col justify-between gap-0">
                <Link
                  href={`/guffadi/${data.expand.guffadi.username}`}
                  className="flex flex-row gap-0.5 items-center"
                >
                  <h1 className="font-semibold">{data.expand.guffadi.name}</h1>
                  {data.expand.guffadi.verified && (
                    <MdVerified className="text-cyan-800 text-base" />
                  )}
                  {data.expand.guffadi.isBloom && (
                    <GiButterflyFlower className="text-pink-600 text-base" />
                  )}
                </Link>
                <p className="font-normal text-sm text-neutral-700">
                  @{data.expand.guffadi.username}
                </p>
              </div>
              <div className="date-block text-xs text-neutral-500">
                {formattedDate}
              </div>
            </div>
          </div>
          <hr className="w-full border-neutral-300" />
          <div className="flex text-wrap break-all">
            <h1>{data.guff}</h1>
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
