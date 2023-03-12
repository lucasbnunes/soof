import { useBackground } from "@/hooks/useBackground";
import { Image as UnsplashImage } from "@/hooks/useUnsplash";
import { Flex, UnstyledButton, Anchor, Image } from "@mantine/core";

interface ImageButtonProps {
  image: UnsplashImage
  onClick?: () => void
}

export function ImageButton({ image, onClick = () => { } }: ImageButtonProps) {
  const { changeBackground } = useBackground()

  function handleClick() {
    changeBackground(image.urls.full)
    onClick()
  }

  return (
    <Flex direction="column">
      <UnstyledButton onClick={handleClick} sx={{ transition: 'transform 100ms ease', '&:hover': { transform: 'scale(1.02)' } }}>
        <Image
          radius="sm"
          src={image.urls.small}
          alt={image.alt_description}
          height={130}
        />
      </UnstyledButton>

      <Anchor href={image.user.links.html} target="_blank" size="xs" mt={2} color="gray.6">{image.user.name}</Anchor>
    </Flex>
  )
}