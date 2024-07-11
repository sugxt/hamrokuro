import { PostData } from "@/model/posts.model";
import { useLikeLoading, useRefetch } from "@/store/useLoadingStore";
import { usePostStore } from "@/store/usePostStore";
import { pb, pbErrorMessage } from "@/utils/pocketbase";
export async function postLikeServices(
  guff_id: string,
  guffadi_id: string
): Promise<PostData> {
  const fetchPostData = usePostStore.getState().fetchPostData;
  const setIsLikeLoading = useLikeLoading.getState().setIsLikeLoading;
  const setRefetch = useRefetch.getState().setRefetch;
  setIsLikeLoading(true);
  try {
    const record = await pb.collection("guffs").update(guff_id, {
      "liked_by+": `${guffadi_id}`,
    });
    console.log(record);
    // setRefetch(1);
    // await fetchPostData();
    setIsLikeLoading(false);
    return { isSuccess: true, data: record, message: "Liked" };
  } catch (error) {
    setIsLikeLoading(false);
    return {
      isSuccess: false,
      data: null,
      message: pbErrorMessage(error).message,
    };
  }
}
