import React from "react";

export function useAudioElement(src: string) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [volume, setVolume] = React.useState(1)
  const audio = React.useRef<HTMLAudioElement | undefined>()


  React.useEffect(() => {
    audio.current = new Audio(src)
    audio.current.loop = true
  }, [src])

  function play() {
    if (audio.current) {
      audio.current.play()
      setIsPlaying(true)
    }
  }

  function pause() {
    if (audio.current) {
      audio.current.pause()
      setIsPlaying(false)
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
    volume,
    play,
    pause,
    changeVolume
  }
}