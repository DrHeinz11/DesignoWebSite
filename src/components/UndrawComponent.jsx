import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import undrawBG from "../assets/UndrawBG.svg";
import React from "react";

const UndrawComponent = ({ data: { imgUrl, title, paragraph, imgAlt } }) => {
  return (
    <Stack textAlign="center" alignItems="center" w="sm" p="2">
      <Stack
        h="fit-content"
        justify="center"
        boxSize="18rem"
        backgroundImage={`url(${undrawBG})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Image src={imgUrl} alt={imgAlt} />
      </Stack>
      <Heading
        color="#000"
        textTransform="uppercase"
        letterSpacing={3}
        fontWeight="500"
      >
        {title}
      </Heading>
      <Text color="deepGray">{paragraph}</Text>
    </Stack>
  );
};

export default UndrawComponent;
