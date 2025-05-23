import { PostResponse } from "@/model/posts.model";
import { postConstants } from "@/utils/db.constants";
import { pb, pbErrorMessage } from "@/utils/pocketbase";
import postListServices from "./postListServices";

export default async function postCreateServices(
  postData: string
): Promise<PostResponse> {
  if (pb.authStore.model) {
    const data = {
      guff: postData,
      guffadi: pb.authStore.model.id,
    };
    try {
      await pb.collection(postConstants.posts).create(data);
      postListServices()
      return { isSuccess: true, message: `${postConstants.posts} Created` };
    } catch (error) {
      return { isSuccess: false, message: pbErrorMessage(error).message };
    }
  } else {
    return { isSuccess: false, message: "User not Authenticated" };
  }
}
