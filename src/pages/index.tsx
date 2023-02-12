import { AudioButton } from '@/components/AudioButton';
import { AudioMenu } from '@/components/AudioMenu';
import { Container, Stack } from '@mantine/core'
import { IconCloudRain } from '@tabler/icons-react';

export default function Home() {
  return (
    <Container fluid h="100vh">
      <AudioMenu />
    </Container>
  )
}
