import { GuffadiGuffType } from "@/model/guffadi.model";
import { pb, pbErrorMessage } from "@/utils/pocketbase";
import { RecordModel } from "pocketbase";

export default async function GuffadiGuffServices(
  id: string
): Promise<GuffadiGuffType> {
  try {
    const records = await pb.collection("guffs").getFullList({
      filter: `guffadi.username="${id}"`,
      expand: "guffadi",
      sort: "-created",
    });
    console.log(records);
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
