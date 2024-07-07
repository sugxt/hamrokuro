"use client"
import PostCard from "@/components/cards/PostCard";
import GuffadiGuffServices from "@/services/guffadiServices/GuffadiGuffServices";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const GuffadiGuffs = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<RecordModel[] | null>(null); // Initialize as empty array

  const fetchData = async () => {
    try {
      const response = await GuffadiGuffServices(id);
      if (response.isSuccess) {
        setData(response.data);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      {data && data.map((post) => <PostCard key={post.id} data={post} />)}
    </div>
  );
};

export default GuffadiGuffs;
