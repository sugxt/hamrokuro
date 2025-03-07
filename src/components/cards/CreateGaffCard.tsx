"use client";
import React, { useState } from "react";
import ButtonLoader from "../buttons/ButtonLoader";
import { useForm } from "react-hook-form";
import { postCommentType, PostResponse } from "@/model/posts.model";
import postCommentServices from "@/services/guffServices/postCommentServices";
import { useCommentStore } from "@/store/usePostStore";

const CreateGaffCard = ({ guffId }: { guffId: string }) => {
  const { register, handleSubmit, resetField } = useForm<postCommentType>();
  const { fetchPostData, isCommentLoading, setIsCommentLoading } =
    useCommentStore();

  async function onSubmit(data: postCommentType) {
    setIsCommentLoading(true);
    const response: PostResponse = await postCommentServices(data.gaff, guffId);
    if (response.isSuccess) {
      resetField("gaff");
      fetchPostData(guffId);
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  }

  return (
    <div className="flex flex-col p-4 text-sm sm:w-[650px] w-[350px] md:w-[400px] bg-white rounded-lg gap-2">
      <h1 className="">Enter a reply</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="appearance-none rounded-lg border-2 border-neutral-300 p-4"
          placeholder="Type your gaff"
          autoComplete="off"
          {...register("gaff")}
        />
        <ButtonLoader isLoading={isCommentLoading} content="Reply" />
      </form>
    </div>
  );
};

export default CreateGaffCard;
