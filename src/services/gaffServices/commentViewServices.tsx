import { MultiPostData, PostData } from "@/model/posts.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";
import { RecordModel } from "pocketbase";

export default async function commentViewServices(
  id: string
): Promise<MultiPostData> {
  try {
    const records: RecordModel[] = await pb.collection("gaffs").getFullList({
      filter: `gaff_for ="${id}"`,
      sort: "-created",
    });
    return { isSuccess: true, data: records, message: "Fetch Gaff Successful" };
  } catch (error) {
    return {
      isSuccess: false,
      data: null,
      message: pbErrorMessage(error).message,
    };
  }
}
