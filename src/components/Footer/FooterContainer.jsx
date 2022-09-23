import Footer from "./Footer";
import TalkAbout from "../TalkAbout";
import { Stack } from "@chakra-ui/react";

const FooterContainer = () => {
  return (
    <Stack
      position="relative"
      alignItems="center"
      justifyContent="center"
      mt={{ base: 5, lg: 52 }}
      gap={{ base: 5, md: 0 }}
    >
      <TalkAbout />
      <Footer />
    </Stack>
  );
};

export default FooterContainer;
