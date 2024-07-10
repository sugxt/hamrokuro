import usePostStore from "@/store/usePostStore";
import { postConstants } from "@/utils/db.constants";
import { pb } from "@/utils/pocketbase";
import { RecordModel } from "pocketbase";
export default async function postListServices(): Promise<RecordModel[]> {
  const setPostData = usePostStore.getState().setPostData;
  pb.autoCancellation(false);
  const records = await pb.collection(postConstants.posts).getFullList({
    expand: "guffadi,liked_by",
    sort: "-created",
  });
  console.log(records);
  return records;
}
