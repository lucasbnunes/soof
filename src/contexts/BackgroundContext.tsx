import React from "react";

interface BackgroundContextValue {
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BackgroundContext = React.createContext({} as BackgroundContextValue)

export function BackgroundContextProvider({ children }: React.PropsWithChildren) {
  const [background, setBackground] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  return <BackgroundContext.Provider value={{ background, setBackground, isLoading, setIsLoading }}>{children}</BackgroundContext.Provider>
}