import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";

const FooterContact = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justify="space-between"
      maxW="lg"
      gap={10}
      textAlign="start"
      textTransform="capitalize"
      fontSize="md"
    >
      <Box w="fit-content">
        <Heading fontSize="xl">Design central office</Heading>
        <Text>3336 Wellington street</Text>
        <Text>toronto, ontario MVC AS</Text>
      </Box>

      <Box w="fit-content" margin="0 !important">
        <Text>contact us (central office)</Text>
        <Text>P: +5 253 863 769</Text>
        <Text>M: desginoOffice@gmail.com.ca</Text>
      </Box>
    </Stack>
  );
};

export default FooterContact;
