import React from "react";

interface BackgroundContextValue {
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  opacity: number;
  setOpacity: React.Dispatch<React.SetStateAction<number>>;
}

export const BackgroundContext = React.createContext({} as BackgroundContextValue)

export function BackgroundContextProvider({ children }: React.PropsWithChildren) {
  const [background, setBackground] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [opacity, setOpacity] = React.useState(0.6)

  return <BackgroundContext.Provider value={{ background, setBackground, isLoading, setIsLoading, opacity, setOpacity }}>{children}</BackgroundContext.Provider>
}