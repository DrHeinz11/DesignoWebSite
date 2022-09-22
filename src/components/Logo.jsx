import logo from "../assets/BubleLogo.svg";
import { Image, Heading, Stack } from "@chakra-ui/react";

import React from "react";

const Logo = () => {
  return (
    <Stack direction="row" align="center" w="fit-content" p={1}>
      <Image w="32px" src={logo} alt="company-logo" />
      <Heading fontSize="2xl" fontWeight="bold" letterSpacing={4}>
        DESIGNO
      </Heading>
    </Stack>
  );
};

export default Logo;
