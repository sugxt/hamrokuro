"use client";
import { SignUpCreds } from "@/model/auth.model";
import { userConstants } from "@/utils/db.constants";
import { pb } from "@/utils/pocketbase";

const signUpServices = async (signUpData: SignUpCreds) => {
  console.log(signUpData);
  try {
    const record = await pb.collection(userConstants.users).create(signUpData);
    console.log(record);
    if (record) return true;
  } catch (error) {
    console.log(error);
  }
};

export default signUpServices;
