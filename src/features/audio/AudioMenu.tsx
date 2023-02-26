import React from 'react';
import { Skeleton, Stack } from "@mantine/core";
import { IconBeach, IconBuildingCommunity, IconCampfire, IconCloudRain, IconCloudStorm, IconCoffee, IconMoonStars, IconTrees, IconWind } from "@tabler/icons-react";
import { AudioButton } from "./AudioButton";
import { AvailableAudios } from '@/types/audio';
import { useAudioContext } from '@/contexts/AudioContext';

type AudioIcons = {
  [key in AvailableAudios]: React.ReactElement
}

const ICONS: AudioIcons = {
  rain: <IconCloudRain />,
  wind: <IconWind />,
  thunderstorm: <IconCloudStorm />,
  beach: <IconBeach />,
  campfire: <IconCampfire />,
  night: <IconMoonStars />,
  nature: <IconTrees />,
  cafe: <IconCoffee />,
  city: <IconBuildingCommunity />
}

export function AudioMenu() {
  const { availableAudios, isLoading } = useAudioContext()

  return (
    <Stack display="inline-flex" justify="center" pos="fixed" left="16px" top="50%" sx={{ transform: "translateY(-50%)" }}>

      {isLoading &&
        <>
          <Skeleton width={44} height={44} />
          <Skeleton width={44} height={44} />
          <Skeleton width={44} height={44} />
          <Skeleton width={44} height={44} />
          <Skeleton width={44} height={44} />
          <Skeleton width={44} height={44} />
          <Skeleton width={44} height={44} />
          <Skeleton width={44} height={44} />
          <Skeleton width={44} height={44} />
        </>
      }
      {availableAudios && availableAudios.map((audio) => (
        <AudioButton key={audio.name} audio={audio}>
          {ICONS[audio.name]}
        </AudioButton>
      ))}
    </Stack>
  )
}