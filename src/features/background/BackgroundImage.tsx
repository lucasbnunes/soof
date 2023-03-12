import { useBackground } from "@/hooks/useBackground";
import { Image, Loader } from "@mantine/core";

export function BackgroundImage() {
  const { background, onFinishLoading, isLoading, opacity } = useBackground()

  return (
    <>
      {isLoading &&
        <Loader color="gray" size="xl" sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
      }

      {background &&
        <Image
          alt=""
          src={background}
          pos="absolute"
          inset={0}
          width="100vw"
          height="100vh"
          opacity={opacity}
          sx={{ objectFit: "cover", height: "100vh", visibility: isLoading ? "hidden" : "visible" }}

          onLoad={onFinishLoading}
        />
      }
    </>
  )

}