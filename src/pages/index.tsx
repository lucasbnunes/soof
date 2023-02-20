import { AudioMenu } from '@/features/audio/AudioMenu';
import { Layout } from '@/components/Layout';
import { SearchImageModal } from '@/features/background/SearchImageModal';
import { Box, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

export default function Home() {
  const [opened, handlers] = useDisclosure(false);

  return (
    <Layout >
      <AudioMenu />

      <Box w="100%" pt='lg' sx={{ textAlign: "center" }}>
        <Button onClick={handlers.open} variant='subtle' color="gray" mx="auto">Change background</Button>
      </Box>

      <SearchImageModal isOpen={opened} onClose={handlers.close} />
    </Layout>
  )
}
