import { useBackground } from "@/hooks/useBackground"
import { ActionIcon, Box, Flex, Image, Slider, Text } from "@mantine/core"
import { IconPhotoX, IconTrash } from "@tabler/icons-react"

export function BackgroundSettings() {
  const { background, removeBackground, opacity, setOpacity } = useBackground()

  if (!background) {
    return null
  }

  return <Flex align="center">
    <Image src={background} alt="" width="3rem" height="3rem" radius="sm" />

    <ActionIcon onClick={removeBackground} sx={{ alignSelf: "flex-start" }} ml="xs">
      <IconTrash />
    </ActionIcon>


    <Box ml="lg" w="8rem" sx={{ alignSelf: "flex-end" }}>
      <Text component="label" htmlFor="opacity" fz="sm">Opacity</Text>
      <Slider name="opacity" value={opacity} onChange={setOpacity} min={0.1} max={1} step={0.01} label={(label) => `${Math.floor(label * 100)}%`} />
    </Box>


  </Flex>
}