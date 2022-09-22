import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import BubbleBG from "../assets/BubleBg.svg";

const TalkAbout = () => {
  return (
    <Box
      backgroundImage={`url(${BubbleBG})`}
      backgroundPosition={{ base: "14rem 0", md: "8rem -8rem" }}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundColor="mainOrange"
      borderRadius="xl"
      w={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      maxW="full"
      position="absolute"
      bottom="17rem"
    >
      <Stack
        flexWrap="wrap"
        direction="row"
        backdropFilter="blur(7px)"
        h="full"
        w="full"
        p={{ base: 4, md: 14 }}
        borderRadius="xl"
        alignItems="center"
        gap={10}
        justifyContent="center"
        textAlign={{ base: "center", md: "start" }}
        color="white"
      >
        <Box flex={"1 1 300px"} as={Stack} direction="column">
          <Heading fontSize="3xl">Let´s talk about your project</Heading>
          <Text fontSize="lg">Ready to take it to the netxt level?</Text>
          <Text fontSize="lg">
            Contant us today and find out how our expertise can help your
            business grow.
          </Text>
        </Box>
        <Button color="#000" size="lg">
          GET IN TOUCH
        </Button>
      </Stack>
    </Box>
  );
};

export default TalkAbout;
