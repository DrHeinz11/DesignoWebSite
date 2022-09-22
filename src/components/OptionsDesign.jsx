import { Box, Heading, Text, GridItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "wouter";

const OptionsDesign = ({ title, route, gridArea, urlBackground }) => {
  return (
    <Box
      background={`    url(${urlBackground}) center/cover no-repeat`}
      gridArea={{ base: "", md: gridArea }}
      boxSize="full"
      borderRadius="xl"
    >
      <GridItem
        display="grid"
        placeContent={"center"}
        boxSize="full"
        backdropFilter="blur(10px)"
        textAlign="center"
        borderRadius="xl"
        justifyItems={"center"}
        _hover={{
          transition: "backdrop-filter .75s ease-in-out",
          backdropFilter: "blur(2px)",
        }}
      >
        <Heading letterSpacing={2} textTransform="capitalize" color="#fff">
          {title}
        </Heading>
        <Link href={route}>
          <Text
            display="flex"
            alignItems="center"
            color="#fff"
            cursor="pointer"
            fontSize="sm"
            letterSpacing={4}
            textTransform="uppercase"
          >
            View Projects{" "}
            <ChevronRightIcon
              position="relative"
              bottom="1px"
              boxSize={"2rem"}
              color="mainOrange"
            />
          </Text>
        </Link>
      </GridItem>
    </Box>
  );
};

export default OptionsDesign;
