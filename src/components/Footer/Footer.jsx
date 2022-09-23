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
      pt={{ base: 10, md: 32 }}
      w="full"
      h="sm"
      color="#efefef"
    >
      <Navbar fontColor="#efefef" />
      <Divider />
      <Stack direction="row" justify="space-between">
        <FooterContact />
        <MediaIcon />
      </Stack>
    </Stack>
  );
};

export default Footer;
