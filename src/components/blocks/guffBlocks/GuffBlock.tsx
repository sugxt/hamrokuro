"use client";
import PostCard from "@/components/cards/PostCard";
import postViewServices from "@/services/guffServices/postViewServices";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const GuffBlock = ({ guff_id }: { guff_id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initialize with true to show loading initially
  const [data, setData] = useState<RecordModel | null>(null);

  const fetchData = async () => {
    const response = await postViewServices(guff_id);
    if (response.isSuccess) {
      console.log(response.data);
      setData(response.data);
    } else {
      console.log(response.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [guff_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No Data Found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <PostCard isSingle={true} data={data} />
    </div>
  );
};

export default GuffBlock;
