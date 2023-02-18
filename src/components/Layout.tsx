import { useBackground } from "@/hooks/useBackground";
import { BackgroundImage, Container, CSSObject } from "@mantine/core";

export function Layout({ children }: React.PropsWithChildren) {
  const { background } = useBackground()

  const pseudoElementStyles: CSSObject = {
    display: "block",
    position: "absolute",
    left: 0,
    top: 0,
    content: "''",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${background})`,
    opacity: 0.6
  }

  return (
    <Container fluid h="100vh" sx={{ height: "100vh", position: "relative", "&:before": pseudoElementStyles }}>
      {children}
    </Container>
  )
}