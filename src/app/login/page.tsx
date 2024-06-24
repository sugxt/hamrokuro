"use client"
import loginServices from "@/services/authServices/loginServices";
import guffList from "@/services/guffServices/guffList";

export default function Login() {


    const AuthCreds = {
        username: "gatsu",
        password:"00000000"
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button onClick={() => loginServices(AuthCreds)}>click</button>
            <button onClick={()=>guffList()}>don't click</button>
        </main>
    );
}