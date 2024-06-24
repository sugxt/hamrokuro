"use client"
import loginServices from "@/services/authServices/loginServices";
import guffList from "@/services/guffServices/guffList";
import { FormEvent, useState } from "react";


export default function Login() {


    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const Credentials = {
            username:formData.get("username"),
            password:formData.get("password")
        }
        loginServices(Credentials)
        console.log(Credentials)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input type="text" placeholder="username or email" name="username"/>
                <input type="password" placeholder="password" name="password" />
                <button type="submit">login</button>
            </form>
            </div>
        </main>
    );
}