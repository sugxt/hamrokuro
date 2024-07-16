import GuffBlock from "@/components/blocks/guffBlocks/GuffBlock";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="guff-main">
      <GuffBlock guff_id={params.id} />
    </div>
  );
}
