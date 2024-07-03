import CreatePostCard from "@/components/cards/CreatePostCard";
import ProfileCard from "@/components/cards/ProfileCard";
import Navbar from "@/components/navigation/navbar";
export default function Home() {
  return (
    <section className="flex w-1/2 min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <CreatePostCard />
    </section>
  );
}
