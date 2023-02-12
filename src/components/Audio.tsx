import React from 'react';

export const Audio = React.forwardRef(function Audio(_props: {}, ref: React.ForwardedRef<HTMLAudioElement>) {
  return <audio ref={ref} src="https://cdn.pixabay.com/audio/2021/09/10/audio_9fc587e78d.mp3" preload="none" loop />
})