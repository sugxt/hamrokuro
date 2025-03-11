"use client";
import ButtonLoader from "@/components/buttons/ButtonLoader";
import { AuthResponse, SignUpCreds } from "@/model/auth.model";
import signUpServices from "@/services/authServices/signUpServices";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpCreds>();

  async function onSubmit(data: SignUpCreds) {
    setIsLoading(true);
    const response: AuthResponse = await signUpServices(data);
    if (response.isSuccess) {
      router.push("/auth/login");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      console.log("Error", response.message);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-cyan-600">HAMROKURO</h1>
        <form
          className="flex flex-col gap-4"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="rounded-lg p-2"
            type="text"
            placeholder="username"
            required
            {...register("username")}
          />
          <input
            className="rounded-lg p-2"
            type="email"
            placeholder="email"
            required
            {...register("email")}
          />
          <input
            className="rounded-lg p-2"
            type="text"
            placeholder="Full Name"
            required
            {...register("name")}
          />
          <input
            className="rounded-lg p-2"
            type="password"
            placeholder="password"
            required
            {...register("password")}
          />
          <input
            className="rounded-lg p-2"
            type="password"
            placeholder="confirm password"
            required
            {...register("passwordConfirm")}
          />
          <ButtonLoader isLoading={isLoading} content="Sign Up" />
        </form>
        <div>
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/auth/login" className="text-cyan-600">
              Login
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
