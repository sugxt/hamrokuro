import { PostData } from "@/model/posts.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

export default async function postViewServices(id: string): Promise<PostData> {
  try {
    pb.autoCancellation(false);
    const record = await pb.collection("guffs").getOne(id, {
      expand: "guffadi,liked_by",
    });
    return { isSuccess: true, data: record, message: "Guff Fetched" };
  } catch (error) {
    return {
      isSuccess: false,
      data: null,
      message: pbErrorMessage(error).message,
    };
  }
}
