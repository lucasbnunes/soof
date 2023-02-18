import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/styles/theme'
import { BackgroundContextProvider } from '@/contexts/BackgroundContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BackgroundContextProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </BackgroundContextProvider>
  )
}
