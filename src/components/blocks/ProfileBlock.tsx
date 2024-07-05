"use client";
import usePostStore from "@/store/usePostStore";
import React, { useEffect } from "react";
import PostCard from "@/components/cards/PostCard";
import postListServices from "@/services/guffServices/postListServices";

const ProfileBlock = () => {
  const { postData, setPostData } = usePostStore();
  useEffect(() => {
    const fetchData = async () => {
      await postListServices();
    };
    fetchData();
    console.log(postData);
  }, [setPostData]);
  return (
    <div className="flex flex-col w-full gap-6 justify-center items-center">
      {postData &&
        postData.map((post) => <PostCard key={post.id} data={post} />)}
    </div>
  );
};

export default ProfileBlock;
