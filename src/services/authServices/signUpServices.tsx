"use client";
import { AuthResponse, SignUpCreds } from "@/model/auth.model";
import { userConstants } from "@/utils/db.constants";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

const signUpServices = async (
  signUpData: SignUpCreds
): Promise<AuthResponse> => {
  try {
    const record = await pb.collection(userConstants.users).create(signUpData);
    return { isSuccess: true, message: record.created };
  } catch (error) {
    return { isSuccess: false, message: pbErrorMessage(error).message };
  }
};

export default signUpServices;
