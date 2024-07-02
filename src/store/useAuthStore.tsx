"use client";
import { AuthModel } from "pocketbase";
import { create } from "zustand";
import { pb } from "@/utils/pocketbase";

interface AuthState {
  authData: AuthModel;
  clearAuthData: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  authData: pb.authStore.model,
  clearAuthData: () => set({ authData: null }),
}));

export default useAuthStore;
