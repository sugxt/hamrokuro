import { PostData } from "@/model/posts.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

export default async function postLikeServices(
  guff_id: string,
  guffadi_id: string
): Promise<PostData> {
  try {
    const record = await pb.collection("guffs").update(guff_id, {
      "liked_by+": `${guffadi_id}`,
    });
    console.log(record);
    return { isSuccess: true, data: record, message: "Liked" };
  } catch (error) {
    return {
      isSuccess: false,
      data: null,
      message: pbErrorMessage(error).message,
    };
  }
}
