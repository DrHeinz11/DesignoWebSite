import { Box, Stack } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";
import dataLink from "../../constants/dataLink";
import Logo from "./Logo";
import { Link } from "wouter";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ fontColor = "deepGray", menu }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      align="center"
      justifyContent="space-between"
      gap={4}
      w="full"
      p={4}
    >
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Stack
        direction="row"
        display={{ base: "none", md: "flex" }}
        spacing={4}
        alignItems="center"
      >
        {dataLink.map((element, index) => (
          <CustomLink
            key={index}
            fontColor={fontColor}
            route={element.route}
            text={element.text}
          />
        ))}
      </Stack>
      <Box display={{ base: "block", md: "none" }}>
        {menu && <HamburgerMenu />}
      </Box>
    </Stack>
  );
};

export default Navbar;
