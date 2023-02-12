import React from 'react';
import { ActionIcon, Flex, Slider } from "@mantine/core";
import { IconPlayerPause, IconPlayerPauseFilled, IconPlayerPlay, IconPlayerPlayFilled } from '@tabler/icons-react';

interface AudioControlsProps {
  audioElement: HTMLAudioElement | null;
  onPlay?: () => void;
  onPause?: () => void;
  transitionStyles?: React.CSSProperties;
}

export function AudioControls({ audioElement, transitionStyles, onPlay = () => { }, onPause = () => { } }: AudioControlsProps) {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [volume, setVolume] = React.useState(0.5)

  React.useEffect(() => {
    changeVolume(audioElement?.volume || 0.5)
    play()
    setIsPlaying(true)
    audioElement?.addEventListener("play", play)
    audioElement?.addEventListener("pause", pause)

    return () => {
      audioElement?.removeEventListener("play", play)
      audioElement?.removeEventListener("pause", pause)
    }
  }, [audioElement])

  function play() {
    audioElement?.play()
    setIsPlaying(true)
    onPlay()
  }

  function pause() {
    audioElement?.pause()
    setIsPlaying(false)
    onPause()
  }

  function changeVolume(volume: number) {
    if (audioElement) {
      audioElement.volume = volume
      setVolume(volume)
    }
  }

  return (
    <Flex w={240} bg="dark.7" display="flex" align="center" py={4} px="md" gap={"xs"} style={transitionStyles}>

      {isPlaying ? (
        <ActionIcon title="Pause" onClick={pause}>
          <IconPlayerPause />
        </ActionIcon>
      ) : (
        <ActionIcon title="Play" onClick={play}>
          <IconPlayerPlay />
        </ActionIcon>
      )}

      <div style={{ flex: 1 }}>
        <Slider value={volume} onChange={changeVolume} label={(value) => `${Math.round(value * 100)}%`} color={isPlaying ? 'teal' : 'teal.9'} thumbLabel="Volume" min={0} max={1} step={0.01} showLabelOnHover={false} />
      </div>
    </Flex>
  )

}