"use client";
import { usePostStore } from "@/store/usePostStore";
import React, { useEffect, useState } from "react";
import PostCard from "@/components/cards/PostCard";
import { useRefetch } from "@/store/useLoadingStore";

const ProfileBlock = () => {
  const { postData, fetchPostData } = usePostStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchPostData();
      setIsLoading(false);
    };
    fetchData();
  }, [fetchPostData]);

  if (isLoading) {
    return <div className="flex flex-col items-center w-96">Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full gap-6 justify-center items-center">
      {postData &&
        postData.map((post) => <PostCard key={post.id} data={post} />)}
    </div>
  );
};

export default ProfileBlock;
