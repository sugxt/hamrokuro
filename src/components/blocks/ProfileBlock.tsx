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
      <div className="flex flex-col w-full gap-6 justify-center items-center">
        {postData &&
          postData.map((post) => <PostCard key={post.id} data={post} />)}
      </div>
  );
};

export default ProfileBlock;
