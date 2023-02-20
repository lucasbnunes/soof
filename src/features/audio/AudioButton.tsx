import React from "react";
import { ActionIcon, ActionIconProps, Flex, MantineStyleSystemProps, Transition } from "@mantine/core";
import { Audio } from "./Audio";
import { AudioControls } from "./AudioControls";
import { useClickOutside } from '@mantine/hooks';
import { Audio as AudioType } from "@/types/audio";

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
  const audioElement = React.useRef<HTMLAudioElement | null>(null)
  const [controlIsOpen, setControlIsOpen] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const ref = useClickOutside(() => setControlIsOpen(false))

  function handleClick() {
    setControlIsOpen((value) => !value)
  }

  function handlePlay() {
    setIsPlaying(true)
  }

  function handlePause() {
    setIsPlaying(false)
  }



  return (
    <Flex ref={ref} gap="lg">
      <ActionIcon title={audio.name} onClick={handleClick} {...buttonStyles[isPlaying ? "active" : "inactive"]} size="xl" sx={{ '& > svg': { width: '2rem', height: '2rem' } }}>
        {children}
      </ActionIcon>

      <Transition mounted={controlIsOpen} transition="pop-bottom-left" duration={200} timingFunction="ease">
        {(styles) =>
          <AudioControls audioElement={audioElement.current} onPlay={handlePlay} onPause={handlePause} transitionStyles={styles} />
        }
      </Transition>

      <Audio ref={audioElement} src={audio.mediaUrl} />
    </Flex>
  )

}