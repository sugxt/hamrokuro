"use client";
import { AuthData } from "@/model/auth.model";
import { RecordModel } from "pocketbase";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  authData: RecordModel | null;
  setAuthData: (data: RecordModel) => void;
  clearAuthData: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authData: null,
      setAuthData: (data) => set({ authData: data }),
      clearAuthData: () => set({ authData: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
