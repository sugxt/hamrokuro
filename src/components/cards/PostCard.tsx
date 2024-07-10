"use client";
import { pb } from "@/utils/pocketbase";
import { useRouter } from "next/navigation";
import { RecordModel } from "pocketbase";
import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { GiButterflyFlower } from "react-icons/gi";
import LikeButton from "@/components/buttons/LikeButton";

const PostCard = ({ data }: { data: RecordModel }) => {
  const currentUser = pb.authStore.model;
  const router = useRouter();
  if (data.expand) {
    return (
      <div className="flex flex-col h-auto w-96 bg-neutral-100 rounded-xl gap-2 p-4">
        <div className="user-details-block flex flex-row gap-2">
          <div className="image-block w-10 h-10 rounded-full bg-cyan-900"></div>
          <div className="title flex flex-col gap-0">
            <button
              onClick={() => {
                router.push(`/guffadi/${data.expand?.guffadi.username}`);
              }}
              className="flex flex-row gap-0.5 items-center"
            >
              <h1 className="font-semibold">{data.expand.guffadi.name}</h1>
              {data.expand.guffadi.verified && (
                <MdVerified className="text-cyan-800 text-base" />
              )}
              {data.expand.guffadi.isBloom && (
                <GiButterflyFlower className="text-pink-600 text-base" />
              )}
            </button>
            <p className="font-normal text-sm text-neutral-700">
              @{data.expand.guffadi.username}
            </p>
          </div>
        </div>
        <hr className="w-full border-neutral-300" />
        <h1 className="text-wrap">{data.guff}</h1>
        <div className="activity flex flex-row gap-1 items-center">
          <div className="like-grp flex flex-col gap-2 items-center justify-center">
            <div className="w-full flex flex-row items-center gap-1 liked-state">
              <h1 className="text-sm font-semibold text-cyan-800">
                {data.liked_by ? data.liked_by.length : 0}
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
    );
  } else {
    return <div>Something went wrong fetching the data</div>;
  }
};

export default PostCard;
