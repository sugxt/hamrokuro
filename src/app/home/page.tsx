import PostCard from "@/components/cards/PostCard";
import postList from "@/services/guffServices/postList";
import usePostStore from "@/store/usePostStore";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import ProfileBlock from "@/components/blocks/ProfileBlock";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page to View Guffs and Gaffs",
};

export default function Page() {
  return <ProfileBlock />;
}
