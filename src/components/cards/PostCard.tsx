"use client";
import { pb } from "@/utils/pocketbase";
import { RecordModel } from "pocketbase";
import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { GiButterflyFlower } from "react-icons/gi";
import LikeButton from "@/components/buttons/LikeButton";
import Link from "next/link";

const PostCard = ({ data }: { data: RecordModel }) => {
  const [guff, setGuff] = useState(data);
  const currentUser = pb.authStore.model;
  const handleLike = () => {
    const updatedData = {
      ...data,
      likes: data.likes + 1,
      isLiked: true,
    };
    setGuff(updatedData);
  };
  if (guff.expand) {
    return (
      <div className="flex flex-col h-auto w-96 bg-white rounded-xl gap-2 p-4">
        <div className="user-details-block flex flex-row gap-2">
          <div className="image-block w-10 h-10 rounded-full bg-cyan-900"></div>
          <div className="title flex flex-col gap-0">
            <Link
              href={`/guffadi/${guff.expand?.guffadi.username}`}
              className="flex flex-row gap-0.5 items-center"
            >
              <h1 className="font-semibold">{guff.expand.guffadi.name}</h1>
              {guff.expand.guffadi.verified && (
                <MdVerified className="text-cyan-800 text-base" />
              )}
              {guff.expand.guffadi.isBloom && (
                <GiButterflyFlower className="text-pink-600 text-base" />
              )}
            </Link>
            <p className="font-normal text-sm text-neutral-700">
              @{guff.expand.guffadi.username}
            </p>
          </div>
        </div>
        <hr className="w-full border-neutral-300" />
        <h1 className="text-wrap">{guff.guff}</h1>
        <div className="activity flex flex-row gap-1 items-center">
          <div className="like-grp flex flex-col gap-2 items-center justify-center">
            <div className="w-full flex flex-row items-center gap-1 liked-state">
              <h1 className="text-sm font-semibold text-cyan-800">
                {guff.likes}
              </h1>
              <h1 className="text-sm text-cyan-700 font-normal">Likes</h1>
            </div>
            <LikeButton
              post={guff.id}
              user={currentUser?.id}
              isLiked={guff.isLiked}
              onClick={handleLike}
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
