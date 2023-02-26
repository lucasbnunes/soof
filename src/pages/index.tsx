import React from 'react';
import { AudioMenu } from '@/features/audio/AudioMenu';
import { Layout } from '@/components/Layout';
import { SearchImageModal } from '@/features/background/SearchImageModal';
import { Box, Button, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

export default function Home() {
  const [opened, handlers] = useDisclosure(false);

  return (
    <Layout >
      <AudioMenu />


      <Box display="flex" w="100%" pt='lg' sx={{ justifyContent: "space-between" }}>
        <Image src="/soof.svg" width={58} alt="" />
        <Button onClick={handlers.open} variant='subtle' color="gray">Change background</Button>
      </Box>

      <SearchImageModal isOpen={opened} onClose={handlers.close} />
    </Layout>
  )
}
