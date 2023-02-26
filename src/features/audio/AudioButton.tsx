import React from "react";
import { ActionIcon, ActionIconProps, Flex, Transition } from "@mantine/core";
import { AudioControls } from "./AudioControls";
import { useClickOutside } from '@mantine/hooks';
import { Audio as AudioType } from "@/types/audio";
import { useAudioElement } from "@/hooks/useAudioElement";

interface AudioButtonProps {
  audio: AudioType;
}

interface ButtonStyles {
  active: ActionIconProps;
  inactive: ActionIconProps;
}

const buttonStyles: ButtonStyles = {
  active: {
    color: "teal",
    variant: "light"
  },
  inactive: {
    color: "gray",
    variant: "subtle"
  }
}

export function AudioButton({ audio, children }: React.PropsWithChildren<AudioButtonProps>) {
  const { play, pause, changeVolume, isPlaying, volume } = useAudioElement(audio.mediaUrl)
  const [controlIsOpen, setControlIsOpen] = React.useState(false)
  const ref = useClickOutside(() => setControlIsOpen(false))

  function handleClick() {
    play()
    setControlIsOpen((value) => !value)
  }

  return (
    <Flex ref={ref} gap="lg">
      <ActionIcon title={audio.name} onClick={handleClick} {...buttonStyles[isPlaying ? "active" : "inactive"]} size="xl" sx={{ '& > svg': { width: '2rem', height: '2rem' } }}>
        {children}
      </ActionIcon>

      <Transition mounted={controlIsOpen} transition="pop-bottom-left" duration={200} timingFunction="ease">
        {(styles) =>
          <AudioControls onVolumeChange={changeVolume} volume={volume} onPlay={play} onPause={pause} isPlaying={isPlaying} transitionStyles={styles} />
        }
      </Transition>
    </Flex>
  )

}