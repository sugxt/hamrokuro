import { create } from "zustand";

interface LikeLoadingStore {
  isLikeLoading: boolean;
  setIsLikeLoading: (isLoading: boolean) => void;
}

export const useLikeLoading = create<LikeLoadingStore>((set) => ({
  isLikeLoading: false,
  setIsLikeLoading: (isLikeLoading) => {
    set({ isLikeLoading: isLikeLoading });
  },
}));
