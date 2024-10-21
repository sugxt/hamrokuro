import { postConstants } from "@/utils/db.constants";
import { pb, pbErrorMessage } from "@/utils/pocketbase";
import { postCommentType, PostData, PostResponse } from "@/model/posts.model";
import commentViewServices from "../gaffServices/commentViewServices";

export default async function postCommentServices(
  gaff: string,
  gaff_for: string
): Promise<PostResponse> {
  if (pb.authStore.model) {
    const data = {
      gaff: gaff,
      guffadi: pb.authStore.model.id,
      gaff_for: gaff_for,
    };
    try {
      await pb.collection(postConstants.comments).create(data);
      commentViewServices(data.gaff_for);
      return { isSuccess: true, message: `${postConstants.comments} Created` };
    } catch (error) {
      return { isSuccess: false, message: pbErrorMessage(error).message };
    }
  }
  return { isSuccess: false, message: "User Not Authorized" };
}
