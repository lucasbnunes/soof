import React from "react";
import { AudioContext } from "@/contexts/AudioContext";
import { useHotkeys } from "@mantine/hooks";

export function useAudio(src?: string) {
  const { availableAudios } = React.useContext(AudioContext)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [volume, setVolume] = React.useState(1)
  const [hotkeyTriggered, setHotkeyTriggered] = React.useState(false)
  const audio = React.useRef<HTMLAudioElement | undefined>()

  function handleHotkey() {
    if (isPlaying) {
      pause()
      setHotkeyTriggered(true)
    } else {
      if (hotkeyTriggered) {
        play()
      }
    }
  }

  React.useEffect(() => {
    audio.current = new Audio(src)
  }, [src])

  function play() {
    if (audio.current) {
      audio.current.play()
      setIsPlaying(true)
      setHotkeyTriggered(false)
    }
  }

  function pause() {
    if (audio.current) {
      audio.current.pause()
      setIsPlaying(false)
      setHotkeyTriggered(false)
    }
  }

  function changeVolume(volume: number) {
    if (audio.current) {
      audio.current.volume = volume
      setVolume(volume)
    }
  }

  return {
    isPlaying,
    availableAudios,
    volume,
    play,
    pause,
    changeVolume
  }
}