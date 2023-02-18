import React from "react";

interface BackgroundContextValue {
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>
}

export const BackgroundContext = React.createContext({} as BackgroundContextValue)

export function BackgroundContextProvider({ children }: React.PropsWithChildren) {
  const [background, setBackground] = React.useState("")

  return <BackgroundContext.Provider value={{ background, setBackground }}>{children}</BackgroundContext.Provider>
}