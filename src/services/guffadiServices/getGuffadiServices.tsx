import { GuffadiResponse } from "@/model/guffadi.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";
import { RecordModel } from "pocketbase";

export default async function getGuffadiServices(
  id: string
): Promise<GuffadiResponse> {
  try {
    pb.autoCancellation(false);
    const record: RecordModel = await pb
      .collection("guffadis")
      .getFirstListItem(`username ~ "${id}"`);
    console.log(record);
    return { isSuccess: true, message: "User Fetched", data: record };
  } catch (error) {
    console.log(pbErrorMessage(error).message);
    return {
      isSuccess: false,
      message: pbErrorMessage(error).message,
      data: null,
    };
  }
}
