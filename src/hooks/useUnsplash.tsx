import { client } from "@/api/client";
import { useViewportSize } from "@mantine/hooks";
import React from "react";

export interface SearchResponse extends SearchResponseMetadata {
  results: Image[];
}

export interface SearchResponseMetadata {
  total: number;
  total_pages: number
}

export interface Image {
  id: string;
  alt_description: string;
  urls: {
    "raw": string;
    "full": string;
    "regular": string;
    "small": string;
    "thumb": string;
    "small_s3": string;
  };
  user: {
    name: string;
    links: {
      html: string;
    }
  }
}


export function useUnsplash() {
  const [isLoading, setIsLoading] = React.useState(false)
  const { height, width } = useViewportSize();
  const orientation = height > width ? "portrait" : "landscape"
  const authorization = `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`;

  async function searchImages(query: string, page: number = 1) {
    setIsLoading(true)
    const PER_PAGE = 24

    const res = await client.get(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${PER_PAGE}orientation=${orientation}`, { headers: { "Authorization": authorization } })
    const data: SearchResponse = res.data

    setIsLoading(false)

    return data
  }

  return { searchImages, isLoading }
}