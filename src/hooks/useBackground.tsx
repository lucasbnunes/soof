import React from "react"
import { BackgroundContext } from "@/contexts/BackgroundContext"

export function useBackground() {
  const { background, setBackground, isLoading, setIsLoading } = React.useContext(BackgroundContext)

  function removeBackground() {
    setBackground("")
  }

  function changeBackground(url: string) {
    setIsLoading(true)
    setBackground(url)
  }

  function onFinishLoading() {
    setIsLoading(false)
  }

  return {
    isLoading,
    background,
    changeBackground,
    removeBackground,
    onFinishLoading
  }
}