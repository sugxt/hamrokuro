"use client";
import usePostStore from "@/store/usePostStore";
import React, { useEffect, useState } from "react";
import PostCard from "@/components/cards/PostCard";
import postListServices from "@/services/guffServices/postListServices";

const ProfileBlock = () => {
  const { postData, setPostData } = usePostStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchData = async () => {
    await postListServices();
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
    console.log(postData);
  }, [setPostData]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col w-full gap-6 justify-center items-center">
      {postData &&
        postData.map((post) => <PostCard key={post.id} data={post} />)}
    </div>
  );
};

export default ProfileBlock;
