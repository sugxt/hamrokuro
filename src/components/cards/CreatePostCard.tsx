"use client";
import { PostResponse, postDataType } from "@/model/posts.model";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonLoader from "@/components/buttons/ButtonLoader";
import postCreateServices from "@/services/guffServices/postCreateServices";

const CreatePostCard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postDataType>();

  async function onSubmit(data: postDataType) {
    setIsLoading(true);
    const response: PostResponse = await postCreateServices(data.guff);
    if (response.isSuccess) {
      setIsLoading(false);
      console.log(response.message);
    } else {
      setIsLoading(false)
      console.log(response.message);
    }
  }

  return (
    <div className="flex flex-col p-6 w-3/4 bg-neutral-100 rounded-lg gap-2">
      <h1 className="text-lg text-cyan-800">Guff hanne thau</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
        className="appearance-none rounded-lg border-2 border-neutral-300 p-4"
          placeholder="Type your guff"
          {...register("guff")}
        />
        <ButtonLoader isLoading={isLoading} content="Guff Hanum" />
      </form>
    </div>
  );
};

export default CreatePostCard;
