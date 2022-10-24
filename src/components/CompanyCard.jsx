import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CompanyCard = ({ text, title, imgAlt, imgUrl }) => {
  return (
    <Grid
      bg="#fdf3f0"
      w="full"
      gridTemplateColumns="repeat(auto-fit,minmax(325px,1fr))"
      borderRadius="xl"
      minH="50vh"
    >
      <Box
        textAlign="start"
        textTransform="capitalize"
        py="10"
        px="5"
        margin="auto 0"
      >
        <Heading color="#ed916b">{title}</Heading>
        <Text mt="10" fontSize='xl' color="blackAlpha.800">
          {text}
        </Text>
      </Box>
      <Box bg="#000" borderRadius="xl">
        <Image borderRadius="xl"
          margin="0 !important"
          src={imgUrl}
          alt={imgAlt}
          objectFit="cover"
          w="99%"
        />
      </Box>
    </Grid>
  );
};

export default CompanyCard;
