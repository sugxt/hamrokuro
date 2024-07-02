"use client";

import loginServices from "@/services/authServices/loginServices";
import { useForm } from "react-hook-form";
import { AuthCreds, AuthResponse } from "@/model/auth.model";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
      router.push("/");
    } else {
      setIsLoading(false);
      console.log("Error", resData.message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
