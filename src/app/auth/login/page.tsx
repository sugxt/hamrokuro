"use client";

import loginServices from "@/services/authServices/loginServices";
import { useForm } from "react-hook-form";
import { AuthCreds, AuthResponse } from "@/model/auth.model";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonLoader from "@/components/buttons/ButtonLoader";

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCreds>();

  async function onSubmit(data: AuthCreds) {
    setIsLoading(true);
    const resData: AuthResponse = await loginServices(data);
    if (resData.isSuccess) {
      router.push("/home");
      console.log("Success",resData.message)
    } else {
      setIsLoading(false);
      console.log("Error", resData.message);
    }
  }

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="flex flex-col gap-2">
          <input
            required
            type="text"
            placeholder="username or email"
            {...register("identity")}
          />
          <input
            required
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <ButtonLoader isLoading={isLoading} content="Login" />
        </form>
      </div>
    </main>
  );
}
