import { Container } from "@mantine/core";
import { BackgroundImage } from "./BackgroundImage";

export function Layout({ children }: React.PropsWithChildren) {

  return (
    <Container fluid h="100vh" sx={{ height: "100vh", position: "relative" }}>
      <BackgroundImage />
      {children}
    </Container>
  )
}