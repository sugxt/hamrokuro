"use client";
import { PostResponse } from "@/model/posts.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

export default async function postCreate(
  postData: string
): Promise<PostResponse> {
  if (pb.authStore.model) {
    const data = {
      guff: postData,
      guffadi: pb.authStore.model.id,
    };
    try {
      const record = await pb.collection("guffs").create(data);
      console.log(record);
      return { isSuccess: true, message: "Guff Created" };
      
    } catch (error) {
      return { isSuccess: false, message: pbErrorMessage(error).message };
    }
  } else {
    return { isSuccess: false, message: "User not Authenticated" };
  }
}
