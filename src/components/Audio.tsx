import React from 'react';

interface AudioProps {
  src: string;
}

export const Audio = React.forwardRef(function Audio({ src }: AudioProps, ref: React.ForwardedRef<HTMLAudioElement>) {
  return <audio ref={ref} src={src} preload="none" loop />
})