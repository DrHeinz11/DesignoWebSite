import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import undrawBG from "../assets/UndrawBG.svg";
import React from "react";

const UndrawComponent = ({ data: { imgUrl, title, paragraph, imgAlt } }) => {
  return (
    <Stack
      textAlign="center"
      alignItems={{ base: "flex-start", sm: "center" }}
      w={{ base: "full", sm: "xs" }}
      p="2"
      direction={{ base: "row", sm: "column" }}
      bg="#d8d8d80f"
    >
      <Stack alignItems="center" minW="135px">
        <Stack
          h="fit-content"
          justify="center"
          boxSize={{ base: "8rem", sm: "18rem" }}
          backgroundImage={`url(${undrawBG})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Image w="288px" src={imgUrl} alt={imgAlt} />
        </Stack>
        <Heading
          color="#000"
          textTransform="uppercase"
          fontSize={{ base: "lg", sm: "2xl" }}
          letterSpacing={3}
          fontWeight="500"
        >
          {title}
        </Heading>
      </Stack>
      <Text fontSize="md" color="deepGray">
        {paragraph}
      </Text>
    </Stack>
  );
};

export default UndrawComponent;
