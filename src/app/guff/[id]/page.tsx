import GaffBlock from "@/components/blocks/guffBlocks/GaffBlock";
import GuffBlock from "@/components/blocks/guffBlocks/GuffBlock";
import CreateGaffCard from "@/components/cards/CreateGaffCard";
import Titlebar from "@/components/navigation/Titlebar";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="guff-main flex flex-col items-center w-full pt-28 md:pt-10 gap-8">
      <Titlebar title="Guff" isBack={true} />
      <GuffBlock guff_id={params.id} />
      <CreateGaffCard guffId={params.id} />
      <GaffBlock gaff_id={params.id} />
    </div>
  );
}
