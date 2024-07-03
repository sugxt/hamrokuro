import type { Metadata } from "next";
import ProfileBlock from "@/components/blocks/ProfileBlock";

export const metadata: Metadata = {
  title: "HamroKuro | Home",
  description: "Home Page to View Guffs and Gaffs",
};

export default function Page() {
  return(
    <div className="flex flex-row items-center justify-center">
      <ProfileBlock/>
    </div>
  )
}
