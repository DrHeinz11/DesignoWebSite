import { Stack } from "@chakra-ui/react";
import CustomLink from "./CustomLink";
import dataLink from "../constants/dataLink";
import Logo from "./Logo";
import { Link } from "wouter";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ fontColor = "deepGray", menu }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      align="center"
      justifyContent={{ base: "center", md: "space-between" }}
      gap={4}
      w="full"
      p={4}
    >
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Stack direction="row" spacing={4} alignItems="center">
        {dataLink.map((element, index) => (
          <CustomLink
            key={index}
            fontColor={fontColor}
            route={element.route}
            text={element.text}
          />
        ))}
      </Stack>
      {menu && <HamburgerMenu />}
    </Stack>
  );
};

export default Navbar;
