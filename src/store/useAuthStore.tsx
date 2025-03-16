"use client";
import { AuthModel } from "pocketbase";
import { create } from "zustand";
import { pb } from "@/utils/pocketbase";

interface AuthState {
  authData: AuthModel;
  clearAuthData: () => void;
  setAuthData: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  authData: pb.authStore.model,
  clearAuthData: () => set({ authData: null }),
  setAuthData: () => set({ authData: pb.authStore.model }),
}));

export default useAuthStore;
