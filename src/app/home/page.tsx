"use client";
import postList from "@/services/guffServices/postList";
import usePostStore from "@/store/usePostStore";
import { RecordModel } from "pocketbase";
import { useEffect, useState } from "react";

export default function Page() {
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
    <div>
      {postData && postData.map((post) => <li key={post.id}>{post.guff}</li>)}
    </div>
  );
}
