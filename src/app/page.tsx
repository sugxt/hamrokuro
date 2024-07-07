"use client"
import CreatePostCard from "@/components/cards/CreatePostCard";
import GuffadiGuffServices from "@/services/guffadiServices/GuffadiGuffServices";
export default function Home() {
  return (
    <section className="flex w-1/2 min-h-screen flex-col items-center justify-between p-24">
      <CreatePostCard />
      <button onClick={()=>GuffadiGuffServices("gatsu")}>Get</button>
    </section>
  );
}
