"use client";
import { AuthCreds, AuthResponse } from "@/model/auth.model";
import { userConstants } from "@/utils/db.constants";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

export default async function loginServices(
  Credentials: AuthCreds
): Promise<AuthResponse> {
  try {
    const authData = await pb
      .collection(userConstants.users)
      .authWithPassword(Credentials.identity, Credentials.password);
    return { isSuccess: true, message: authData.record.created };
  } catch (error) {
    return { isSuccess: false, message: pbErrorMessage(error).message };
  }
}
