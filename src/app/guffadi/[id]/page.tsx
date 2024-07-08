import GuffadiGuffs from "@/components/blocks/guffadiBlocks/GuffadiGuffs";
import UserProfileBlock from "@/components/blocks/UserProfileBlock";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center pt-10 w-full justify-center gap-10">
      <UserProfileBlock id={params.id} />
      <GuffadiGuffs id={params.id}/>
    </div>
  );
}
