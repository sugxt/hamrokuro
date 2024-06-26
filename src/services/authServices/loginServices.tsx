"use client";
import { AuthCreds } from "@/model/auth.model";
import { userConstants } from "@/utils/db.constants";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

export default async function loginServices(
  Credentials: AuthCreds
): Promise<boolean> {
  try {
    const authData = await pb
      .collection(userConstants.users)
      .authWithPassword(Credentials.identity, Credentials.password);
    console.log(authData);
    return !!authData;
  } catch (error) {
    console.log("Message:", pbErrorMessage(error).message);
    return false;
  }
}
