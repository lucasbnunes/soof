import { useAudioContext } from "@/contexts/AudioContext";
import { AvailableAudios } from "@/types/audio";
import { useLocalStorage } from "@mantine/hooks";
import React from "react";


export function useAudioElement(src: string, name: AvailableAudios) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [volume, setVolume] = React.useState(1)
  const audio = React.useRef<HTMLAudioElement | undefined>()
  const [value, setValue] = useLocalStorage<AvailableAudios[]>({ key: "currently-playing", defaultValue: [] })

  React.useEffect(() => {
    audio.current = new Audio(src)
    audio.current.loop = true
  }, [src])

  React.useEffect(() => {
    if (value.includes(name)) {
      audio.current?.play()
    }
  }, [value])

  function play() {
    if (audio.current) {
      audio.current.play()
      setIsPlaying(true)
      addToLocalStorage(name)
    }
  }

  function pause() {
    if (audio.current) {
      audio.current.pause()
      setIsPlaying(false)
      removeFromLocalStorage(name)
    }
  }

  function changeVolume(volume: number) {
    if (audio.current) {
      audio.current.volume = volume
      setVolume(volume)

    }
  }

  function addToLocalStorage(name: AvailableAudios) {
    const indexToBeUpdated = value.findIndex((localStorageItem) => localStorageItem === name)
    const newValue = [...value]

    if (indexToBeUpdated === -1) {
      newValue.push(name)
    } else {
      newValue[indexToBeUpdated] = name
    }

    setValue(newValue)
  }

  function removeFromLocalStorage(name: AvailableAudios) {
    const newValue = value.filter((localStorageItem) => localStorageItem !== name)

    setValue(newValue)
  }


  return {
    isPlaying,
    volume,
    play,
    pause,
    changeVolume
  }
}