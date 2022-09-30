import { Box, Heading, Stack, Text, Grid } from "@chakra-ui/react";
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
      <Grid gridTemplateColumns="repeat(auto-fill,minmax(350px,1fr))">
        <Stack
          py={4}
          px={{ base: 8, md: 14, lg: 20 }}
          textAlign={{ base: "center", sm: "start" }}
          gap={2}
          alignItems={{ base: "center", sm: "flex-start" }}
          justifyItems={"center"}
          backgroundColor="#e87f6ad9"
          borderRadius={{base:'none',md:"xl"}}
        >
          <Heading color="#000">{heading}</Heading>
          <Text color="#111">{paragraph}</Text>
        </Stack>
        {children && <Box h="100%">{children}</Box>}
      </Grid>
    </Box>
  );
};

export default CustomHeaderBox;
