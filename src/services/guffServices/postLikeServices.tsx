import { PostData } from "@/model/posts.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";
export async function postLikeServices(
  guff_id: string,
  guffadi_id: string
): Promise<PostData> {
  try {
    const record = await pb.collection("guffs").update(guff_id, {
      "liked_by+": `${guffadi_id}`,
    });
    return { isSuccess: true, data: record, message: "Liked" };
  } catch (error) {
    return {
      isSuccess: false,
      data: null,
      message: pbErrorMessage(error).message,
    };
  }
}
