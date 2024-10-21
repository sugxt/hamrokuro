import GaffBlock from "@/components/blocks/guffBlocks/GaffBlock";
import GuffBlock from "@/components/blocks/guffBlocks/GuffBlock";
import BackButton from "@/components/buttons/BackButton";
import CreateGaffCard from "@/components/cards/CreateGaffCard";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="guff-main flex flex-col items-center w-full pt-28 md:pt-10 gap-8">
      <div className="title-block flex flex-row sm:w-[650px] w-[350px] md:w-[400px] bg-white rounded-xl p-4 justify-start gap-32 items-center">
        <BackButton />
        <h1 className="text-2xl text-cyan-700 font-semibold">Guff</h1>
      </div>
      <GuffBlock guff_id={params.id} />
      <CreateGaffCard guffId={params.id} />
      <GaffBlock gaff_id={params.id} />
    </div>
  );
}
