import CreatePostCard from "@/components/cards/CreatePostCard";
export default function Home() {
  return (
    <section className="flex w-1/2 min-h-screen flex-col items-center justify-between p-24">
      <CreatePostCard />
    </section>
  );
}
