import React from "react"
import { BackgroundContext } from "@/contexts/BackgroundContext"

export function useBackground() {
  const { background, setBackground } = React.useContext(BackgroundContext)

  function removeBackground() {
    setBackground("")
  }

  return {
    background,
    setBackground,
    removeBackground
  }
}