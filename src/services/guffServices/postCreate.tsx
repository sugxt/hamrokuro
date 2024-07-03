"use client";
import { PostResponse, postDataType } from "@/model/posts.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

export default async function postCreate(
  postData: postDataType
): Promise<PostResponse> {
  try {
    const record = await pb.collection("guffs").create(postData);
    console.log(record);
    return { isSuccess: true, message: "Guff Created" };
  } catch (error) {
    return { isSuccess: false, message: pbErrorMessage(error).message };
  }
}
