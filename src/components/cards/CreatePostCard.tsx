"use client";
import { PostResponse, postDataType } from "@/model/posts.model";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonLoader from "@/components/buttons/ButtonLoader";
import postCreateServices from "@/services/guffServices/postCreateServices";
import { usePostStore } from "@/store/usePostStore";

const CreatePostCard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { fetchPostData } = usePostStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<postDataType>();

  async function onSubmit(data: postDataType) {
    setIsLoading(true);
    const response: PostResponse = await postCreateServices(data.guff);
    if (response.isSuccess) {
      setIsLoading(false);
      resetField("guff");
      console.log(response.message);
    } else {
      setIsLoading(false);
      console.log(response.message);
    }
    fetchPostData();
  }

  return (
    <div className="flex flex-col p-6 w-96 bg-white rounded-lg gap-2">
      <h1 className="text-lg text-cyan-900">Guff hanne thau</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="appearance-none rounded-lg border-2 border-neutral-300 p-4"
          placeholder="Type your guff"
          {...register("guff")}
          autoComplete="off"
        />
        <ButtonLoader isLoading={isLoading} content="Guff Hanum" />
      </form>
    </div>
  );
};

export default CreatePostCard;
