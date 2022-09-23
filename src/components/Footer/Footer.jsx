import { Stack, Divider } from "@chakra-ui/react";
import React from "react";
import FooterContact from "./FooterContact";
import MediaIcon from "./MediaIcon";
import Navbar from "../Navbar";

const Footer = () => {
  return (
    <Stack
      bg="deepGray"
      px={{ base: 2, md: 20 }}
      pt={{ base: 10, md: "36" }}
      pb={10}
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
    </Stack>
  );
};

export default Footer;
