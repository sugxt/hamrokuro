"use client";
import { SignUpCreds } from "@/model/auth.model";
import { userConstants } from "@/utils/db.constants";
import { pb, pbErrorMessage } from "@/utils/pocketbase";

const signUpServices = async (signUpData: SignUpCreds):Promise<boolean> => {
  console.log(signUpData);
  try {
    const record = await pb.collection(userConstants.users).create(signUpData);
    console.log(record);
    return !!record;
  } catch (error) {
    console.log(pbErrorMessage(error).response);
    return false;
  }
};

export default signUpServices;
