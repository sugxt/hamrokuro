"use client";
import { postLikeQueue } from "@/services/postLikeServices/guffLikeServices";
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
  return (
    <div>
      {isLiked ? (
        <div>
          <button className="w-16 h-8 bg-cyan-900 rounded-lg" disabled>
            <h1 className="text-base text-cyan-500">Liked</h1>
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              postLikeQueue(post, user);
            }}
            className="items-center w-16 h-8 bg-cyan-700 rounded-lg"
          >
            <h1 className="text-base text-white">Like</h1>
          </button>
        </div>
      )}
    </div>
  );
};

export default LikeButton;
