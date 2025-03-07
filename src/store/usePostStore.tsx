"use client";
import { RecordModel } from "pocketbase";
import { create } from "zustand";
import postListServices from "@/services/guffServices/postListServices";
import commentViewServices from "@/services/gaffServices/commentViewServices";
import { pbErrorMessage } from "@/utils/pocketbase";
import postViewServices from "@/services/guffServices/postViewServices";

interface PostState {
  postData: RecordModel[] | null;
  setPostData: (data: RecordModel[] | undefined) => void;
  fetchPostData: () => Promise<void>;
}

interface singlePostState {
  postData: RecordModel | null;
  setPostData: (data: RecordModel | undefined) => void;
  fetchPostData: (guff_id: string) => Promise<void>;
}

interface CommentState {
  isCommentLoading: boolean;
  postData: RecordModel[] | null;
  setPostData: (data: RecordModel[] | undefined) => void;
  fetchPostData: (guff_id: string) => Promise<void>;
  setIsCommentLoading: (state: boolean) => void;
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

export const useSinglePostStore = create<singlePostState>((set) => ({
  postData: null,
  setPostData: (data) => set({ postData: data }),
  fetchPostData: async (guff_id) => {
    try {
      const data = await postViewServices(guff_id);
      set({ postData: data.data });
    } catch (error) {
      console.error("Failed to fetch post data:", error);
    }
  },
}));

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
      console.log(pbErrorMessage(error).message);
    }
  },
  setIsCommentLoading: (state) => {
    set({ isCommentLoading: state });
  },
}));
