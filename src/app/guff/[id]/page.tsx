import GaffBlock from "@/components/blocks/guffBlocks/GaffBlock";
import GuffBlock from "@/components/blocks/guffBlocks/GuffBlock";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="guff-main flex flex-col  w-full mt-12 gap-8">
      <GuffBlock guff_id={params.id} />
      <GaffBlock gaff_id={params.id} />
    </div>
  );
}
