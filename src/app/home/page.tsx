import type { Metadata } from "next";
import ProfileBlock from "@/components/blocks/ProfileBlock";
import CreatePostCard from "@/components/cards/CreatePostCard";

export const metadata: Metadata = {
  title: "HamroKuro | Home",
  description: "Home Page to View Guffs and Gaffs",
};

export default function Page() {
  return (
    <div className="w-full pt-10 bg-neutral-100 flex h-auto justify-center items-center p-4">
      <div className="flex flex-col w-1/3 items-center gap-6 justify-center">
        <CreatePostCard />
        <ProfileBlock />
      </div>
    </div>
  );
}
