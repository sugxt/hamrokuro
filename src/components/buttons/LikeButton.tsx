"use client";
import { postLikeServices } from "@/services/guffServices/postLikeServices";
import { useLikeLoading } from "@/store/useLoadingStore";
import React from "react";

const LikeButton = ({
  post,
  user,
  isLiked,
}: {
  post: string;
  user: string;
  isLiked: boolean;
}) => {
  console.log(post, user, isLiked);
  const { isLikeLoading } = useLikeLoading();
  if (isLiked) {
    return (
      <button className="w-16 h-8 bg-cyan-900 rounded-lg" disabled>
        <h1 className="text-base text-cyan-500">Liked</h1>
      </button>
    );
  }
  if (isLikeLoading) {
    return (
      <button className="w-16 h-8 bg-cyan-900 rounded-lg" disabled>
        <h1 className="text-base text-cyan-500">Like</h1>
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        postLikeServices(post, user);
      }}
      className="items-center w-16 h-8 bg-cyan-700 rounded-lg"
    >
      <h1 className="text-base text-white">Like</h1>
    </button>
  );
};

export default LikeButton;
