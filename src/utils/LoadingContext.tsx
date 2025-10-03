"use client";

import React, { useEffect, useState, useMemo, createContext } from "react";

export type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => undefined,
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const value = useMemo(() => ({ loading, setLoading }), [loading]);

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
