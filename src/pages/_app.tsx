import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/styles/theme'
import { BackgroundContextProvider } from '@/contexts/BackgroundContext'
import { AudioContextProvider } from '@/contexts/AudioContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BackgroundContextProvider>
      <AudioContextProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={theme}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </AudioContextProvider>
    </BackgroundContextProvider>
  )
}
