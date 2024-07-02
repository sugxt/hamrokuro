import { postConstants } from "@/utils/db.constants";
import { pb } from "@/utils/pocketbase";

export default async function postList() {
  const records = await pb.collection(postConstants.posts).getFullList({
    sort: "-created",
  });
}
