"use client";
import { RecordModel } from "pocketbase";
import { create } from "zustand";
import postListServices from "@/services/guffServices/postListServices";

interface PostState {
  postData: RecordModel[] | null;
  setPostData: (data: RecordModel[]) => void;
  fetchPostData: () => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
  postData: null,
  setPostData: (data) => set({ postData: data }),
  fetchPostData: async () => {
    try {
      const data = await postListServices();
      set({ postData: data });
    } catch (error) {
      console.error("Failed to fetch post data:", error);
    }
  },
}));

