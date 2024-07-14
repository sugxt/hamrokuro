import { GuffadiResponse } from "@/model/guffadi.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";
import { RecordModel } from "pocketbase";

export default async function GuffadiServices(
  id: string
): Promise<GuffadiResponse> {
  try {
    pb.autoCancellation(false);
    const record: RecordModel = await pb
      .collection("guffadis")
      .getFirstListItem(`username ~ "${id}"`);
    return { isSuccess: true, message: "User Fetched", data: record };
  } catch (error) {
    return {
      isSuccess: false,
      message: pbErrorMessage(error).message,
      data: null,
    };
  }
}
