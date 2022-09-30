import { Stack, Divider, Text } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import handleScrollTop from "../../utils/handleScrollTop";
import React from "react";
import FooterContact from "./FooterContact";
import MediaIcon from "./MediaIcon";
import Navbar from "../Navbar/Navbar";

const Footer = () => {
  return (
    <Stack
      bg="deepGray"
      px={{ base: 2, md: 20 }}
      pt={{ base: 10, md: "36" }}
      pb={1}
      w="full"
      minH="sm"
      color="#efefef"
    >
      <Navbar fontColor="#efefef" menu={false} />
      <Divider />
      <Stack
        direction="row"
        justify={{ base: "center", md: "space-between" }}
        gap={10}
        flexWrap="wrap-reverse"
      >
        <FooterContact />
        <MediaIcon />
      </Stack>
      <Stack alignItems="center">
        <ArrowUpIcon
          alignSelf="flex-end"
          boxSize="3rem"
          p={1}
          borderRadius="full"
          border="2px solid  var(--chakra-colors-mainOrange)"
          cursor="pointer"
          onClick={handleScrollTop}
          _hover={{
            filter: "drop-shadow(0 0 0.75rem #fff)",
            transition: "filter 300ms ease-in-out",
          }}
        />
        <Divider />
        <Text fontSize="sm" color="whiteAlpha.400">
          Copyright Franco Martin
        </Text>
      </Stack>
    </Stack>
  );
};

export default Footer;
