"use client";
import PostCard from "@/components/cards/PostCard";
import GuffadiGuffServices from "@/services/guffadiServices/GuffadiGuffServices";
import { usePostStore } from "@/store/usePostStore";
import React, { useEffect, useState } from "react";

const GuffadiGuffs = ({ id }: { id: string }) => {
  const { postData, fetchPostData } = usePostStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await GuffadiGuffServices(id);
      if (response.isSuccess) {
        console.log(response.message); // Success Message Handling Here
      } else {
        console.log(response.message); // Error Message Handling Here
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading to false after state update
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div className="flex flex-col items-center gap-6">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="gap-8 flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-cyan-800">Guff Haru</h1>
          {postData &&
            postData.map((post) => <PostCard key={post.id} data={post} />)}
        </div>
      )}
    </div>
  );
};

export default GuffadiGuffs;
