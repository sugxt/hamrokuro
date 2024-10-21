"use client";
import GaffCard from "@/components/cards/GaffCard";
import { useCommentStore } from "@/store/usePostStore";
import React, { useEffect, useState } from "react";

const GaffBlock = ({ gaff_id }: { gaff_id: string }) => {
  const [isLoading, setIsLoading] = useState(false); // yet to add isLoading State here
  const { postData, fetchPostData } = useCommentStore();
  useEffect(() => {
    const fetchData = async () => {
      await fetchPostData(gaff_id);
      setIsLoading(false);
    };
    fetchData();
  }, [fetchPostData]);

  return (
    <div className="flex flex-col gap-4">
      {postData &&
        postData.map((gaff) => <GaffCard key={gaff.id} data={gaff} />)}
    </div>
  );
};

export default GaffBlock;
