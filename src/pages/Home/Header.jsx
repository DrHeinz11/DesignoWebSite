import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import PhoneMockup from "../../assets/PhoneMockup.png";

const Header = () => {
  return (
    <Stack
      bg={"mainOrange"}
      direction="row"
      p={{ base: 1, md: 10 }}
      backgroundImage={`url(${PhoneMockup})`}
      backgroundPosition={{ base: "0rem 14rem", sm: "right" }}
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: "25rem", md: "auto" }}
      // w={{ base: "full", sm: "container.md", md: "container.lg" }}
      w="full"
      h={{ base: "35rem", md: "75vh" }}
      borderRadius={{ base: "0", md: "xl" }}
      margin={"0 auto"}
    >
      <Stack
        justify={{ base: "flex-start", sm: "center" }}
        w={{ base: "full", sm: "sm", md: "md" }}
        px={5}
        py={14}
        gap={2}
      >
        <Heading color="#fafafa">
          Award-winning custom designs and digital branding solutions
        </Heading>
        <Text color="#fafafa">
          With over 10 years in the industry, we are experienced in crating
          fully resposive websites,app design,and engaging brand experiences.
          Find out more about our services.{" "}
        </Text>
        <Button
          w="fit-content"
          p={4}
          color={"deepGray"}
          fontWeight="500"
          textTransform="uppercase"
          letterSpacing={2}
        >
          Learn More
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
