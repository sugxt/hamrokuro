"use client";
import { AuthResponse, SignUpCreds } from "@/model/auth.model";
import { userConstants } from "@/utils/db.constants";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

const signUpServices = async (
  signUpData: SignUpCreds
): Promise<AuthResponse> => {
  console.log(signUpData);
  try {
    const record = await pb.collection(userConstants.users).create(signUpData);
    console.log(record);
    return { isSuccess: true, message: record.created };
  } catch (error) {
    console.log(pbErrorMessage(error).originalError)
    return { isSuccess: false, message: pbErrorMessage(error).message };
  }
};

export default signUpServices;
