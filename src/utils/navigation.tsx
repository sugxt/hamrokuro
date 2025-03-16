"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { pb } from "@/utils/pocketbase";

interface NavigationContextType {
  userName: string;
  isLoading: boolean;
  refreshUserData: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [userName, setUserName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUserData = () => {
    if (pb.authStore.isValid) {
      setUserName((pb.authStore.model?.username as string) || "");
    } else {
      setUserName("");
    }
    setIsLoading(false);
  };

  // Function to refresh user data after logout or login
  const refreshUserData = () => {
    setIsLoading(true);
    fetchUserData();
  };

  useEffect(() => {
    fetchUserData();

    // Listen for authentication changes
    const unsubscribe = pb.authStore.onChange(() => {
      fetchUserData();
    });

    return () => {
      // Clean up the subscription
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{ userName, isLoading, refreshUserData }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
