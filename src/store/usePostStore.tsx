"use client";
import { RecordModel } from "pocketbase";
import { create } from "zustand";
import postListServices from "@/services/guffServices/postListServices";
import commentViewServices from "@/services/gaffServices/commentViewServices";

interface PostState {
  postData: RecordModel[] | null;
  setPostData: (data: RecordModel[] | undefined) => void;
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

interface CommentState {
  isCommentLoading: boolean;
  postData: RecordModel[] | null;
  setPostData: (data: RecordModel[] | undefined) => void;
  fetchPostData: (guff_id: string) => Promise<void>;
  setIsCommentLoading: (state: boolean) => void;
}

export const useCommentStore = create<CommentState>((set) => ({
  isCommentLoading: false,
  postData: null,
  setPostData: (data) => set({ postData: data }),
  fetchPostData: async (guff_id) => {
    set({ isCommentLoading: true });
    try {
      const data = await commentViewServices(guff_id);
      set({ postData: data.data });
      set({ isCommentLoading: false });
    } catch (error) {
      console.log("Something went wrong");
    }
  },
  setIsCommentLoading: (state) => {
    set({ isCommentLoading: state });
  },
}));
