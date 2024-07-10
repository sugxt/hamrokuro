import { create } from "zustand";

interface LikeLoadingStore {
  isLikeLoading: boolean;
  setIsLikeLoading: (isLoading: boolean) => void;
}

interface RefetchStore {
  refetch: number;
  setRefetch: (by: number) => void;
}

export const useLikeLoading = create<LikeLoadingStore>((set) => ({
  isLikeLoading: false,
  setIsLikeLoading: (isLikeLoading) => {
    set({ isLikeLoading: isLikeLoading });
  },
}));

export const useRefetch = create<RefetchStore>((set) => ({
  refetch: 0,
  setRefetch: (by) => set((state) => ({ refetch: state.refetch + by })),
}));
