import { Audio } from '@/types/audio';
import type { NextApiRequest, NextApiResponse } from 'next';

export const AUDIOS: Audio[] = [
  {
    name: 'rain',
    mediaUrl: 'https://cdn.pixabay.com/audio/2021/09/10/audio_9fc587e78d.mp3',
    url: 'https://pixabay.com/sound-effects/relaxing-rain-8228/',
  },
  {
    name: 'wind',
    mediaUrl: 'https://cdn.pixabay.com/audio/2021/08/04/audio_76ad70b5aa.mp3',
    url: 'https://pixabay.com/sound-effects/wind-2-6196/',
  },
  {
    name: 'thunderstorm',
    mediaUrl: 'https://cdn.pixabay.com/audio/2022/01/18/audio_a66379f025.mp3',
    url: 'https://pixabay.com/sound-effects/thunderstorm-14708/',
  },
  {
    name: 'beach',
    mediaUrl: 'https://cdn.pixabay.com/audio/2021/09/06/audio_37aad22374.mp3',
    url: 'https://pixabay.com/sound-effects/sandy-beach-calm-waves-water-nature-sounds-8052/',
  },
  {
    name: 'campfire',
    mediaUrl: 'https://cdn.pixabay.com/audio/2022/09/10/audio_113b247b69.mp3',
    url: 'https://pixabay.com/sound-effects/campfire-crackling-fireplace-sound-119594/',
  },
  {
    name: 'night',
    mediaUrl: 'https://cdn.pixabay.com/audio/2022/02/07/audio_51b5acd355.mp3',
    url: 'https://pixabay.com/sound-effects/night-ambience-17064/',
  },
  {
    name: 'nature',
    mediaUrl: 'https://cdn.pixabay.com/audio/2021/08/09/audio_6b294070f5.mp3',
    url: 'https://pixabay.com/sound-effects/forest-with-small-river-birds-and-nature-field-recording-6735/',
  },
  {
    name: 'cafe',
    mediaUrl: 'https://cdn.pixabay.com/audio/2021/08/04/audio_53547dbc0f.mp3',
    url: 'https://pixabay.com/sound-effects/people-talking-at-cafe-ambience-6159/',
  },
  {
    name: 'city',
    mediaUrl: 'https://cdn.pixabay.com/audio/2021/08/09/audio_3ad215b5b5.mp3',
    url: 'https://pixabay.com/pt/sound-effects/new-york-city-night-evening-rooftop-ambience-traffic-bushwick-brooklyn-above-ground-subway-m-train-6775/',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Audio[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(AUDIOS);
  } else {
    res.status(405).setHeader('Allow', 'GET');
  }
}
