import GuffadiGuffs from "@/components/blocks/guffadiBlocks/GuffadiGuffs";
import UserProfileBlock from "@/components/blocks/UserProfileBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HamroKuro | User Profile",
  description: "User and their Guffs",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col pt-28 md:pt-10 items-center w-full justify-center gap-10">
      <UserProfileBlock id={params.id} />
      <GuffadiGuffs id={params.id}/>
    </div>
  );
}
