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


// interface RefetchState {
//   homeRefetch: number;
//   profileRefetch: number;
//   setRefetch: (key: "homeRefetch" | "profileRefetch") => void;
// }

// export const useRefetch = create<RefetchState>((set) => ({
//   homeRefetch: 0,
//   profileRefetch: 0,
//   setRefetch: (key) =>
//     set((state) => ({
//       [key]: state[key] + 1,
//     })),
// }));
