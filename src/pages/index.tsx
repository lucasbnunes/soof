import { AudioButton } from '@/components/AudioButton';
import { Container, Stack } from '@mantine/core'
import { IconCloudRain } from '@tabler/icons-react';

export default function Home() {
  return (
    <Container fluid h="100vh">
      <Stack display="inline-flex" h="100%" justify="center">
        <AudioButton>
          <IconCloudRain />
        </AudioButton>
      </Stack>
    </Container>
  )
}
