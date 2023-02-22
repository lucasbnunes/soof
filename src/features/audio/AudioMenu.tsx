import React from 'react';
import { Stack } from "@mantine/core";
import { Icon, IconBeach, IconBuildingCommunity, IconCampfire, IconCloudRain, IconCloudStorm, IconCoffee, IconMoonStars, IconTrees, IconWind } from "@tabler/icons-react";
import { AudioButton } from "./AudioButton";
import { Audio, AvailableAudios } from '@/types/audio';
import { client } from '@/api/client';
import { useAudio } from '@/hooks/useAudio';

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
  const { availableAudios } = useAudio()

  return (
    <Stack display="inline-flex" justify="center" pos="fixed" left="16px" top="50%" sx={{ transform: "translateY(-50%)" }}>
      {availableAudios && availableAudios.map((audio) => (
        <AudioButton key={audio.name} audio={audio}>
          {ICONS[audio.name]}
        </AudioButton>
      ))}
    </Stack>
  )
}