import React from "react";
import { ActionIcon, ActionIconProps, Flex, MantineStyleSystemProps, Transition } from "@mantine/core";
import { Audio } from "./Audio";
import { AudioControls } from "./AudioControls";
import { useClickOutside } from '@mantine/hooks';

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
    color: "blue.0",
    variant: "transparent"
  }
}

export function AudioButton({ children, }: React.PropsWithChildren) {
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
      <ActionIcon title="Sound title" onClick={handleClick} {...buttonStyles[isPlaying ? "active" : "inactive"]} size="xl" sx={{ '& > svg': { width: '2rem', height: '2rem' } }}>
        {children}
      </ActionIcon>

      <Transition mounted={controlIsOpen} transition="pop-bottom-left" duration={200} timingFunction="ease">
        {(styles) =>
          <AudioControls audioElement={audioElement.current} onPlay={handlePlay} onPause={handlePause} transitionStyles={styles} />
        }
      </Transition>

      <Audio ref={audioElement} />
    </Flex>
  )

}