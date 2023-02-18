import { Image as UnsplashImage, SearchResponseMetadata, useUnsplash } from "@/hooks/useUnsplash";
import { Modal, ScrollArea, Box, TextInput, ActionIcon, SimpleGrid, Text, Image, Anchor, Pagination, Flex, Skeleton, Button, UnstyledButton } from "@mantine/core";
import { useMediaQuery, usePagination } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { ImageButton } from "./ImageButton";

interface SearchImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export function SearchImageModal({ isOpen, onClose }: SearchImageModalProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [search, setSearch] = React.useState("")
  const [images, setImages] = React.useState<UnsplashImage[]>([])
  const [searchResponse, setSearchResponse] = React.useState<SearchResponseMetadata>()
  const { searchImages, isLoading } = useUnsplash()

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    const { results, ...rest } = await searchImages(search)
    setSearchResponse(rest)
    setImages(results)
  }

  async function onPageChange(page: number) {
    const { results, ...rest } = await searchImages(search, page)
    setSearchResponse(rest)
    setImages(results)
  }

  return (
    <Modal opened={isOpen} onClose={onClose} size={isDesktop ? 'xl' : 'md'}>
      <ScrollArea.Autosize maxHeight={isDesktop ? 720 : 560}>
        <Box px="lg">
          <form onSubmit={handleSubmit}>
            <TextInput placeholder="Search image..." aria-label='Search image' value={search} onChange={({ target }) => setSearch(target.value)} rightSection={<ActionIcon type="submit"><IconSearch size={16} /></ActionIcon>} />
          </form>
          <Anchor href="https://unsplash.com/" target="_blank" size="xs" display="block" ta="center" mt={2} color="gray.6">Powered by Unsplash</Anchor>

          {!isLoading &&
            <>
              <SimpleGrid mt="xl" cols={isDesktop ? 4 : 2}>
                {images.map((img) => {
                  return (
                    <ImageButton key={img.id} image={img} onClick={onClose} />
                  )
                })}

              </SimpleGrid>
            </>
          }
        </Box>
      </ScrollArea.Autosize>

      {searchResponse && <Pagination total={searchResponse.total_pages} size="sm" mt="md" position="center" onChange={onPageChange} />}
    </Modal>
  )
}