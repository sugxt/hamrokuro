"use client";
import loginServices from "@/services/authServices/loginServices";
import guffList from "@/services/guffServices/guffList";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormEvent, useState } from "react";

type inputs = {
    identity:string,
    password:string,
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();

  async function onSubmit(data:inputs){
    loginServices(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <input type="text" placeholder="username or email" {...register("identity")} />
          <input type="password" placeholder="password" {...register("password")} />
          <button type="submit">login</button>
        </form>
      </div>
    </main>
  );
}
