import React from 'react';
import { Stack } from "@mantine/core";
import { Icon, IconBeach, IconBuildingCommunity, IconCampfire, IconCloudRain, IconCloudStorm, IconCoffee, IconMoonStars, IconTrees, IconWind } from "@tabler/icons-react";
import { AudioButton } from "./AudioButton";
import { Audio, AvailableAudios } from '@/types/audio';
import { client } from '@/api/client';

type AudioIcons = {
  [key in AvailableAudios]: Icon
}

const ICONS: AudioIcons = {
  rain: IconCloudRain,
  wind: IconWind,
  thunderstorm: IconCloudStorm,
  beach: IconBeach,
  campfire: IconCampfire,
  night: IconMoonStars,
  nature: IconTrees,
  cafe: IconCoffee,
  city: IconBuildingCommunity
}

export function AudioMenu() {
  const [availableAudios, setAvailableAudios] = React.useState<Audio[]>([])

  React.useEffect(() => {
    fetchAvailableAudios()
  }, [])

  async function fetchAvailableAudios() {
    try {
      const { data } = await client.get('audios')
      setAvailableAudios(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Stack display="inline-flex" h="100%" justify="center">
      {availableAudios && availableAudios.map((audio) => (
        <AudioButton key={audio.name}>
          <IconCloudRain />
        </AudioButton>
      ))}
    </Stack>
  )
}