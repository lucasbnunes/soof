export type AvailableAudios =
  | 'rain'
  | 'wind'
  | 'thunderstorm'
  | 'beach'
  | 'campfire'
  | 'night'
  | 'nature'
  | 'cafe'
  | 'city';

export interface Audio {
  name: AvailableAudios;
  url: string;
  mediaUrl: string;
}
