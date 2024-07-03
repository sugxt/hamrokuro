"use client"
import postList from "@/services/guffServices/postList";
import usePostStore from "@/store/usePostStore";
import React, { useEffect } from "react";
import PostCard from "@/components/cards/PostCard"

const ProfileBlock = () => {
  const postData = usePostStore((state) => state.postData);
  const setPostData = usePostStore((state) => state.setPostData);
  useEffect(() => {
    const fetchData = async () => {
      await postList();
    };
    fetchData();
    console.log(postData);
  }, [setPostData]);
  return (
    <div className="w-2/5 h-screen flex flex-col justify-center items-center pt-10 border">
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        {postData &&
          postData.map((post) => <PostCard key={post.id} data={post} />)}
      </div>
    </div>
  );
};

export default ProfileBlock;
