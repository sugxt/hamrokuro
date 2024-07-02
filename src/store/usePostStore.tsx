"use client";
import { RecordModel } from "pocketbase";
import { create } from "zustand";

interface PostState {
  postData: RecordModel[] | null;
  setPostData: (data: RecordModel[]) => void;
  clearAuthData: () => void;
}

const usePostStore = create<PostState>((set) => ({
  postData: null,
  setPostData: (data) => set({postData:data}),
  clearAuthData: () => set({ postData: null }),
}));

export default usePostStore;
