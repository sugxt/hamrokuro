"use client";
import loginServices from "@/services/authServices/loginServices";
import { useForm } from "react-hook-form";
import { AuthCreds } from "@/model/auth.model";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCreds>();

  async function onSubmit(data:AuthCreds){
    const isSuccess = await loginServices(data)
    if(isSuccess){
      router.push('/')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <input required type="text" placeholder="username or email" {...register("identity")} />
          <input required type="password" placeholder="password" {...register("password")} />
          <button type="submit">login</button>
        </form>
      </div>
    </main>
  );
}
