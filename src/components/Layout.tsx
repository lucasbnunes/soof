import { Container } from "@mantine/core";
import Head from "next/head";
import { BackgroundImage } from "../features/background/BackgroundImage";

export function Layout({ children }: React.PropsWithChildren) {

  return (
    <>
      <Head>
        <title>soof</title>
      </Head>

      <Container fluid h="100vh" sx={{ height: "100vh", position: "relative" }}>
        <BackgroundImage />
        {children}
      </Container>
    </>
  )
}