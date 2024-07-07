import UserProfileBlock from "@/components/blocks/UserProfileBlock";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="pt-10">
      <UserProfileBlock id={params.id} />
    </div>
  );
}
