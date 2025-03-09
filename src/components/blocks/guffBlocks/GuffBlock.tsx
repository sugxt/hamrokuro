"use client";
import PostCard from "@/components/cards/PostCard";
import { useSinglePostStore } from "@/store/usePostStore";
import React, { useEffect, useState } from "react";

const GuffBlock = ({ guff_id }: { guff_id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize with true to show loading initially
  const { fetchPostData, postData } = useSinglePostStore();

  useEffect(() => {
    const fetchData = async () => {
      await fetchPostData(guff_id);
      setIsLoading(false);
    };
    fetchData();
  }, [fetchPostData, guff_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!postData) {
    return <div>No Data Found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <PostCard isSingle={true} data={postData} />
    </div>
  );
};

export default GuffBlock;
