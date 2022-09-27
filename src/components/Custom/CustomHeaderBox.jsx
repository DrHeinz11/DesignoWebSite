import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import HeaderBgCircle from "../../assets/HeaderBgCircle.svg";

const CustomHeaderBox = ({ children, heading, paragraph }) => {
  return (
    <Box
      backgroundImage={`url(${HeaderBgCircle})`}
      backgroundPosition="bottom"
      backgroundRepeat="repeat"
      borderRadius="xl"
    >
      <Stack
        maxW="container.lg"
        h="65vh"
        alignItems={"center"}
        borderRadius="xl"
        direction={{ base: "column", md: "row" }}
        boxShadow="md"
        bg="#e9806bdb"
      >
        <Stack
          p={4}
          textAlign={{ base: "center", sm: "start" }}
          gap={2}
          alignItems={{ base: "center", sm: "flex-start" }}
          justifyItems={"center"}
        >
          <Heading color="#000">{heading}</Heading>
          <Text color="#111">{paragraph}</Text>
        </Stack>
        <Box h="100%">{children}</Box>
      </Stack>
    </Box>
  );
};

export default CustomHeaderBox;
