import { client } from "@/api/client";
import { Audio } from "@/types/audio";
import React from "react";

interface AudioContextValue {
  availableAudios: Audio[];
  isLoading: boolean;
}

export const AudioContext = React.createContext({} as AudioContextValue)

export function AudioContextProvider({ children }: React.PropsWithChildren) {
  const [availableAudios, setAvailableAudios] = React.useState<Audio[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetchAvailableAudios()
  }, [])

  async function fetchAvailableAudios() {
    setIsLoading(true)

    try {
      const { data } = await client.get('/audios')
      setAvailableAudios(data)
    } catch (e) {
      console.error(e)
    }

    setIsLoading(false)
  }

  return <AudioContext.Provider value={{ availableAudios, isLoading }}>{children}</AudioContext.Provider>
}