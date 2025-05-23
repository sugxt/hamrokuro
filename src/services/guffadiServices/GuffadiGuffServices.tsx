import { GuffadiGuffType } from "@/model/guffadi.model";
import { usePostStore } from "@/store/usePostStore";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

export default async function GuffadiGuffServices(
  id: string
): Promise<GuffadiGuffType> {
  try {
    const updateStore = usePostStore.getState().setPostData;
    const records = await pb.collection("guffs").getFullList({
      filter: `guffadi.username="${id}"`,
      expand: "guffadi",
      sort: "-created",
    });
    updateStore(records);
    return {
      isSuccess: true,
      data: records,
      message: "Successfully Fetched Data",
    };
  } catch (error) {
    return {
      isSuccess: false,
      data: null,
      message: pbErrorMessage(error).message,
    };
  }
}
