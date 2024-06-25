"use client";
import { SignUpCreds } from "@/model/auth.model";
import signUpServices from "@/services/authServices/signUpServices";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpCreds>();

  async function onSubmit(data: SignUpCreds) {
    signUpServices(data);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="username"
          required
          {...register("username")}
        />
        <input
          type="email"
          placeholder="email"
          required
          {...register("email")}
        />

        <input
          type="password"
          placeholder="password"
          required
          {...register("password")}
        />
        <input
          type="password"
          placeholder="confirm password"
          required
          {...register("passwordConfirm")}
        />
        <input
          type="text"
          placeholder="Full Name"
          required
          {...register("name")}
        />
        <button type="submit">sign up</button>
      </form>
    </main>
  );
}
