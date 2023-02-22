import React from 'react';
import { ActionIcon, Flex, Slider } from "@mantine/core";
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';

interface AudioControlsProps {
  onPlay: () => void;
  onPause: () => void;
  onVolumeChange: (volume: number) => void;
  volume: number;
  isPlaying: boolean;
  transitionStyles?: React.CSSProperties;
}

export function AudioControls({ transitionStyles, onPlay, onPause, isPlaying, onVolumeChange, volume }: AudioControlsProps) {
  return (
    <Flex w={240} bg="dark.7" display="flex" align="center" py={4} px="md" gap={"xs"} style={transitionStyles}>

      {isPlaying ? (
        <ActionIcon title="Pause" onClick={onPause}>
          <IconPlayerPause />
        </ActionIcon>
      ) : (
        <ActionIcon title="Play" onClick={onPlay}>
          <IconPlayerPlay />
        </ActionIcon>
      )}

      <div style={{ flex: 1 }}>
        <Slider value={volume} onChange={onVolumeChange} label={(value) => `${Math.round(value * 100)}%`} color={isPlaying ? 'teal' : 'teal.9'} thumbLabel="Volume" min={0} max={1} step={0.01} showLabelOnHover={false} />
      </div>
    </Flex>
  )

}